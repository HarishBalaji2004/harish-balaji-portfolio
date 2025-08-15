
import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'arunkumars97462@gmail.com',
      link: 'mailto:arunkumars97462@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 80151 30984',
      link: 'tel:+918015130984'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/arunkumar-s-8388a3252',
      link: 'https://linkedin.com/in/arunkumar-s-8388a3252'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/ARUNKUMAR0984',
      link: 'https://github.com/ARUNKUMAR0984'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600">
            Feel free to reach out to me via any of the platforms below!
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="grid gap-8">
            {contactInfo.map((contact) => {
              const IconComponent = contact.icon;
              return (
                <div key={contact.label} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
                      {contact.label}
                    </p>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
