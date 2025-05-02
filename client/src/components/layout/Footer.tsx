import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { SiX, SiDiscord, SiGithub, SiLinkedin } from "react-icons/si"

interface FooterLinkGroup {
  title: string
  links: {
    name: string
    href: string
  }[]
}

const linkGroups: FooterLinkGroup[] = [
  {
    title: "Games",
    links: [{ name: "Tamagotchi", href: "https://www.bytebeasts.games" }],
  },
  {
    title: "About Us",
    links: [
      { name: "Product Brief", href: "https://docs.bytebeasts.games/" },
      {
        name: "Pitch Deck",
        href: "https://www.canva.com/design/DAGkdgWPmoE/AePB75_UcjFPCa3y2z-Nrw/edit?utm_content=DAGkdgWPmoE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      },
      {
        name: "Whitepaper",
        href: "https://drive.google.com/file/d/1fhAqQlW74tjnotdDqXFI3f4l_-RGl0gy/view?usp=sharing",
      },
    ],
  },
  {
    title: "Company",
    links: [{ name: "Partners", href: "#" }],
  },
]

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/bytebeasts/", icon: <SiLinkedin className="h-5 w-5" /> },
  { name: "Twitter", href: "https://x.com/0xByteBeasts", icon: <SiX className="h-5 w-5" /> },
  { name: "Github", href: "https://github.com/ByteBuildersLabs", icon: <SiGithub className="h-5 w-5" /> },
  { name: "Discord", href: "https://discord.gg/3FHprvHHeA", icon: <SiDiscord className="h-5 w-5" /> },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [isVisible, setIsVisible] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight
      const footerPosition = document.getElementById("footer")?.offsetTop || 0

      if (scrollPosition > footerPosition - 100) {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isVisible) {
      controls.start("visible")
    }
  }, [isVisible, controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <footer
      id="footer"
      className="py-12 border-t border-border font-montserrat relative"
      style={{
        background: "linear-gradient(to bottom, #250812 0%, #1b0111 50%, #0d0109 100%)",
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <img src="/logos/lightIcon.png" alt="Logo" width={180} height={40} className="h-10 w-auto mb-6" />
            <p className="text-foreground/70 mb-6">
              ByteBeasts is an interconnected on-chain universe where players collect, nurture, and evolve digital
              creatures that transcend generations.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  variants={itemVariants}
                  custom={index}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/50 hover:text-primary transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Link Groups */}
          {linkGroups.map((group) => (
            <motion.div key={group.title} variants={itemVariants}>
              <h3 className="text-lg font-bold mb-6 text-foreground font-kallisto">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <motion.li key={link.name} variants={itemVariants} whileHover={{ x: 5 }}>
                    {link.href.startsWith("#") ? (
                      <a href={link.href} className="text-foreground/70 hover:text-primary transition-colors">
                        {link.name}
                      </a>
                    ) : (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/70 hover:text-primary transition-colors"
                      >
                        {link.name}
                      </a>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Credits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="flex items-center gap-4 flex-wrap text-foreground/50 text-sm">
            <span>Powered by:</span>
            {[
              { name: "Starknet", logo: "/logos/StarknetLogo.svg", url: "https://www.starknet.io" },
              { name: "Cartridge", logo: "/logos/CartridgeLogo.svg", url: "https://cartridge.gg" },
              { name: "Dojo", logo: "/logos/DojoLogo.svg", url: "https://www.dojoengine.org" },
            ].map((partner, index) => (
              <motion.a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative"
                whileHover={{ scale: 1.1 }}
                animate={{
                  rotate: [0, 2, 0, -2, 0],
                  transition: {
                    duration: 5,
                    repeat: Infinity,
                    delay: index * 0.5,
                  },
                }}
              >
                <motion.div
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    filter: ["brightness(1)", "brightness(1.3)", "brightness(1)"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: index * 0.5,
                  }}
                >
                  <img src={partner.logo || "/placeholder.svg"} alt={`${partner.name} logo`} className="h-6" />
                </motion.div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-4 text-center text-foreground/50 text-xs"
        >
          &copy; {currentYear} ByteBeasts. All rights reserved.
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
