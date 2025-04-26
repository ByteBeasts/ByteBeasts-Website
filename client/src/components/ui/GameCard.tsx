import { Button } from "../ui/Button";
export interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  gradientFrom: string;
  gradientTo: string;
  playButton: string;
  docsButton: string;
}

const GameCard = ({ game }: { game: Game }) => {
  return (
    <div className="group flex flex-col items-center">
      <div className="relative overflow-hidden rounded-2xl mb-4 w-full">
        <div
          className={`absolute -inset-0.5 bg-gradient-to-r ${game.gradientFrom} ${game.gradientTo} rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity`}
        ></div>
        <div className="relative">
          <img
            src={game.image}
            alt={game.title}
            width={400}
            height={250}
            className="w-full h-auto rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-2xl"></div>
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-xl font-bold mb-2 font-kallisto text-foreground">
              {game.title}
            </h3>
            <p className="text-foreground/90 text-sm font-montserrat">
              {game.description}
            </p>
          </div>
        </div>
      </div>

      {/* Card buttons */}
      {game.playButton && (
        <div className="flex gap-3 mt-2">
          <Button
            variant="gradient"
            className="px-6 py-2 text-sm"
            onClick={() => window.open(game.playButton, "_blank")}
          >
            Play
          </Button>
          <Button
            variant="outline"
            className="px-6 py-2 text-sm"
            onClick={() => window.open(game.playButton, "_blank")}
          >
            Whitepaper
          </Button>
        </div>
      )}
    </div>
  );
};


export default GameCard;
