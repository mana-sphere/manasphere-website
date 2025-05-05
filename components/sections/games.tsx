"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Game, games } from "@/lib/gameData";
import GameList from "./games/gameList";
import ImagePlaceholder from "./games/ImagePlaceholder";

export default function Games() {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const handleSelectGame = (game: Game) => {
    setSelectedGame(game);
  };

  return (
    <section
      ref={sectionRef}
      id="games"
      className="min-h-screen w-full text-white py-20 px-8 flex items-center"
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="order-2 lg:order-1">
            <ImagePlaceholder selectedGame={selectedGame} isInView={isInView} />
          </div>

          <div className="order-1 lg:order-2">
            <motion.h1
              className="text-6xl md:text-7xl tracking-wide mb-16"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            >
              Games
            </motion.h1>
            <GameList
              games={games}
              onSelectGame={handleSelectGame}
              isInView={isInView}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
