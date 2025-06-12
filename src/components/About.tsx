
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, GraduationCap, Calendar, Languages } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get to know more about my background, education, and aspirations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Personal Info */}
          <div className="animate-fade-in space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">R. Harish Balaji</h3>
              <div className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-2 text-primary" />
                <span>Paramakudi, Tamil Nadu</span>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                Final-year B.Tech Computer Science (Data Science) student seeking internship or entry-level opportunities. 
                Passionate about turning academic knowledge into real-world projects. Eager to learn, adapt, and contribute 
                to team goals in professional environments.
              </p>
            </div>

            <div className="flex items-center text-gray-600">
              <Languages className="w-5 h-5 mr-2 text-primary" />
              <span><strong>Languages:</strong> English, Tamil</span>
            </div>
          </div>

          {/* Right side - Education */}
          <div className="animate-slide-in-right space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Educational Background</h3>
            
            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900">B.Tech in Computer Science Engineering</h4>
                    <p className="text-primary font-medium">Kalasalingam Academy of Research and Education</p>
                    <div className="flex items-center text-gray-600 mt-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>2022 – 2026</span>
                    </div>
                    <div className="mt-2">
                      <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                        CGPA: 7.99
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-400 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900">Higher Secondary Education</h4>
                    <p className="text-blue-600 font-medium">Ayira Vaisya HSS, Paramakudi</p>
                    <div className="flex items-center text-gray-600 mt-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>2022</span>
                    </div>
                    <div className="mt-2">
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                        79.3%
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
