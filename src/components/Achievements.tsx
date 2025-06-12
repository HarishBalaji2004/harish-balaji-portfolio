
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trophy, FileText, ExternalLink } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: '3rd Prize – Venue Vista Project',
      event: 'TCAD IoT Competition, Kalasalingam',
      date: 'November 2023',
      description: 'Achieved third place in the prestigious IoT competition with an innovative venue management solution.',
      icon: Trophy,
      color: 'bg-gradient-secondary',
      linkText: 'View Proof',
      link: '#'
    },
    {
      title: 'Research Paper Publication',
      event: 'ICCRTEE 2025',
      date: 'Submitted 2025',
      description: '"Stacked Hybrid Model for Crop Yield Prediction" - A comprehensive research on agricultural data science.',
      icon: FileText,
      color: 'bg-gradient-accent',
      linkText: 'View Paper',
      link: '#'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Achievements & Recognition</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Highlights of my academic and competitive achievements
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card 
                key={achievement.title}
                className="group hover:shadow-xl transition-all duration-300 animate-fade-in border-0 overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`h-2 ${achievement.color}`}></div>
                
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 ${achievement.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-200">
                          {achievement.title}
                        </h3>
                        <p className="text-primary font-medium">{achievement.event}</p>
                        <p className="text-gray-500 text-sm">{achievement.date}</p>
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed">
                        {achievement.description}
                      </p>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-4"
                        onClick={() => window.open(achievement.link, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {achievement.linkText}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
