
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight">
                Hi! I'm{' '}
                <span className="text-rose">Subhaharini</span>
                <br />
                <span className="text-yellow">MERN Stack</span> Developer
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                I build modern full-stack web apps and love real-time features.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-rose hover:bg-rose/90 text-white px-8 py-3 rounded-2xl font-medium text-lg transition-all duration-300 hover:scale-105">
                Download CV
              </Button>
              <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white px-8 py-3 rounded-2xl font-medium text-lg transition-all duration-300 hover:scale-105">
                Let's Connect
              </Button>
            </div>
          </div>

          {/* 3D Avatar */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-rose/20 to-yellow/20 rounded-full flex items-center justify-center animate-float">
                <img
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=400&h=400"
                  alt="Female developer with laptop"
                  className="w-72 h-72 lg:w-80 lg:h-80 object-cover rounded-full shadow-2xl"
                />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-rose rounded-full animate-bounce delay-100"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-navy rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
