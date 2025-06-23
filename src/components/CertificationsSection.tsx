
import React from 'react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: 'IBM DevOps and Software Engineering',
      issuer: 'IBM',
      date: '2024',
      icon: '🏆',
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'DevOps on AWS',
      issuer: 'Coursera',
      date: '2024',
      icon: '☁️',
      color: 'from-orange-400 to-red-500'
    },
    {
      title: 'Relational Database (freeCodeCamp)',
      issuer: 'freeCodeCamp',
      date: '2023',
      icon: '🗄️',
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'Java (Basic)',
      issuer: 'HackerRank',
      date: '2023',
      icon: '☕',
      color: 'from-yellow-400 to-orange-500'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-warmGray">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-rose rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Continuous learning and professional development achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {cert.icon}
              </div>
              
              <h3 className="text-lg font-semibold text-navy mb-2 leading-tight">
                {cert.title}
              </h3>
              
              <p className="text-rose font-medium mb-1">{cert.issuer}</p>
              <p className="text-gray-500 text-sm">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
