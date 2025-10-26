"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  image?: string;
  delay?: number;
}

export default function TestimonialCard({
  quote,
  name,
  role,
  image,
  delay = 0,
}: TestimonialCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden group"
    >
      {/* Decorative quote mark */}
      <div className="absolute top-4 right-4 text-8xl text-primary-gold/10 font-serif leading-none group-hover:text-primary-gold/20 transition-colors">
        "
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Quote */}
        <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
          "{quote}"
        </p>

        {/* Author info */}
        <div className="flex items-center gap-4">
          {image && (
            <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-primary-gold/20">
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
          )}
          <div>
            <h4 className="font-bold text-primary-green text-lg">{name}</h4>
            <p className="text-gray-600 text-sm">{role}</p>
          </div>
        </div>
      </div>

      {/* Gradient border effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-gold/0 via-primary-gold/0 to-primary-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
}
