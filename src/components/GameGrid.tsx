import React from "react";
import GameCard from "./GameCard";
import { Game } from "../types";

interface Props {
  games: Game[];
  favorites: string[];
  onToggleFavorite: (gameId: string) => void;
}

const GameGrid: React.FC<Props> = ({ games, favorites, onToggleFavorite }) => {
  return (
    <div className="grid grid-cols-3 gap-4 overflow-auto max-h-[455px] px-2">
      {games.map((game) => (
        <GameCard
          key={game.id}
          game={game}
          isFavorite={favorites.includes(game.id)}
          onToggleFavorite={() => onToggleFavorite(game.id)}
        />
      ))}
    </div>
  );
};

export default GameGrid;
