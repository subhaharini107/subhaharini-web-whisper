import React, { useEffect, useRef, useState } from 'react';
import { Briefcase } from 'lucide-react';

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string[];
}

const ExperienceSection = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const experiences: ExperienceItem[] = [
    {
      role: "Full Stack Developer Intern",
      company: "AraCreate India Pvt. Ltd",
      duration: "Jan 2025 – Mar 2025",
      description: [
        "Built Inventory Management System using MERN stack",
        "Implemented JWT auth, AWS S3, and real-time chat with Socket.IO",
        "Collaborated with 2-member dev team using Git & GitHub"
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-warmGray">
      <div className="section-padding max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4 font-poppins">My Experience</h2>
          <div className="w-20 h-1 bg-rose rounded-full mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>

          {experiences.map((experience, index) => (
            <div
              key={index}
              ref={(el) => itemRefs.current[index] = el}
              data-index={index}
              className={`relative flex items-start mb-12 transition-all duration-700 ${visibleItems.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
                }`}
            >
              {/* Timeline Icon */}
              <div className="absolute left-6 w-4 h-4 bg-rose rounded-full border-4 border-white shadow-md z-10"></div>
              <div className="absolute left-4 w-8 h-8 bg-white rounded-full border-2 border-rose flex items-center justify-center shadow-md z-20">
                <Briefcase className="w-4 h-4 text-rose" />
              </div>

              {/* Content Card */}
              <div className="ml-20 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-navy mb-1 font-poppins">
                    {experience.role}
                  </h3>
                  <a href="https://aracreate.group/" target="_blank"
                    rel="noopener noreferrer" className="text-lg text-rose font-medium">
                    {experience.company}
                  </a>
                  <br />
                  <span className="inline-block mt-3 px-3 py-1 bg-rose/10 text-rose text-sm rounded-full font-medium">
                    {experience.duration}
                  </span>
                </div>

                <ul className="space-y-2">
                  {experience.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <div className="w-1.5 h-1.5 bg-rose rounded-full mt-2 flex-shrink-0"></div>
                      <span className="font-poppins">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
