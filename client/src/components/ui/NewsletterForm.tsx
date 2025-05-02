import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "./Button"
import axios from "axios"
import { motion, useAnimation } from "framer-motion"

const NewsletterForm = () => {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const controls = useAnimation()

  useEffect(() => {
    // Create a breathing animation for the form container
    const breathingAnimation = async () => {
      await controls.start({
        boxShadow: "0 0 15px rgba(209, 9, 61, 0.5)",
        transition: { duration: 1.5 },
      })
      await controls.start({
        boxShadow: "0 0 5px rgba(209, 9, 61, 0.2)",
        transition: { duration: 1.5 },
      })
    }

    breathingAnimation()

    const interval = setInterval(breathingAnimation, 3000)
    return () => clearInterval(interval)
  }, [controls])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      setStatus("error")
      setErrorMessage("Please enter an email address.")
      return
    }

    try {
      setStatus("loading")

      // Endpoint where we process the subscription to Mailchimp
      const response = await axios.post("/api/subscribe", { email })

      if (response.data.success) {
        setStatus("success")
        setEmail("")
      } else {
        throw new Error(response.data.message || "Subscription error")
      }
    } catch (error) {
      setStatus("error")
      if (axios.isAxiosError(error) && error.response?.data?.message) {
        setErrorMessage(error.response.data.message)
      } else if (error instanceof Error) {
        setErrorMessage(error.message)
      } else {
        setErrorMessage("An error occurred while trying to subscribe. Please try again.")
      }
    }
  }

  return (
    <motion.form onSubmit={handleSubmit} className="space-y-4 font-montserrat" animate={controls}>
      <div>
        <motion.input
          type="email"
          placeholder="Enter your email address"
          className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-light focus:border-transparent text-foreground placeholder:text-muted-foreground"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          whileFocus={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        />
      </div>

      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-light to-brand-dark rounded-md opacity-0 group-hover:opacity-70 blur transition-all duration-300"></div>
        <Button type="submit" variant="gradient" className="w-full relative" disabled={status === "loading"}>
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </Button>
      </motion.div>

      {status === "success" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-3 bg-green-800/30 border border-green-600 rounded-md text-white"
        >
          You have successfully subscribed to ByteBeasts newsletter!
        </motion.div>
      )}

      {status === "error" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-3 bg-red-800/30 border border-red-600 rounded-md text-white"
        >
          {errorMessage}
        </motion.div>
      )}
    </motion.form>
  )
}

export default NewsletterForm
