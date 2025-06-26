import React from 'react';
import {
  Code,
  Database,
  Server,
  Star,
  Github
} from 'lucide-react';
import { SiCodechef, SiLeetcode, SiGeeksforgeeks, SiHackerrank } from 'react-icons/si';
import { AiOutlineHtml5, AiOutlineJava, AiFillStar } from "react-icons/ai";
import { FaCss3Alt, FaReact, FaJs, FaHackerrank } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";


interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  level: number; // 1-5 stars
  tag: string;
  category: string;
  // Back side details
  frameworks: string[];
  practiceWebsite: string[];
  project: string;
  githubLink?: string;
  certLink?: string;
}

const practiceIcons: Record<string, { icon: JSX.Element; url: string }> = {
  CodeChef: {
    icon: <SiCodechef className="w-5 h-5 text-white" />,
    url: "https://www.codechef.com/users/subhaharini07"
  },
  LeetCode: {
    icon: <SiLeetcode className="w-5 h-5 text-white" />,
    url: "https://leetcode.com/subhaharinis"
  },
  GeeksforGeeks: {
    icon: <SiGeeksforgeeks className="w-5 h-5 text-white" />,
    url: "https://auth.geeksforgeeks.org/user/subhasenvbrq/profile"
  },
  HackerRank: {
    icon: <FaHackerrank className="w-5 h-5 text-white" />,
    url: "https://www.hackerrank.com/subhaharini107"
  },
};

const SkillsSection = () => {
  const skills: Skill[] = [
    {
      name: 'Java',
      icon: AiOutlineJava,
      level: 3,
      tag: 'Currently Learning',
      category: 'Programming',
      frameworks: [],
      practiceWebsite: ['CodeChef', 'LeetCode', 'GeeksforGeeks'],
      project: '',
    },
    {
      name: 'HTML5',
      icon: AiOutlineHtml5,
      level: 4,
      tag: 'Hands On Experience',
      category: 'Programming',
      frameworks: [],
      practiceWebsite: [],
      project: '',
      githubLink: 'https://github.com/subhaharini04',

    },
    {
      name: 'CSS',
      icon: FaCss3Alt,
      level: 4,
      tag: 'Hands On Experience',
      category: 'Programming',
      frameworks: ['Bootstrap', 'Tailwind',],
      practiceWebsite: [],
      project: '',
      githubLink: 'https://github.com/subhaharini04',
    },
    {
      name: 'MySQL',
      icon: GrMysql,
      level: 3,
      tag: 'Currently Learning',
      category: 'Database',
      frameworks: [],
      practiceWebsite: ['HackerRank'],
      project: '',
    },
    {
      name: 'JavaScript',
      icon: FaJs,
      level: 2,
      tag: 'Used in Internship',
      category: 'Programming',
      frameworks: ['ES6+', 'Node.js'],
      practiceWebsite: [],
      project: '',

    },
    {
      name: 'React.js',
      icon: FaReact,
      level: 2,
      tag: 'Used in Internship',
      category: 'Frontend',
      frameworks: ['Next.js', 'Vite'],
      practiceWebsite: [],
      project: '',
      githubLink: 'https://github.com/subhaharini04',
    },

  ];
  const csSubjects = [
    { name: 'OOPs' },
    { name: 'Operating Systems' },
    { name: 'Computer Networks' },
    { name: 'DBMS' },
    { name: 'DSA' },
  ];

  const StarRating = ({ level }: { level: number }) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${star <= level
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
                className="flip-card h-80"
              >
                <div className="flip-card-inner h-full">
                  {/* Front Side */}
                  <div className="flip-card-front bg-white rounded-2xl p-5 shadow-lg border border-gray-100">
                    <div className="h-full flex flex-col">
                      {/* Skill Icon */}
                      <div className="flex justify-center mb-3">
                        <div className="w-20 h-20 bg-gradient-to-br from-rose/20 to-rose/10 rounded-2xl flex items-center justify-center">
                          <IconComponent className="w-8 h-8 text-rose" />
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
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="flip-card-back bg-gradient-to-br from-navy to-navy/90 rounded-2xl p-6 shadow-lg text-white">
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
                      {/* Frameworks (only show if available) */}
                      {skill.frameworks && skill.frameworks.length > 0 && (
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-rose mb-3 font-poppins flex items-center gap-2">

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
                      )}


                      {/* Practice Website */}

                      {/* Project */}
                      {skill.project && (
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-rose mb-2 font-poppins flex items-center gap-2">
                            <span></span>
                            Project Applied
                          </h4>
                          <p className="text-sm text-white/90 font-poppins bg-white/10 px-3 py-2 rounded-lg">
                            {skill.project}
                          </p>
                        </div>
                      )}


                      {/* Links */}
                      <div className="flex flex-wrap gap-4 items-center">
                        {skill.practiceWebsite?.map((site, i) => (
                          <div key={i} className="relative group">
                            <a
                              href={practiceIcons[site]?.url || '#'}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition"
                            >
                              {practiceIcons[site]?.icon || <Code className="w-5 h-5 text-white" />}
                            </a>
                            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-black/70 text-white text-xs px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                              {site}
                            </span>
                          </div>
                        ))}
                      </div>


                      {skill.githubLink && (
                        <div className="relative group">
                          <a
                            href={skill.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition"
                          >
                            <Github className="w-5 h-5 text-white" />
                          </a>
                          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-black/70 text-white text-xs px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition">
                            GitHub
                          </span>
                        </div>
                      )}


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
            {['Tailwind CSS', 'Bootstrap', 'Node.js', 'MongoDB', 'Git & GitHub', 'AWS S3', 'JWT Authentication', 'Responsive Design', 'RESTful APIs'].map((tech) => (
              <div
                key={tech}
                className="bg-white text-navy px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 font-medium font-poppins border border-gray-200 hover:border-rose/30"
              >
                <span className="text-rose mr-2 inline-block"><AiFillStar /></span>
                {tech}
              </div>
            ))}
          </div>
        </div>
        <section className="mt-20 text-center">
          <h3 className="text-2xl font-semibold text-navy mb-6 font-poppins">
            Core CS Subjects
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {csSubjects.map((subj, i) => (
              <div
                key={i}
                className="bg-white text-navy px-5 py-3 rounded-xl shadow-md border border-gray-200 hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition-all duration-300"
              >
                <span className="text-rose mr-2 inline-block"><AiFillStar /></span>
                <p className="inline-block font-semibold font-poppins">{subj.name}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </section>
  );
};

export default SkillsSection;
