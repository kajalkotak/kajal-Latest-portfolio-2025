// app/components/About.jsx

"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-100 text-gray-900 py-20 px-6 md:px-20 scroll-mt-24"
    >
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">
          About <span className="text-blue-600">Me</span>
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          A quick introduction about who I am and what I do.
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center gap-14">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 flex justify-center"
        >
          <img
            src="/images/kajal.jpeg"
            className="w-80 h-80 rounded-2xl shadow-xl object-cover border border-gray-300"
            alt="Kajal Avatar"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 space-y-6"
        >
          <h3 className="text-3xl font-semibold">Who Am I?</h3>

          <p className="text-gray-700 leading-relaxed text-lg">
            I’m Kajal Kotak — a frontend developer focused on creating clean,
            modern and user-friendly web interfaces using React, Next.js and
            Tailwind CSS.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
              <p className="text-gray-500 text-sm">Name</p>
              <p className="text-xl font-semibold">Kajal Kotak</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
              <p className="text-gray-500 text-sm">Role</p>
              <p className="text-xl font-semibold">Frontend Developer</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
              <p className="text-gray-500 text-sm">Experience</p>
              <p className="text-xl font-semibold">Fresher</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
              <p className="text-gray-500 text-sm">Location</p>
              <p className="text-xl font-semibold">Bangalore</p>
            </div>
          </div>

          <a
            href="#contact"
            className="btn inline-block mt-6 bg-blue-600 text-white px-7 py-3 rounded-lg shadow-md hover:bg-blue-700 transition text-lg font-semibold"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
