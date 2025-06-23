
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Character with Tablet */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-yellow/20 to-rose/20 rounded-3xl flex items-center justify-center animate-float">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&h=400"
                  alt="Developer with tablet"
                  className="w-72 h-72 object-cover rounded-2xl shadow-lg"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 right-4 w-12 h-12 bg-rose/30 rounded-2xl rotate-12"></div>
              <div className="absolute -bottom-6 left-4 w-16 h-16 bg-yellow/30 rounded-2xl -rotate-12"></div>
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
                I'm a curious and passionate full-stack developer who loves turning complex problems into simple, beautiful solutions. Currently exploring the exciting world of web development through my internship at <span className="text-rose font-semibold">AraCreate</span>.
              </p>
              
              <p className="text-lg">
                My journey started with a fascination for how things work behind the scenes. Now, I specialize in building modern web applications using the <span className="text-navy font-semibold">MERN stack</span>, with a particular love for creating real-time features that bring applications to life.
              </p>
              
              <p className="text-lg">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing my learning journey with the developer community.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-rose/10 text-rose px-4 py-2 rounded-full font-medium">
                Problem Solver
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
