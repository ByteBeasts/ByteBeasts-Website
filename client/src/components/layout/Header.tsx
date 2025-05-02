import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Button } from "../ui/Button"
import { motion } from "framer-motion"

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) setScrolled(isScrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {window.removeEventListener("scroll", handleScroll)}
    
  }, [scrolled])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`container mx-auto py-6 px-4 relative z-50 transition-all duration-300 ${
        scrolled ? "bg-secondary/80 backdrop-blur-md shadow-lg fixed top-0 left-0 right-0" : ""
      }`}
    >
      <div className="flex justify-between items-center">
        <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <img src="../logos/lightIcon.png" alt="Logo" width={180} height={40} className="h-10 w-auto" />
        </motion.div>
        <nav className="hidden md:flex items-center gap-8 font-montserrat">
          {[
            { name: "About", id: "about" },
            { name: "Games", id: "games" },
            { name: "Team", id: "team" },
            { name: "Community", id: "community" },
          ].map((item) => (
            <motion.div key={item.id} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                to={`#${item.id}`}
                className="text-foreground hover:text-primary transition-colors relative group"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                {item.name}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-light group-hover:w-full transition-all duration-300"
                  whileHover={{ width: "100%" }}
                />
              </Link>
            </motion.div>
          ))}
        </nav>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-light to-brand-dark rounded-md opacity-0 group-hover:opacity-70 blur transition-all duration-300"></div>
          <Button
            className="bg-gradient-to-r from-brand-light to-brand-dark hover:opacity-90 text-white font-kallisto relative"
            onClick={() => window.open("https://www.bytebeasts.games", "_blank")}
          >
            Play Now
          </Button>
        </motion.div>
      </div>
    </motion.header>
  )
}

export default Header
