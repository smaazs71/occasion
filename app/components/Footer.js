// components/Footer.js
import React from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#fdf6e3] text-[#3c3b37] py-6">
      <div className="container mx-auto flex flex-col items-center space-y-4 text-sm">
        {/* Islamic Design Divider */}
        <div className="w-full border-t-2 border-gold-500 mb-4"></div>

        {/* Invitation Creator Details */}
        <p className="text-center text-lg font-serif">
          This website was beautifully crafted by{" "}
          <strong className="text-gold-500">Maaz</strong>.
        </p>
        <p className="text-center text-sm">
          Need a personalized invitation or a professional website?{" "}
          <a
            href="https://your-portfolio-link.com"
            className="text-gold-500 hover:underline"
          >
            Contact me!
          </a>
        </p>

        {/* Contact Links */}
        <div className="flex items-center space-x-6">
          <a
            href="https://wa.me/YOUR_PHONE_NUMBER"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-green-600 hover:text-green-500"
          >
            <FaWhatsapp className="text-xl" />
            <span>WhatsApp</span>
          </a>
          <a
            href="mailto:your-email@example.com"
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-500"
          >
            <FaEnvelope className="text-xl" />
            <span>Email</span>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-center text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} All rights reserved. | Designed with
          💕
        </p>
      </div>
    </footer>
  );
};

export default Footer;
