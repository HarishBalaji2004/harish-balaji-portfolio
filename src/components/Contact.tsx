
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, Linkedin, Github, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
    const body = encodeURIComponent(`Hi Harish,

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

Best regards,
${formData.name}`);
    
    window.location.href = `mailto:harishbalajipmk@gmail.com?subject=${subject}&body=${body}`;
  };

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
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="hover:shadow-2xl transition-all duration-300 animate-fade-in border-0">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left side - Contact Info */}
                <div className="bg-gradient-to-br from-primary/10 to-blue-50 p-8 lg:p-12">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                    </div>
                    
                    <div className="space-y-6">
                      {contactInfo.map((contact, index) => {
                        const IconComponent = contact.icon;
                        return (
                          <div 
                            key={contact.label}
                            className="flex items-center space-x-4"
                          >
                            <div className={`w-12 h-12 ${contact.color} bg-white rounded-full flex items-center justify-center shadow-sm`}>
                              <IconComponent className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">{contact.label}</p>
                              <a
                                href={contact.link}
                                target={contact.label === 'LinkedIn' || contact.label === 'GitHub' ? '_blank' : undefined}
                                rel={contact.label === 'LinkedIn' || contact.label === 'GitHub' ? 'noopener noreferrer' : undefined}
                                className="text-gray-900 hover:text-primary transition-colors duration-200 font-medium text-lg"
                              >
                                {contact.value}
                              </a>
                            </div>
                          </div>
                        );
                      })}
                      
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 text-purple-600 bg-white rounded-full flex items-center justify-center shadow-sm">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Location</p>
                          <p className="text-gray-900 font-medium text-lg">Paramakudi, Tamil Nadu, India</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 text-indigo-600 bg-white rounded-full flex items-center justify-center shadow-sm">
                          <Clock className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Working Hours</p>
                          <p className="text-gray-900 font-medium text-lg">Mon - Fri, 9:00 - 17:00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side - Contact Form */}
                <div className="p-8 lg:p-12">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">Send a Message</h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="name" className="text-gray-700 font-medium">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="mt-2 h-12 border-gray-200 focus:border-primary focus:ring-primary"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="mt-2 h-12 border-gray-200 focus:border-primary focus:ring-primary"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="subject" className="text-gray-700 font-medium">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="mt-2 h-12 border-gray-200 focus:border-primary focus:ring-primary"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="message" className="text-gray-700 font-medium">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={6}
                          className="mt-2 border-gray-200 focus:border-primary focus:ring-primary resize-none"
                          required
                        />
                      </div>
                      
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-primary hover:opacity-90 text-white border-0 h-12 text-lg font-medium"
                      >
                        Send Message
                      </Button>
                    </form>
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
