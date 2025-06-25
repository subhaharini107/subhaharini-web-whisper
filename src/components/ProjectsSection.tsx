
import * as React from 'react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Inventory Management System',
      description: 'A comprehensive MERN stack application for managing inventory with real-time updates, user authentication, and cloud storage integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS S3', 'JWT'],
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=300',
      github: 'https://github.com/gowtham-aracreate/act-metrix-shop',
      demo: null
    },
    {
      title: 'Responsive Stationery Shop',
      description: 'A modern, fully responsive landing page for a stationery shop built with clean HTML, CSS, and Bootstrap for optimal user experience.',
      technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=300',
      github: 'https://github.com/subhaharini04/OCTANET_APRIL',
      demo: null
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-rose rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-warmGray rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent"></div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-navy mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-rose/10 text-rose px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-navy hover:bg-navy/90 text-white rounded-2xl">
                      View Code
                    </Button>
                  </a>

                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Button className="border border-rose text-rose hover:bg-rose hover:text-white rounded-2xl">
                        Live Demo
                      </Button>
                    </a>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
