
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Login System',
      description: 'Secure authentication system built with modern web technologies, featuring session management and user security.',
      techStack: ['Node.js', 'Express', 'Express-session', 'EJS'],
      role: 'Full Stack Developer',
      githubUrl: 'https://github.com/HarishBalaji2004',
      demoUrl: null,
      gradient: 'bg-gradient-primary'
    },
    {
      title: 'To-Do App',
      description: 'A comprehensive task management application with intuitive UI design and local storage capabilities.',
      techStack: ['Flutter', 'Dart', 'Local Storage', 'Figma'],
      role: 'Mobile Developer & UI Designer',
      githubUrl: 'https://github.com/HarishBalaji2004',
      demoUrl: null,
      gradient: 'bg-gradient-secondary'
    },
    {
      title: 'Chatbot Web Application',
      description: 'Interactive chatbot with customizable responses and modern web interface for enhanced user experience.',
      techStack: ['Flask', 'Python', 'JavaScript', 'HTML/CSS'],
      role: 'Full Stack Developer',
      githubUrl: 'https://github.com/HarishBalaji2004',
      demoUrl: null,
      gradient: 'bg-gradient-accent'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore some of my recent work and personal projects that showcase my technical skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="group hover:shadow-xl transition-all duration-300 animate-fade-in border-0 overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`h-2 ${project.gradient}`}></div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
                
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-2">Role:</p>
                  <span className="text-sm text-primary font-medium">{project.role}</span>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-3 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  
                  {project.demoUrl && (
                    <Button
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.demoUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
