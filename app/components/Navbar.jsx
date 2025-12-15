// app/components/Navbar.jsx

"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero"); // ⭐ Track active section

  // ⭐ Track section visibility (scroll highlight)
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  // ⭐ Dynamic active class
  const linkClass = (name) =>
    active === name
      ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
      : "text-gray-700 hover:text-blue-600";

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 relative">
        <h1 className="font-bold text-xl">Kajal Portfolio</h1>

        {/* Menu */}
        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto flex flex-col md:flex-row md:space-x-6 bg-white md:bg-transparent p-4 md:p-0 transition-all duration-300 z-50
          ${open ? "block" : "hidden"} md:flex`}
        >
          <li className="py-2 md:py-0">
            <Link
              href="#hero"
              className={linkClass("hero")}
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
          </li>

          <li className="py-2 md:py-0">
            <Link
              href="#about"
              className={linkClass("about")}
              onClick={() => setOpen(false)}
            >
              About
            </Link>
          </li>

          <li className="py-2 md:py-0">
            <Link
              href="#skills"
              className={linkClass("skills")}
              onClick={() => setOpen(false)}
            >
              Skills
            </Link>
          </li>

          <li className="py-2 md:py-0">
            <Link
              href="#projects"
              className={linkClass("projects")}
              onClick={() => setOpen(false)}
            >
              Projects
            </Link>
          </li>

          <li className="py-2 md:py-0">
            <Link
              href="#contact"
              className={linkClass("contact")}
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile button */}
        <button
          aria-label="Toggle menu"
          className="md:hidden px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
    </nav>
  );
}
