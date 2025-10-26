"use client";

"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import AnimatedCounter from "@/components/AnimatedCounter";
import InteractiveCard from "@/components/InteractiveCard";
import ParallaxText from "@/components/ParallaxText";
import ImageGallery from "@/components/ImageGallery";
import Image from "next/image";

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

export default function GalaPage() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);

  const galaImages = [
    { src: "/images/gala/2025-03-08 23_28_43.795-0500.jpg", alt: "Gala 2025" },
    { src: "/images/gala/2025-03-09 00_24_54.443-0500.jpg", alt: "Gala 2025" },
    { src: "/images/gala/2025-03-09 00_32_45.647-0500.jpg", alt: "Gala 2025" },
    { src: "/images/gala/2025-03-09 00_33_16.967-0500.jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_190353.jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_190355.jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_190406.jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_190602.jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_190628.jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_190708.jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_191050.jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_191322.jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_191355.jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_191533.jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_191620.jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_192225.jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_192313.jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_193033.jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_193049.jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_193202(0).jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_193250.jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_193320.jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_193424.jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_193839.jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_195849.jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_195903.jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_200048.jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_200100.jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_202342.jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_202958.jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_205149.jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_205333(0).jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_205348.jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_205442.jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_210132.jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_210132(0).jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_212758.jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_212800.jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_212804.jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_213338.jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_213745.jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_213746.jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_220807.jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_221738.jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_222200.jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_222411.jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_222415.jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_222545.jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_222549.jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_222628.jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_222722.jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_223013.jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_223015.jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_223752.jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_223753.jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_224356.jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_233718(0).jpg", alt: "Gala 2025" },
    { src: "/images/gala/20250308_233719.jpg", alt: "Gala 2025" },
    { src: "/images/gala/PXL_20250309_042001444.MP.jpg", alt: "Gala 2025" },
    { src: "/images/gala/PXL_20250309_042004647.jpg", alt: "Gala 2025" },
  ];

  const openGallery = (index: number) => {
    setInitialIndex(index);
    setGalleryOpen(true);
  };

  return (
    <div className="overflow-hidden">
      {galleryOpen && (
        <ImageGallery
          images={galaImages}
          initialIndex={initialIndex}
          onClose={() => setGalleryOpen(false)}
        />
      )}
      {/* Hero Section */}
      <motion.section
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-600 via-purple-600 to-primary-green">
        </div>

        {/* Grid overlay for depth */}
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
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-poppins"
              initial={{ scale: 0.8, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <motion.span
                className="inline-block bg-gradient-to-r from-primary-gold via-yellow-300 to-primary-gold bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: "200% auto" }}
              >
                Talawa Gala 2025
              </motion.span>
            </motion.h1>

            <motion.div
              className="text-2xl md:text-4xl lg:text-5xl mb-8 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="font-bold block mb-4"
              >
                March 8, 2025
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="block text-xl md:text-2xl"
              >
                Dinner, Dance, and Donations
              </motion.span>
            </motion.div>

            <ParallaxText speed={-0.3} className="max-w-3xl mx-auto">
              <motion.p
                className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                Celebrating our impact and supporting education for Jamaican youth
              </motion.p>
            </ParallaxText>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="#gallery"
                  className="bg-gradient-to-r from-primary-gold to-yellow-400 hover:from-yellow-400 hover:to-primary-gold text-primary-black px-8 py-4 rounded-full font-bold text-lg transition-all shadow-2xl hover:shadow-primary-gold/50"
                >
                  View Photo Gallery
                </a>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="#impact"
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:shadow-xl"
                >
                  See Our Impact
                </a>
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

      {/* Event Details Card */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl shadow-2xl p-10 md:p-16 border-2 border-pink-200">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-primary-green font-poppins">
                Event Details
              </h2>

              <div className="grid md:grid-cols-2 gap-8 text-lg">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">📅</span>
                      <span className="font-bold text-gray-700">Date</span>
                    </div>
                    <p className="text-gray-600 ml-11">Saturday, March 8, 2025</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">🕕</span>
                      <span className="font-bold text-gray-700">Time</span>
                    </div>
                    <p className="text-gray-600 ml-11">6:00 PM</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">💰</span>
                      <span className="font-bold text-gray-700">Ticket Price</span>
                    </div>
                    <p className="text-gray-600 ml-11">$100</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">📍</span>
                      <span className="font-bold text-gray-700">Venue</span>
                    </div>
                    <p className="text-gray-600 ml-11">The Belmont Event Space</p>
                    <p className="text-gray-500 ml-11 text-base">655 Dixon Road, Etobicoke, ON M9W 1J3</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">🎯</span>
                      <span className="font-bold text-gray-700">Beneficiary</span>
                    </div>
                    <p className="text-gray-600 ml-11 text-base">Talawa Youth Development & Educational Alliance</p>
                    <p className="text-gray-500 ml-11 text-base">Taibu Community Health Centre</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-white/70 rounded-xl border border-pink-200">
                <p className="text-center text-gray-700">
                  <span className="font-bold text-primary-green">Tickets for 2026 Gala</span> will be available in November 2025
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 bg-gradient-to-br from-earth-sand to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,155,58,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <FadeInSection>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center text-primary-green font-poppins">
              What Your Support Made Possible
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Through the funds raised at our March 2025 Gala, we were able to make a real difference at Wait-A-Bit Basic and Primary Schools in Trelawny, Jamaica
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
              <InteractiveCard className="text-center p-8">
                <div className="text-6xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold mb-3 text-primary-green">Electrical Connection</h3>
                <p className="text-gray-600">
                  Fixed critical electrical issues at Wait-A-Bit Basic School, enabling the school to operate safely and efficiently
                </p>
              </InteractiveCard>

              <InteractiveCard className="text-center p-8">
                <div className="text-6xl mb-4">🧊</div>
                <h3 className="text-2xl font-bold mb-3 text-primary-green">New Refrigerator</h3>
                <p className="text-gray-600">
                  Made it possible for the school to receive a donated refrigerator from the Custos of the parish
                </p>
              </InteractiveCard>

              <InteractiveCard className="text-center p-8">
                <div className="text-6xl mb-4">🎨</div>
                <h3 className="text-2xl font-bold mb-3 text-primary-green">Playground Improvements</h3>
                <p className="text-gray-600">
                  Funded painting of playground equipment, creating a brighter, safer environment for children
                </p>
              </InteractiveCard>

              <InteractiveCard className="text-center p-8">
                <div className="text-6xl mb-4">🍽️</div>
                <h3 className="text-2xl font-bold mb-3 text-primary-green">Lunch Programme</h3>
                <p className="text-gray-600">
                  Supported the school feeding program, ensuring students have nutritious meals
                </p>
              </InteractiveCard>

              <InteractiveCard className="text-center p-8">
                <div className="text-6xl mb-4">📚</div>
                <h3 className="text-2xl font-bold mb-3 text-primary-green">Direct Student Support</h3>
                <p className="text-gray-600">
                  Provided assistance with school fees, uniforms, and textbooks for children in need
                </p>
              </InteractiveCard>

              <InteractiveCard className="text-center p-8">
                <div className="text-6xl mb-4">❤️</div>
                <h3 className="text-2xl font-bold mb-3 text-primary-green">Community Impact</h3>
                <p className="text-gray-600">
                  Created lasting change in the lives of students, families, and the entire community
                </p>
              </InteractiveCard>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* About Wait-A-Bit Schools */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center text-primary-green font-poppins">
              Supporting Education in Trelawny, Jamaica
            </h2>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mt-16">
              {/* Wait-A-Bit Basic School */}
              <div className="bg-gradient-to-br from-yellow-50 to-blue-50 rounded-3xl p-8 shadow-xl">
                <h3 className="text-3xl font-bold mb-4 text-primary-green">Wait-A-Bit Basic School</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Serving early childhood education in the Wait-A-Bit community, this basic school provides a foundation for young learners in a nurturing environment.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Through community support, we've helped improve infrastructure, including electrical systems, playground equipment, and essential facilities.
                </p>
              </div>

              {/* Wait-A-Bit Primary School */}
              <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-3xl p-8 shadow-xl">
                <h3 className="text-3xl font-bold mb-4 text-primary-green">Wait-A-Bit Primary (All Age) School</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Grade 1 – Grade 6</strong> (ages 6-12 years old)
                </p>
                <p className="text-gray-700 leading-relaxed mb-4 italic text-xl font-semibold text-center py-4 border-y-2 border-primary-green">
                  "Every Child Can Learn<br />Every Child Must Learn"
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Students from all Basic Schools and Infant Schools in the area attend Wait-A-Bit Primary, where they receive quality education and participate in enriching programs.
                </p>
              </div>
            </div>

            {/* School Programs */}
            <div className="mt-16 max-w-6xl mx-auto">
              <h3 className="text-3xl font-bold mb-8 text-center text-primary-green">Programs & Activities</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-6 text-center shadow-lg">
                  <div className="text-4xl mb-3">📊</div>
                  <h4 className="font-bold text-gray-800">Mathematics Week</h4>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-6 text-center shadow-lg">
                  <div className="text-4xl mb-3">👩‍⚕️</div>
                  <h4 className="font-bold text-gray-800">Career Day</h4>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-yellow-100 rounded-2xl p-6 text-center shadow-lg">
                  <div className="text-4xl mb-3">🇯🇲</div>
                  <h4 className="font-bold text-gray-800">Jamaica Day</h4>
                </div>
                <div className="bg-gradient-to-br from-pink-100 to-red-100 rounded-2xl p-6 text-center shadow-lg">
                  <div className="text-4xl mb-3">👧</div>
                  <h4 className="font-bold text-gray-800">Girls' Day</h4>
                  <p className="text-sm text-gray-600 mt-2">Empowering Futures</p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Photo Gallery */}
      <section id="gallery" className="py-20 bg-gradient-to-br from-primary-green via-earth-forest to-primary-black">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center text-white font-poppins">
              2025 Gala Memories
            </h2>
            <p className="text-xl text-center text-gray-200 mb-12 max-w-3xl mx-auto">
              Celebrating community, impact, and the future of Jamaican youth
            </p>

            <div className="max-w-6xl mx-auto bg-white rounded-3xl p-4 shadow-2xl">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galaImages.map((image, index) => (
                  <motion.div
                    key={image.src}
                    className="relative aspect-square rounded-lg overflow-hidden cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    onClick={() => openGallery(index)}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-gold via-yellow-400 to-primary-gold" />

        <div className="container mx-auto px-4 relative z-10">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center text-primary-black">
              <motion.h2
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 font-poppins"
                whileInView={{ scale: [0.9, 1.05, 1] }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Join Us in{" "}
                <span className="bg-gradient-to-r from-primary-green to-earth-forest bg-clip-text text-transparent">
                  Making a Difference
                </span>
              </motion.h2>
              <p className="text-lg md:text-xl mb-12 text-gray-800">
                Your support helps provide education, resources, and opportunities to students who need them most. Together, we're building a brighter future for Jamaica's next generation.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/donate"
                    className="inline-block bg-primary-green hover:bg-earth-forest text-white px-8 py-4 rounded-full font-bold text-xl transition-all shadow-2xl hover:shadow-xl"
                  >
                    Donate Now
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/about"
                    className="inline-block bg-white hover:bg-gray-100 text-primary-green border-2 border-primary-green px-8 py-4 rounded-full font-bold text-xl transition-all shadow-xl"
                  >
                    Learn More About Us
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
