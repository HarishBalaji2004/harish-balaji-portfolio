
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'harishbalajipmk@gmail.com',
      link: 'mailto:harishbalajipmk@gmail.com',
      color: 'text-red-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9360333025',
      link: 'tel:+919360333025',
      color: 'text-green-600'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'harish-balaji-2b4ba8283',
      link: 'https://linkedin.com/in/harish-balaji-2b4ba8283',
      color: 'text-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'HarishBalaji2004',
      link: 'https://github.com/HarishBalaji2004',
      color: 'text-gray-700'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's connect! Feel free to reach out for opportunities, collaborations, or just to say hello.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="hover:shadow-2xl transition-all duration-300 animate-fade-in border-0">
            <CardContent className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Left side - Contact Info */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h3>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="w-5 h-5 mr-2 text-primary" />
                      <span>Paramakudi, Tamil Nadu, India</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {contactInfo.map((contact, index) => {
                      const IconComponent = contact.icon;
                      return (
                        <div 
                          key={contact.label}
                          className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                        >
                          <div className={`w-10 h-10 ${contact.color} bg-white rounded-lg flex items-center justify-center shadow-sm`}>
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-500">{contact.label}</p>
                            <a
                              href={contact.link}
                              target={contact.label === 'LinkedIn' || contact.label === 'GitHub' ? '_blank' : undefined}
                              rel={contact.label === 'LinkedIn' || contact.label === 'GitHub' ? 'noopener noreferrer' : undefined}
                              className="text-gray-900 hover:text-primary transition-colors duration-200 font-medium"
                            >
                              {contact.value}
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right side - CTA */}
                <div className="flex flex-col justify-center space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Connect?</h3>
                    <p className="text-gray-600 mb-8">
                      I'm always interested in new opportunities and exciting projects. 
                      Let's discuss how we can work together!
                    </p>
                    
                    <div className="space-y-4">
                      <Button
                        size="lg"
                        className="w-full bg-gradient-primary hover:opacity-90 text-white border-0"
                        onClick={() => window.location.href = 'mailto:harishbalajipmk@gmail.com'}
                      >
                        <Mail className="w-5 h-5 mr-2" />
                        Send Email
                      </Button>
                      
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white"
                        onClick={() => window.open('https://linkedin.com/in/harish-balaji-2b4ba8283', '_blank')}
                      >
                        <Linkedin className="w-5 h-5 mr-2" />
                        Connect on LinkedIn
                      </Button>
                    </div>
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

export default Contact;
