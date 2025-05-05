"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.5,
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    }),
  };

  // Handle mouse movement
  const handleMouseMove = (event: MouseEvent) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="about" className="min-h-screen flex items-center">
      <div className="flex items-center justify-between max-w-[90rem] mx-auto py-20 px-8">
        <div className="hidden md:block relative w-1/3 mr-40">
          <svg
            width="250"
            height="250"
            viewBox="-50 -50 327 326" // Adjusted viewBox to show full content
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Main circle */}
            <motion.circle
              cx="113"
              cy="113"
              r="113"
              fill="url(#paint0_linear_0_1)"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Orbiting circles */}
            <motion.g
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ originX: "113px", originY: "113px" }} // Set rotation origin to center of main circle
            >
              <motion.circle
                cx="201.569"
                cy="24.5689"
                r="24.5689"
                fill="url(#paint1_linear_0_1)"
                animate={{
                  x: mousePosition.x * 0.02,
                  y: mousePosition.y * 0.02,
                }}
                transition={{
                  x: { type: "spring", stiffness: 100 },
                  y: { type: "spring", stiffness: 100 },
                }}
              />
            </motion.g>

            <motion.g
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ originX: "113px", originY: "113px" }}
            >
              <motion.circle
                cx="24.5689"
                cy="160.569"
                r="24.5689"
                fill="url(#paint2_linear_0_1)"
                animate={{
                  x: mousePosition.x * -0.015,
                  y: mousePosition.y * -0.015,
                }}
                transition={{
                  x: { type: "spring", stiffness: 80 },
                  y: { type: "spring", stiffness: 80 },
                }}
              />
            </motion.g>

            <motion.g
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ originX: "113px", originY: "113px" }}
            >
              <motion.circle
                cx="152.569"
                cy="178.569"
                r="24.5689"
                fill="url(#paint3_linear_0_1)"
                animate={{
                  x: mousePosition.x * 0.03,
                  y: mousePosition.y * 0.03,
                }}
                transition={{
                  x: { type: "spring", stiffness: 120 },
                  y: { type: "spring", stiffness: 120 },
                }}
              />
            </motion.g>

            <defs>
              <linearGradient
                id="paint0_linear_0_1"
                x1="237.464"
                y1="267.597"
                x2="61.2493"
                y2="28.1681"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#EEBF9D" />
                <stop offset="1" stopColor="#6A48CE" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_0_1"
                x1="228.63"
                y1="58.182"
                x2="190.317"
                y2="6.12442"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#EEBF9D" />
                <stop offset="1" stopColor="#6A48CE" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_0_1"
                x1="51.6303"
                y1="194.182"
                x2="13.3171"
                y2="142.124"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#EEBF9D" />
                <stop offset="1" stopColor="#6A48CE" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_0_1"
                x1="179.63"
                y1="212.182"
                x2="141.317"
                y2="160.124"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#EEBF9D" />
                <stop offset="1" stopColor="#6A48CE" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="text-white w-full md:w-2/3 flex flex-col gap-20">
          <motion.h1
            className="text-6xl md:text-7xl tracking-wide mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={textVariants}
          >
            About Us
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl max-w-3xl px-4 text-[#f6eae3] leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={textVariants}
          >
            Welcome to Manasphere, where we are on a mission to revolutionize
            the gaming experience in the Web3 space. Our platform is designed to
            empower players and developers alike, providing a seamless and
            engaging environment for all.
          </motion.p>
          <motion.p
            className="text-sm md:text-base max-w-3xl px-4 text-[#707070] leading-[1.4]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={textVariants}
          >
            At Manasphere, we believe in the power of community and
            collaboration. Our platform is built on the principles of
            transparency, fairness, and inclusivity. We are committed to
            creating a space where everyone can thrive, from casual gamers to
            hardcore enthusiasts.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
