
import React from 'react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="section-padding max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">Let's Work Together</h2>
          <div className="w-20 h-1 bg-rose rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm always excited to collaborate on interesting projects and opportunities. Let's connect!
          </p>
        </div>

        <div className="bg-gradient-to-br from-rose/10 to-yellow/10 rounded-3xl p-12">
          <div className="space-y-8">
            <div className="text-6xl animate-wave">👋</div>
            
            <div>
              <h3 className="text-2xl font-semibold text-navy mb-4">Ready to start a conversation?</h3>
              <p className="text-gray-600 mb-8">
                Whether you have a project in mind or just want to chat about technology, I'd love to hear from you.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-rose hover:bg-rose/90 text-white px-8 py-3 rounded-2xl font-medium text-lg">
                Send Email
              </Button>
              <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white px-8 py-3 rounded-2xl font-medium text-lg">
                Schedule Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
