
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Subhaharini S</h3>
            <p className="text-gray-300">MERN Stack Developer</p>
          </div>

          <div className="flex space-x-6">
            <a
              href="#"
              className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-rose transition-colors duration-300"
            >
              <span className="text-xl">📧</span>
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-rose transition-colors duration-300"
            >
              <span className="text-xl">💼</span>
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-rose transition-colors duration-300"
            >
              <span className="text-xl">🐙</span>
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
