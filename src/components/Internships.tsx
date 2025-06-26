
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building, Calendar, Award } from 'lucide-react';

const Internships = () => {
  return (
    <section id="internships" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My internship experience and professional development journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="hover:shadow-xl transition-all duration-300 animate-fade-in border-l-4 border-l-primary">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
                <div className="flex-shrink-0 mb-6 lg:mb-0">
                  <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Web Development Internship – AI Focus</h3>
                    <p className="text-xl text-primary font-medium">Dot Com Infoway (DCI)</p>
                    <div className="flex items-center text-gray-600 mt-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>May – June 2024</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-900">Key Achievements & Learning:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Gained hands-on experience in Python programming and backend development</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Worked extensively with SQL databases and database management</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Developed web applications using Django framework</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Gained experience with XAMPP for local development environment</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Explored AI integration in web development projects</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {['Python', 'SQL', 'Django', 'XAMPP', 'Web Development', 'AI Integration'].map((skill) => (
                      <span
                        key={skill}
                        className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="pt-4">
                    <Button
                      variant="outline"
                      className="inline-flex items-center"
                      onClick={() => window.open('https://drive.google.com/file/d/1gdA8FB8G_eI1gPT4YHLRRonRQ7zo19ru/view?usp=sharing', '_blank')}
                    >
                      <Award className="w-4 h-4 mr-2" />
                      View Certificate
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Internships;
