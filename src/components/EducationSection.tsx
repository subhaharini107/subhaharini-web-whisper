
import React from 'react';

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="section-padding max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">Education</h2>
          <div className="w-20 h-1 bg-rose rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Academic background and achievements
          </p>
        </div>

        <div className="bg-gradient-to-br from-rose/5 to-yellow/5 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-gradient-to-br from-rose/20 to-yellow/20 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">🎓</span>
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-navy mb-2">B.E. – Computer Science and Engineering</h3>
              <h4 className="text-xl text-rose font-semibold mb-2">Velalar College of Engineering & Technology</h4>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600 mb-4">
                <span>Graduating: 2025</span>
                <span className="hidden sm:block">•</span>
                <span>CGPA: 8.31</span>
                <span className="hidden sm:block">•</span>
                <span>📍 Erode, Tamil Nadu</span>
              </div>
              
              <div className="inline-flex items-center px-4 py-2 bg-yellow/20 text-navy rounded-full font-medium">
                🏆 Strong Academic Performance
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
