
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Mail, Github, ExternalLink } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full opacity-10 animate-float"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-accent rounded-full opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 bg-gradient-secondary rounded-full opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 rounded-full bg-gradient-primary p-1">
                <img
                  src="/lovable-uploads/a6a6ae20-b4ab-46ed-a937-3ce5a0760213.png"
                  alt="R. Harish Balaji"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">👋</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Hello, I'm{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  R. Harish Balaji
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 font-medium max-w-4xl mx-auto leading-relaxed">
                Final-year Computer Science Student | Passionate Developer | Aspiring Data Scientist
              </p>
            </div>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Final-year B.Tech Computer Science (Data Science) student seeking internship or entry-level opportunities. 
              Passionate about turning academic knowledge into real-world projects.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 text-white border-0 px-8 py-6 text-lg"
                onClick={() => window.open('#', '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                View Resume
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg"
                onClick={() => scrollToSection('projects')}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Explore My Projects
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-6 text-lg"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </Button>
            </div>

            {/* Quick Links */}
            <div className="flex justify-center space-x-6 mt-8">
              <a
                href="https://github.com/HarishBalaji2004"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors duration-200"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="mailto:harishbalajipmk@gmail.com"
                className="text-gray-600 hover:text-primary transition-colors duration-200"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
