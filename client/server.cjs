// Express Server for local development (CommonJS)
const express = require('express');
const axios = require('axios');
const crypto = require('crypto');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Endpoint for Mailchimp subscription
app.post('/api/subscribe', async (req, res) => {
    const { email } = req.body;

    // Validate email
    if (!email || !email.includes('@')) {
        return res.status(400).json({ success: false, message: 'Invalid email' });
    }

    try {
        // Mailchimp configuration
        const API_KEY = process.env.MAILCHIMP_API_KEY;
        const SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX; // e.g., "us10"
        const LIST_ID = process.env.MAILCHIMP_LIST_ID;
        
        if (!API_KEY || !SERVER_PREFIX || !LIST_ID) {
            throw new Error('Missing Mailchimp configuration');
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
        console.error('Subscription error:', error);
        
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
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
