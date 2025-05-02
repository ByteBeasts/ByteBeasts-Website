import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import GameCard, { Game } from "../ui/GameCard"

interface GamesCarouselProps {
  games: Game[];
}

const GamesCarousel = ({ games }: GamesCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextGame = () => {
    setCurrentIndex((prev) => (prev + 1) % games.length)
  }

  const prevGame = () => {
    setCurrentIndex((prev) => (prev - 1 + games.length) % games.length)
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="flex justify-center"
        >
          <GameCard game={games[currentIndex]} showEffects={true} />
        </motion.div>
      </AnimatePresence>

      {games.length > 1 && (
        <>
          {/* Navigation buttons */}
          <button
            onClick={prevGame}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-muted/50 hover:bg-muted text-foreground backdrop-blur-sm z-10"
            aria-label="Previous game"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextGame}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-muted/50 hover:bg-muted text-foreground backdrop-blur-sm z-10"
            aria-label="Next game"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {games.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  idx === currentIndex ? 'bg-primary' : 'bg-muted'
                }`}
                aria-label={`Go to game ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default GamesCarousel
