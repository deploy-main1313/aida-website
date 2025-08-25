import { Star, Quote } from 'lucide-react';
import { useState } from 'react';

export function ReviewsSection() {
  const [reviews] = useState([
    {
      id: 1,
      name: "Олександра",
      rating: 5,
      text: "Аіда - справжній професіонал! Матриця долі розкрила мені очі на багато аспектів мого життя. Особливо вразила точність у питаннях кохання та кар'єри. Рекомендую від усього серця!",
      service: "Матриця долі - повний розбір",
      date: "2024-02-15"
    },
    {
      id: 2,
      name: "Марія",
      rating: 5,
      text: "Таро-сесія з Аідою стала для мене справжнім відкриттям. Вона не просто \"ворожить\", а дає конкретні поради та варіанти дій. Після консультації відчуваю впевненість у своїх рішеннях.",
      service: "Таро-сесія - 6 питань",
      date: "2024-02-10"
    },
    {
      id: 3,
      name: "Анна",
      rating: 5,
      text: "Курс по таро з персональним веденням перевершив усі мої очікування! Аіда терпляче пояснювала кожну деталь, підтримувала на всіх етапах навчання. Тепер я сама можу працювати з картами!",
      service: "Курс по таро з персональним веденням",
      date: "2024-01-28"
    },
    {
      id: 4,
      name: "Тетяна",
      rating: 5,
      text: "Соляр від Аіди дуже допоміг мені підготуватися до нового життєвого етапу. Все, що було передбачено, збулося з дивовижною точністю. Обов'язково звертатимуся ще!",
      service: "Соляр",
      date: "2024-01-20"
    },
    {
      id: 5,
      name: "Ірина",
      rating: 5,
      text: "Марафон \"10 днів до нової себе\" став для мене справжньою трансформацією. Практики, які пропонує Аіда, дійсно працюють. Відчуваю себе більш цілісною та усвідомленою.",
      service: "Марафон «10 днів до нової себе»",
      date: "2024-01-15"
    },
    {
      id: 6,
      name: "Світлана",
      rating: 5,
      text: "PDF-гід \"Шлях аркану\" - це скарб для всіх, хто цікавиться таро! Матеріал поданий дуже доступно, з практичними прикладами. Користуюся постійно у своїй практиці.",
      service: "PDF-гід \"Шлях аркану\"",
      date: "2024-01-10"
    }
  ]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-pink-400 fill-current' : 'text-gray-500'}`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-24 px-4 relative">
      {/* Background cosmic effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-1/4 w-3 h-3 bg-pink-400/40 rounded-full cosmic-twinkle" />
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-purple-400/40 rounded-full cosmic-twinkle" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 right-10 w-4 h-4 bg-violet-400/40 rounded-full cosmic-twinkle" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 scroll-animate">
          <h2 className="text-5xl md:text-7xl mb-8 pink-purple-gradient tracking-wider" style={{ 
            fontFamily: "'Cinzel', serif",
            textShadow: '0 0 30px rgba(236, 72, 153, 0.3)'
          }}>
            Відгуки клієнтів
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mb-8 rounded-full" />
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed" style={{
            fontFamily: "'Inter', sans-serif"
          }}>
            Що кажуть про мою роботу ті, хто вже отримав консультації
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className="group scroll-animate bg-gray-800/40 backdrop-blur-md border border-gray-700/50 rounded-3xl p-8 hover:bg-gray-800/60 transition-all duration-500 hover:scale-105 hover:border-pink-500/50 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              
              {/* Quote icon */}
              <div className="relative mb-6">
                <Quote className="h-8 w-8 text-pink-400 opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
              </div>

              {/* Review text */}
              <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300" style={{
                fontFamily: "'Inter', sans-serif"
              }}>
                "{review.text}"
              </p>

              {/* Service info */}
              <div className="mb-4 p-3 bg-gray-700/30 rounded-2xl border border-gray-600/30 group-hover:border-pink-500/30 transition-all duration-300">
                <span className="text-sm text-pink-400 group-hover:text-pink-300 transition-colors duration-300" style={{
                  fontFamily: "'Inter', sans-serif"
                }}>
                  Послуга: {review.service}
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4 space-x-1">
                {renderStars(review.rating)}
              </div>

              {/* Client info */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white group-hover:text-pink-300 transition-colors duration-300" style={{
                    fontFamily: "'Cinzel', serif"
                  }}>
                    {review.name}
                  </h4>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300" style={{
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    {new Date(review.date).toLocaleDateString('uk-UA')}
                  </p>
                </div>
              </div>

              {/* Floating particles */}
              <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-pink-400/60 rounded-full cosmic-twinkle opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400/60 rounded-full cosmic-twinkle opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDelay: '1s' }} />
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 scroll-animate">
          <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-3xl p-8 backdrop-blur-sm hover:border-pink-400/30 transition-colors duration-300 max-w-2xl mx-auto">
            <h3 className="text-2xl mb-4 pink-purple-gradient" style={{
              fontFamily: "'Cinzel', serif"
            }}>
              Хочете поділитися своїм досвідом?
            </h3>
            <p className="text-gray-300 mb-6" style={{
              fontFamily: "'Inter', sans-serif"
            }}>
              Ваш відгук допоможе іншим людям знайти свій шлях до гармонії
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full hover:shadow-2xl transition-all duration-500 transform hover:scale-105 mystical-glow"
            >
              Залишити відгук
            </button>
          </div>
        </div>

        {/* Decorative constellation */}
        <div className="flex justify-center mt-20 scroll-animate">
          <div className="flex items-center space-x-6 opacity-40">
            <div className="w-3 h-3 bg-pink-400 rounded-full cosmic-twinkle" />
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent" />
            <Star className="h-6 w-6 text-pink-400 cosmic-twinkle" style={{ animationDelay: '1s' }} />
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
            <div className="w-3 h-3 bg-purple-400 rounded-full cosmic-twinkle" style={{ animationDelay: '2s' }} />
          </div>
        </div>
      </div>
    </section>
  );
}