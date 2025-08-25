import { useEffect, useState } from 'react';

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Mystical floating orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-pink-400/60 rounded-full cosmic-float blur-sm" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400/60 rounded-full cosmic-float blur-sm" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-20 w-5 h-5 bg-violet-400/60 rounded-full cosmic-float blur-sm" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-fuchsia-400/60 rounded-full cosmic-float blur-sm" style={{ animationDelay: '3s' }} />
      </div>
      
      <div className={`text-center z-10 max-w-5xl mx-auto px-4 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        
        {/* Enhanced title with cosmic gradient */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl mb-8 pink-purple-gradient tracking-wider" style={{ 
          fontFamily: "'Cinzel', serif",
          textShadow: '0 0 30px rgba(236, 72, 153, 0.5)',
          animation: 'fade-in-up 1s ease-out 0.5s forwards',
          opacity: 0
        }}>
          Астрологія & Нумерологія
        </h1>
        
        {/* Subtitle with typing effect */}
        <p className="text-xl md:text-3xl text-gray-300 mb-12 leading-relaxed opacity-0" style={{
          fontFamily: "'Inter', sans-serif",
          animation: 'fade-in-up 1s ease-out 1s forwards',
          textShadow: '0 0 20px rgba(255, 255, 255, 0.1)'
        }}>
          Відкрийте таємниці всесвіту та знайдіть свій шлях до гармонії
        </p>
        
        {/* Enhanced action buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center opacity-0" style={{
          animation: 'fade-in-up 1s ease-out 1.5s forwards'
        }}>
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-10 py-5 bg-gradient-to-r from-pink-600 via-purple-600 to-violet-600 text-white rounded-full overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-2xl mystical-glow"
            style={{ backgroundSize: '200% 100%' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundPosition = '100% 0';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundPosition = '0% 0';
            }}
          >
            <span className="relative z-10 tracking-wide">Дізнатися більше</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-10 py-5 border-2 border-pink-400 text-pink-400 rounded-full overflow-hidden transition-all duration-500 hover:border-pink-300 hover:text-white hover:shadow-2xl transform hover:scale-105"
          >
            <span className="relative z-10 tracking-wide">Записатися на консультацію</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left" />
          </button>
        </div>

        {/* Mystical quote */}
        <div className="mt-16 opacity-0" style={{
          animation: 'fade-in-up 1s ease-out 2s forwards'
        }}>
          <blockquote className="text-lg text-gray-400 italic max-w-2xl mx-auto" style={{
            fontFamily: "'Cinzel', serif",
            textShadow: '0 0 10px rgba(255, 255, 255, 0.1)'
          }}>
            "Як вгорі, так і внизу, як всередині, так і зовні"
          </blockquote>
          <cite className="text-pink-400 text-sm mt-2 block">— Герметичний принцип</cite>
        </div>
      </div>
      
      {/* Enhanced floating cosmic orbs with pink-purple theme */}
      <div className="absolute top-1/4 left-1/6 w-40 h-40 bg-pink-500/20 rounded-full blur-2xl cosmic-float mystical-glow" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/4 right-1/6 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl cosmic-float mystical-glow-purple" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-violet-500/15 rounded-full blur-xl cosmic-float mystical-glow" style={{ animationDuration: '12s', animationDelay: '4s' }} />
    </section>
  );
}