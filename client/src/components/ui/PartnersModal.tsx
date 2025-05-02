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
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
          />

          <motion.div
            className="relative max-w-4xl w-full m-4 rounded-2xl overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: "linear-gradient(145deg, #250812 0%, #1b0111 50%, #0d0109 100%)",
              }}
            />

            <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/30 via-transparent to-primary/20 rounded-2xl opacity-50 blur-sm" />

            <div className="relative p-8 md:p-10">
              <button
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
                onClick={onClose}
              >
                <X size={24} />
              </button>

              <h2 className="text-3xl md:text-4xl font-bold mb-8 font-kallisto text-center neon-glow">
                Our Partners
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {partners.map((partner, i) => (
                  <motion.div
                    key={partner.name}
                    className="bg-black/30 border border-primary/20 rounded-xl p-6 flex flex-col items-center text-center hover:border-primary/50 transition-all group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="w-24 h-24 flex items-center justify-center mb-4 relative">
                      <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 rounded-full" />
                      <motion.img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="w-16 h-16 object-contain"
                        whileHover={{ scale: 1.1 }}
                        animate={{ filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"] }}
                        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2 font-kallisto text-white">{partner.name}</h3>
                    <p className="text-sm text-gray-300 mb-4">{partner.description}</p>
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-100 text-sm flex items-center underline underline-offset-2"
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
