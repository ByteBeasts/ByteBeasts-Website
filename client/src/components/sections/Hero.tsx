import { Button } from "../ui/Button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-blue-900/30 to-black z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/hero-bg.png')] bg-cover bg-center opacity-20 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FFF6F0] via-purple-300 to-[#FFF6F0]">
            Where Fantasy Meets Blockchain
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-[#FFF6F0]/90 max-w-2xl">
            ByteBeasts is an interconnected on-chain universe where players collect, train, and battle unique beasts
            across multiple games, marketplaces, and adventures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none text-lg px-8 py-6">
              Explore Games <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-[#FFF6F0]/30 text-[#FFF6F0] hover:bg-[#FFF6F0]/10 text-lg px-8 py-6"
            >
              Join Community
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#1C1C1C] to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
