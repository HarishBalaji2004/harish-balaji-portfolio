
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Flutter Development',
      provider: 'Simplilearn',
      date: 'March 2025',
      description: 'Comprehensive certification covering Flutter app development, Dart programming, and mobile UI design.',
      link: '#',
      featured: true
    },
    {
      title: 'Introduction to Flutter',
      provider: 'SkillUp',
      date: 'Completed',
      description: 'Foundational course covering Flutter basics and mobile development fundamentals.',
      link: '#',
      featured: false
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional certifications and continuous learning achievements
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.title}
              className={`group hover:shadow-xl transition-all duration-300 animate-fade-in ${
                cert.featured ? 'border-l-4 border-l-primary' : 'border-l-4 border-l-blue-400'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 ${cert.featured ? 'bg-gradient-primary' : 'bg-blue-400'} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Award className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-200">
                        {cert.title}
                      </h3>
                      <p className={`font-medium ${cert.featured ? 'text-primary' : 'text-blue-600'}`}>
                        {cert.provider}
                      </p>
                      <div className="flex items-center text-gray-500 text-sm mt-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{cert.date}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {cert.description}
                    </p>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-4"
                      onClick={() => window.open(cert.link, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Certificate
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 italic">
            Continuously expanding knowledge through additional courses and certifications
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
