import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // base style
  const linkClass =
    "relative text-sm tracking-widest transition duration-300";

  // active + inactive styling
  const getLinkClass = ({ isActive }) =>
    `${linkClass} ${
      isActive ? "text-white" : "text-gray-400 hover:text-white"
    }`;

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 px-6 md:px-16 py-4 flex items-center justify-between transition duration-500 ${
        scrolled ? "bg-black/40 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      {/* LOGO */}
      <Link
        to="/"
        className="text-sm tracking-[0.3em] font-light hover:opacity-80 transition text-bold"
      >
        ART OF BLINKS
      </Link>

      {/* NAV LINKS */}
      <div className="hidden md:flex gap-8 items-center">
        <NavLink to="/" className={getLinkClass}>
          Home
        </NavLink>

        <NavLink to="/portfolio" className={getLinkClass}>
          Portfolio
        </NavLink>

        <NavLink to="/testimonials" className={getLinkClass}>
          Testimonials
        </NavLink>

        <NavLink to="/publications" className={getLinkClass}>
          Publications
        </NavLink>

        <NavLink to="/about" className={getLinkClass}>
          About
        </NavLink>

        <NavLink to="/contact" className={getLinkClass}>
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;