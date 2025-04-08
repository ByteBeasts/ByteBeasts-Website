import { Button } from "@/components/ui/button";
import GameCard from "../ui/GameCard";

const games = [
  {
    id: "cryptotamers",
    title: "CryptoTamers",
    description: "Collect and nurture digital beasts",
    image: "/game1.png",
    gradientFrom: "purple-600",
    gradientTo: "pink-600",
  },
  {
    id: "beastarena",
    title: "Beast Arena",
    description: "Strategic PvP battles with your beasts",
    image: "/game2.png",
    gradientFrom: "blue-600",
    gradientTo: "cyan-600",
  },
  {
    id: "beastexplorers",
    title: "Beast Explorers",
    description: "Open world adventure with your beasts",
    image: "/game3.png",
    gradientFrom: "pink-600",
    gradientTo: "orange-600",
  },
];

const Games = () => {
  return (
    <section id="games" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Games Launched</h2>
          <p className="text-[#FFF6F0]/80 text-lg">
            Explore our growing ecosystem of interconnected games, each offering unique gameplay and collectible
            beasts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none px-8">
            View All Games
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Games;
