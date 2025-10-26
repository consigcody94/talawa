"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingDonateButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-8 right-8 z-40"
        >
          <Link
            href="/donate"
            className="group relative block bg-gradient-to-r from-primary-gold to-yellow-400 hover:from-yellow-400 hover:to-primary-gold text-primary-black px-6 py-4 rounded-full font-bold text-lg shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-primary-gold/50"
          >
            <span className="flex items-center space-x-2">
              <span className="text-2xl">❤️</span>
              <span>Donate Now</span>
            </span>
            {/* Pulse animation ring */}
            <span className="absolute inset-0 rounded-full bg-primary-gold opacity-75 animate-ping" />
            <span className="absolute inset-0 rounded-full bg-primary-gold opacity-50 animate-pulse" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
