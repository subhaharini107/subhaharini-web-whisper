
import React from 'react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-warmGray">
      <div className="section-padding max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">Experience</h2>
          <div className="w-20 h-1 bg-rose rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My professional journey and hands-on experience in development
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-navy mb-2">Full Stack Developer Intern</h3>
              <h4 className="text-xl text-rose font-semibold mb-2">AraCreate India</h4>
              <p className="text-gray-600 mb-4">Jan 2025 – Mar 2025</p>
              
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-rose rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Built full-stack Inventory System using MERN stack</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-rose rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Implemented JWT Authentication and AWS S3 file uploads</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-rose rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Developed real-time chat functionality with Socket.IO</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-rose rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Used GitHub and Git for version control and team collaboration</p>
                </div>
              </div>
            </div>
            
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-gradient-to-br from-rose/20 to-yellow/20 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">💼</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
