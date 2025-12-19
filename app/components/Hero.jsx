// app/components/Hero.jsx

"use client";

import Image from "next/image";

import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["Web Developer", "React Enthusiast", "UI/UX Designer"];

  // text animation

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <section
  id="hero"
  className="min-h-[100dvh] flex flex-col md:flex-row items-center justify-start md:justify-center bg-gray-900 text-white px-4 md:px-16 scroll-mt-24 pt-24 md:pt-0"
>
      {/* left side :text */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
      Hi, I'm Kajal Kotak
    </h1>

    <h2 className="text-xl md:text-3xl text-blue-400 font-semibold">
      {texts[textIndex]}
    </h2>

        <p className="text-md md:text-lg text-gray-300">
          I build modern web applications and interactive user experiences using
          React, Next.js, and Tailwind CSS.
        </p>

        <div className="flex justify-center md:justify-start space-x-4">
          <a
            href="#projects"
            className="btn bg-blue-600 px-6 py-3 rounded-md hover:bg-blue-700 transition"
            rel="noopener noreferrer"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="btn border border-blue-600 px-6 py-3 rounded-md hover:bg-blue-600 hover:text-white transition"
            rel="noopener noreferrer"
          >
            Contact Me
          </a>
        </div>

        {/* social icons */}

        <div className="flex justify-center md:justify-start space-x-4 mt-4 text-xl text-gray-200">
          <a
            href="https://github.com/kajalkotak/"
            target="_blank"
            className="hover:text-white transition transform hover:-translate-y-1"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            className="hover:text-white transition transform hover:-translate-y-1"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            className="hover:text-white transition transform hover:-translate-y-1"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://wa.me/919099811174"
            target="_blank"
            className="hover:text-white transition transform hover:-translate-y-1"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* right side : hero image */}

      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
        <Image
          src="/images/kajal.jpeg"
          alt="Kajal Kotak"
          width={320}
          height={320}
          priority
          className="rounded-full border-4 border-blue-600 object-cover shadow-xl"
        />
      </div>
    </section>
  );
}
