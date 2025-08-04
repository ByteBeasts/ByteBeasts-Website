import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface Partner {
  name: string;
  logo: string;
  description: string;
  website: string;
}

interface PartnersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const partners: Partner[] = [
  {
    name: "Starknet",
    logo: "/logos/StarknetLogo.svg",
    description: "ByteBeasts was awarded $50,000 through the Starknet Foundation Seed Grants, empowering our on-chain gaming development.",
    website: "https://www.starknet.io",
  },
  {
    name: "Cartridge",
    logo: "/logos/CartridgeLogo.svg",
    description: "As part of the Cartridge Incubator Program, ByteBeasts gains early access to SDKs, dedicated technical guidance, and priority feature implementation.",
    website: "https://cartridge.gg",
  },
  {
    name: "Dojo",
    logo: "/logos/DojoLogo.svg",
    description: "Dojo is a full-stack development toolkit designed for building high-performance Starknet games and applications.",
    website: "https://www.dojoengine.org",
  },
  {
    name: "Cavos",
    logo: "/logos/CavosLogo.png",
    description: "Cavos provides an invisible wallet solution with email and password login, enabling seamless user onboarding and interaction with ByteBeasts.",
    website: "https://services.cavos.xyz/",
  },
];

const PartnersModal: React.FC<PartnersModalProps> = ({ isOpen, onClose }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
      setIsMounted(true);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isMounted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
          />

          <motion.div
            className="relative w-full h-full max-h-screen sm:max-w-7xl sm:h-auto rounded-none sm:rounded-2xl overflow-hidden bg-transparent"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div
              className="absolute inset-0 rounded-none sm:rounded-2xl"
              style={{
                background: "linear-gradient(145deg, #250812 0%, #1b0111 50%, #0d0109 100%)",
              }}
            />

            <div className="absolute -inset-[1px] rounded-none sm:rounded-2xl bg-gradient-to-r from-primary/30 via-transparent to-primary/20 opacity-50 blur-sm" />

            <div className="relative p-6 sm:p-10 overflow-auto h-full sm:h-auto">
              <button
                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
                onClick={onClose}
              >
                <X size={24} />
              </button>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 font-kallisto text-center neon-glow">
                Our Partners
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 sm:mt-8">
                {partners.map((partner, i) => (
                  <motion.div
                    key={partner.name}
                    className="bg-black/30 border border-primary/20 rounded-xl p-4 sm:p-6 flex flex-col items-center text-center hover:border-primary/50 transition-all group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="w-16 h-16 sm:w-24 sm:h-24 flex items-center justify-center mb-3 sm:mb-4 relative">
                      <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 rounded-full" />
                      <motion.img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                        whileHover={{ scale: 1.1 }}
                        animate={{ filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"] }}
                        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                      />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 font-kallisto text-white">{partner.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4">{partner.description}</p>
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-100 text-xs sm:text-sm flex items-center underline underline-offset-2"
                    >
                      Visit Website
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PartnersModal;
