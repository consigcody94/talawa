"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import InteractiveCard from "@/components/InteractiveCard";
import AnimatedCounter from "@/components/AnimatedCounter";

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

export default function Donate() {
  return (
    <div>
      {/* Enhanced Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-gold to-accent-sunset text-primary-black overflow-hidden">
        {/* Animated background pattern */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ["0px 0px", "100px 100px"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 2px, transparent 2px)`,
            backgroundSize: "40px 40px",
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
              Support <span className="text-white drop-shadow-lg">Talawa</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Your generosity transforms lives through education
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Impact Section */}
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
                Your Impact
              </motion.h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    amount: 50,
                    title: "School Supplies",
                    desc: "Provides a full set of textbooks, notebooks, and writing materials for one student for a semester",
                    color: "from-primary-green/10 to-primary-green/5",
                    textColor: "text-primary-green",
                    delay: 0
                  },
                  {
                    amount: 200,
                    title: "Tuition Support",
                    desc: "Covers school fees and uniforms for one student for a full term",
                    color: "from-primary-gold/10 to-primary-gold/5",
                    textColor: "text-primary-gold",
                    delay: 0.2
                  },
                  {
                    amount: 500,
                    suffix: "+",
                    title: "Full Scholarship",
                    desc: "Sponsors a student's complete education for an entire school year, including books, fees, and supplies",
                    color: "from-accent-ocean/10 to-accent-ocean/5",
                    textColor: "text-accent-ocean",
                    delay: 0.4
                  }
                ].map((item) => (
                  <FadeInSection key={item.title} delay={item.delay}>
                    <motion.div
                      whileHover={{ y: -10, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`text-center p-8 bg-gradient-to-br ${item.color} rounded-2xl shadow-lg hover:shadow-2xl transition-shadow`}
                    >
                      <div className={`text-5xl md:text-6xl font-bold ${item.textColor} mb-4`}>
                        <AnimatedCounter end={item.amount} prefix="$" suffix={item.suffix || ""} />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-primary-green">
                        {item.title}
                      </h3>
                      <p className="text-gray-700">
                        {item.desc}
                      </p>
                    </motion.div>
                  </FadeInSection>
                ))}
              </div>
              <motion.p
                className="text-xl text-gray-700 text-center leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Every contribution, no matter the size, makes a real difference
                in a child's educational journey. Your support provides not just
                materials and tuition, but hope, opportunity, and the chance for
                a brighter future.
              </motion.p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* GoFundMe Section - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-earth-sand to-white">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-4xl mx-auto">
              <motion.h2
                className="text-4xl md:text-6xl font-bold mb-8 text-primary-green text-center font-poppins"
                whileInView={{ scale: [0.9, 1.05, 1] }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Make Your Donation
              </motion.h2>
              <p className="text-xl text-gray-700 text-center mb-12">
                We use GoFundMe to process donations securely and transparently.
                100% of your contribution goes directly to supporting Jamaican
                students.
              </p>

              {/* GoFundMe Embed Container */}
              <motion.div
                className="bg-white rounded-3xl shadow-2xl p-8 min-h-[600px] flex flex-col items-center justify-center relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-gold/20 to-transparent rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary-green/20 to-transparent rounded-tr-full" />

                {/*
                  TODO: Replace this placeholder with your actual GoFundMe embed code

                  To embed your GoFundMe campaign:
                  1. Go to your GoFundMe campaign page
                  2. Click "Share" or "Embed"
                  3. Copy the embed code provided by GoFundMe
                  4. Replace the div below with the embed code

                  Example GoFundMe embed code format:
                  <div className="gfm-embed" data-url="YOUR_GOFUNDME_URL/widget/medium"></div>
                  <script defer src="https://www.gofundme.com/static/js/embed.js"></script>
                */}
                <div className="text-center relative z-10">
                  <motion.div
                    className="text-6xl mb-6"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ❤️
                  </motion.div>
                  <h3 className="text-2xl font-bold text-primary-green mb-4">
                    GoFundMe Campaign Coming Soon
                  </h3>
                  <p className="text-gray-600 mb-8 max-w-md">
                    We're setting up our GoFundMe campaign. Once ready, you'll be
                    able to donate directly through this page.
                  </p>
                  <div className="bg-primary-gold/10 border-2 border-primary-gold rounded-lg p-6 max-w-lg">
                    <p className="text-sm text-gray-700 mb-4">
                      <strong>To add your GoFundMe campaign:</strong>
                    </p>
                    <ol className="text-left text-sm text-gray-700 space-y-2">
                      <li>1. Create your GoFundMe campaign</li>
                      <li>2. Get the embed code from GoFundMe</li>
                      <li>
                        3. Replace the placeholder in{" "}
                        <code className="bg-gray-100 px-2 py-1 rounded">
                          app/donate/page.tsx
                        </code>
                      </li>
                    </ol>
                  </div>
                </div>
              </motion.div>

              {/* Alternative Donation Info */}
              <div className="mt-12 text-center">
                <p className="text-gray-600 mb-4">
                  Questions about donating? Need to make a donation another way?
                </p>
                <a
                  href="/contact"
                  className="text-primary-green hover:text-earth-forest font-semibold underline"
                >
                  Contact us for more information
                </a>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Why Donate Section - Enhanced */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-4xl mx-auto">
              <motion.h2
                className="text-4xl md:text-6xl font-bold mb-12 text-primary-green text-center font-poppins"
                whileInView={{ scale: [0.9, 1.05, 1] }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Why Your Support Matters
              </motion.h2>
              <div className="space-y-6">
                {[
                  {
                    num: 1,
                    title: "Direct Impact",
                    desc: "100% of donations go directly to students. We cover our operational costs separately to ensure your money makes the maximum impact.",
                    delay: 0
                  },
                  {
                    num: 2,
                    title: "Transparency",
                    desc: "We provide regular updates on how funds are used and the students we're helping. You'll see exactly where your money goes.",
                    delay: 0.2
                  },
                  {
                    num: 3,
                    title: "Lasting Change",
                    desc: "Education is the foundation for breaking cycles of poverty. Your support creates opportunities that last a lifetime and benefit entire communities.",
                    delay: 0.4
                  }
                ].map((item) => (
                  <FadeInSection key={item.num} delay={item.delay}>
                    <motion.div
                      className="flex items-start space-x-4"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-green rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        {item.num}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary-green mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-700">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  </FadeInSection>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Thank You Section - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-primary-green via-earth-forest to-primary-black text-white relative overflow-hidden">
        {/* Animated background */}
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
                Thank You for Your{" "}
                <span className="bg-gradient-to-r from-primary-gold to-yellow-300 bg-clip-text text-transparent">
                  Support
                </span>
              </motion.h2>
              <p className="text-xl text-gray-100 mb-8">
                Together, we're building a stronger, more educated Jamaica - one
                student at a time. Your generosity is making dreams possible.
              </p>
              <motion.p
                className="text-2xl font-semibold text-primary-gold"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Every contribution counts. Every child matters.
              </motion.p>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
