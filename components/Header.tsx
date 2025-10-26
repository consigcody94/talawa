"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/gala", label: "Gala" },
    { href: "/donate", label: "Donate" },
    { href: "/apply", label: "Apply" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/logo.png"
              alt="Talawa Logo"
              width={50}
              height={50}
              className="h-12 w-auto"
              unoptimized
            />
            <span
              className={`font-bold text-2xl transition-colors ${
                scrolled ? "text-primary-green" : "text-white"
              }`}
            >
              Talawa
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors hover:text-primary-gold ${
                  scrolled ? "text-gray-900" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/donate"
              className="bg-primary-gold hover:bg-yellow-500 text-primary-black px-6 py-2 rounded-full font-semibold transition-all hover:scale-105"
            >
              Support Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden z-50"
            aria-label="Toggle menu"
          >
            <div className="space-y-2">
              <span
                className={`block w-8 h-0.5 transition-all ${
                  scrolled ? "bg-gray-900" : "bg-white"
                } ${mobileMenuOpen ? "rotate-45 translate-y-2.5" : ""}`}
              />
              <span
                className={`block w-8 h-0.5 transition-all ${
                  scrolled ? "bg-gray-900" : "bg-white"
                } ${mobileMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-8 h-0.5 transition-all ${
                  scrolled ? "bg-gray-900" : "bg-white"
                } ${mobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          className="fixed inset-0 bg-primary-green md:hidden pt-20"
        >
          <nav className="flex flex-col items-center space-y-6 py-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white text-2xl font-medium hover:text-primary-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/donate"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-primary-gold hover:bg-yellow-500 text-primary-black px-8 py-3 rounded-full font-semibold text-xl transition-all"
            >
              Support Us
            </Link>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
