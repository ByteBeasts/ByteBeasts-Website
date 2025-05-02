import { motion } from "framer-motion"
import { Button } from "../ui/Button"
import GamesCarousel from "../ui/GameCarousel"
import { Game } from "../ui/GameCard"
import Section from "../ui/Section" 

const games: Game[] = [
  {
    id: "tamagotchi",
    title: "ByteBeasts Tamagotchi",
    description: "Feed, play, and form lasting bonds with your Beast in the original on-chain pet simulation adventure.",
    image: "/games/tamagotchiLogo.png",
    tags: ["Pet Simulation", "Blockchain", "NFT"],
    playButton: "https://www.bytebeasts.games",
    docsButton: "https://drive.google.com/file/d/1fhAqQlW74tjnotdDqXFI3f4l_-RGl0gy/view?usp=sharing",
  },
]

// Variants for the animated title letters
const letterAnimation = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.8,
    filter: "blur(8px)"
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    filter: "blur(0px)",
    transition: { 
      type: "spring", 
      damping: 10, 
      stiffness: 150 
    }
  }
};

export default function Games() {
  // Split the title into characters for animation
  const titleText = "Games Launched";
  const titleChars = titleText.split("");

  // Custom title component with special animation
  const CustomTitle = () => (
    <motion.div 
      className="inline-flex justify-center overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.08,
            delayChildren: 0.3,
          }
        }
      }}
    >
      {titleChars.map((char, index) => (
        <motion.span
          key={index}
          variants={letterAnimation}
          className={char === " " ? "mr-4 neon-glow" : "neon-glow"}
          // Apply the pulse effect directly
          animate={{
            textShadow: [
              "0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.3), 0 0 15px rgba(149, 1, 36, 0.3), 0 0 20px rgba(149, 1, 36, 0.3)",
              "0 0 7px rgba(255, 255, 255, 0.7), 0 0 15px rgba(255, 255, 255, 0.5), 0 0 25px rgba(149, 1, 36, 0.5), 0 0 35px rgba(149, 1, 36, 0.5)",
              "0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.3), 0 0 15px rgba(149, 1, 36, 0.3), 0 0 20px rgba(149, 1, 36, 0.3)"
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );

  return (
    <Section
      id="games"
      customTitle={<CustomTitle />}
      subtitle="Explore our first release and upcoming titles"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <GamesCarousel games={games} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-12"
      >
        <p className="text-muted-foreground mb-4">More games coming soon...</p>
        <Button 
          variant="outline" 
          className="border-border text-foreground hover:bg-muted"
          onClick={() => window.open('https://docs.bytebeasts.games/Roadmap/roadmap', "_blank")}
        >
          View Roadmap
        </Button>
      </motion.div>
    </Section>
  )
}