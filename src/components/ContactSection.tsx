
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Code, Trophy, BookOpen, Check } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Floating particles for background animation
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, delay: number}>>([]);

  useEffect(() => {
    // Console log message on component mount
    console.log("Thanks for visiting Subhaharini's portfolio 👩‍💻 Let's build something awesome!");

    // Generate particles for background animation
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/subhaharini04',
      icon: Github,
      color: 'hover:text-gray-800'
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/subhaharini04',
      icon: Code,
      color: 'hover:text-orange-500'
    },
    {
      name: 'CodeChef',
      url: 'https://codechef.com/users/subhaharini04',
      icon: Trophy,
      color: 'hover:text-brown-600'
    },
    {
      name: 'GeeksforGeeks',
      url: 'https://geeksforgeeks.org/user/subhaharini04',
      icon: BookOpen,
      color: 'hover:text-green-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-warmGray relative overflow-hidden min-h-screen">
      {/* Floating Particles Background */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 bg-rose opacity-20 rounded-full animate-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Subtle background lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose to-transparent"></div>
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose to-transparent"></div>
      </div>

      <div className="section-padding max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 font-poppins">
            Let's Connect — I'm Open to Work! ✨
          </h2>
          <div className="w-24 h-1 bg-rose rounded-full mx-auto"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Description & Social Links */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <p className="text-xl text-gray-700 leading-relaxed font-poppins mb-8">
                I'm a passionate developer open to exciting opportunities. Let's create something awesome together! 🚀
              </p>
              
              <div className="space-y-4 text-gray-600">
                <p className="flex items-center justify-center lg:justify-start gap-2">
                  <span className="text-green-500">●</span>
                  Open to internships & junior roles
                </p>
                <p className="flex items-center justify-center lg:justify-start gap-2">
                  <span className="text-blue-500">●</span>
                  Available for freelance projects
                </p>
                <p className="flex items-center justify-center lg:justify-start gap-2">
                  <span className="text-purple-500">●</span>
                  Ready to collaborate & learn
                </p>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center lg:justify-start space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 ${social.color}`}
                  title={social.name}
                >
                  <social.icon className="w-6 h-6 text-gray-600 group-hover:text-current transition-colors duration-300" />
                  
                  {/* Tooltip */}
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {social.name}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 relative overflow-hidden">
            {/* Form background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose opacity-5 rounded-full transform translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow opacity-5 rounded-full transform -translate-x-12 translate-y-12"></div>

            <div className="relative z-10">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-rose focus:ring-2 focus:ring-rose/20 transition-all duration-300 font-poppins"
                    />
                  </div>

                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-rose focus:ring-2 focus:ring-rose/20 transition-all duration-300 font-poppins"
                    />
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Tell me a little about your opportunity, role, or just say hi 👋"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-rose focus:ring-2 focus:ring-rose/20 transition-all duration-300 resize-none font-poppins"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-rose hover:bg-rose/90 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed font-poppins"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </span>
                    ) : (
                      'Start the Conversation'
                    )}
                  </Button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 font-poppins">
                    Thank you for reaching out!
                  </h3>
                  <p className="text-gray-600 font-poppins">
                    ✅ I'll get back to you shortly.
                  </p>
                  
                  {/* Confetti effect */}
                  <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-yellow rounded-full animate-bounce opacity-60"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 2}s`,
                          animationDuration: '1.5s'
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
