import { useEffect } from 'react';
import Preloader from '@/components/Preloader';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import VisionMission from '@/components/VisionMission';
import Goals from '@/components/Goals';
import Academics from '@/components/Academics';
import Facilities from '@/components/Facilities';
import Activities from '@/components/Activities';
import Scholarships from '@/components/Scholarships';
import Admissions from '@/components/Admissions';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      section.classList.add('reveal');
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Preloader />
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <VisionMission />
      <Goals />
      <Academics />
      <Facilities />
      <Activities />
      <Scholarships />
      <Admissions />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
