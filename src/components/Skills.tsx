
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Lightbulb, Target } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    'Python', 'Core Java', 'Flutter', 'SQL', 'Django', 'Supabase', 
    'Power BI', 'Tableau', 'Excel', 'Git', 'GitHub', 'UI/UX Design (Figma)'
  ];

  const softSkills = [
    'Problem-Solving', 'Collaboration', 'Leadership', 'Communication', 'Adaptability'
  ];

  const interests = [
    'Software Development', 'Mobile Development', 'Backend Development', 
    'Data Analytics', 'Data Visualization', 'UI/UX Design'
  ];

  const SkillBadge = ({ skill, color = 'primary' }: { skill: string; color?: string }) => (
    <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium m-1 transition-transform duration-200 hover:scale-105 ${
      color === 'primary' ? 'bg-blue-100 text-blue-800' :
      color === 'secondary' ? 'bg-green-100 text-green-800' :
      'bg-purple-100 text-purple-800'
    }`}>
      {skill}
    </span>
  );

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, soft skills, and areas of interest
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <Card className="group hover:shadow-xl transition-all duration-300 animate-fade-in">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Technical Skills</h3>
              </div>
              <div className="text-center">
                {technicalSkills.map((skill) => (
                  <SkillBadge key={skill} skill={skill} color="primary" />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card className="group hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Soft Skills</h3>
              </div>
              <div className="text-center">
                {softSkills.map((skill) => (
                  <SkillBadge key={skill} skill={skill} color="secondary" />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Areas of Interest */}
          <Card className="group hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Areas of Interest</h3>
              </div>
              <div className="text-center">
                {interests.map((interest) => (
                  <SkillBadge key={interest} skill={interest} color="accent" />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
