import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Images
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";

const publications = [
  {
    title: "Modern Living Spaces",
    images: [img1, img2, img3],
    text: `This publication explores the evolving idea of modern living through a carefully curated series of interior photographs that emphasize clarity, balance, and spatial harmony. In today’s design landscape, minimalism is no longer about emptiness but about intentionality. Every object, surface, and shadow carries meaning, and this project captures that philosophy through a refined visual approach.

The photography focuses heavily on the interaction between natural light and architectural form. As sunlight shifts throughout the day, it reveals textures, highlights materials, and introduces subtle contrasts that transform the atmosphere of a space. These fleeting moments are central to the narrative, bringing life to otherwise static environments. Each frame is composed to guide the viewer’s eye, creating a rhythm between openness and detail.

Particular attention is given to materiality—wood grains, stone finishes, fabrics, and reflective surfaces are captured with precision to showcase their tactile quality. Rather than overwhelming the viewer, the compositions allow space to breathe, reinforcing a sense of calm and balance. The use of negative space is intentional, creating visual pauses that enhance the overall experience.

Beyond aesthetics, the project reflects the emotional impact of well-designed interiors. These spaces are not just visually appealing; they are environments meant to be lived in, experienced, and remembered. The photographs aim to communicate this by blending technical accuracy with artistic sensitivity.

Ultimately, Modern Living Spaces is about storytelling through design. It presents interiors not as static compositions, but as dynamic environments shaped by light, material, and human presence. The result is a body of work that feels timeless, refined, and deeply connected to contemporary living.`
  },
  {
    title: "Architectural Perspectives",
    images: [img2, img3, img4],
    text: `Luxury Hospitality Design captures the essence of high-end spaces created to deliver comfort, sophistication, and immersive experiences. This publication focuses on how design, lighting, and material selection come together to shape environments that are both visually striking and emotionally engaging.

The photography emphasizes ambiance as a key element of storytelling. Rather than simply documenting interiors, each image conveys the mood and experience of the space. Warm lighting, layered textures, and carefully curated details create a sense of intimacy and elegance that defines luxury environments.

Attention is given to both macro and micro perspectives. Wide shots establish the scale and layout of the space, while close-up compositions highlight intricate details such as fabric textures, finishes, and decorative elements. This dual approach provides a comprehensive understanding of the design.

A significant aspect of this work is its role in branding. High-quality visuals are essential for hospitality businesses to communicate their identity and attract their audience. The photographs serve as powerful tools that translate physical spaces into compelling visual narratives.

Luxury Hospitality Design ultimately explores how spaces can evoke emotion and create memorable experiences. Through careful composition and attention to detail, the project presents hospitality environments as more than functional spaces—they become destinations defined by atmosphere, design, and storytelling.`
  },
  {
    title: "Luxury Hospitality Design",
    images: [img3, img4, img5],
    text: `Luxury Hospitality Design captures the essence of high-end spaces created to deliver comfort, sophistication, and immersive experiences. This publication focuses on how design, lighting, and material selection come together to shape environments that are both visually striking and emotionally engaging.

The photography emphasizes ambiance as a key element of storytelling. Rather than simply documenting interiors, each image conveys the mood and experience of the space. Warm lighting, layered textures, and carefully curated details create a sense of intimacy and elegance that defines luxury environments.

Attention is given to both macro and micro perspectives. Wide shots establish the scale and layout of the space, while close-up compositions highlight intricate details such as fabric textures, finishes, and decorative elements. This dual approach provides a comprehensive understanding of the design.

A significant aspect of this work is its role in branding. High-quality visuals are essential for hospitality businesses to communicate their identity and attract their audience. The photographs serve as powerful tools that translate physical spaces into compelling visual narratives.

Luxury Hospitality Design ultimately explores how spaces can evoke emotion and create memorable experiences. Through careful composition and attention to detail, the project presents hospitality environments as more than functional spaces—they become destinations defined by atmosphere, design, and storytelling.`
  },
  {
    title: "Lifestyle & Aesthetics",
    images: [img4, img5, img6],
    text: `Lifestyle & Aesthetics is a study of how people interact with spaces, blending interior design with human presence to create authentic and emotionally resonant imagery. The project captures everyday moments within thoughtfully designed environments, highlighting the connection between space and experience.

The compositions are designed to feel natural rather than staged. Soft lighting, subtle movement, and balanced framing contribute to a sense of realism that allows viewers to relate to the scene. These images reflect how spaces are actually lived in, rather than how they are merely presented.

Human presence plays a key role in the storytelling. Whether through direct interaction or implied activity, the inclusion of lifestyle elements adds depth and narrative to the visuals. It transforms interiors from static compositions into dynamic environments filled with life and purpose.

The project also explores the emotional impact of design. Colors, textures, and lighting are used to create specific moods, influencing how a space is perceived and experienced. Each photograph is carefully crafted to evoke a feeling, whether it is warmth, calmness, or inspiration.

Lifestyle & Aesthetics demonstrates the power of photography as a storytelling medium, where design and human experience intersect. It highlights the idea that spaces are not just built—they are lived, felt, and remembered.`
  },
  {
    title: "Culinary Spaces",
    images: [img5, img6, img1],
    text: `Culinary Spaces explores the intersection of food, design, and atmosphere, capturing dining environments as immersive sensory experiences. This publication focuses on how visual elements such as lighting, texture, and composition contribute to the overall perception of a space.

The photography highlights the relationship between interior design and the dining experience. Warm tones, layered lighting, and carefully arranged elements create an inviting atmosphere that enhances the appeal of the space. Each frame is composed to reflect both aesthetic beauty and functional design.

Detail is a key aspect of this project. Close-up shots capture textures of materials, table settings, and design elements, while wider compositions provide context and spatial understanding. This balance ensures that both the macro and micro aspects of the environment are effectively communicated.

The work also emphasizes storytelling through visuals. Rather than simply presenting a space, the images convey the experience of being there—how it feels, how it looks, and how it engages the senses. This approach makes the visuals more relatable and impactful.

Culinary Spaces ultimately showcases how thoughtful design can elevate the dining experience. It highlights the importance of atmosphere in shaping perception and demonstrates how photography can bring these environments to life in a compelling and engaging way.`
  },
  {
    title: "Outdoor Serenity",
    images: [img6, img1, img2],
    text: `Outdoor Serenity explores the relationship between architecture and nature, focusing on spaces designed to promote relaxation, balance, and well-being. The project captures outdoor environments where natural elements and built structures coexist in harmony.

The photography emphasizes openness and flow. Wide compositions highlight the connection between indoor and outdoor spaces, creating a seamless transition that enhances the overall experience. Natural elements such as greenery, water, and sky play a central role in defining the visual narrative.

Light is used to create mood and atmosphere. Soft natural light enhances textures and colors, while shadows add depth and contrast. The result is a series of images that feel calm, balanced, and immersive.

The project also reflects a growing appreciation for outdoor living. In modern design, these spaces are no longer secondary—they are integral to the overall experience of a home or environment. The photography captures this shift by presenting outdoor areas as extensions of interior spaces.

Outdoor Serenity ultimately highlights the importance of connection—between design and nature, structure and environment, and people and place. It presents outdoor spaces as environments for relaxation, reflection, and meaningful experience.`
  }
];

const PublicationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const index = parseInt(id);
  const data = publications[index];

  if (!data) return <div className="pt-24 p-10">Not Found</div>;

  const prev = index > 0 ? index - 1 : null;
  const next = index < publications.length - 1 ? index + 1 : null;

  return (
    <motion.div
      className="bg-white text-black min-h-screen pt-24 px-6 md:px-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

      {/* 🔙 BACK BUTTON */}
      <button
        onClick={() => navigate("/publications")}
        className="mb-10 text-sm text-gray-400 hover:text-white transition"
      >
        ← Back to Publications
      </button>

      {/* TITLE */}
      <h1 className="text-3xl md:text-5xl mb-12">
        {data.title}
      </h1>

      {/* SPLIT SECTION */}
      <div className="flex flex-col md:flex-row gap-12 items-start mb-16">

        {/* IMAGE */}
        <motion.div
          className="md:w-1/2"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <img
            src={data.images[0]}
            alt=""
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          className="md:w-1/2"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <p className="text-black leading-relaxed whitespace-pre-line">
            {data.text}
          </p>
        </motion.div>

      </div>

      {/* 🖼️ GALLERY */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-16">
        {data.images.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt=""
            className="w-full h-[250px] object-cover"
            whileHover={{ scale: 1.05 }}
          />
        ))}
      </div>

      {/* 🔁 NEXT / PREV */}
      <div className="flex justify-between text-sm">

        {prev !== null ? (
          <button
            onClick={() => navigate(`/publications/${prev}`)}
            className="text-gray-400 hover:text-white transition"
          >
            ← Previous
          </button>
        ) : <div />}

        {next !== null && (
          <button
            onClick={() => navigate(`/publications/${next}`)}
            className="text-gray-400 hover:text-white transition"
          >
            Next →
          </button>
        )}

      </div>

    </motion.div>
  );
};

export default PublicationDetail;