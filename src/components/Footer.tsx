
import * as React from 'react';
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Subhaharini S</h3>
            <p className="text-gray-300">Developer</p>
          </div>

          <div className="flex space-x-6">
            <a
              href="mailto:subhasenniappan@gmail.com"
              className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-rose transition-colors duration-300"
            >
              <span className="text-xl"><IoIosMail /></span>
            </a>
            <a
              href="https://www.linkedin.com/in/subha-harini"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-rose transition-colors duration-300"
            >
              <span className="text-xl"><FaLinkedin /></span>
            </a>
            <a
              href="https://github.com/subhaharini04"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-rose transition-colors duration-300"
            >
              <span className="text-xl"><BsGithub /></span>
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Subhaharini S. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
