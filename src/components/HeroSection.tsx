
import * as React from 'react'; import { Button } from '@/components/ui/button';
import { Github, Code, Trophy, BookOpen, Check } from 'lucide-react';
import hero from '../assets/hero.png';
import { FaLinkedin } from "react-icons/fa";
import { SiCodechef, SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

const socialLinks = [
  {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/subha-harini',
        icon: FaLinkedin ,
        color: 'hover:text-blue-500'
      },
      {
        name: 'GitHub',
        url: 'https://github.com/subhaharini04',
        icon: Github,
        color: 'hover:text-gray-800'
      },
      {
        name: 'LeetCode',
        url: 'https://leetcode.com/subhaharinis',
        icon: SiLeetcode,
        color: 'hover:text-orange-500'
      },
      {
        name: 'CodeChef',
        url: 'https://www.codechef.com/users/subhaharini07',
        icon: SiCodechef,
        color: 'hover:text-red-950'
      },
      {
        name: 'GeeksforGeeks',
        url: 'https://auth.geeksforgeeks.org/user/subhasenvbrq/profile',
        icon: SiGeeksforgeeks,
        color: 'hover:text-green-600'
      }
];

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
                <span className="text-yellow">Developer</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                I build modern full-stack web apps and love real-time features.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://drive.google.com/file/d/1-Fte-dVzVzbHD3441wkC7EUpAvTqLQpr/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-rose hover:bg-rose/90 text-white px-8 py-3 rounded-2xl font-medium text-lg transition-all duration-300 hover:scale-105">
                  Download CV
                </Button>
              </a>

              <Button
                className="border border-navy font-bold text-navy hover:bg-navy hover:text-white px-8 py-3 rounded-2xl font-medium text-lg transition-all duration-300 hover:scale-105"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Let's Connect
              </Button>


            </div>
            <div className="flex justify-center lg:justify-start space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 ${social.color}`}
                  title={social.name}
                >
                  <social.icon className="w-6 h-6 text-gray-600 group-hover:text-current transition-colors duration-300" />

                  {/* Tooltip */}
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {social.name}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* 3D Avatar */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-82 lg:w-96 lg:h-96 flex items-center justify-center animate-float">
                <img
                  src={hero}
                  alt="Female developer with laptop"
                  className="w-82 h-82 bg-transparent lg:w-90 lg:h-90 object-contain"
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
