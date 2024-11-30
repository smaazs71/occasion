// components/Footer.js
import React from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" pt-6 pb-1">
      <div className="w-full border-t-2 border-gold-500 mb-4"></div>
      <div className="container mx-auto flex flex-col items-center gap-8">
        <div className="flex flex-col gap-4">
          <p className="text-center text-2xl font-semibold">
            This website was beautifully crafted by{" "}
            <strong className="text-gold-500">Nexora CodeFusion</strong>.
            {/* <p>Crafting Excellence in Every Byte.</p> */}
          </p>
          <p className="text-center text-xl">
            Need a personalized invitation or a professional website?{" "}
            <a
              href="https://m-maaz.vercel.app/"
              target="blank"
              className="text-gold-500 hover:underline"
            >
              Check out my portfolio!
            </a>
          </p>

          {/* Contact Links */}
          <div className="flex items-center justify-center space-x-6">
            <a
              href="https://wa.me/+919372326937"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-green-600 hover:text-green-500"
            >
              <FaWhatsapp className="text-xl" />
              <span>WhatsApp</span>
            </a>
            <a
              href="mailto:smaazs71@gmail.com"
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-500"
            >
              <FaEnvelope className="text-xl" />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} All rights reserved. | Designed with
          💕
        </p>
      </div>
    </footer>
  );
};

export default Footer;
