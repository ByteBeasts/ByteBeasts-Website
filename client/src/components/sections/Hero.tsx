import { Button } from "../ui/Button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20 md:py-32 relative z-10">
      {/* Optional background image */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/hero-bg.png')] bg-cover bg-center opacity-20 z-0 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Texto principal */}
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl lg:text-7xl font-extrabold leading-tight pb-2 mb-6 font-kallisto bg-clip-text text-transparent bg-gradient-to-r from-white via-[#F58A9D] to-brand-dark bg-[length:400%_100%] animate-shimmer">
              Where Nostalgia Meets Gaming
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-foreground/90 font-montserrat max-w-2xl">
              ByteBeasts is a living, evolving on-chain world where your digital pets grow with you. Nurture, bond, and build memories with your 
              Beast in a universe designed to transcend generations
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
          {/* Logo a la derecha */}
          <div className="hidden md:block flex-shrink-0">
            <img
              src="/logos/logoCompleteLight.png"
              alt="ByteBeasts logo"
              className="w-64 max-w-xs lg:w-80 transform -translate-y-12"
            />
          </div>
        </div>
      </div>

      {/* Bottom gradient (fade to the next section) */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-secondary to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
