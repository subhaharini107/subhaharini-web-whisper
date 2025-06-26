import React, { useEffect, useRef, useState } from 'react';
import { Medal, BookOpen } from 'lucide-react';

interface CourseItem {
  title: string;
  provider: string;
  year: string;
  description: string;
  type: 'course' | 'certification';
  certificateUrl?: string;
}

const CoursesTimeline = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const courses: CourseItem[] = [
    {
      title: "IBM DevOps Essentials",
      provider: "IBM",
      year: "2024",
      description: "CI/CD basics, pipelines, cloud deployment",
      type: "certification"
    },
    {
      title: "Front-End Development",
      provider: "Coursera",
      year: "2024",
      description: "HTML, CSS, JS foundations",
      type: "course"
    },
    {
      title: "HackerRank Certifications",
      provider: "HackerRank",
      year: "2024",
      description: "Java (Basic), SQL, CSS",
      type: "certification"
    },
    {
      title: "FreeCodeCamp SQL",
      provider: "FreeCodeCamp",
      year: "2024",
      description: "Learned database querying basics",
      type: "course"
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
    <section className="py-20 bg-white">
      <div className="section-padding max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4 font-poppins">Courses & Certifications</h2>
          <div className="w-20 h-1 bg-rose rounded-full mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>

          {courses.map((course, index) => (
            <div
              key={index}
              ref={(el) => itemRefs.current[index] = el}
              data-index={index}
              className={`relative flex items-start mb-12 transition-all duration-700 ${
                visibleItems.includes(index) 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-95'
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms` 
              }}
            >
              {/* Timeline Icon */}
              <div className="absolute left-6 w-4 h-4 bg-rose rounded-full border-4 border-white shadow-md z-10"></div>
              <div className="absolute left-4 w-8 h-8 bg-white rounded-full border-2 border-rose flex items-center justify-center shadow-md z-20">
                {course.type === 'certification' ? (
                  <Medal className="w-4 h-4 text-rose" />
                ) : (
                  <BookOpen className="w-4 h-4 text-rose" />
                )}
              </div>

              {/* Content Card */}
              <div className="ml-20 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 w-full border border-gray-50">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-navy mb-1 font-poppins">
                      {course.title}
                    </h3>
                    <h4 className="text-lg text-rose font-medium">
                      {course.provider}
                    </h4>
                  </div>
                  <span className="inline-block px-3 py-1 bg-rose/10 text-rose text-sm rounded-full font-medium">
                    {course.year}
                  </span>
                </div>

                <p className="text-gray-700 mb-4 font-poppins">
                  {course.description}
                </p>

                <div className="flex items-center gap-3">
                  <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                    course.type === 'certification' 
                      ? 'bg-yellow-100 text-yellow-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {course.type === 'certification' ? (
                      <Medal className="w-3 h-3" />
                    ) : (
                      <BookOpen className="w-3 h-3" />
                    )}
                    {course.type === 'certification' ? 'Certification' : 'Course'}
                  </span>
                  
                  {course.certificateUrl && (
                    <a
                      href={course.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-rose hover:text-rose/80 text-sm font-medium transition-colors duration-200"
                    >
                      View Certificate →
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

export default CoursesTimeline;
