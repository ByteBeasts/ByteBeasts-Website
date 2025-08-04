import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Button } from "../ui/Button"
import { motion } from "framer-motion"

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      // Update header style based on scroll position
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) setScrolled(isScrolled)
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + window.innerHeight / 3

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 py-6 px-4 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-[#12121a]/80 backdrop-blur-md shadow-md border-b border-border/20" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div 
          className="flex items-center gap-2" 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/" className="flex items-center">
            <img src="/logos/lightIcon.png" alt="Logo" width={180} height={40} className="h-10 w-auto" />
          </Link>
        </motion.div>
        
        <nav className="hidden md:flex items-center gap-8 font-montserrat">
          {[
            { name: "About", id: "about" },
            { name: "Games", id: "games" },
            { name: "Team", id: "team" },
            { name: "Community", id: "community" },
          ].map((item) => (
            <motion.div 
              key={item.id} 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Link
                to={`#${item.id}`}
                className={`
                  transition-colors relative 
                  ${activeSection === item.id 
                    ? "text-primary font-medium" 
                    : "text-foreground hover:text-primary/90"
                  }
                `}
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                {item.name}
                
                {/* Animated underline */}
                <motion.span
                  className={`
                    absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-brand-light to-brand-dark
                    ${activeSection === item.id ? "w-full" : "w-0"}
                  `}
                  initial={false}
                  animate={{ width: activeSection === item.id ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          ))}
        </nav>
        
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }} 
          className="relative group"
        >
          {/* Glowing button effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-light to-brand-dark rounded-md opacity-0 group-hover:opacity-70 blur transition-all duration-300"></div>
          
          <Button
            className="relative bg-gradient-to-r from-brand-light to-brand-dark hover:opacity-90 text-white font-kallisto"
            onClick={() => window.open("https://www.bytebeasts.io", "_blank")}
          >
            Play Now
          </Button>
        </motion.div>
      </div>
    </motion.header>
  )
}

export default Header
