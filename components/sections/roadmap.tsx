"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import RoadmapTimeline from "@/components/sections/roadmap/RoadmapTimeline";
import { fadeIn } from "@/utils/motion";

export default function Roadmap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <div ref={ref} className="min-h-screen w-full text-white py-20">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          className="mb-20"
        >
          <motion.h1
            variants={fadeIn()}
            className="text-6xl md:text-7xl lg:text-8xl mb-6"
          >
            Roadmap
          </motion.h1>
          <motion.p
            variants={fadeIn(0.2)}
            className="text-xl text-gray-400 max-w-2xl"
          >
            Follow our journey as we continue to evolve and expand our gaming
            universe
          </motion.p>
        </motion.div>
        <RoadmapTimeline isInView={isInView} />
      </div>
    </div>
  );
}
