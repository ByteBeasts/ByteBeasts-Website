import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FeaturedGame = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-75"></div>
              <div className="relative bg-[#1C1C1C] rounded-2xl overflow-hidden">
                <Image
                  src="/game-preview.png"
                  alt="OD Boost Game"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="inline-block px-4 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-sm font-medium mb-4">
              Coming Soon
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">ODBOOST IS COMING!</h2>
            <p className="text-[#FFF6F0]/80 text-lg mb-6">April 22 - May 1st 2025</p>
            <p className="text-[#FFF6F0]/80 mb-8">
              Get ready for our newest adventure in the ByteBeasts universe. ODBOOST combines strategic gameplay with
              unique collectible beasts in an immersive on-chain experience.
            </p>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none">
              Join Waitlist <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGame;
