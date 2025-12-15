// app/components/Footer.jsx

"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-gray-300 py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-white">Kajal Kotak</h3>
          <p className="text-gray-400 mt-2">
            Frontend Developer | React & Next.js
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/kajalkotak"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition transform hover:-translate-y-1"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/kajalkotak/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition transform hover:-translate-y-1"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:kajal.thobhani11@gmail.com"
            className="hover:text-white transition transform hover:-translate-y-1"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://wa.me/919099811174"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition transform hover:-translate-y-1"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm mt-8">
        © {new Date().getFullYear()} Kajal Kotak. All rights reserved.
      </div>
    </footer>
  );
}
