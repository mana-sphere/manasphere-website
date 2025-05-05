"use client";

import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";

export const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 650) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 p-4"
    >
      <div className="max-w-5xl mx-auto">
        <div
          className="bg-[#afafaf]/10 backdrop-blur-lg rounded-full px-6 py-3 border border-[#474747]/30"
          style={{
            background: "rgba(96, 96, 96, 0.1)",
          }}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="rounded-full w-9 h-9 bg-gradient-to-tr from-[#6143C3] to-[#EEBB9B] flex-shrink-0" />

            {/* Links */}
            <ul className="flex gap-6 md:gap-8 items-center">
              {[
                { sectionId: "about", text: "About" },
                { sectionId: "games", text: "Games" },
                { sectionId: "roadmap", text: "Roadmap" },
                { sectionId: "contact", text: "Contact" },
              ].map((link) => (
                <li key={link.sectionId}>
                  <button
                    onClick={() => handleScroll(link.sectionId)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm md:text-base"
                  >
                    {link.text}
                  </button>
                </li>
              ))}
            </ul>

            {/* Button */}
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full px-4 py-1 text-white font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 text-sm md:text-base flex-shrink-0">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
