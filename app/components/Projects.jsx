// app/components/Projects.jsx

// app/components/Projects.jsx

// app/components/Projects.jsx

"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Recipe Finder App",
      description:
        "A modern recipe search app using live API. Features search, filters, and responsive UI.",
      image: "/images/projects/recipefinder.png",
      tech: ["React", "API", "Tailwind"],
      demo: "https://kajal-portfolio-recipe-finder-app.vercel.app/",
      github: "https://github.com/kajalkotak/kajal-portfolio-recipe-finder-app",
    },
    {
      title: "Notes App",
      description:
        "A clean notes management app with categories, search, filters, and local storage support.",
      image: "/images/projects/notesapp.jpeg",
      tech: ["React", "Tailwind", "LocalStorage"],
      demo: "https://kajal-portfolio-notes-app-cix6.vercel.app/",
      github: "https://github.com/kajalkotak/kajal-portfolio-notes-App",
    },
    {
      title: "Expense Tracker",
      description:
        "A professional expense tracking application with graphs and dynamic balance updates.",
      image: "/images/projects/Expense.jpeg",
      tech: ["React", "Chart.js", "Tailwind"],
      demo: "https://expense-tracker-app-8gvw.vercel.app/",
      github: "https://github.com/kajalkotak/expense-tracker-app",
    },
    {
      title: "Kajal's Blog",
      description:
        "A minimal and beautiful blog platform with clean UI and fast loading pages.",
      image: "/images/projects/blog.jpeg",
      tech: ["Next.js", "Tailwind", "MDX"],
      demo: "https://kajal-s-blog.vercel.app/",
      github: "https://github.com/kajalkotak/kajal-s-blog",
    },
    {
      title: "Food Order App",
      description:
        "A complete food ordering system with cart, checkout, meals API and responsive design.",
      image: "/images/projects/FoodOrderApp.jpeg",
      tech: ["React", "API", "CSS"],
      demo: "https://food-order-app-theta-five.vercel.app/",
      github: "https://github.com/kajalkotak/Food-Order-App",
    },
    {
      title: "devpusp hospital",
      description:
        "devpusp hospital",
      image: "/images/projects/ddhLogo.svg",
      tech: ["React", "API", "CSS"],
      demo: "https://devpushp-hospital.vercel.app/",
      github: "https://github.com/kajalkotak/devpushp-hospital",
    },

    {
      title: "Appointment Booking System",
      description:
        "Appointment Booking System",
      image: "/images/projects/logo.jpg",
      tech: ["React", "API", "CSS"],
      demo: "https://appointment-booking-system-vo.vercel.app/",
      github: "https://github.com/kajalkotak/Appointment-Booking-System",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-20 bg-gray-50 scroll-mt-24"
    >
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">
          My <span className="text-blue-600">Projects</span>
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          A selection of my best work showcasing real-world skills.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            {/* Image */}
            <div className="relative w-full h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover rounded-t-2xl"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold mt-4">{project.title}</h3>

              <p className="text-gray-600 mt-3">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-sm bg-gray-200 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center mt-6">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 font-medium hover:underline"
                >
                  Live Demo <FaExternalLinkAlt />
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 hover:text-black font-medium"
                >
                  Code <FaGithub size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
