"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
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

// Floating particles for hero
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
        {/* Background Image */}
        <Image
          src="https://gowhereitzat.com/wp-content/uploads/2021/08/Top-Ten-Stereotypes-about-Jamaicans-Jamaican-flag.jpg"
          alt="Jamaican Flag"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
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
            {/* Enhanced title with shimmer */}
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

            {/* Stagger animated subtitle */}
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
                Empowering Jamaican youth through education, one scholarship at a time
              </motion.p>
            </ParallaxText>

            {/* Enhanced CTA buttons with 3D tilt */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
                whileTap={{ scale: 0.95 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Link
                  href="/donate"
                  className="group relative bg-gradient-to-r from-primary-gold to-yellow-400 hover:from-yellow-400 hover:to-primary-gold text-primary-black px-8 py-4 rounded-full font-bold text-lg transition-all shadow-2xl hover:shadow-primary-gold/50 block"
                >
                  <span className="relative z-10">Support Our Mission</span>
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary-gold blur-xl opacity-0 group-hover:opacity-50 transition-opacity"
                    style={{ zIndex: -1 }}
                  />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
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

          {/* Scroll indicator */}
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

      {/* Impact Stats - Enhanced */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-green/5 to-primary-gold/5" />
        <div className="container mx-auto px-4 relative z-10">
          <FadeInSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-primary-green">
              Our Impact So Far
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <InteractiveCard className="text-center">
                <div className="text-4xl md:text-6xl font-bold text-primary-green mb-3">
                  <AnimatedCounter end={150} suffix="+" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Students Supported</h3>
                <p className="text-gray-600">
                  Scholarships awarded to deserving students
                </p>
              </InteractiveCard>

              <InteractiveCard className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-primary-gold mb-3">
                  <AnimatedCounter end={25} suffix="+" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Schools Reached</h3>
                <p className="text-gray-600">
                  Educational institutions across Jamaica
                </p>
              </InteractiveCard>

              <InteractiveCard className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-accent-ocean mb-3">
                  <AnimatedCounter end={75000} prefix="$" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Funds Distributed</h3>
                <p className="text-gray-600">
                  Directly to students and schools
                </p>
              </InteractiveCard>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* What is Talawa - Enhanced with Parallax */}
      <section className="py-20 bg-gradient-to-br from-white via-earth-sand/20 to-white relative overflow-hidden">
        <ParallaxText speed={-0.2}>
          <div className="container mx-auto px-4 relative z-10">
            <FadeInSection>
              <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                  className="text-4xl md:text-6xl font-bold mb-8 font-poppins"
                  whileInView={{ scale: [0.9, 1.05, 1] }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  What is{" "}
                  <span className="bg-gradient-to-r from-primary-gold via-yellow-400 to-primary-gold bg-clip-text text-transparent">
                    Talawa
                  </span>
                  ?
                </motion.h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-12">
                  In Jamaican Patois, "Talawa" means <strong>strong</strong>,{" "}
                  <strong>fearless</strong>, and <strong>resilient</strong>. It
                  describes someone who may be underestimated but possesses
                  incredible inner strength and determination.
                </p>

                <div className="grid md:grid-cols-3 gap-8 mt-12">
                  {[
                    {
                      emoji: "💪",
                      title: "Strong",
                      desc: "Building resilience through education and opportunity",
                      color: "from-primary-green/20 to-primary-green/10",
                      delay: 0
                    },
                    {
                      emoji: "🌟",
                      title: "Fearless",
                      desc: "Empowering children to dream big and pursue their goals",
                      color: "from-primary-gold/20 to-primary-gold/10",
                      delay: 0.2
                    },
                    {
                      emoji: "🚀",
                      title: "Resilient",
                      desc: "Creating lasting change through sustained support",
                      color: "from-accent-ocean/20 to-accent-ocean/10",
                      delay: 0.4
                    }
                  ].map((item) => (
                    <FadeInSection key={item.title} delay={item.delay}>
                      <motion.div
                        whileHover={{ y: -10, scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className={`p-8 bg-gradient-to-br ${item.color} rounded-2xl shadow-lg hover:shadow-2xl transition-shadow`}
                      >
                        <motion.div
                          className="text-6xl mb-4"
                          animate={{ rotate: [0, -10, 10, -10, 0] }}
                          transition={{ duration: 0.5, delay: item.delay + 0.5 }}
                        >
                          {item.emoji}
                        </motion.div>
                        <h3 className="text-xl font-bold mb-3 text-primary-green">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                      </motion.div>
                    </FadeInSection>
                  ))}
                </div>
              </div>
            </FadeInSection>
          </div>
        </ParallaxText>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center text-primary-green font-poppins">
              Success Stories
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Hear from students whose lives have been transformed through education
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <TestimonialCard
                quote="Talawa helped me get the textbooks I needed. Now I'm top of my class and dreaming of becoming a doctor!"
                name="Kimberly Johnson"
                role="Grade 6 Student, Wait-A-Bit Primary"
                delay={0}
              />
              <TestimonialCard
                quote="The support we received made it possible for our children to continue their education. We are forever grateful."
                name="Mrs. Brown"
                role="Parent"
                delay={0.2}
              />
              <TestimonialCard
                quote="Thanks to Talawa, I can focus on teaching instead of worrying about basic supplies for my students."
                name="Miss Davis"
                role="Teacher, Wait-A-Bit Basic School"
                delay={0.4}
              />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-20 bg-gradient-to-br from-earth-sand to-white">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center text-primary-green font-poppins">
              Latest Updates
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Gala 2025 Feature */}
              <Link href="/gala">
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden group cursor-pointer"
                >
                  <div className="relative h-48 bg-gradient-to-br from-pink-600 via-purple-600 to-primary-green">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-3xl font-bold text-white">Gala 2025</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-primary-gold font-semibold mb-2">
                      March 8, 2025
                    </p>
                    <h4 className="text-xl font-bold text-primary-green mb-3 group-hover:text-earth-forest transition-colors">
                      Annual Talawa Gala Highlights
                    </h4>
                    <p className="text-gray-600 mb-4">
                      See photos and impact from our 2025 Dinner, Dance, and Donations event supporting Jamaican education.
                    </p>
                    <span className="text-primary-green font-semibold group-hover:underline">
                      View Gallery →
                    </span>
                  </div>
                </motion.div>
              </Link>

              {/* Donate Feature */}
              <Link href="/donate">
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden group cursor-pointer"
                >
                  <div className="relative h-48 bg-gradient-to-br from-primary-gold to-yellow-400">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-3xl font-bold text-primary-black">Support Us</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-primary-gold font-semibold mb-2">
                      Make a Difference
                    </p>
                    <h4 className="text-xl font-bold text-primary-green mb-3 group-hover:text-earth-forest transition-colors">
                      Every Contribution Counts
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Your donation directly supports students with scholarships, textbooks, and educational resources.
                    </p>
                    <span className="text-primary-green font-semibold group-hover:underline">
                      Donate Now →
                    </span>
                  </div>
                </motion.div>
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-32 bg-gradient-to-br from-earth-sand to-white relative overflow-hidden">
        <ParallaxText speed={-0.5}>
          <div className="container mx-auto px-4">
            <FadeInSection>
              <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center text-primary-green font-poppins">
                  Our Mission
                </h2>
                <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary-gold/20 to-transparent rounded-bl-full" />
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-primary-green/20 to-transparent rounded-tr-full" />

                  <div className="relative z-10">
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      We are a charitable organization dedicated to providing
                      scholarships and educational tools for children in Jamaica.
                      Every child deserves access to quality education, regardless
                      of their circumstances.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-10">
                      Through community support and partnerships, we're breaking
                      down barriers to education and creating pathways to success
                      for Jamaica's next generation of leaders, innovators, and
                      change-makers.
                    </p>
                    <div className="flex flex-wrap gap-6 justify-center">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link
                          href="/about"
                          className="bg-primary-green hover:bg-earth-forest text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                        >
                          Learn More About Us
                        </Link>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link
                          href="/contact"
                          className="bg-white hover:bg-gray-50 text-primary-green border-2 border-primary-green px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                        >
                          Get In Touch
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </ParallaxText>
      </section>

      {/* Call to Action */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-green via-earth-forest to-primary-black" />

        <div className="container mx-auto px-4 relative z-10">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center text-white">
              <motion.h2
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 font-poppins"
                whileInView={{ scale: [0.9, 1.05, 1] }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Make a Difference{" "}
                <span className="bg-gradient-to-r from-primary-gold to-yellow-300 bg-clip-text text-transparent">
                  Today
                </span>
              </motion.h2>
              <p className="text-lg mb-12 text-gray-100">
                Your support can change a child's life. Every donation helps
                provide books, school supplies, tuition assistance, and
                educational resources to students who need them most.
              </p>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/donate"
                  className="inline-block bg-gradient-to-r from-primary-gold to-yellow-400 hover:from-yellow-400 hover:to-primary-gold text-primary-black px-8 py-4 rounded-full font-bold text-xl transition-all shadow-2xl hover:shadow-primary-gold/50"
                >
                  Donate Now
                </Link>
              </motion.div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
