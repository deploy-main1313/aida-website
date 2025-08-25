import { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { InteractiveToolsSection } from './components/InteractiveToolsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { QASection } from './components/QASection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CosmicBackground } from './components/CosmicBackground';

export default function App() {
  useEffect(() => {
    // Scroll animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all scroll-animate elements
    const animateElements = document.querySelectorAll('.scroll-animate');
    animateElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden">
      {/* Enhanced Pink-Purple Cosmic Background */}
      <CosmicBackground />
      
      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <main>
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <InteractiveToolsSection />
          <ReviewsSection />
          <QASection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}