import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import heroImg from "../assets/images/hero.jpg";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";

const images = [img1, img2, img3, img4, img5, img6];

const Home = ({ onImageClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* HERO */}
      <section className="px-4 md:px-8">
        <div className="h-[85vh] rounded-2xl overflow-hidden relative">
          <img
            src={heroImg}
            alt="hero"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/30" />

          <div className="absolute bottom-10 left-6 md:left-12">
            <h1 className="text-4xl md:text-6xl leading-tight">
              Capturing Spaces & Stories
            </h1>
            <p className="mt-3 text-gray-300">
              Interior & Lifestyle Photography
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 md:px-20 py-24 max-w-4xl">
        <h2 className="text-3xl mb-6">
          Visual storytelling through light & design
        </h2>
        <p className="text-gray-400 leading-relaxed">
          A curated collection of interiors, architecture, and lifestyle
          moments designed to inspire.
        </p>
      </section>

      {/* GALLERY */}
      <section className="px-6 md:px-20 pb-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
  {images.map((img, i) => (
    <div
      key={i}
      onClick={() => onImageClick(img)}
      className="cursor-pointer group overflow-hidden relative"
    >
      <img
        src={img}
        alt=""
        className="w-full h-[320px] object-cover group-hover:scale-110 transition duration-700"
      />

      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
        <p className="text-sm">View</p>
      </div>
    </div>
  ))}
</section>

      {/* CTA */}
      <section className="text-center py-24">
        <h2 className="text-3xl mb-4">Let’s Work Together</h2>
        <p className="text-gray-400 mb-6">
          Available for interior & lifestyle shoots
        </p>

        <Link to="/contact">
            <button className="px-6 py-3 border border-white hover:bg-white hover:text-black transition duration-300">
            Contact Me
            </button>
        </Link>
      </section>
    </motion.div>
  );
};

export default Home;