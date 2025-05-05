"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Game } from "@/lib/gameData";
import GameItem from "./gameItem";
import GameDescription from "./GameDescription";

interface GameListProps {
  games: Game[];
  onSelectGame: (game: Game) => void;
  isInView: boolean;
}

export default function GameList({
  games,
  onSelectGame,
  isInView,
}: GameListProps) {
  const [hoveredGameId, setHoveredGameId] = useState<number | null>(null);

  const hoveredGame = hoveredGameId
    ? games.find((game) => game.id === hoveredGameId) || null
    : null;

  const handleHover = (game: Game) => {
    setHoveredGameId(game.id);
    onSelectGame(game);
  };

  return (
    <motion.div
      className="w-full space-y-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="space-y-2">
        {games.map((game) => (
          <GameItem
            key={game.id}
            game={game}
            isHovered={hoveredGameId === game.id}
            onHover={() => handleHover(game)}
            isInView={isInView}
          />
        ))}
      </div>

      <GameDescription game={hoveredGame} />
    </motion.div>
  );
}
