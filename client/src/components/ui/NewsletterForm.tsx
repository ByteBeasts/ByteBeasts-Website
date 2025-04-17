import { useState } from "react";
import { Button } from "./Button";
import axios from "axios";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setStatus("error");
      setErrorMessage("Please enter an email address.");
      return;
    }

    try {
      setStatus("loading");
      
      // Endpoint where we process the subscription to Mailchimp
      const response = await axios.post("/api/subscribe", { email });
      
      if (response.data.success) {
        setStatus("success");
        setEmail("");
      } else {
        throw new Error(response.data.message || "Subscription error");
      }
    } catch (error) {
      setStatus("error");
      if (axios.isAxiosError(error) && error.response?.data?.message) {
        setErrorMessage(error.response.data.message);
      } else if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("An error occurred while trying to subscribe. Please try again.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 font-montserrat">
      <div>
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-light focus:border-transparent text-foreground placeholder:text-muted-foreground"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
        />
      </div>
      
      <Button 
        type="submit" 
        variant="gradient" 
        className="w-full"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Subscribing..." : "Subscribe"}
      </Button>

      {status === "success" && (
        <div className="p-3 bg-green-800/30 border border-green-600 rounded-md text-white">
          You have successfully subscribed to ByteBeasts newsletter!
        </div>
      )}

      {status === "error" && (
        <div className="p-3 bg-red-800/30 border border-red-600 rounded-md text-white">
          {errorMessage}
        </div>
      )}
    </form>
  );
};

export default NewsletterForm;
