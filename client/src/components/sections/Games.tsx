import { Button } from "../ui/Button";
import GameCard from "../ui/GameCard";

const games = [
  {
    id: "tamagotchi",
    title: "Tamagotchi",
    description: "Raise your own beast",
    image: "/games/tamagotchiLogo.png",
    gradientFrom: "from-brand-light",
    gradientTo: "to-brand-dark",
  },
];


const Games = () => {
  return (
    <section id="games" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Games Launched</h2>
          <p className="text-[#FFF6F0]/80 text-lg">
          Explore ByteBeasts Tamagotchi, the first game of the franchise. 
          Feed, play, and form lasting bonds with your Beast in the original on-chain pet simulation adventure.
          </p>
        </div>

        {games.length === 2 ? (
          <div className="flex justify-center flex-wrap gap-6 sm:gap-12">
            {games.map((game) => (
              <div key={game.id} className="w-full sm:w-[340px]">
                <GameCard game={game} />
              </div>
            ))}
          </div>
        ) : (
          <div
            className={`grid gap-8 ${
              games.length === 1
                ? "grid-cols-1 justify-items-center"
                : "md:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {games.map((game) => (
              <div key={game.id} className="w-full max-w-[380px] mx-auto">
                <GameCard game={game} />
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Button variant="gradient" className="px-8" onClick={() => window.open("https://www.bytebeasts.games", "_blank")}>
            Play
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Games;
