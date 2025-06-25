
import React from 'react';
import { 
  Code, 
  Database, 
  Server, 
  Globe, 
  Coffee,
  Palette,
  Star
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  level: number; // 1-5 stars
  usage: string;
  category: string;
}

const SkillsSection = () => {
  const skills: Skill[] = [
    {
      name: 'React.js',
      icon: Code,
      level: 4,
      usage: 'Built multiple projects during internship',
      category: 'Frontend'
    },
    {
      name: 'JavaScript',
      icon: Code,
      level: 5,
      usage: 'Daily coding & HackerRank certified',
      category: 'Programming'
    },
    {
      name: 'Node.js',
      icon: Server,
      level: 4,
      usage: 'Backend development in internship',
      category: 'Backend'
    },
    {
      name: 'MongoDB',
      icon: Database,
      level: 3,
      usage: 'Database management in projects',
      category: 'Database'
    },
    {
      name: 'MySQL',
      icon: Database,
      level: 3,
      usage: 'FreeCodeCamp certified, currently learning',
      category: 'Database'
    },
    {
      name: 'Java',
      icon: Coffee,
      level: 4,
      usage: 'HackerRank certified, college projects',
      category: 'Programming'
    },
    {
      name: 'HTML5',
      icon: Globe,
      level: 5,
      usage: 'Extensive use in web development',
      category: 'Frontend'
    },
    {
      name: 'CSS3',
      icon: Palette,
      level: 4,
      usage: 'Styling expertise with frameworks',
      category: 'Frontend'
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

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Frontend':
        return 'bg-blue-100 text-blue-700';
      case 'Backend':
        return 'bg-green-100 text-green-700';
      case 'Database':
        return 'bg-purple-100 text-purple-700';
      case 'Programming':
        return 'bg-rose-100 text-rose-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4 font-poppins">
            Skills & XP Level
          </h2>
          <div className="w-20 h-1 bg-rose rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-poppins">
            My tech stack and experience points earned through projects and learning
          </p>
        </div>

        {/* XP Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.name}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-rose/20 group"
              >
                {/* Header with Icon and Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose/20 to-yellow/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-rose" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium font-poppins ${getCategoryColor(skill.category)}`}>
                    {skill.category}
                  </span>
                </div>

                {/* Skill Name */}
                <h3 className="text-xl font-bold text-navy mb-3 font-poppins">
                  {skill.name}
                </h3>

                {/* XP Level Stars */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-medium text-gray-600 font-poppins">
                    Level {skill.level}
                  </span>
                  <StarRating level={skill.level} />
                </div>

                {/* Usage Note */}
                <div className="bg-gray-50 rounded-lg p-3 border-l-4 border-rose">
                  <p className="text-sm text-gray-700 font-poppins italic">
                    "{skill.usage}"
                  </p>
                </div>

                {/* XP Bar Visual */}
                <div className="mt-4">
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
                      className="bg-gradient-to-r from-rose to-yellow h-2 rounded-full transition-all duration-500 group-hover:animate-pulse"
                      style={{ width: `${skill.level * 20}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Technologies as Achievement Badges */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-navy mb-6 font-poppins">
            🏆 Additional Achievements
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Git', 'AWS S3', 'JWT', 'Bootstrap', 'Responsive Design', 'RESTful APIs'].map((tech) => (
              <div
                key={tech}
                className="bg-white text-navy px-6 py-3 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 font-medium font-poppins border-2 border-gray-100 hover:border-yellow/50 flex items-center gap-2"
              >
                <span className="text-yellow-500">⭐</span>
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
