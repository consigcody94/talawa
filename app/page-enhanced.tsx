"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import AnimatedCounter from "@/components/AnimatedCounter";
import InteractiveCard from "@/components/InteractiveCard";
import ParallaxText from "@/components/ParallaxText";
import TestimonialCard from "@/components/TestimonialCard";

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

// Floating particles component for hero background
function FloatingParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  return (
    <div className="overflow-hidden">
      {/* ENHANCED Hero Section */}
      <motion.section
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary-green via-earth-forest to-primary-black"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ backgroundSize: "200% 200%" }}
        />

        {/* Floating particles */}
        <FloatingParticles />

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            {/* Enhanced title with shimmer effect */}
            <motion.h1
              className="text-5xl md:text-8xl lg:text-9xl font-bold mb-6 font-poppins relative"
              initial={{ scale: 0.8, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <motion.span
                className="inline-block bg-gradient-to-r from-primary-gold via-yellow-300 to-primary-gold bg-clip-text text-transparent relative"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: "200% auto" }}
              >
                Talawa
                {/* Shimmer overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                  style={{ mixBlendMode: "overlay" }}
                />
              </motion.span>
            </motion.h1>

            {/* Stagger animated subtitle words */}
            <motion.div
              className="text-2xl md:text-4xl lg:text-5xl mb-4 font-light flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {["Strong.", "Fearless.", "Resilient."].map((word, index) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    delay: 0.5 + index * 0.2,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="font-bold"
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>

            <ParallaxText speed={-0.3} className="max-w-3xl mx-auto">
              <motion.p
                className="text-lg md:text-2xl lg:text-3xl mb-8 text-gray-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Empowering Jamaican youth through education, one scholarship at a
                time
              </motion.p>
            </ParallaxText>

            {/* Enhanced CTA buttons with 3D tilt effect */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotateX: 5,
                  rotateY: 5,
                }}
                whileTap={{ scale: 0.95 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Link
                  href="/donate"
                  className="group relative bg-gradient-to-r from-primary-gold to-yellow-400 hover:from-yellow-400 hover:to-primary-gold text-primary-black px-8 py-4 rounded-full font-bold text-lg transition-all shadow-2xl hover:shadow-primary-gold/50 block"
                >
                  <span className="relative z-10">Support Our Mission</span>
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary-gold blur-xl opacity-0 group-hover:opacity-50 transition-opacity"
                    style={{ zIndex: -1 }}
                  />
                  {/* Particle burst on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    whileHover={{
                      boxShadow: [
                        "0 0 0 0 rgba(253, 185, 19, 0.7)",
                        "0 0 0 20px rgba(253, 185, 19, 0)",
                      ],
                    }}
                    transition={{ duration: 0.6 }}
                  />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotateX: 5,
                  rotateY: -5,
                }}
                whileTap={{ scale: 0.95 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Link
                  href="/apply"
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:shadow-xl block"
                >
                  Apply for Scholarship
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Animated scroll indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
              <motion.div
                className="w-2 h-2 bg-white rounded-full mt-2"
                animate={{ y: [0, 20, 0], opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            </div>
            <p className="text-white/70 text-sm mt-2">Scroll to explore</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Impact Stats - Enhanced with Circular Progress */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-green/5 to-primary-gold/5" />

        {/* Animated background pattern */}
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            backgroundPosition: ["0px 0px", "100px 100px"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <FadeInSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-primary-green">
              Our Impact So Far
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { end: 150, suffix: "+", label: "Students Supported", desc: "Scholarships awarded to deserving students", color: "text-primary-green" },
                { end: 25, suffix: "+", label: "Schools Reached", desc: "Educational institutions across Jamaica", color: "text-primary-gold" },
                { end: 75000, prefix: "$", label: "Funds Distributed", desc: "Directly to students and schools", color: "text-accent-ocean" },
              ].map((stat, index) => (
                <InteractiveCard key={stat.label} className="text-center relative overflow-hidden">
                  {/* Circular progress background */}
                  <motion.div
                    className="absolute inset-0 opacity-10"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 0.1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 1 }}
                  >
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="8"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 2 }}
                      />
                    </svg>
                  </motion.div>

                  <div className={`text-4xl md:text-6xl font-bold ${stat.color} mb-3 relative z-10`}>
                    <AnimatedCounter
                      end={stat.end}
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 relative z-10">{stat.label}</h3>
                  <p className="text-gray-600 relative z-10">
                    {stat.desc}
                  </p>
                </InteractiveCard>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Continue in next file part due to length... */}
    </div>
  );
}
