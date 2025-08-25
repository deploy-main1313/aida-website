import { Star, Moon, Sun } from 'lucide-react';

export function Navigation() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Star className="h-8 w-8 text-pink-400 cosmic-twinkle" />
            <span className="text-xl text-white" style={{ fontFamily: "'Cinzel', serif" }}>Аіда</span>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-300 hover:text-pink-400 transition-colors duration-200"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Головна
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-300 hover:text-pink-400 transition-colors duration-200"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Послуги
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-pink-400 transition-colors duration-200"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Про мене
            </button>
            <button
              onClick={() => scrollToSection('tools')}
              className="text-gray-300 hover:text-pink-400 transition-colors duration-200"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Інструменти
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="text-gray-300 hover:text-pink-400 transition-colors duration-200"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Відгуки
            </button>
            <button
              onClick={() => scrollToSection('qa')}
              className="text-gray-300 hover:text-pink-400 transition-colors duration-200"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Q&A
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-pink-400 transition-colors duration-200"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Контакти
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button className="text-gray-300 hover:text-pink-400 transition-colors">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
          <div className="hidden md:flex items-center space-x-2">
            <Moon className="h-5 w-5 text-purple-400 cosmic-twinkle" />
            <Sun className="h-5 w-5 text-pink-400 cosmic-twinkle" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </nav>
  );
}