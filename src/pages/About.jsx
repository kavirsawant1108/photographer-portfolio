import React from "react";
import { motion } from "framer-motion";
import photographer from "../assets/images/IMG_9710  1 (1).jpg";
import studio from "../assets/images/img10.jpg";

const About = () => {
  return (
    <div className="bg-white text-black">

      {/* 🔥 HERO */}
      <section className="px-6 md:px-20 pt-28 pb-16">

  <div className="flex flex-col md:flex-row items-center gap-12">

    {/* LEFT TEXT */}
    <div className="md:w-1/2">
      <h1 className="text-4xl md:text-6xl leading-tight mb-6">
        Crafting Visual Stories Through Light & Space
      </h1>

      <p className="text-gray-400 max-w-md">
        Interior, architecture, and lifestyle photography designed to elevate spaces into timeless visual experiences.
      </p>
    </div>

    {/* RIGHT PROFILE */}
    <div className="md:w-1/2 flex flex-col items-center text-center">

      {/* ROUND IMAGE */}
      <img
        src={photographer}
        alt="Photographer"
        className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border border-white/20"
      />

      {/* NAME */}
      <h3 className="mt-6 text-xl tracking-widest">
        Mohin Sawant
      </h3>

      {/* QUALIFICATION */}
      <p className="text-gray-400 text-sm mt-1">
        Interior & Lifestyle Photographer
      </p>

      {/* AWARDS */}
      <p className="text-gray-500 text-xs mt-3 max-w-xs">
        Winner – Incredible Goa Award 2024 <br />
        Featured in Design Weekly & ArchDaily
      </p>

    </div>

  </div>

</section>

      {/* 🎯 SPLIT SECTION */}
      <section className="px-6 md:px-20 py-24 flex flex-col md:flex-row gap-16 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <img
            src={studio}
            alt="Studio"
            className="w-full h-[500px] object-cover"
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <h2 className="text-3xl md:text-4xl mb-6">
            ART OF BLINKS
          </h2>

          <p className="text-gray-400 mb-6 leading-relaxed">
            ART OF BLINKS is a creative photography studio dedicated to capturing the essence of design, architecture, and lifestyle. Every project is approached with a deep understanding of light, composition, and spatial storytelling.
          </p>

          <p className="text-gray-400 mb-6 leading-relaxed">
            The work focuses on transforming real spaces into visually compelling narratives that resonate with both emotion and precision. From luxury interiors to commercial environments, each frame is crafted to highlight detail, depth, and atmosphere.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Collaboration lies at the heart of the process, working closely with designers, architects, and brands to deliver visuals that elevate their identity and communicate their vision effectively.
          </p>
        </motion.div>

      </section>

      {/* ✨ STATEMENT SECTION */}
      <section className="px-6 md:px-20 py-24 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl mb-6">
          Photography is not just about capturing space,
          it’s about capturing how it feels.
        </h2>
        <p className="text-gray-500">
          Every frame is designed to communicate emotion, detail, and atmosphere.
        </p>
      </section>

      {/* 📊 PREMIUM STATS */}
      <section className="px-6 md:px-20 py-24 border-t border-white/10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">

          {[
            { number: "5+", label: "Years Experience" },
            { number: "100+", label: "Projects Completed" },
            { number: "50+", label: "Clients Worldwide" },
            { number: "10+", label: "Publications" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl mb-2">{item.number}</h3>
              <p className="text-gray-500 text-sm">{item.label}</p>
            </motion.div>
          ))}

        </div>

      </section>

      {/* 🚀 CTA */}
      <section className="px-6 md:px-20 py-24 text-center">

        <h2 className="text-3xl md:text-4xl mb-6">
          Let’s Create Something Meaningful
        </h2>

        <p className="text-gray-500 mb-8">
          Available for collaborations, projects, and creative partnerships.
        </p>

        <a
          href="/contact"
          className="inline-block px-8 py-3 border border-white hover:bg-white hover:text-black transition duration-300"
        >
          Contact Me
        </a>

      </section>

    </div>
  );
};

export default About;