import React from "react";
import { motion } from "framer-motion";

// 👉 Your images
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";

const images = [img1, img2, img3, img4, img5, img6];

const Portfolio = ({ onImageClick }) => {
  return (
    <div className="bg-black text-white min-h-screen pt-24">

      {/* HERO */}
      <section className="px-6 md:px-20 mb-16">
        <h1 className="text-4xl md:text-6xl mb-4">
          Portfolio
        </h1>
        <p className="text-gray-400 max-w-2xl">
          A curated selection of interiors, architecture, and lifestyle
          photography capturing light, texture, and space.
        </p>
      </section>

      {/* GRID */}
      <section className="px-4 md:px-20 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">

          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              viewport={{ once: true }}
              onClick={() => onImageClick(img)}
              className="relative overflow-hidden group cursor-pointer"
            >
              {/* IMAGE */}
              <img
                src={img}
                alt=""
                className="w-full h-[320px] object-cover transition duration-700 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <p className="text-sm tracking-widest">VIEW</p>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

    </div>
  );
};

export default Portfolio;