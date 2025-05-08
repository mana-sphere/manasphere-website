"use client";

import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [activeLink, setActiveLink] = useState("home"); // Default active link
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
      setActiveLink(sectionId); // Set the clicked link as active
    }
  };

  // Detect active section on scroll
  useEffect(() => {
    const handleScrollEvent = () => {
      const sections = ["about", "games", "roadmap", "contact"];
      let currentSection = "home"; // Default section

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = sectionId;
            break;
          }
        }
      }
      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 p-8"
    >
      <div className="max-w-5xl mx-auto">
        <div
          className="bg-[#afafaf]/10 backdrop-blur-lg rounded-full px-4 py-2 border border-[#474747]/30"
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
                    className={`${
                      activeLink === link.sectionId
                        ? "bg-gradient-to-r from-[#6142CE] to-[#F3BEA0] bg-clip-text text-transparent"
                        : "text-[#7f7093]"
                    } hover:bg-gradient-to-r hover:from-[#6142CE] hover:to-[#F3BEA0] hover:bg-clip-text hover:text-transparent transition-colors duration-200 text-sm md:text-base cursor-pointer`}
                  >
                    {link.text}
                  </button>
                </li>
              ))}
            </ul>

            {/* Button */}
            <button className="bg-gradient-to-br from-[#6142CE] from-40% to-[#F3BEA0] to-100% rounded-full px-6 py-2 text-white text-base hover:from-[#7152DE] hover:from-70% hover:to-[#F4CEA0] hover:to-100% transition-all duration-200 flex-shrink-0 cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
