import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="Talawa Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="font-bold text-2xl text-primary-gold">
                Talawa
              </span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering Jamaican youth through education. Strong, fearless, and
              resilient - we believe every child deserves the opportunity to
              learn and thrive.
            </p>
            <p className="text-sm text-gray-400 italic">
              "Talawa" - Jamaican Patois for strong, fearless, and resilient
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary-gold">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-primary-gold transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-primary-gold transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/donate"
                  className="text-gray-300 hover:text-primary-gold transition-colors"
                >
                  Donate
                </Link>
              </li>
              <li>
                <Link
                  href="/apply"
                  className="text-gray-300 hover:text-primary-gold transition-colors"
                >
                  Apply for Scholarship
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-primary-gold transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary-gold">
              Get In Touch
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="mailto:info@talawa.ca"
                  className="hover:text-primary-gold transition-colors"
                >
                  info@talawa.ca
                </a>
              </li>
              <li className="pt-4">
                <Link
                  href="/contact"
                  className="inline-block bg-primary-gold hover:bg-yellow-500 text-primary-black px-6 py-2 rounded-full font-semibold transition-all hover:scale-105"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Talawa. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-primary-gold text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-primary-gold text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Developer Credit */}
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              Designed and Guarded by{" "}
              <a
                href="https://www.sentinelowl.org/web-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-ocean hover:text-primary-gold transition-colors font-semibold"
              >
                Sentinel Owl
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
