import { Button } from "../ui/Button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20 md:py-32 relative z-10">
      {/* Imagen de fondo opcional */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/hero-bg.png')] bg-cover bg-center opacity-20 z-0 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-kallisto bg-clip-text text-transparent bg-gradient-to-r from-white via-[#F58A9D] to-brand-dark bg-[length:400%_100%] animate-shimmer">
            Where Fantasy Meets Blockchain
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-foreground/90 font-montserrat max-w-2xl">
            ByteBeasts is an interconnected on-chain universe where players collect, train, and battle unique beasts
            across multiple games, marketplaces, and adventures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="gradient" className="text-lg px-8 py-6">
              Explore Games <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="text-foreground border-foreground hover:bg-white hover:text-brand-dark text-lg px-8 py-6"
            >
              Join Community
            </Button>
          </div>
        </div>
      </div>

      {/* Gradiente inferior (fade al siguiente bloque) */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-secondary to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
