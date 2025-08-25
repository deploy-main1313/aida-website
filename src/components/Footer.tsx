import { Star, Heart, Instagram, Facebook, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900/80 border-t border-gray-700 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <Star className="h-8 w-8 text-purple-400" />
              <span className="text-2xl text-white">Аіда</span>
            </div>
            <p className="text-gray-300 mb-4">
              Професійні астрологічні та нумерологічні консультації для розкриття вашого потенціалу
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-white text-lg mb-4">Швидкі посилання</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Послуги
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Про мене
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Контакти
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="text-white text-lg mb-4">Контакти</h3>
            <div className="space-y-2 text-gray-300">
              <p>+380 XX XXX XX XX</p>
              <p>aida.astro@example.com</p>
              <p>@aida_astro</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              © 2024 Аіда. Всі права захищені.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Створено з</span>
              <Heart className="h-4 w-4 text-red-400" />
              <span>для духовного розвитку</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}