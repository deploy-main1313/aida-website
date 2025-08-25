import { Star, Heart, Compass, Eye, BookOpen, Play, Gift, Calendar } from 'lucide-react';
import { useState } from 'react';
import { ServiceOrderModal } from './ServiceOrderModal';

interface ServiceOption {
  name: string;
  price: string;
}

interface Service {
  category: string;
  description: string;
  icon: any;
  color: string;
  options: ServiceOption[];
}

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services: Service[] = [
    {
      category: "Матриця долі",
      description: "Повний аналіз вашого енергетичного коду за датою народження. Включає роботу з кармою, родовими сценаріями, зонами сили й уразливості, темами грошей, кохання та реалізації.",
      icon: Compass,
      color: "from-pink-500 to-rose-600",
      options: [
        { name: "Річний Розбір", price: "500 грн" },
        { name: "Повний розбір", price: "2000 грн" },
        { name: "Найголовніше: вибір 3х сфер на вибір", price: "1000 грн" }
      ]
    },
    {
      category: "Таро-сесії",
      description: "Консультації, які дають ясність у стосунках, кар'єрі, внутрішніх станах. Працюю не на \"вгадування\", а на аналіз варіантів, ризиків і потенціалу дій.",
      icon: Star,
      color: "from-purple-500 to-violet-600",
      options: [
        { name: "1 питання", price: "300 грн" },
        { name: "3 питання", price: "650 грн" },
        { name: "6 питань", price: "900 грн" },
        { name: "8 питань", price: "1100 грн" },
        { name: "10 питань", price: "1300 грн" }
      ]
    },
    {
      category: "Авторські продукти",
      description: "Унікальні розробки для самостійного вивчення та практики, що допоможуть вам глибше зрозуміти себе та свій шлях.",
      icon: Gift,
      color: "from-violet-500 to-fuchsia-600",
      options: [
        { name: "PDF-гід \"Шлях аркану\"", price: "750 грн" },
        { name: "Курс по таро (базовий тариф)", price: "4000 грн" },
        { name: "Курс по таро (з персональним веденням)", price: "6500 грн" },
        { name: "Марафон «10 днів до нової себе»", price: "999 грн" }
      ]
    },
    {
      category: "Астрологія",
      description: "Професійні астрологічні консультації та прогнози для розуміння космічних впливів на ваше життя.",
      icon: Calendar,
      color: "from-fuchsia-500 to-pink-600",
      options: [
        { name: "Соляр", price: "1000 грн" },
        { name: "Особистий прогноз", price: "2000 грн" }
      ]
    }
  ];

  const handleOrderService = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <>
      <section id="services" className="py-24 px-4 relative">
        {/* Background cosmic effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-3 h-3 bg-pink-400/40 rounded-full cosmic-twinkle" />
          <div className="absolute bottom-10 right-1/4 w-2 h-2 bg-purple-400/40 rounded-full cosmic-twinkle" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-10 w-4 h-4 bg-violet-400/40 rounded-full cosmic-twinkle" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 scroll-animate">
            <h2 className="text-5xl md:text-7xl mb-8 pink-purple-gradient tracking-wider" style={{ 
              fontFamily: "'Cinzel', serif",
              textShadow: '0 0 30px rgba(236, 72, 153, 0.3)'
            }}>
              Що я пропоную
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mb-8 rounded-full" />
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed" style={{
              fontFamily: "'Inter', sans-serif"
            }}>
              Комплексний підхід до розуміння вашого призначення через різні духовні практики
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="group scroll-animate bg-gray-800/40 backdrop-blur-md border border-gray-700/50 rounded-3xl p-8 hover:bg-gray-800/60 transition-all duration-500 hover:scale-105 hover:border-pink-500/50 relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  
                  {/* Icon with enhanced styling */}
                  <div className="relative mb-8">
                    <div className={`flex items-center justify-center w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl mb-6 group-hover:scale-110 transition-all duration-500 mystical-glow`}>
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    
                    {/* Floating particles around icon */}
                    <div className="absolute -top-2 -left-2 w-2 h-2 bg-pink-400/60 rounded-full cosmic-twinkle opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute -bottom-2 -right-2 w-1.5 h-1.5 bg-purple-400/60 rounded-full cosmic-twinkle opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDelay: '0.5s' }} />
                  </div>
                  
                  <h3 className="text-2xl mb-4 text-white group-hover:text-pink-300 transition-colors duration-300" style={{
                    fontFamily: "'Cinzel', serif"
                  }}>
                    {service.category}
                  </h3>
                  
                  <p className="text-gray-300 mb-8 leading-relaxed group-hover:text-gray-200 transition-colors duration-300" style={{
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    {service.description}
                  </p>
                  
                  {/* Service options preview */}
                  <div className="space-y-3 mb-8">
                    {service.options.slice(0, 3).map((option, optionIndex) => (
                      <div key={optionIndex} className="flex items-center justify-between p-3 bg-gray-700/20 rounded-2xl border border-gray-600/30 group-hover:border-pink-500/30 transition-all duration-300">
                        <span className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 text-sm" style={{
                          fontFamily: "'Inter', sans-serif"
                        }}>
                          {option.name}
                        </span>
                        <span className="pink-purple-gradient text-sm" style={{
                          fontFamily: "'Cinzel', serif"
                        }}>
                          {option.price}
                        </span>
                      </div>
                    ))}
                    {service.options.length > 3 && (
                      <div className="text-center text-gray-400 text-sm" style={{
                        fontFamily: "'Inter', sans-serif"
                      }}>
                        і ще {service.options.length - 3} опції...
                      </div>
                    )}
                  </div>
                  
                  <button 
                    onClick={() => handleOrderService(service)}
                    className={`w-full py-4 bg-gradient-to-r ${service.color} text-white rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 mystical-glow relative overflow-hidden group/btn`}
                  >
                    <span className="relative z-10 tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>Замовити послугу</span>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Decorative constellation */}
          <div className="flex justify-center mt-20 scroll-animate">
            <div className="flex items-center space-x-4 opacity-30">
              <div className="w-2 h-2 bg-pink-400 rounded-full cosmic-twinkle" />
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent" />
              <Heart className="h-6 w-6 text-pink-400 cosmic-twinkle" />
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
              <div className="w-2 h-2 bg-purple-400 rounded-full cosmic-twinkle" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Order Modal */}
      <ServiceOrderModal
        isOpen={isModalOpen}
        onClose={closeModal}
        service={selectedService}
      />
    </>
  );
}