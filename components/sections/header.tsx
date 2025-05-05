"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

export default function Header() {
  const sectionRef = useRef<HTMLElement>(null);
  const [displayText, setDisplayText] = useState("Play");
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    const updateText = (value: number) => {
      if (value <= 0.33) {
        setDisplayText("Play");
      } else if (value > 0.33 && value <= 0.66) {
        setDisplayText("Earn");
      } else {
        setDisplayText("Connect");
      }
    };

    // Ensure initial text is "Play"
    setDisplayText("Play");

    const unsubscribe = scrollYProgress.on("change", updateText);

    return () => {
      unsubscribe();
    };
  }, [scrollYProgress]);

  return (
    <section id="header" ref={sectionRef} style={{ height: "100vh" }}>
      <div
        className="flex flex-col items-center justify-between min-h-screen text-white relative"
        style={{
          background: `conic-gradient(from 180deg at 50% 50%, #090519 0%, #271D2D 100%)`,
        }}
      >
        {/* Main Heading and Tagline Container */}
        <div className="flex flex-col items-center justify-center text-center w-full px-4 pt-62">
          <div className="z-10">
            {/* Main Heading */}
            <motion.h1
              className="text-6xl md:text-8xl tracking-wide mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              MANASPHERE
            </motion.h1>

            {/* Subheading with Gradient */}
            <motion.p
              className="text-lg md:text-xl"
              style={{
                background: `linear-gradient(to right, #EEBB9B, #6143C3)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2,
              }}
            >
              Revolutionizing Web3 Gaming with Telegram Mini-Games
            </motion.p>
          </div>
        </div>

        {/* Circle with Text */}
        <div className="w-full flex items-center justify-center">
          <div className="absolute bottom-0">
            <svg
              className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px]"
              height="400"
              viewBox="0 0 860 558"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M860 430C860 667.482 667.482 860 430 860C192.518 860 0 667.482 0 430C0 192.518 192.518 0 430 0C667.482 0 860 192.518 860 430Z"
                fill="url(#paint0_linear_96_41)"
              />
              <path
                d="M860 430C860 667.482 667.482 860 430 860C192.518 860 0 667.482 0 430C0 192.518 192.518 0 430 0C667.482 0 860 192.518 860 430Z"
                fill="url(#paint1_linear_96_41)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_96_41"
                  x1="903.623"
                  y1="1018.29"
                  x2="233.072"
                  y2="107.188"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EEBF9D" />
                  <stop offset="1" stopColor="#6A48CE" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_96_41"
                  x1="903.623"
                  y1="1018.29"
                  x2="233.072"
                  y2="107.188"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EEBF9D" />
                  <stop offset="1" stopColor="#6A48CE" />
                </linearGradient>
              </defs>
            </svg>

            {/* Text inside the circle */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.p
                className="text-3xl md:text-5xl leading-tight"
                key={displayText}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {displayText}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
