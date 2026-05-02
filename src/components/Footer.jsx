import React from "react";

const Footer = () => {
  return (
    <footer className="px-6 md:px-20 py-16 border-t border-white/10">
      
      <div className="flex flex-col md:flex-row justify-between gap-10">
        
        {/* LEFT */}
        <div>
          <h2 className="text-lg tracking-[0.3em] mb-4">
            ART OF BLINKS
          </h2>
          <p className="text-gray-400 text-sm max-w-sm">
            Interior & lifestyle photography focused on capturing space,
            light, and emotion.
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">Email</a>
        </div>

      </div>

      <div className="mt-10 text-xs text-gray-500 text-center">
        © {new Date().getFullYear()} All rights reserved. | Designed by kavir sawant
      </div>

    </footer>
  );
};

export default Footer;

