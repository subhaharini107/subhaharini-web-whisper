
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Console log message on component mount
    console.log("Thanks for visiting Subhaharini's portfolio 👩‍💻 Let's build something awesome!");

    // Cursor blinking animation
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    // Stop typing animation after 3 seconds
    const typingTimeout = setTimeout(() => {
      setIsTyping(false);
    }, 3000);

    return () => {
      clearInterval(cursorInterval);
      clearTimeout(typingTimeout);
    };
  }, []);

  const contactData = {
    email: "subhasenniappan@gmail.com",
    github: "https://github.com/subhaharini04",
    linkedin: "https://linkedin.com/in/subha-harini",
    resume: "[Download CV]",
    status: "🌟 Open to work"
  };

  const handleStartChat = () => {
    window.location.href = `mailto:${contactData.email}?subject=Let's Connect!&body=Hi Subhaharini, I'd love to connect and discuss opportunities!`;
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-navy relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-4xl animate-float opacity-20">💬</div>
      <div className="absolute top-32 right-16 text-3xl animate-float opacity-20" style={{ animationDelay: '1s' }}>💻</div>
      <div className="absolute bottom-32 left-20 text-2xl animate-float opacity-20" style={{ animationDelay: '2s' }}>✨</div>
      <div className="absolute bottom-20 right-10 text-3xl animate-float opacity-20" style={{ animationDelay: '0.5s' }}>🔗</div>

      <div className="section-padding max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-mono">
            Let's Connect Over Code 💬
          </h2>
          <div className="w-20 h-1 bg-rose rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-mono">
            Ready to collaborate on something amazing?
          </p>
        </div>

        {/* Terminal Window */}
        <div className="max-w-4xl mx-auto">
          {/* Terminal Header */}
          <div className="bg-gray-700 rounded-t-lg px-6 py-3 flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex-1 text-center">
              <span className="text-gray-300 text-sm font-mono">subhaharini-portfolio — terminal</span>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="bg-gray-900 rounded-b-lg p-8 font-mono text-sm border border-gray-700">
            {/* Command Line */}
            <div className="mb-6">
              <span className="text-green-400">subhaharini@portfolio:~$</span>
              <span className="text-white ml-2">subhaharini.initConversation()</span>
              {showCursor && <span className="text-white animate-pulse">|</span>}
            </div>

            {/* Output */}
            <div className="space-y-2 mb-8">
              <div className="text-blue-400">→ Opening connection...</div>
              <div className="text-yellow-400">→ I'm available for internships, freelance, and collaboration.</div>
              <div className="text-green-400">→ You can reach me here:</div>
            </div>

            {/* JSON Contact Data */}
            <div className="bg-gray-800 rounded-lg p-6 mb-8 border border-gray-600">
              <div className="text-purple-400 mb-2">Contact Information:</div>
              <pre className="text-gray-300 text-sm overflow-x-auto">
{`{
  "email": "${contactData.email}",
  "github": "${contactData.github}",
  "linkedin": "${contactData.linkedin}",
  "resume": "${contactData.resume}",
  "status": "${contactData.status}"
}`}
              </pre>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleStartChat}
                className="bg-green-600 hover:bg-green-700 text-white font-mono text-base px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 group"
              >
                <span className="mr-2">></span>
                Start Chat
                <span className="ml-2 group-hover:animate-pulse">_</span>
              </Button>
              
              <Button
                variant="outline"
                onClick={() => window.open(contactData.github, '_blank')}
                className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-mono text-base px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <span className="mr-2">></span>
                View GitHub
              </Button>

              <Button
                variant="outline"
                onClick={() => window.open(contactData.linkedin, '_blank')}
                className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-mono text-base px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
              >
                <span className="mr-2">></span>
                LinkedIn
              </Button>
            </div>

            {/* Status Line */}
            <div className="mt-8 pt-6 border-t border-gray-700">
              <div className="flex items-center justify-between text-gray-400 text-xs">
                <span>Connection Status: <span className="text-green-400">Online</span></span>
                <span className="animate-pulse">Ready to collaborate ✨</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dev Chat Window */}
        <div className="fixed bottom-6 right-6 bg-gray-800 rounded-lg shadow-xl border border-gray-600 w-80 hidden lg:block">
          <div className="bg-gray-700 rounded-t-lg px-4 py-2 flex items-center justify-between">
            <span className="text-gray-300 text-sm font-mono">Dev Chat</span>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
          </div>
          <div className="p-4 font-mono text-xs">
            <div className="text-green-400 mb-2">System: Portfolio loaded successfully! 🎉</div>
            <div className="text-blue-400 mb-2">Subhaharini: Thanks for visiting!</div>
            <div className="text-gray-400">Type your message...</div>
            <div className="mt-3 flex">
              <span className="text-gray-500">></span>
              <span className="text-white ml-2 animate-pulse">_</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
