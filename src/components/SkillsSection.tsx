
import React from 'react';
import { 
  Code, 
  Database, 
  Server, 
  Globe, 
  Coffee,
  Palette,
  Star,
  ExternalLink,
  Github
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  level: number; // 1-5 stars
  tag: string;
  tagEmoji: string;
  category: string;
  // Back side details
  frameworks: string[];
  practiceWebsite: string;
  project: string;
  githubLink?: string;
  certLink?: string;
}

const SkillsSection = () => {
  const skills: Skill[] = [
    {
      name: 'React.js',
      icon: Code,
      level: 4,
      tag: 'Used in Internship',
      tagEmoji: '🔥',
      category: 'Frontend',
      frameworks: ['Next.js', 'Vite', 'Create React App'],
      practiceWebsite: 'React.dev',
      project: 'E-commerce Dashboard',
      githubLink: 'https://github.com/username/react-project',
      certLink: 'https://certificates.com/react'
    },
    {
      name: 'JavaScript',
      icon: Code,
      level: 5,
      tag: 'Certified',
      tagEmoji: '✅',
      category: 'Programming',
      frameworks: ['ES6+', 'TypeScript', 'Node.js'],
      practiceWebsite: 'HackerRank',
      project: 'Real-time Chat App',
      githubLink: 'https://github.com/username/js-project',
      certLink: 'https://hackerrank.com/certificates/javascript'
    },
    {
      name: 'Node.js',
      icon: Server,
      level: 4,
      tag: 'Used in Internship',
      tagEmoji: '🔥',
      category: 'Backend',
      frameworks: ['Express.js', 'Fastify', 'NestJS'],
      practiceWebsite: 'NodeSchool',
      project: 'API Gateway Service',
      githubLink: 'https://github.com/username/node-project'
    },
    {
      name: 'MongoDB',
      icon: Database,
      level: 3,
      tag: 'Currently Learning',
      tagEmoji: '📚',
      category: 'Database',
      frameworks: ['Mongoose', 'MongoDB Atlas', 'Aggregation Pipeline'],
      practiceWebsite: 'MongoDB University',
      project: 'User Management System',
      githubLink: 'https://github.com/username/mongo-project'
    },
    {
      name: 'MySQL',
      icon: Database,
      level: 3,
      tag: 'Certified',
      tagEmoji: '✅',
      category: 'Database',
      frameworks: ['Sequelize', 'Prisma', 'MySQL Workbench'],
      practiceWebsite: 'FreeCodeCamp',
      project: 'Inventory Management',
      certLink: 'https://freecodecamp.org/certification/mysql'
    },
    {
      name: 'Java',
      icon: Coffee,
      level: 4,
      tag: 'Certified',
      tagEmoji: '✅',
      category: 'Programming',
      frameworks: ['Spring Boot', 'Maven', 'JUnit'],
      practiceWebsite: 'CodeChef',
      project: 'Microservices Architecture',
      githubLink: 'https://github.com/username/java-project',
      certLink: 'https://hackerrank.com/certificates/java'
    }
  ];

  const StarRating = ({ level }: { level: number }) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= level 
                ? 'text-yellow-400 fill-yellow-400' 
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  const getTagStyles = (tag: string) => {
    switch (tag) {
      case 'Used in Internship':
        return 'bg-rose/20 text-rose border-rose/30';
      case 'Currently Learning':
        return 'bg-blue-100 text-blue-700 border-blue-300';
      case 'Certified':
        return 'bg-green-100 text-green-700 border-green-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4 font-poppins">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-rose rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-poppins">
            Hover over the cards to explore my technical expertise and project experience
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            
            return (
              <div
                key={skill.name}
                className="group perspective-1000 h-80"
              >
                <div className="relative w-full h-full duration-700 transform-style-preserve-3d group-hover:rotate-y-180 group-hover:scale-105 transition-transform">
                  {/* Front Side */}
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="h-full flex flex-col">
                      {/* Skill Icon */}
                      <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-rose/20 to-rose/10 rounded-2xl flex items-center justify-center">
                          <IconComponent className="w-10 h-10 text-rose" />
                        </div>
                      </div>

                      {/* Skill Name */}
                      <h3 className="text-2xl font-bold text-navy text-center mb-4 font-poppins">
                        {skill.name}
                      </h3>

                      {/* XP Level Stars */}
                      <div className="flex justify-center items-center gap-3 mb-6">
                        <span className="text-sm font-medium text-gray-600 font-poppins">
                          Level {skill.level}
                        </span>
                        <StarRating level={skill.level} />
                      </div>

                      {/* Tag/Badge */}
                      <div className="flex justify-center mb-6">
                        <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium font-poppins border ${getTagStyles(skill.tag)}`}>
                          <span className="text-base">{skill.tagEmoji}</span>
                          {skill.tag}
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="mt-auto">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs font-medium text-gray-500 font-poppins">
                            Experience
                          </span>
                          <span className="text-xs font-bold text-rose font-poppins">
                            {skill.level * 20}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-rose to-rose/70 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${skill.level * 20}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Hover Indicator */}
                      <div className="absolute bottom-4 right-4 text-xs text-gray-400 font-poppins opacity-60">
                        Hover to flip
                      </div>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-navy to-navy/90 rounded-2xl p-6 shadow-lg text-white">
                    <div className="h-full flex flex-col">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold font-poppins text-white">
                          {skill.name}
                        </h3>
                        <div className="w-10 h-10 bg-rose/20 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-rose" />
                        </div>
                      </div>

                      {/* Frameworks */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-rose mb-3 font-poppins flex items-center gap-2">
                          <span>🛠️</span>
                          Frameworks Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {skill.frameworks.slice(0, 3).map((framework, idx) => (
                            <span 
                              key={idx}
                              className="bg-white/20 text-white px-3 py-1 rounded-lg text-xs font-poppins"
                            >
                              {framework}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Practice Website */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-rose mb-2 font-poppins flex items-center gap-2">
                          <span>💻</span>
                          Practice Site
                        </h4>
                        <p className="text-sm text-white/90 font-poppins bg-white/10 px-3 py-2 rounded-lg">
                          {skill.practiceWebsite}
                        </p>
                      </div>

                      {/* Project */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-rose mb-2 font-poppins flex items-center gap-2">
                          <span>🚀</span>
                          Project Applied
                        </h4>
                        <p className="text-sm text-white/90 font-poppins bg-white/10 px-3 py-2 rounded-lg">
                          {skill.project}
                        </p>
                      </div>

                      {/* Links */}
                      <div className="mt-auto">
                        <div className="flex gap-3">
                          {skill.githubLink && (
                            <a 
                              href={skill.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all duration-300 text-sm font-poppins group"
                            >
                              <Github className="w-4 h-4" />
                              <span>GitHub</span>
                            </a>
                          )}
                          {skill.certLink && (
                            <a 
                              href={skill.certLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 bg-rose/30 hover:bg-rose/40 px-4 py-2 rounded-lg transition-all duration-300 text-sm font-poppins"
                            >
                              <ExternalLink className="w-4 h-4" />
                              <span>Certificate</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Technologies */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-navy mb-8 font-poppins">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Git & GitHub', 'AWS S3', 'JWT Authentication', 'Bootstrap', 'Responsive Design', 'RESTful APIs'].map((tech) => (
              <div
                key={tech}
                className="bg-white text-navy px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 font-medium font-poppins border border-gray-200 hover:border-rose/30"
              >
                <span className="text-rose mr-2">⭐</span>
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
