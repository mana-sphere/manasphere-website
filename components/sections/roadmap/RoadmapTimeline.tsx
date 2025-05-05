"use client";

import { motion } from "motion/react";
import { milestones } from "@/lib/roadmapData";
import RoadmapItem from "./RoadmapItem";
import { staggerContainer } from "@/utils/motion";

interface RoadmapTimelineProps {
  isInView: boolean;
}

export default function RoadmapTimeline({ isInView }: RoadmapTimelineProps) {
  const lastInProgressIndex = milestones.findIndex(
    (item) => item.status === "in-progress"
  );
  const progressPercentage =
    lastInProgressIndex !== -1
      ? ((lastInProgressIndex + 1) / milestones.length) * 100
      : 0;

  return (
    <motion.section
      id="roadmap"
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="mx-auto grid gap-8 lg:gap-12 relative"
    >
      {/* Timeline progress bar */}
      <div className="absolute left-1/2 sm:left-[40px] top-8 bottom-0 w-0.5 -translate-x-1/2 hidden sm:block">
        <div className="h-full w-full relative">
          <div className="absolute top-0 left-0 w-full h-full bg-gray-700/50"></div>
          <motion.div
            initial={{ height: 0 }}
            animate={
              isInView ? { height: `${progressPercentage}%` } : { height: 0 }
            }
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-purple-500/80 to-blue-500/50"
          />
        </div>
      </div>

      {milestones.map((milestone, index) => (
        <div
          key={milestone.id}
          className="grid grid-cols-1 sm:grid-cols-[80px_1fr] gap-4"
        >
          <div className="hidden sm:flex items-start justify-center pt-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
              className={`
                w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center 
                text-white font-bold text-sm z-10 border-2
                ${
                  milestone.status === "completed"
                    ? "border-purple-500"
                    : milestone.status === "in-progress"
                    ? "border-blue-500"
                    : "border-gray-700"
                }
              `}
            >
              {index + 1}
            </motion.div>
          </div>
          <RoadmapItem milestone={milestone} index={index} />
        </div>
      ))}
    </motion.section>
  );
}
