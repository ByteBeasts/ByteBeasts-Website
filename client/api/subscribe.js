import axios from 'axios';
import crypto from 'crypto';

export default async function handler(req, res) {
    // Validate HTTP method
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method not allowed' });
    }

    const { email } = req.body;

    // Validate email
    if (!email || !email.includes('@')) {
        return res.status(400).json({ success: false, message: 'Invalid email' });
    }

    try {
        // Mailchimp configuration
        const API_KEY = process.env.MAILCHIMP_API_KEY;
        const SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX;
        const LIST_ID = process.env.MAILCHIMP_LIST_ID;
        
        if (!API_KEY || !SERVER_PREFIX || !LIST_ID) {
            throw new Error('Mailchimp configuration is missing');
        }

        // Create an MD5 hash of the email (required by Mailchimp)
        const emailHash = crypto.createHash('md5').update(email.toLowerCase()).digest('hex');
        
        // Mailchimp API URL
        const url = `https://${SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

        // Request configuration
        const data = {
            email_address: email,
            status: 'subscribed', // 'pending' for double opt-in, 'subscribed' for direct subscription
        };

        // Make the request to Mailchimp
        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `apikey ${API_KEY}`
            }
        });

        return res.status(200).json({ 
            success: true, 
            message: 'You have successfully subscribed to ByteBeasts newsletter!' 
        });
        
    } catch (error) {
        console.error('Error subscribing:', error);
        
        // Specific handling for Mailchimp errors
        if (axios.isAxiosError(error) && error.response) {
            // If the user is already subscribed
            if (error.response.status === 400 && error.response.data?.title === 'Member Exists') {
                return res.status(400).json({ 
                    success: false, 
                    message: 'This email is already subscribed to our list.' 
                });
            }
            
            return res.status(error.response.status).json({
                success: false,
                message: error.response.data.detail || 'Subscription error',
            });
        }
        
        return res.status(500).json({ 
            success: false, 
            message: 'Error processing the subscription. Please try again later.' 
        });
    }
}