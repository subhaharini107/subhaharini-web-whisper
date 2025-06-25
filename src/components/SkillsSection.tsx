
import React from 'react';
import { 
  Code, 
  Database, 
  Server, 
  Globe, 
  Coffee,
  Palette
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  tags: Array<{
    label: string;
    emoji: string;
    color: string;
  }>;
}

const SkillsSection = () => {
  const skills: Skill[] = [
    {
      name: 'React.js',
      icon: Code,
      tags: [
        { label: 'Used in Internship', emoji: '🔥', color: 'bg-red-100 text-red-700' },
        { label: 'Hands-on Project', emoji: '⚙️', color: 'bg-blue-100 text-blue-700' }
      ]
    },
    {
      name: 'JavaScript',
      icon: Code,
      tags: [
        { label: 'Used in Internship', emoji: '🔥', color: 'bg-red-100 text-red-700' },
        { label: 'Certified', emoji: '✅', color: 'bg-green-100 text-green-700' }
      ]
    },
    {
      name: 'Node.js',
      icon: Server,
      tags: [
        { label: 'Used in Internship', emoji: '🔥', color: 'bg-red-100 text-red-700' },
        { label: 'Hands-on Project', emoji: '⚙️', color: 'bg-blue-100 text-blue-700' }
      ]
    },
    {
      name: 'MongoDB',
      icon: Database,
      tags: [
        { label: 'Used in Internship', emoji: '🔥', color: 'bg-red-100 text-red-700' }
      ]
    },
    {
      name: 'MySQL',
      icon: Database,
      tags: [
        { label: 'Certified', emoji: '✅', color: 'bg-green-100 text-green-700' },
        { label: 'Learning Now', emoji: '📚', color: 'bg-purple-100 text-purple-700' }
      ]
    },
    {
      name: 'Java',
      icon: Coffee,
      tags: [
        { label: 'Certified', emoji: '✅', color: 'bg-green-100 text-green-700' }
      ]
    },
    {
      name: 'HTML5',
      icon: Globe,
      tags: [
        { label: 'Used in Internship', emoji: '🔥', color: 'bg-red-100 text-red-700' },
        { label: 'Hands-on Project', emoji: '⚙️', color: 'bg-blue-100 text-blue-700' }
      ]
    },
    {
      name: 'CSS3',
      icon: Palette,
      tags: [
        { label: 'Used in Internship', emoji: '🔥', color: 'bg-red-100 text-red-700' },
        { label: 'Hands-on Project', emoji: '⚙️', color: 'bg-blue-100 text-blue-700' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4 font-poppins">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-rose rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-poppins">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.name}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                {/* Icon and Name */}
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-rose/20 to-yellow/20 rounded-2xl flex items-center justify-center mb-3">
                    <IconComponent className="w-8 h-8 text-rose" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy font-poppins">
                    {skill.name}
                  </h3>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {skill.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium font-poppins ${tag.color}`}
                    >
                      <span>{tag.emoji}</span>
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Technologies */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-navy mb-6 font-poppins">Also Working With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Git', 'AWS S3', 'JWT', 'Bootstrap', 'Responsive Design', 'RESTful APIs'].map((tech) => (
              <span
                key={tech}
                className="bg-white text-navy px-6 py-3 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 font-medium font-poppins border border-gray-100"
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
