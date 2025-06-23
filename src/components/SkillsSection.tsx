
import React from 'react';

const SkillsSection = () => {
  const skills = [
    { name: 'React.js', level: 85, icon: '⚛️', color: 'bg-blue-500' },
    { name: 'Node.js', level: 80, icon: '🟢', color: 'bg-green-500' },
    { name: 'JavaScript', level: 90, icon: '🟨', color: 'bg-yellow-500' },
    { name: 'MongoDB', level: 75, icon: '🍃', color: 'bg-green-600' },
    { name: 'Java', level: 70, icon: '☕', color: 'bg-red-600' },
    { name: 'HTML/CSS', level: 95, icon: '🎨', color: 'bg-orange-500' },
  ];

  return (
    <section id="skills" className="py-20 bg-warmGray">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-rose rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{skill.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-navy">{skill.name}</h3>
                  <p className="text-gray-500">{skill.level}%</p>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className={`h-3 rounded-full bg-gradient-to-r from-rose to-yellow transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-navy mb-6">Also Working With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Git', 'AWS S3', 'JWT', 'Bootstrap', 'Responsive Design', 'RESTful APIs'].map((tech) => (
              <span
                key={tech}
                className="bg-white text-navy px-6 py-3 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
