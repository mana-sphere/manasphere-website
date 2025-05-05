"use client";

import { MoveUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Game } from "@/lib/gameData";

interface GameItemProps {
  game: Game;
  isHovered: boolean;
  onHover: () => void;
  isInView: boolean;
}

export default function GameItem({
  game,
  isHovered,
  onHover,
  isInView,
}: GameItemProps) {
  return (
    <motion.div
      className="relative w-full"
      onMouseEnter={onHover}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
      transition={{
        duration: 0.5,
        delay: isInView ? Number(game.index.replace(/^0/, "")) * 0.1 : 0,
      }}
    >
      <motion.div
        className={`
          w-full py-6 flex items-center justify-between cursor-pointer
          transition-colors duration-300 group
          ${isHovered ? "text-white" : "text-gray-400"}
        `}
      >
        <div className="flex items-center space-x-8">
          <span className="text-xl opacity-60">{game.index}</span>
          <span
            className={`text-xl uppercase font-medium tracking-wider ${
              game.status === "coming-soon" ? "opacity-70" : ""
            }`}
          >
            {game.title}
          </span>
        </div>
        <motion.div
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <MoveUpRight className="h-5 w-5 opacity-60 group-hover:opacity-100 transition-opacity" />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-0 w-full h-[1px] bg-gray-800"
        layoutId="underline"
      />

      {isHovered && (
        <motion.div
          className="absolute bottom-0 w-full h-[1px] bg-white"
          layoutId="activeUnderline"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.div>
  );
}
