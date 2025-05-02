import type React from "react"
import { motion } from "framer-motion"

interface SocialLinkProps {
  icon: React.ReactNode
  name: string
  href: string
}

const SocialLink = ({ icon, name, href }: SocialLinkProps) => {
  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 p-4 bg-secondary/80 border border-border rounded-xl hover:border-brand-light transition-all text-foreground relative group overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-brand-light/20 to-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        animate={{
          background: [
            "linear-gradient(90deg, rgba(209, 9, 61, 0.1) 0%, rgba(133, 0, 42, 0.1) 100%)",
            "linear-gradient(90deg, rgba(133, 0, 42, 0.1) 0%, rgba(209, 9, 61, 0.1) 100%)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div whileHover={{ rotate: 10, scale: 1.2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
        {icon}
      </motion.div>
      <span className="font-montserrat">{name}</span>
    </motion.a>
  )
}

export default SocialLink
