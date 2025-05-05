"use client";

import { motion } from "motion/react";
import { Milestone } from "@/lib/roadmapData";
import { fadeIn } from "@/utils/motion";

interface RoadmapItemProps {
  milestone: Milestone;
  index: number;
}

export default function RoadmapItem({ milestone, index }: RoadmapItemProps) {
  return (
    <motion.div
      variants={fadeIn(0.1 * index)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-100px" }}
      className="w-full"
    >
      <div className="border border-gray-800 rounded p-6 hover:border-gray-700 transition-all duration-300">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-white">{milestone.title}</h3>
          <span
            className={`
              px-3 py-1 rounded-full text-sm font-medium
              ${
                milestone.status === "completed"
                  ? "bg-green-500/20 text-green-500"
                  : milestone.status === "in-progress"
                  ? "bg-blue-500/20 text-blue-500"
                  : "bg-gray-500/20 text-gray-400"
              }
            `}
          >
            {milestone.status}
          </span>
        </div>
        <p className="text-sm text-gray-400 mb-3">{milestone.quarter}</p>
        <p className="text-gray-400">{milestone.description}</p>
      </div>
    </motion.div>
  );
}
