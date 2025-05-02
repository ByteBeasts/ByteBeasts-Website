import { useEffect, useState } from "react"
import { Button } from "../ui/Button"
import { ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";


const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Inicializa el engine de tsParticles con todos los plugins/presets
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    });

    // Cuando quieras disparar tus animaciones de texto
    setIsLoaded(true);
  }, []);

  return (
    <section className="py-20 md:py-32 relative z-10 overflow-hidden">
      {/* Animated particle background */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <Particles
          id="tsparticles"
          options={{
            fullScreen: { enable: false },
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 60,
            particles: {
              color: {
                value: ["#950124", "#D1093D", "#ffffff"],
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: true,
                speed: 0.5,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  width: 800,
                },
                value: 40,
              },
              opacity: {
                value: 0.3,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
          className="w-full h-full"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Main text with animations */}
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <h1 className="text-5xl md:text-7xl lg:text-7xl font-extrabold leading-tight pb-2 font-kallisto">
                <TypeAnimation
                  sequence={["Where Nostalgia Meets Gaming", () => {}]}
                  wrapper="span"
                  speed={50}
                  cursor={false}
                  className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#F58A9D] to-brand-dark bg-[length:400%_100%] animate-shimmer"
                />
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="text-xl md:text-2xl mb-8 text-foreground/90 font-montserrat max-w-2xl"
            >
              ByteBeasts is a living, evolving on-chain world where your digital pets grow with you. Nurture, bond, and
              build memories with your Beast in a universe designed to transcend generations
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: 0 }}
              transition={{ duration: 0.5, delay: 2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-light to-brand-dark rounded-md opacity-0 group-hover:opacity-70 blur transition-all duration-300"></div>
                <Button
                  variant="gradient"
                  className="text-lg px-8 py-6 relative"
                  onClick={() => {
                    document.getElementById("games")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Explore Games <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-white/30 to-white/10 rounded-md opacity-0 group-hover:opacity-70 blur transition-all duration-300"></div>
                <Button
                  variant="outline"
                  className="text-foreground border-foreground hover:bg-white hover:text-brand-dark text-lg px-8 py-6 relative"
                  onClick={() => window.open("https://discord.gg/3FHprvHHeA", "_blank")}
                >
                  Join Community
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Logo with animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: isLoaded ? 1 : 0, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.5, type: "spring" }}
            className="hidden md:block flex-shrink-0"
          >
            <img
              src="/logos/logoCompleteLight.png"
              alt="ByteBeasts logo"
              className="w-64 max-w-xs lg:w-80 transform -translate-y-12"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient (fade to the next section) */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-secondary to-transparent z-10"></div>
    </section>
  )
}

export default Hero
