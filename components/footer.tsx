"use client";

import Link from "next/link";
import { Send, Linkedin, Twitter } from "lucide-react";
import { motion, useTransform } from "framer-motion";
import { useParallax } from "@/hooks/useParallax";

export default function Footer() {
  const { ref: footerRef, y: y1 } = useParallax();
  const y2 = useTransform(y1, [100, 0], [50, 0]);
  const y3 = useTransform(y1, [100, 0], [75, 0]);

  return (
    <motion.footer
      ref={footerRef}
      className="w-full bg-[#221929] text-white py-8 mt-auto relative overflow-hidden"
      style={{ y: y1 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Contact Information */}
          <motion.div style={{ y: y1 }} className="space-y-15">
            <div className="flex items-center gap-3">
              <svg
                width="40"
                height="40"
                viewBox="0 0 57 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="28.2612"
                  cy="28.2612"
                  r="28.2612"
                  fill="url(#paint0_linear_139_53)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_139_53"
                    x1="59.3895"
                    y1="66.9259"
                    x2="15.3184"
                    y2="7.04483"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#EEBF9D" />
                    <stop offset="1" stopColor="#6A48CE" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-4xl">MANASPHERE</span>
            </div>
            <div className="space-y-6">
              <h4 className="text-lg">Contact us</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:support@manasphere.co"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    support@manasphere.co
                  </a>
                </li>
                <li className="text-gray-400">+91 8383860264</li>
              </ul>
            </div>
          </motion.div>

          {/* Main Navigation Links */}
          <motion.div style={{ y: y2 }} className="space-y-4">
            <ul className="space-y-2 text-5xl/snug">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/games"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Games
                </Link>
              </li>
              <li>
                <Link
                  href="/roadmap"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Roadmap
                </Link>
              </li>
            </ul>
            <div className="mt-10">
              <h4 className="text-lg mb-4">Stay Connected</h4>
              <div className="flex space-x-4">
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                <Send className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
              </div>
            </div>
          </motion.div>

          {/* Secondary Navigation */}
          <motion.div style={{ y: y3 }} className="space-y-4">
            <ul className="space-y-2 text-5xl/snug">
              <li>
                <Link
                  href="/community"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          style={{ y: y1 }}
          className="text-center text-gray-400 mt-8 pt-8 border-t border-[#cdafa732]"
        >
          © {new Date().getFullYear()} Manasphere. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
}
