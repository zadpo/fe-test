import React from "react";
import Image from "next/image";
import { Game } from "../types";
import { Star } from "lucide-react";

interface Props {
  game: Game;
  isFavorite: boolean;
  onToggleFavorite: (gameId: string) => void;
}

const GameCard: React.FC<Props> = ({ game, isFavorite, onToggleFavorite }) => {
  return (
    <div className="relative flex flex-col items-center ">
      <div className="relative w-[130px] h-[115px]">
        <Image src={game.img} alt={game.name} layout="fill" objectFit="cover" className="rounded-lg" />
        <button
          onClick={() => onToggleFavorite(game.id)}
          className="absolute top-2 right-2 p-1 bg-black bg-opacity-50 rounded-full"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Star size={16} className={isFavorite ? "text-yellow-400 fill-current" : "text-white"} />
        </button>
      </div>
    </div>
  );
};

export default GameCard;
