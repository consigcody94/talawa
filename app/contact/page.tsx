"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState, useRef } from "react";
import { useInView } from "framer-motion";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

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

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        reset();
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setSubmitError(
        "There was an error sending your message. Please try emailing us directly at info@talawa.ca"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Enhanced Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-green to-earth-forest text-white overflow-hidden">
        {/* Animated background */}
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
              Get In <span className="text-primary-gold">Touch</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              We'd love to hear from you. Reach out with questions, feedback, or
              partnership opportunities.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form Section - Enhanced */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-5 gap-12">
              {/* Contact Information - Enhanced */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="md:col-span-2 space-y-8"
              >
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-green font-poppins">
                    Contact Information
                  </h2>
                  <p className="text-gray-700 mb-8">
                    Have a question or want to get involved? We're here to help!
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      icon: "📧",
                      title: "Email",
                      content: "info@talawa.ca",
                      link: "mailto:info@talawa.ca",
                      delay: 0
                    },
                    {
                      icon: "🌐",
                      title: "Website",
                      content: "www.talawa.ca",
                      delay: 0.2
                    },
                    {
                      icon: "🇯🇲",
                      title: "Serving",
                      content: "Students and families across Jamaica",
                      delay: 0.4
                    }
                  ].map((item) => (
                    <FadeInSection key={item.title} delay={item.delay}>
                      <motion.div
                        className="flex items-start space-x-4"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-primary-green rounded-full flex items-center justify-center text-white text-xl shadow-lg">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-primary-green mb-1">
                            {item.title}
                          </h3>
                          {item.link ? (
                            <a
                              href={item.link}
                              className="text-gray-700 hover:text-primary-green transition-colors"
                            >
                              {item.content}
                            </a>
                          ) : (
                            <p className="text-gray-700">{item.content}</p>
                          )}
                        </div>
                      </motion.div>
                    </FadeInSection>
                  ))}
                </div>

                <motion.div
                  className="bg-gradient-to-br from-primary-gold/10 to-primary-gold/5 p-6 rounded-xl mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h3 className="font-bold text-lg mb-3 text-primary-green">
                    Response Time
                  </h3>
                  <p className="text-gray-700">
                    We aim to respond to all inquiries within 24-48 hours. For
                    urgent matters, please indicate this in your message.
                  </p>
                </motion.div>
              </motion.div>

              {/* Contact Form - Enhanced */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="md:col-span-3"
              >
                <div className="bg-gradient-to-br from-earth-sand/30 to-white rounded-3xl shadow-2xl p-8 relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-gold/20 to-transparent rounded-bl-full" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary-green/20 to-transparent rounded-tr-full" />

                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-green font-poppins">
                      Send Us a Message
                    </h2>

                    {submitSuccess && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-primary-green/10 border-2 border-primary-green text-primary-green p-4 rounded-lg mb-6"
                      >
                        ✓ Message sent successfully! We'll get back to you soon.
                      </motion.div>
                    )}

                    {submitError && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-50 border-2 border-red-500 text-red-700 p-4 rounded-lg mb-6"
                      >
                        {submitError}
                      </motion.div>
                    )}

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700">
                          Your Name *
                        </label>
                        <input
                          {...register("name", {
                            required: "Name is required",
                          })}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-green focus:outline-none transition-colors"
                          placeholder="Full name"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address",
                            },
                          })}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-green focus:outline-none transition-colors"
                          placeholder="your@email.com"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700">
                          Subject *
                        </label>
                        <input
                          {...register("subject", {
                            required: "Subject is required",
                          })}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-green focus:outline-none transition-colors"
                          placeholder="What is your message about?"
                        />
                        {errors.subject && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.subject.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700">
                          Message *
                        </label>
                        <textarea
                          {...register("message", {
                            required: "Message is required",
                            minLength: {
                              value: 20,
                              message:
                                "Message must be at least 20 characters long",
                            },
                          })}
                          rows={6}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-green focus:outline-none transition-colors"
                          placeholder="Tell us how we can help..."
                        />
                        {errors.message && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.message.message}
                          </p>
                        )}
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-primary-green to-earth-forest hover:from-earth-forest hover:to-primary-green text-white px-8 py-4 rounded-full font-bold text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </motion.button>
                    </form>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-earth-sand to-white">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-4xl mx-auto">
              <motion.h2
                className="text-4xl md:text-6xl font-bold mb-12 text-primary-green text-center font-poppins"
                whileInView={{ scale: [0.9, 1.05, 1] }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Frequently Asked Questions
              </motion.h2>
              <div className="space-y-6">
                {[
                  {
                    question: "How do I apply for a scholarship?",
                    answer: "Visit our Apply page to fill out the scholarship application form. We review applications on a rolling basis.",
                    link: "/apply",
                    linkText: "Apply page",
                    delay: 0
                  },
                  {
                    question: "How are donations used?",
                    answer: "100% of donations go directly to students for scholarships, educational materials, and school supplies. We cover operational costs separately.",
                    delay: 0.2
                  },
                  {
                    question: "Can I sponsor a specific student?",
                    answer: "Yes! Contact us to learn more about direct sponsorship opportunities where you can support a specific student's educational journey.",
                    delay: 0.4
                  },
                  {
                    question: "Do you accept volunteers?",
                    answer: "We welcome volunteers who are passionate about education and supporting Jamaican youth. Reach out to discuss volunteer opportunities.",
                    delay: 0.6
                  }
                ].map((item) => (
                  <FadeInSection key={item.question} delay={item.delay}>
                    <motion.div
                      className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <h3 className="font-bold text-lg mb-2 text-primary-green">
                        {item.question}
                      </h3>
                      <p className="text-gray-700">
                        {item.link ? (
                          <>
                            Visit our{" "}
                            <a
                              href={item.link}
                              className="text-primary-green hover:text-earth-forest underline font-semibold"
                            >
                              {item.linkText}
                            </a>{" "}
                            {item.answer.split(item.linkText!)[1]}
                          </>
                        ) : (
                          item.answer
                        )}
                      </p>
                    </motion.div>
                  </FadeInSection>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
