
import * as React from 'react';
import about from '../assets/about.png';
import demo from '../assets/demo.png';


const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Character with Tablet */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              <div className="w-85 h-80 flex items-center justify-center animate-float">
                <img
                  src={about}
                  alt="Developer with tablet"
                  className="w-85 h-85 object-contain rounded-2xl "
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 right-20 w-12 h-12 bg-rose/30 rounded-2xl rotate-12"></div>
              <div className="absolute -bottom-6 left-10 w-16 h-16 bg-yellow/30 rounded-2xl -rotate-12"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div>
              <h2 className="text-4xl font-bold text-navy mb-4">About Me</h2>
              <div className="w-20 h-1 bg-rose rounded-full"></div>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Hi, I’m Subhaharini S, a Computer Science Engineering graduate and a beginner full-stack developer who loves to build things that work and make sense.              </p>

              <p className="text-lg">
                I started my journey out of curiosity about how websites and apps really work. During my internship at AraCreate, I learned to develop real-time web applications using the MERN stack – MongoDB, Express.js, React.js, and Node.js. I worked on features like login systems, image uploads, and live chat, which helped me understand how frontend and backend connect together.              </p>

              <p className="text-lg">
                I’m still learning every day and enjoy exploring new tools and technologies. I believe in starting small, staying consistent, and improving step by step. I’m looking forward to growing as a developer and building useful things with code.              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-rose/10 text-rose px-4 py-2 rounded-full font-medium">
                Quick Learner
              </div>
              <div className="bg-yellow/20 text-navy px-4 py-2 rounded-full font-medium">
                Team Player
              </div>
              <div className="bg-navy/10 text-navy px-4 py-2 rounded-full font-medium">
                Continuous Learner
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
