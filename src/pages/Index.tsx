
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Internships from '../components/Internships';
import Achievements from '../components/Achievements';
import Certifications from '../components/Certifications';
import Participations from '../components/Participations';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Internships />
        <Achievements />
        <Certifications />
        <Participations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
