import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { SiX, SiDiscord, SiGithub, SiLinkedin } from "react-icons/si";
import PartnersModal from "../ui/PartnersModal";
import usePartnersModal from "../../hooks/userPartnerModal";

interface FooterLinkGroup {
  title: string;
  links: {
    name: string;
    href: string;
    isModal?: boolean;
    onClick?: () => void;
  }[];
}

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/bytebeasts/", icon: <SiLinkedin className="h-5 w-5" /> },
  { name: "Twitter", href: "https://x.com/0xByteBeasts", icon: <SiX className="h-5 w-5" /> },
  { name: "Github", href: "https://github.com/ByteBuildersLabs", icon: <SiGithub className="h-5 w-5" /> },
  { name: "Discord", href: "https://discord.gg/3FHprvHHeA", icon: <SiDiscord className="h-5 w-5" /> },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  const { isPartnersModalOpen, openPartnersModal, closePartnersModal } = usePartnersModal();

  // Definir linkGroups dentro del componente para acceder a openPartnersModal
  const linkGroups: FooterLinkGroup[] = [
    {
      title: "Games",
      links: [{ name: "Tamagotchi", href: "https://www.bytebeasts.io" }],
    },
    {
      title: "About Us",
      links: [
        { name: "Product Brief", href: "https://docs.bytebeasts.io/" },
        {
          name: "Pitch Deck",
          href: "https://docs.google.com/presentation/d/1uk3KEo3D-p9ofOYC3L9nqeHy8WhptBRBg8SI1fO-Re0/edit?usp=sharing",
        },
        {
          name: "Whitepaper",
          href: "https://drive.google.com/file/d/1fhAqQlW74tjnotdDqXFI3f4l_-RGl0gy/view?usp=sharing",
        },
      ],
    },
    {
      title: "Company",
      links: [
        { 
          name: "Partners", 
          href: "#", 
          isModal: true,
          onClick: openPartnersModal 
        }
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const footerPosition = document.getElementById("footer")?.offsetTop || 0;

      if (scrollPosition > footerPosition - 100) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start("visible");
    }
  }, [isVisible, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <footer
        id="footer"
        className="py-12 border-t border-border font-montserrat relative"
        style={{
          background: "linear-gradient(to bottom, #250812 0%, #1b0111 50%, #0d0109 100%)",
        }}
      >
        {/* Add subtle particle effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              initial={{
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
                opacity: 0,
              }}
              animate={{
                y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                opacity: [0, 0.3, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
          >
            {/* Company Info */}
            <motion.div variants={itemVariants}>
              <motion.img 
                src="/logos/lightIcon.png" 
                alt="Logo" 
                width={180} 
                height={40} 
                className="h-10 w-auto mb-6"
                whileHover={{ 
                  filter: "drop-shadow(0 0 8px rgba(149, 1, 36, 0.5))",
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              />
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
                <h3 className="text-lg font-bold mb-6 text-foreground font-kallisto neon-glow">{group.title}</h3>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <motion.li key={link.name} variants={itemVariants} whileHover={{ x: 5 }}>
                      {link.isModal ? (
                        <button
                          className="text-foreground/70 hover:text-primary transition-colors"
                          onClick={link.onClick}
                        >
                          {link.name}
                        </button>
                      ) : link.href.startsWith("#") ? (
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
                { name: "WorldCoin", logo: "/logos/WorldCoinLogo.png", url: "https://world.org/" },
                { name: "Dojo", logo: "/logos/DojoLogo.svg", url: "https://www.dojoengine.org" },
                { name: "Cartridge", logo: "/logos/CartridgeLogo.svg", url: "https://cartridge.gg" },
                { name: "Cavos", logo: "/logos/CavosLogo.png", url: "https://services.cavos.xyz/" },
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

          {/* Copyright without shimmer */}
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

      {/* Modal de Partners */}
      <PartnersModal isOpen={isPartnersModalOpen} onClose={closePartnersModal} />
    </>
  );
};

export default Footer;
