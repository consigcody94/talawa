"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import ParallaxText from "@/components/ParallaxText";
import InteractiveCard from "@/components/InteractiveCard";

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

export default function About() {
  return (
    <div>
      {/* Enhanced Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-green to-earth-forest text-white overflow-hidden">
        {/* Animated background pattern */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ["0px 0px", "50px 50px"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 font-poppins"
              whileInView={{ scale: [0.9, 1.05, 1] }}
              transition={{ duration: 0.6 }}
            >
              About <span className="text-primary-gold">Talawa</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Rooted in Jamaican culture, driven by a passion for education
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* The Meaning of Talawa - Enhanced */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-4xl mx-auto">
              <motion.h2
                className="text-4xl md:text-6xl font-bold mb-8 text-primary-green text-center font-poppins"
                whileInView={{ scale: [0.9, 1.05, 1] }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                The Meaning of{" "}
                <span className="bg-gradient-to-r from-primary-gold via-yellow-400 to-primary-gold bg-clip-text text-transparent">
                  Talawa
                </span>
              </motion.h2>
              <div className="prose prose-lg max-w-none">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    <strong className="text-primary-green">Talawa</strong> is a
                    word deeply rooted in Jamaican Patois, embodying the spirit
                    and resilience of the Jamaican people. It means{" "}
                    <em>strong</em>, <em>fearless</em>, and <em>resilient</em> -
                    often describing someone who may be small or underestimated
                    but possesses incredible inner strength and determination.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    The term has evolved beyond its original meaning to represent
                    various expressions of strength and empowerment across
                    Jamaican culture:
                  </p>
                </motion.div>
                <div className="grid md:grid-cols-3 gap-6 my-8">
                  {[
                    {
                      icon: "🏛️",
                      title: "Cultural Identity",
                      desc: "Representing the indomitable spirit of those who overcome challenges against all odds",
                      delay: 0
                    },
                    {
                      icon: "💃",
                      title: "Movement Philosophy",
                      desc: "Embodied in Africanistic movement techniques that celebrate heritage and strength",
                      delay: 0.2
                    },
                    {
                      icon: "🤝",
                      title: "Symbol of Community",
                      desc: "Inspiring organizations, artists, and initiatives dedicated to empowerment",
                      delay: 0.4
                    }
                  ].map((item) => (
                    <FadeInSection key={item.title} delay={item.delay}>
                      <InteractiveCard className="text-center p-6">
                        <motion.div
                          className="text-5xl mb-4"
                          animate={{ rotate: [0, -10, 10, -10, 0] }}
                          transition={{ duration: 0.5, delay: item.delay + 0.5 }}
                        >
                          {item.icon}
                        </motion.div>
                        <h3 className="text-lg font-bold text-primary-green mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </InteractiveCard>
                    </FadeInSection>
                  ))}
                </div>
                <motion.p
                  className="text-xl text-gray-700 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  We chose this name because it perfectly captures what we see
                  in every Jamaican child we serve - that same unbreakable
                  spirit, that same potential to rise above circumstances, that
                  same fearless determination to succeed.
                </motion.p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Our Story - Enhanced with Parallax */}
      <section className="py-20 bg-gradient-to-br from-earth-sand to-white relative overflow-hidden">
        <ParallaxText speed={-0.3}>
          <div className="container mx-auto px-4">
            <FadeInSection>
              <div className="max-w-4xl mx-auto">
                <motion.h2
                  className="text-4xl md:text-6xl font-bold mb-8 text-primary-green text-center font-poppins"
                  whileInView={{ scale: [0.9, 1.05, 1] }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  Our Story
                </motion.h2>
                <motion.div
                  className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-gold/20 to-transparent rounded-bl-full" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary-green/20 to-transparent rounded-tr-full" />

                  <div className="relative z-10">
                    <p className="text-xl text-gray-700 leading-relaxed mb-6">
                      Talawa was born from a simple belief: every child deserves
                      access to quality education, regardless of their economic
                      circumstances. We recognized that countless talented,
                      ambitious students in Jamaica were being held back not by lack
                      of ability, but by lack of resources.
                    </p>
                    <p className="text-xl text-gray-700 leading-relaxed mb-6">
                      Our charitable organization brings together passionate
                      individuals who believe in the power of education to transform
                      lives, families, and entire communities. We work directly with
                      schools, families, and students to identify those who would
                      benefit most from our support.
                    </p>
                    <p className="text-xl text-gray-700 leading-relaxed">
                      Through scholarships, educational tools, and sustained support,
                      we're helping to build Jamaica's future - one student at a
                      time.
                    </p>
                  </div>
                </motion.div>
              </div>
            </FadeInSection>
          </div>
        </ParallaxText>
      </section>

      {/* What We Do - Enhanced Interactive Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-5xl mx-auto">
              <motion.h2
                className="text-4xl md:text-6xl font-bold mb-12 text-primary-green text-center font-poppins"
                whileInView={{ scale: [0.9, 1.05, 1] }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                What We Do
              </motion.h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    emoji: "📚",
                    title: "Scholarships",
                    desc: "We provide financial assistance for tuition, school fees, and educational expenses, ensuring that talented students can continue their education without financial barriers.",
                    gradient: "from-primary-green/10 to-primary-green/5",
                    delay: 0
                  },
                  {
                    emoji: "✏️",
                    title: "Educational Tools",
                    desc: "From textbooks and school supplies to digital learning tools and technology, we equip students with everything they need to succeed in their studies.",
                    gradient: "from-primary-gold/10 to-primary-gold/5",
                    delay: 0.1
                  },
                  {
                    emoji: "🤝",
                    title: "Mentorship & Support",
                    desc: "Education goes beyond books. We connect students with mentors and provide ongoing support to help them navigate their academic journey and plan for their futures.",
                    gradient: "from-accent-ocean/10 to-accent-ocean/5",
                    delay: 0.2
                  },
                  {
                    emoji: "🌟",
                    title: "Community Building",
                    desc: "We foster connections between students, families, donors, and supporters, creating a community united by the belief in education's transformative power.",
                    gradient: "from-accent-coral/10 to-accent-coral/5",
                    delay: 0.3
                  }
                ].map((item) => (
                  <FadeInSection key={item.title} delay={item.delay}>
                    <motion.div
                      whileHover={{ y: -10, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`bg-gradient-to-br ${item.gradient} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow`}
                    >
                      <motion.div
                        className="text-6xl mb-4"
                        animate={{ rotate: [0, -5, 5, -5, 0] }}
                        transition={{ duration: 0.5, delay: item.delay + 0.3 }}
                      >
                        {item.emoji}
                      </motion.div>
                      <h3 className="text-2xl font-bold mb-4 text-primary-green">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                    </motion.div>
                  </FadeInSection>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Call to Action - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-primary-green via-earth-forest to-primary-black text-white relative overflow-hidden">
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                className="text-4xl md:text-6xl font-bold mb-6 font-poppins"
                whileInView={{ scale: [0.9, 1.05, 1] }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Join Our{" "}
                <span className="bg-gradient-to-r from-primary-gold to-yellow-300 bg-clip-text text-transparent">
                  Mission
                </span>
              </motion.h2>
              <p className="text-xl mb-8 text-gray-100">
                Together, we can empower the next generation of Jamaican leaders,
                innovators, and change-makers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/donate"
                    className="inline-block bg-gradient-to-r from-primary-gold to-yellow-400 hover:from-yellow-400 hover:to-primary-gold text-primary-black px-8 py-4 rounded-full font-bold text-lg transition-all shadow-2xl hover:shadow-primary-gold/50"
                  >
                    Support Our Cause
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="inline-block bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:shadow-xl"
                  >
                    Get In Touch
                  </Link>
                </motion.div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
