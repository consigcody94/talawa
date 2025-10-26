"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export default function InteractiveCard({
  children,
  className = "",
  glowColor = "primary-gold",
}: InteractiveCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`group relative ${className}`}
    >
      {/* Glow effect on hover */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r from-${glowColor} to-yellow-400 rounded-xl opacity-0 group-hover:opacity-75 blur transition duration-300`} />

      {/* Card content */}
      <div className="relative bg-white rounded-xl p-8 shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
        {children}
      </div>
    </motion.div>
  );
}
