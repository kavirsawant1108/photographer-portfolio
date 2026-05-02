import React from "react";
import { motion } from "framer-motion";

// 👉 Images
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";

const testimonials = [
  {
    image: img1,
    name: "Aarav Mehta",
    role: "Interior Designer",
    text: "Working with ART OF BLINKS was an exceptional experience from start to finish. The attention to detail, understanding of space, and ability to capture natural light elevated our project beyond expectations. Every frame felt intentional and refined, highlighting textures and design elements we carefully curated. The photography not only documented the space but told a complete story of the environment. It significantly enhanced our portfolio and helped us attract new clients. The professionalism and creative direction throughout the process made collaboration seamless and highly rewarding."
  },
  {
    image: img2,
    name: "Riya Kapoor",
    role: "Architect",
    text: "The photography brought our architectural vision to life in a way that drawings and renders never could. Each image captured depth, geometry, and the relationship between light and structure beautifully. The final results felt editorial and timeless, perfectly aligning with our design philosophy. The process was smooth, with great communication and attention to detail at every stage. These visuals have become a key part of our presentations and publications, helping us communicate our ideas more effectively to clients and collaborators."
  },
  {
    image: img3,
    name: "Kabir Sharma",
    role: "Hotel Owner",
    text: "We needed visuals that could represent the luxury and experience of our property, and the results exceeded all expectations. The images captured not just the design but the atmosphere and emotion of the space. Lighting, composition, and framing were executed with precision, creating a strong visual identity for our brand. Since updating our website and marketing materials with these photographs, we’ve seen a noticeable increase in engagement and bookings. It was a valuable investment for our business."
  },
  {
    image: img4,
    name: "Neha Verma",
    role: "Stylist",
    text: "What stood out most was the ability to blend styling with storytelling. Every composition felt natural yet thoughtfully crafted. The photographs captured subtle details and textures that often go unnoticed, bringing depth and richness to the visuals. The collaboration process was highly professional, with a clear understanding of creative direction. The final images have been widely appreciated and featured across multiple platforms, helping us build a stronger visual identity."
  },
  {
    image: img5,
    name: "Rahul Jain",
    role: "Restaurant Owner",
    text: "The photography transformed how our space is perceived. It captured the ambiance, lighting, and design in a way that truly represents the dining experience. The visuals now play a major role in our branding and marketing, helping customers connect with our space even before visiting. The attention to detail and understanding of composition made a huge difference. It was a smooth and highly professional experience from beginning to end."
  },
  {
    image: img6,
    name: "Sneha Patil",
    role: "Creative Director",
    text: "This collaboration was defined by creativity, precision, and a strong artistic vision. The images captured not just the design but the mood and personality of the space. Each photograph felt like a piece of visual storytelling, carefully composed and executed. The results elevated our project presentation and helped communicate our concept more effectively. It was a seamless and inspiring experience working together."
  }
];

const Testimonials = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-24">

      {/* HERO */}
      <section className="px-6 md:px-20 mb-20">
        <h1 className="text-4xl md:text-6xl mb-4">
          Testimonials
        </h1>
        <p className="text-gray-400 max-w-2xl">
          Real experiences from clients, sharing their journey, process, and results.
        </p>
      </section>

      {/* STORIES */}
      <section className="px-6 md:px-20 pb-24 space-y-28">

        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-center gap-12 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* IMAGE */}
            <div className="md:w-1/2">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[420px] object-cover"
              />
            </div>

            {/* TEXT */}
            <div className="md:w-1/2">
              <p className="text-gray-300 leading-relaxed mb-6">
                “{item.text}”
              </p>

              <h3 className="text-sm tracking-widest">
                {item.name}
              </h3>
              <p className="text-xs text-gray-500">
                {item.role}
              </p>
            </div>

          </motion.div>
        ))}

      </section>

    </div>
  );
};

export default Testimonials;