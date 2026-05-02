import React from "react";
import { motion, AnimatePresence } from "framer-motion";

/* FULLSCREEN MENU */
export const FullscreenMenu = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black z-[999] flex flex-col items-center justify-center gap-8 text-3xl"
        >
          {["Home", "Portfolio", "About", "Contact"].map((item, i) => (
            <motion.div
              key={i}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              onClick={onClose}
              className="cursor-pointer hover:text-gray-400"
            >
              {item}
            </motion.div>
          ))}

          <button
            className="absolute top-6 right-10 text-sm"
            onClick={onClose}
          >
            CLOSE
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* LIGHTBOX */
export const Lightbox = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-[999]"
      onClick={onClose}
    >
      <img
        src={image}
        alt="preview"
        className="max-w-[90%] max-h-[90%]"
      />
    </div>
  );
};