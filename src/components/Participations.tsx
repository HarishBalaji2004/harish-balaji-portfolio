
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Presentation, Heart, ExternalLink } from 'lucide-react';

const Participations = () => {
  const participations = [
    {
      title: 'Postman API Bootcamp',
      organization: 'MLSC (Microsoft Learn Student Community)',
      description: 'Participated in an intensive bootcamp focusing on API development and testing using Postman.',
      icon: Users,
      color: 'bg-gradient-primary',
      link: 'https://drive.google.com/file/d/1NBQuY28j2pPXveGr3avFyHn1Al9-7ovV/view?usp=sharing'
    },
    {
      title: 'IBM ICE Day Poster Presentation',
      organization: 'IBM - 2nd Year Project',
      description: 'Presented innovative project ideas and technical solutions at IBM Innovation and Collaboration Event.',
      icon: Presentation,
      color: 'bg-gradient-secondary',
      link: null
    }
  ];

  const clubs = [
    { name: 'YRC (Youth Red Cross)', icon: Heart, color: 'text-red-600' },
    { name: 'Tamil Mandram', icon: Users, color: 'text-orange-600' },
    { name: 'Photography Club', icon: Users, color: 'text-purple-600' },
    { name: 'MLSC', icon: Users, color: 'text-blue-600' },
    { name: 'GFG (GeeksforGeeks)', icon: Users, color: 'text-green-600' }
  ];

  return (
    <section id="participations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Participations & Activities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Active participation in workshops, events, and student organizations
          </p>
        </div>

        {/* Events & Workshops */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Events & Workshops</h3>
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {participations.map((participation, index) => {
              const IconComponent = participation.icon;
              return (
                <Card 
                  key={participation.title}
                  className="group hover:shadow-xl transition-all duration-300 animate-fade-in border-0 overflow-hidden"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`h-2 ${participation.color}`}></div>
                  
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className={`w-12 h-12 ${participation.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      
                      <div className="flex-1 space-y-3">
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-200">
                            {participation.title}
                          </h4>
                          <p className="text-primary font-medium">{participation.organization}</p>
                        </div>
                        
                        <p className="text-gray-600 leading-relaxed">
                          {participation.description}
                        </p>
                        
                        {participation.link && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-4"
                            onClick={() => window.open(participation.link, '_blank')}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Proof
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Clubs & Organizations */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Club Memberships</h3>
          <Card className="max-w-4xl mx-auto hover:shadow-lg transition-shadow duration-300 animate-fade-in">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Active Member</h4>
                <p className="text-gray-600">Engaged in various student organizations and clubs</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {clubs.map((club, index) => {
                  const IconComponent = club.icon;
                  return (
                    <div 
                      key={club.name}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                    >
                      <IconComponent className={`w-5 h-5 ${club.color}`} />
                      <span className="font-medium text-gray-900">{club.name}</span>
                    </div>
                  );
                })}
              </div>
              
              <div className="text-center mt-6">
                <Button
                  variant="outline"
                  onClick={() => window.open('https://drive.google.com/file/d/1G9VQ88DMTbCAK1ZhTPhqL9WU7Y9Ay03K/view?usp=sharing', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Club Participation Proof
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Participations;
