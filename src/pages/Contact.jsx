import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // VALIDATION
  const validate = () => {
    if (!form.name || !form.email || !form.phone || !form.message) {
      return "All fields are required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      return "Enter a valid email address.";
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(form.phone)) {
      return "Enter a valid 10-digit phone number.";
    }

    return null;
  };

  // SUBMIT FORM
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("");
    setLoading(true);

    emailjs
      .send(
        "service_ncwi8qm",     
        "template_63muamd",    
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          message: form.message,
        },
        "nsWkdivmvdYxlmTSC"    
      )
      .then(() => {
        setSuccess("Message sent successfully!");
        setForm({ name: "", email: "", phone: "", message: "" });
      })
      .catch(() => {
        setError("Failed to send message. Try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="bg-white text-black min-h-screen pt-24">

      {/* HERO */}
      <section className="px-6 md:px-20 mb-16">
        <h1 className="text-4xl md:text-6xl mb-4">Contact</h1>
        <p className="text-gray-400 max-w-2xl">
          Let’s create something meaningful together. Reach out for collaborations,
          projects, or inquiries.
        </p>
      </section>

      {/* CONTENT */}
      <section className="px-6 md:px-20 pb-24 flex flex-col md:flex-row gap-12">

        {/* LEFT - FORM */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* NAME */}
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full bg-transparent border-b border-gray-600 py-2 outline-none"
            />

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full bg-transparent border-b border-gray-600 py-2 outline-none"
            />

            {/* PHONE */}
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
              className="w-full bg-transparent border-b border-gray-600 py-2 outline-none"
            />

            {/* MESSAGE */}
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              className="w-full bg-transparent border-b border-gray-600 py-2 outline-none"
            />

            {/* ERROR */}
            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}

            {/* SUCCESS */}
            {success && (
              <p className="text-green-500 text-sm">{success}</p>
            )}

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 border border-white hover:bg-white hover:text-black transition duration-300 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>
        </motion.div>

        {/* RIGHT - DETAILS */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex flex-col justify-center gap-6"
        >
          <div>
            <h3 className="text-lg mb-2">Email</h3>
            <p className="text-gray-400">aobprints@gmail.com</p>
          </div>

          <div>
            <h3 className="text-lg mb-2">Phone</h3>
            <p className="text-gray-400">+91 8793491120</p>
          </div>

          <div>
            <h3 className="text-lg mb-2">Location</h3>
            <p className="text-gray-400">Dodamarg, India</p>
          </div>

          <div>
            <h3 className="text-lg mb-2">Social</h3>
            <div className="flex gap-4 text-gray-400">
              <a href="https://www.instagram.com/aobprints/" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a href="https://www.linkedin.com/company/aobprints" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://wa.me/918793491120" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </div>
          </div>

        </motion.div>

      </section>
    </div>
  );
};

export default Contact;