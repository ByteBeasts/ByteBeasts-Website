import { useRef, useEffect } from "react";
import { Button } from "./Button";
import { motion } from "framer-motion";

export interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  tags?: string[];
  gradientFrom?: string;
  gradientTo?: string;
  playButton: string;
  docsButton?: string;
}

interface GameCardProps {
  game: Game;
  showEffects?: boolean;
}

const GameCard = ({ game, showEffects = false }: GameCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  // Only apply effects if showEffects is true
  useEffect(() => {
    if (!showEffects) return;

    // Dynamically import GSAP to avoid loading it unnecessarily
    const loadGsap = async () => {
      const gsapModule = await import('gsap');
      const gsap = gsapModule.default;
      
      const card = cardRef.current;
      const particles = particlesRef.current;

      if (!card || !particles) return;

      // Create particles
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement("div");
        particle.classList.add("absolute", "w-1", "h-1", "rounded-full", "bg-white", "opacity-0");
        particles.appendChild(particle);

        // Random position
        gsap.set(particle, {
          x: Math.random() * 300 - 150,
          y: Math.random() * 400 - 200,
          scale: Math.random() * 1 + 0.5,
        });
      }

      // Hover effects
      card.addEventListener("mouseenter", () => {
        // Scale card
        gsap.to(card, {
          scale: 1.03,
          boxShadow: "0 20px 40px rgba(149, 1, 36, 0.3)",
          duration: 0.3,
        });

        // Animate particles
        particles.querySelectorAll("div").forEach((particle) => {
          gsap.to(particle, {
            opacity: Math.random() * 0.7 + 0.3,
            duration: 0.3,
            delay: Math.random() * 0.2,
          });

          gsap.to(particle, {
            y: `+=${Math.random() * 30 - 15}`,
            x: `+=${Math.random() * 30 - 15}`,
            repeat: -1,
            yoyo: true,
            duration: Math.random() * 2 + 1,
          });
        });
      });

      card.addEventListener("mouseleave", () => {
        // Reset card
        gsap.to(card, {
          scale: 1,
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
          duration: 0.3,
        });

        // Hide particles
        particles.querySelectorAll("div").forEach((particle) => {
          gsap.killTweensOf(particle);
          gsap.to(particle, {
            opacity: 0,
            duration: 0.3,
          });
        });
      });

      return () => {
        // Cleanup
        card.removeEventListener("mouseenter", () => {});
        card.removeEventListener("mouseleave", () => {});
      };
    };

    loadGsap();
  }, [showEffects]);

  // Variants for title animations
  const titleAnimation = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.3,
      }
    }
  };
  
  const letterAnimation = {
    hidden: { 
      opacity: 0,
      y: 20,
      x: -5,
      rotateZ: -10
    },
    visible: { 
      opacity: 1,
      y: 0,
      x: 0,
      rotateZ: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    }
  };

  // Split the title into characters for animation
  const titleChars = game.title.split("");

  return (
    <div
      ref={cardRef}
      className="relative bg-gradient-to-br from-secondary to-secondary/80 rounded-xl overflow-hidden border border-border shadow-xl transition-all duration-300 neon-border"
      style={{ maxWidth: "600px", width: "100%" }}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={game.image || "/placeholder.svg?height=400&width=600"}
          alt={game.title}
          className="w-full h-full object-cover"
        />
        {showEffects && <div ref={particlesRef} className="absolute inset-0 pointer-events-none"></div>}
      </div>

      <div className="p-6">
        {/* Animated title with Framer Motion */}
        <motion.h3 
          className="text-2xl font-bold mb-2 neon-glow flex overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={titleAnimation}
        >
          {titleChars.map((char, index) => (
            <motion.span
              key={index}
              variants={letterAnimation}
              className={char === " " ? "mr-1" : ""}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h3>
        
        <p className="text-foreground/80 mb-4">{game.description}</p>
        
        {game.tags && game.tags.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-4">
            {game.tags.map((tag, idx) => (
              <span 
                key={idx} 
                className={idx === 0 
                  ? "px-3 py-1 bg-primary/30 text-primary-foreground rounded-full text-sm" 
                  : "px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                }
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        {game.playButton && (
          <Button 
            variant="gradient" 
            className="w-full"
            onClick={() => window.open(game.playButton, "_blank")}
          >
            Play Now
          </Button>
        )}
      </div>
    </div>
  );
};

export default GameCard;
