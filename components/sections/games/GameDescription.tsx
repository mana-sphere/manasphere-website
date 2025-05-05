"use client";

import { motion, AnimatePresence } from "motion/react";
import { Game } from "@/lib/gameData";

interface GameDescriptionProps {
  game: Game | null;
}

export default function GameDescription({ game }: GameDescriptionProps) {
  return (
    <div className="w-full min-h-[100px] pt-10">
      <AnimatePresence mode="wait">
        {game && (
          <motion.div
            key={game.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-[#f6eae3] max-w-lg"
          >
            <p>{game.description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
