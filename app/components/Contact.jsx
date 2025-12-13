// app/components/Contact.jsx

"use client";

import { motion } from "framer-motion";
import { section } from "framer-motion/client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setSuccess("message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setSuccess("Something went wrong. Try again.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-white scroll-mt-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">
          Get In <span className="text-blue-600">Touch</span>
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Have a project or opportunity? Let’s talk.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-2xl shadow-lg"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-lg border"
          />

          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-lg border"
          />

          <textarea
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 rounded-lg border"
          />

          <button
            disabled={loading}
            className="btn w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-center text-green-600 font-medium mt-4">
              {success}
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
}
