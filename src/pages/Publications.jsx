import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Images
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";

const publications = [
  {
    image: img1,
    title: "Modern Living Spaces",
    source: "Design Weekly",
    date: "March 2024",
    short: "Exploring minimal interiors through light and spatial harmony."
  },
  {
    image: img2,
    title: "Architectural Perspectives",
    source: "ArchDaily India",
    date: "January 2024",
    short: "A study of geometry, symmetry, and structure in modern design."
  },
  {
    image: img3,
    title: "Luxury Hospitality Design",
    source: "Hospitality Today",
    date: "December 2023",
    short: "Capturing premium hotel spaces with refined visual storytelling."
  },
  {
    image: img4,
    title: "Lifestyle & Aesthetics",
    source: "Creative Spaces",
    date: "November 2023",
    short: "Blending human moments with thoughtfully designed interiors."
  },
  {
    image: img5,
    title: "Culinary Spaces",
    source: "Food & Design Mag",
    date: "October 2023",
    short: "Where food, ambiance, and design come together visually."
  },
  {
    image: img6,
    title: "Outdoor Serenity",
    source: "Nature & Living",
    date: "September 2023",
    short: "Exploring the harmony between architecture and nature."
  }
];

const Publications = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white min-h-screen pt-24">

      {/* HERO */}
      <section className="px-6 md:px-20 mb-16">
        <h1 className="text-4xl md:text-6xl mb-4">Publications</h1>
        <p className="text-gray-400 max-w-2xl">
          Selected editorial features showcasing design, architecture, and visual storytelling.
        </p>
      </section>

      {/* LIST */}
      <section className="px-6 md:px-20 pb-24 space-y-12">

        {publications.map((item, index) => (
          <motion.div
            key={index}
            onClick={() => navigate(`/publications/${index}`)}
            className="cursor-pointer flex flex-col md:flex-row gap-6 group border-b border-white/10 pb-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* IMAGE */}
            <div className="md:w-1/3 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[220px] object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* TEXT */}
            <div className="md:w-2/3">
              <h2 className="text-xl md:text-2xl mb-2">
                {item.title}
              </h2>

              <p className="text-gray-500 text-sm mb-2">
                {item.source} • {item.date}
              </p>

              <p className="text-gray-400 text-sm">
                {item.short}
              </p>
            </div>

          </motion.div>
        ))}

      </section>

    </div>
  );
};

export default Publications;