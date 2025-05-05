"use client";

import { motion } from "motion/react";
import { Game } from "@/lib/gameData";

interface ImagePlaceholderProps {
  selectedGame: Game | null;
  isInView: boolean;
}

export default function ImagePlaceholder({
  selectedGame,
  isInView,
}: ImagePlaceholderProps) {
  return (
    <motion.div
      className="relative w-full aspect-square bg-neutral-200 dark:bg-neutral-800 rounded-sm overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.95 }}
      transition={{
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1],
      }}
    >
      <AnimatedBorder selectedGame={selectedGame} />

      <div className="absolute inset-0 flex items-center justify-center text-gray-400">
        {selectedGame ? (
          <motion.div
            key={selectedGame.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
          >
            <div className="w-full h-full bg-neutral-800 flex items-center justify-center">
              <h3 className="text-2xl font-medium tracking-wider uppercase">
                {selectedGame.title}
              </h3>
            </div>
          </motion.div>
        ) : (
          <div className="w-full h-full bg-neutral-800" />
        )}
      </div>
    </motion.div>
  );
}

function AnimatedBorder({ selectedGame }: { selectedGame: Game | null }) {
  return (
    <motion.div
      className="absolute inset-0 border-2 border-transparent"
      animate={{
        borderColor: selectedGame ? "rgba(255, 255, 255, 0.2)" : "transparent",
      }}
      transition={{ duration: 0.3 }}
    />
  );
}
