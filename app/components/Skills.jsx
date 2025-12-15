// app/components/Skills.jsx

// app/components/Skills.jsx

"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaWordpress,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiJavascript } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "React", icon: <FaReact size={45} className="text-blue-500" /> },
    { name: "Next.js", icon: <SiNextdotjs size={45} className="text-black" /> },
    {
      name: "JavaScript",
      icon: <SiJavascript size={45} className="text-yellow-500" />,
    },
    { name: "HTML5", icon: <FaHtml5 size={45} className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt size={45} className="text-blue-600" /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={45} className="text-cyan-400" />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs size={45} className="text-green-600" />,
    },
    {
      name: "WordPress",
      icon: <FaWordpress size={45} className="text-blue-500" />,
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-20 bg-white text-gray-900 scroll-mt-24"
    >
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">
          My <span className="text-blue-600">Skills</span>
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Technologies and tools I use to build amazing web experiences.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-gray-100 p-8 rounded-2xl shadow-md hover:shadow-xl border border-gray-200 flex flex-col items-center hover:-translate-y-2 transition-transform"
          >
            <div aria-hidden="true">{skill.icon}</div>
            <p className="mt-4 text-xl font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
