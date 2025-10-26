"use client";

import { useEffect, useRef } from "react";
import { useInView, motion, useSpring, useTransform } from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  decimals?: number;
}

export default function AnimatedCounter({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  className = "",
  decimals = 0,
}: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Use spring physics for smooth, natural counting
  const spring = useSpring(0, {
    stiffness: 50,
    damping: 30,
    restDelta: 0.001,
  });

  // Transform the spring value to display with proper formatting
  const display = useTransform(spring, (latest) => {
    const value = decimals > 0 ? latest.toFixed(decimals) : Math.floor(latest);
    return prefix + Number(value).toLocaleString() + suffix;
  });

  useEffect(() => {
    if (isInView) {
      // Smoothly animate to end value when in view
      spring.set(end);
    }
  }, [isInView, end, spring]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    >
      {display}
    </motion.span>
  );
}
