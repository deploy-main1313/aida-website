import { useState, useEffect } from 'react';
import { Moon, Star, Calendar, Calculator, Sparkles, Heart, Sun } from 'lucide-react';

// Мок дані для зодіакальних знаків
const zodiacSigns = [
  { name: 'Овен', symbol: '♈', dates: '21.03 - 19.04', element: 'Вогонь', color: '#FF6B6B', description: 'Енергійні лідери, рішучі та амбітні' },
  { name: 'Телець', symbol: '♉', dates: '20.04 - 20.05', element: 'Земля', color: '#4ECDC4', description: 'Стабільні та надійні, цінують комфорт' },
  { name: 'Близнюки', symbol: '♊', dates: '21.05 - 20.06', element: 'Повітря', color: '#45B7D1', description: 'Комунікативні та допитливі, люблять нове' },
  { name: 'Рак', symbol: '♋', dates: '21.06 - 22.07', element: 'Вода', color: '#96CEB4', description: 'Емоційні та турботливі, цінують сім\'ю' },
  { name: 'Лев', symbol: '♌', dates: '23.07 - 22.08', element: 'Вогонь', color: '#FFEAA7', description: 'Яскраві та харизматичні лідери' },
  { name: 'Діва', symbol: '♍', dates: '23.08 - 22.09', element: 'Земля', color: '#DDA0DD', description: 'Практичні перфекціоністи з гострим розумом' },
  { name: 'Терези', symbol: '♎', dates: '23.09 - 22.10', element: 'Повітря', color: '#98D8C8', description: 'Гармонійні дипломати, прагнуть справедливості' },
  { name: 'Скорпіон', symbol: '♏', dates: '23.10 - 21.11', element: 'Вода', color: '#F7DC6F', description: 'Пристрасні та глибокі, мають сильну інтуїцію' },
  { name: 'Стрілець', symbol: '♐', dates: '22.11 - 21.12', element: 'Вогонь', color: '#BB8FCE', description: 'Мандрівники та філософи, оптимісти' },
  { name: 'Козеріг', symbol: '♑', dates: '22.12 - 19.01', element: 'Земля', color: '#85C1E9', description: 'Цілеспрямовані та відповідальні досягальники' },
  { name: 'Водолій', symbol: '♒', dates: '20.01 - 18.02', element: 'Повітря', color: '#F8C471', description: 'Незалежні візіонери, люблять інновації' },
  { name: 'Риби', symbol: '♓', dates: '19.02 - 20.03', element: 'Вода', color: '#82E0AA', description: 'Мрійливі та інтуїтивні, мають багату уяву' }
];

// Мок дані для афірмацій
const dailyAffirmations = [
  "Місяць розповідає історію вашої душі, відкриваючи приховані таланти.",
  "Сьогодні ваша інтуїція особливо сильна. Довірте їй важливі рішення.",
  "Енергія всесвіту підтримує ваші мрії. Зробіть крок назустріч їм.",
  "Ваше серце знає правильний шлях. Прислухайтеся до його підказок.",
  "Зірки вказують на нові можливості. Будьте відкриті до змін.",
  "Сьогодні - ідеальний день для прояву творчості та самовираження.",
  "Ваша внутрішня мудрість сильніша за будь-які зовнішні обставини.",
  "Гармонія між розумом і серцем приведе до правильних рішень.",
  "Всесвіт готує для вас приємні сюрпризи. Залишайтеся відкритими.",
  "Ваша унікальність - це ваша найбільша сила. Цініть себе.",
  "Дозвольте своїй душі танцювати під музикою зірок.",
  "Кожен новий день приносить можливості для духовного росту.",
  "Ваші мрії - це послання від вищих сил. Прислухайтеся до них.",
  "Любов до себе - це ключ до відкриття всіх дверей.",
  "Довірте процесу життя, воно веде вас правильним шляхом.",
  "Ваша аура сьогодні особливо яскрава та привабливa.",
  "Медитація допоможе знайти відповіді на важливі питання.",
  "Зірки шепочуть про грядущі позитивні зміни.",
  "Ваша енергія магнетична - використовуйте це для добрих справ.",
  "Сьогодні ідеальний день для прояву вдячності всесвіту.",
  "Ваші ангели-охоронці особливо близько сьогодні.",
  "Дихайте глибше - кожен вдих наповнює вас космічною енергією.",
  "Ваш внутрішній голос сьогодні звучить особливо ясно.",
  "Місяць благословляє ваші намірення та бажання.",
  "Прислухайтеся до знаків, які посилає вам всесвіт.",
  "Ваша чакрова система сьогодні в ідеальній гармонії.",
  "Дозвольте інтуїції керувати вашими рішеннями сьогодні.",
  "Кристали та мінерали посилюють вашу природню енергію.",
  "Ваші думки творять реальність - думайте позитивно.",
  "Сьогодні особливо сприятливий день для нових починань.",
  "Ваше серце відкрите для отримання любові та підтримки."
];

// Нумерологічні значення
const numerologyMeanings = {
  1: "Лідер, піонер, незалежний. Ви народжені, щоб вести інших та втілювати нові ідеї.",
  2: "Дипломат, миротворець, партнер. Ваша сила в співпраці та гармонії.",
  3: "Творець, комунікатор, оптиміст. Ви приносите радість та натхнення в світ.",
  4: "Будівельник, організатор, працьовитий. Ваша місія - створювати стабільні основи.",
  5: "Мандрівник, новатор, вільний дух. Ви прагнете свободи та нових досвідів.",
  6: "Піклувальник, цілитель, відповідальний. Ваше призначення - турбуватися про інших.",
  7: "Мислитель, дослідник, духовний шукач. Ви прагнете глибокого розуміння життя.",
  8: "Досягальник, лідер бізнесу, матеріаліст. Ваш дар - створювати багатство та успіх.",
  9: "Гуманітарій, альтруїст, мудрець. Ви покликані служити людству.",
  11: "Духовний вчитель, ілюмінатор, візіонер. Ваша місія - надихати та просвітлювати.",
  22: "Майстер-будівельник, візіонер, творець. Ви здатні втілити великі мрії в реальність.",
  33: "Майстер-цілитель, духовний наставник. Ваше призначення - нести світло та зцілення."
};

// Допоміжні функції для валідації та форматування дат
const isValidDate = (date: any): date is Date => {
  return date instanceof Date && !isNaN(date.getTime());
};

const formatDateForInput = (date: Date): string => {
  if (!isValidDate(date)) {
    date = new Date();
  }
  try {
    return date.toISOString().split('T')[0];
  } catch (e) {
    return new Date().toISOString().split('T')[0];
  }
};

const createSafeDate = (dateString: string): Date => {
  if (!dateString) return new Date();
  const date = new Date(dateString);
  return isValidDate(date) ? date : new Date();
};

// Функції для розрахунків
const calculateMoonPhase = (date: Date) => {
  if (!isValidDate(date)) {
    date = new Date();
  }
  
  const knownNewMoon = new Date('2024-01-11');
  const lunarCycle = 29.53058867;
  
  const daysDiff = (date.getTime() - knownNewMoon.getTime()) / (1000 * 60 * 60 * 24);
  const phase = ((daysDiff % lunarCycle) + lunarCycle) % lunarCycle;
  
  const phasePercent = Math.max(0, Math.min(100, Math.round((phase / lunarCycle) * 100)));
  
  if (phase < 1.84566) return { name: 'Новий місяць', percent: phasePercent, emoji: '🌑', description: 'Час для нових починань та постановки цілей' };
  if (phase < 5.53699) return { name: 'Молодий місяць', percent: phasePercent, emoji: '🌒', description: 'Період росту та накопичення енергії' };
  if (phase < 9.22831) return { name: 'Перша чверть', percent: phasePercent, emoji: '🌓', description: 'Час для прийняття важливих рішень' };
  if (phase < 12.91963) return { name: 'Зростаючий місяць', percent: phasePercent, emoji: '🌔', description: 'Період максимальної продуктивності та дій' };
  if (phase < 16.61096) return { name: 'Повний місяць', percent: phasePercent, emoji: '🌕', description: 'Пік енергії, час для завершення справ' };
  if (phase < 20.30228) return { name: 'Спадаючий місяць', percent: phasePercent, emoji: '🌖', description: 'Період відпускання та очищення' };
  if (phase < 23.99361) return { name: 'Остання чверть', percent: phasePercent, emoji: '🌗', description: 'Час для рефлексії та підведення підсумків' };
  return { name: 'Старий місяць', percent: phasePercent, emoji: '🌘', description: 'Період підготовки до нового циклу' };
};

const calculateLifePath = (birthDate: Date) => {
  if (!isValidDate(birthDate)) return null;
  
  const day = birthDate.getDate();
  const month = birthDate.getMonth() + 1;
  const year = birthDate.getFullYear();
  
  const sum = day + month + year;
  const digits = sum.toString().split('').map(Number);
  
  let result = digits.reduce((acc, digit) => acc + digit, 0);
  
  while (result > 9 && result !== 11 && result !== 22 && result !== 33) {
    result = result.toString().split('').map(Number).reduce((acc, digit) => acc + digit, 0);
  }
  
  return result;
};

const getZodiacSign = (birthDate: Date) => {
  if (!isValidDate(birthDate)) return null;
  
  const month = birthDate.getMonth() + 1;
  const day = birthDate.getDate();
  
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return zodiacSigns[0];
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return zodiacSigns[1];
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return zodiacSigns[2];
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return zodiacSigns[3];
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return zodiacSigns[4];
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return zodiacSigns[5];
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return zodiacSigns[6];
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return zodiacSigns[7];
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return zodiacSigns[8];
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return zodiacSigns[9];
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return zodiacSigns[10];
  return zodiacSigns[11];
};

// Групування знаків по стихіях
const getSignsByElement = () => {
  const elements = {
    'Вогонь': zodiacSigns.filter(sign => sign.element === 'Вогонь'),
    'Земля': zodiacSigns.filter(sign => sign.element === 'Земля'),
    'Повітря': zodiacSigns.filter(sign => sign.element === 'Повітря'),
    'Вода': zodiacSigns.filter(sign => sign.element === 'Вода')
  };
  return elements;
};

export function InteractiveToolsSection() {
  const [activeTab, setActiveTab] = useState('moon');
  const [selectedDate, setSelectedDate] = useState(() => new Date());
  const [birthDate, setBirthDate] = useState('');

  // Safely handle date changes
  const handleDateChange = (dateString: string) => {
    const newDate = createSafeDate(dateString);
    setSelectedDate(newDate);
  };

  const handleBirthDateChange = (dateString: string) => {
    setBirthDate(dateString);
  };

  const moonPhase = calculateMoonPhase(selectedDate);
  const todayAffirmation = dailyAffirmations[Math.abs(selectedDate.getDate()) % dailyAffirmations.length];
  
  const lifePath = birthDate ? calculateLifePath(createSafeDate(birthDate)) : null;
  const zodiacSign = birthDate ? getZodiacSign(createSafeDate(birthDate)) : null;

  const signsByElement = getSignsByElement();
  
  const elementColors = {
    'Вогонь': { bg: 'from-red-500/20 to-orange-500/20', border: 'border-red-500/30', text: 'text-red-400' },
    'Земля': { bg: 'from-green-500/20 to-emerald-500/20', border: 'border-green-500/30', text: 'text-green-400' },
    'Повітря': { bg: 'from-blue-500/20 to-sky-500/20', border: 'border-blue-500/30', text: 'text-blue-400' },
    'Вода': { bg: 'from-cyan-500/20 to-teal-500/20', border: 'border-cyan-500/30', text: 'text-cyan-400' }
  };

  const tabs = [
    {
      id: 'moon',
      title: 'Фази місяця',
      icon: Moon,
      color: 'blue'
    },
    {
      id: 'numerology',
      title: 'Нумерологія',
      icon: Calculator,
      color: 'purple'
    },
    {
      id: 'zodiac',
      title: 'Зодіак',
      icon: Star,
      color: 'pink'
    },
    {
      id: 'wisdom',
      title: 'Мудрість дня',
      icon: Sparkles,
      color: 'amber'
    }
  ];

  return (
    <section id="tools" className="py-24 px-4 relative">
      {/* Background cosmic effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-3 h-3 bg-blue-400/40 rounded-full cosmic-twinkle" />
        <div className="absolute bottom-20 right-1/4 w-2 h-2 bg-purple-400/40 rounded-full cosmic-twinkle" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-10 w-4 h-4 bg-pink-400/40 rounded-full cosmic-twinkle" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20 scroll-animate">
          <h2 className="text-5xl md:text-7xl mb-8 pink-purple-gradient tracking-wider" style={{ 
            fontFamily: "'Cinzel', serif",
            textShadow: '0 0 30px rgba(236, 72, 153, 0.3)'
          }}>
            Астрологічні інструменти
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mb-8 rounded-full" />
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed" style={{
            fontFamily: "'Inter', sans-serif"
          }}>
            Досліджуй свій космічний профіль за допомогою наших інтерактивних інструментів
          </p>
        </div>

        {/* Main container */}
        <div className="bg-gray-800/40 backdrop-blur-md border border-gray-700/50 rounded-3xl overflow-hidden hover:border-pink-500/50 transition-all duration-500 scroll-animate">
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap border-b border-gray-700/30">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              const isActive = activeTab === tab.id;
              
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 min-w-0 px-6 py-6 flex items-center justify-center gap-3 text-center transition-all duration-300 ${
                    isActive
                      ? `${tab.color === 'blue' ? 'bg-blue-500/20 text-blue-400 border-b-2 border-blue-500' :
                         tab.color === 'purple' ? 'bg-purple-500/20 text-purple-400 border-b-2 border-purple-500' :
                         tab.color === 'pink' ? 'bg-pink-500/20 text-pink-400 border-b-2 border-pink-500' :
                         'bg-amber-500/20 text-amber-400 border-b-2 border-amber-500'}`
                      : 'text-gray-400 hover:text-gray-300 hover:bg-gray-700/30'
                  }`}
                >
                  <IconComponent className={`h-6 w-6 ${isActive ? 'cosmic-twinkle' : ''}`} />
                  <span className="hidden sm:inline" style={{ fontFamily: "'Cinzel', serif" }}>
                    {tab.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="p-8">
            
            {/* Фази місяця */}
            {activeTab === 'moon' && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  {/* Date picker */}
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm text-gray-400 mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Оберіть дату для розрахунку
                      </label>
                      <input
                        type="date"
                        value={formatDateForInput(selectedDate)}
                        onChange={(e) => handleDateChange(e.target.value)}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-2xl text-white focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                    
                    <div className="bg-gray-700/30 rounded-2xl p-6 border border-blue-500/30">
                      <h4 className="text-xl text-blue-400 mb-4" style={{ fontFamily: "'Cinzel', serif" }}>
                        Поточна фаза місяця
                      </h4>
                      <div className="text-center">
                        <div className="text-6xl mb-4">{moonPhase.emoji}</div>
                        <h3 className="text-2xl text-blue-300 mb-2">{moonPhase.name}</h3>
                        <p className="text-gray-300 mb-4">{moonPhase.description}</p>
                        <div className="text-lg text-blue-400">Освітленість: {moonPhase.percent}%</div>
                        
                        {/* Progress bar */}
                        <div className="w-full bg-gray-600 rounded-full h-4 mt-4 overflow-hidden">
                          <div 
                            className="bg-gradient-to-r from-blue-400 to-cyan-400 h-4 rounded-full transition-all duration-1000 mystical-glow"
                            style={{ width: `${moonPhase.percent}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Moon phases visualization */}
                  <div className="space-y-6">
                    <h4 className="text-lg text-blue-400 text-center" style={{ fontFamily: "'Cinzel', serif" }}>
                      Цикл місячних фаз
                    </h4>
                    <div className="grid grid-cols-4 gap-4">
                      {[
                        { phase: '🌑', name: 'Новий', active: moonPhase.emoji === '🌑' },
                        { phase: '🌒', name: 'Молодий', active: moonPhase.emoji === '🌒' },
                        { phase: '🌓', name: 'Перша чверть', active: moonPhase.emoji === '🌓' },
                        { phase: '🌔', name: 'Зростаючий', active: moonPhase.emoji === '🌔' },
                        { phase: '🌕', name: 'Повний', active: moonPhase.emoji === '🌕' },
                        { phase: '🌖', name: 'Спадаючий', active: moonPhase.emoji === '🌖' },
                        { phase: '🌗', name: 'Остання чверть', active: moonPhase.emoji === '🌗' },
                        { phase: '🌘', name: 'Старий', active: moonPhase.emoji === '🌘' }
                      ].map((item, index) => (
                        <div
                          key={index}
                          className={`text-center p-3 rounded-2xl transition-all duration-300 ${
                            item.active ? 'bg-blue-500/30 scale-110 mystical-glow' : 'bg-gray-700/20'
                          }`}
                        >
                          <div className="text-3xl mb-2">{item.phase}</div>
                          <div className="text-xs text-gray-400">{item.name}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Нумерологія */}
            {activeTab === 'numerology' && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  {/* Birth date input */}
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm text-gray-400 mb-3">
                        Дата народження для розрахунку
                      </label>
                      <input
                        type="date"
                        value={birthDate}
                        onChange={(e) => handleBirthDateChange(e.target.value)}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-2xl text-white focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>
                    
                    {lifePath && (
                      <div className="bg-gray-700/30 rounded-2xl p-6 border border-purple-500/30">
                        <h4 className="text-xl text-purple-400 mb-4" style={{ fontFamily: "'Cinzel', serif" }}>
                          Число життєвого шляху: {lifePath}
                        </h4>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          {numerologyMeanings[lifePath as keyof typeof numerologyMeanings]}
                        </p>
                        <div className="grid grid-cols-6 gap-2">
                          {[1,2,3,4,5,6,7,8,9,11,22,33].map(num => (
                            <div
                              key={num}
                              className={`aspect-square rounded-full flex items-center justify-center text-sm transition-all duration-300 ${
                                lifePath === num 
                                  ? 'bg-purple-500 text-white mystical-glow scale-125' 
                                  : 'bg-gray-600/50 text-gray-400'
                              }`}
                            >
                              {num}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Zodiac sign result */}
                  {zodiacSign && (
                    <div className="space-y-6">
                      <div className="bg-gray-700/30 rounded-2xl p-6 border border-purple-500/30">
                        <h4 className="text-lg text-purple-400 mb-4" style={{ fontFamily: "'Cinzel', serif" }}>
                          Ваш знак зодіаку
                        </h4>
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-4xl" style={{ color: zodiacSign.color }}>
                            {zodiacSign.symbol}
                          </span>
                          <div>
                            <p className="text-xl text-white">{zodiacSign.name}</p>
                            <p className="text-sm text-gray-400">{zodiacSign.dates}</p>
                            <p className="text-sm text-purple-300">Стихія: {zodiacSign.element}</p>
                          </div>
                        </div>
                        <p className="text-gray-300 text-sm">
                          {zodiacSign.description}
                        </p>
                      </div>
                      
                      {/* Number visualization */}
                      {lifePath && (
                        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-6 border border-purple-500/20">
                          <h5 className="text-purple-400 mb-3 text-center">Ваше число</h5>
                          <div className="flex justify-center">
                            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-3xl text-white mystical-glow">
                              {lifePath}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Зодіак - тепер показує всі знаки */}
            {activeTab === 'zodiac' && (
              <div className="space-y-8">
                
                {/* Decorative zodiac wheel */}
                <div className="flex justify-center mb-8">
                  <div className="relative w-60 h-60">
                    <div className="absolute inset-0 rounded-full border-2 border-pink-500/20 bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-sm">
                      {zodiacSigns.map((sign, index) => {
                        const angle = (index * 30) - 90;
                        const radian = (angle * Math.PI) / 180;
                        const radius = 90;
                        const x = Math.cos(radian) * radius + 120;
                        const y = Math.sin(radian) * radius + 120;
                        
                        return (
                          <div
                            key={index}
                            className="absolute w-8 h-8 rounded-full flex items-center justify-center text-lg bg-gray-700/30 cosmic-twinkle"
                            style={{
                              left: x - 16,
                              top: y - 16,
                              color: sign.color,
                              animationDelay: `${index * 0.2}s`
                            }}
                          >
                            {sign.symbol}
                          </div>
                        );
                      })}
                    </div>
                    
                    {/* Center element */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mystical-glow">
                        <Sparkles className="h-8 w-8 text-white cosmic-twinkle" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* All zodiac signs organized by elements */}
                <div className="space-y-8">
                  {Object.entries(signsByElement).map(([element, signs]) => (
                    <div key={element} className="space-y-4">
                      <div className="text-center mb-6">
                        <h3 className={`text-2xl mb-2 ${elementColors[element as keyof typeof elementColors].text}`} style={{ fontFamily: "'Cinzel', serif" }}>
                          Стихія {element}
                        </h3>
                        <div className={`w-16 h-1 bg-gradient-to-r ${elementColors[element as keyof typeof elementColors].bg} mx-auto rounded-full`} />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {signs.map((sign, index) => (
                          <div
                            key={sign.name}
                            className={`bg-gradient-to-br ${elementColors[element as keyof typeof elementColors].bg} backdrop-blur-md border ${elementColors[element as keyof typeof elementColors].border} rounded-2xl p-6 hover:scale-105 transition-all duration-300 group`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            <div className="flex items-center gap-4 mb-4">
                              <span 
                                className="text-4xl group-hover:scale-110 transition-transform duration-300" 
                                style={{ color: sign.color }}
                              >
                                {sign.symbol}
                              </span>
                              <div>
                                <h4 className="text-xl text-white group-hover:text-pink-300 transition-colors duration-300" style={{ fontFamily: "'Cinzel', serif" }}>
                                  {sign.name}
                                </h4>
                                <p className="text-sm text-gray-400">{sign.dates}</p>
                              </div>
                            </div>
                            
                            <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                              {sign.description}
                            </p>
                            
                            {/* Decorative particles */}
                            <div className="absolute top-2 right-2 w-1 h-1 bg-white/40 rounded-full cosmic-twinkle opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute bottom-2 left-2 w-0.5 h-0.5 bg-white/30 rounded-full cosmic-twinkle opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDelay: '1s' }} />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Мудрість дня */}
            {activeTab === 'wisdom' && (
              <div className="space-y-8">
                <div className="max-w-2xl mx-auto">
                  <div className="text-center bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-3xl p-8 border border-amber-500/20 mb-8">
                    <div className="text-6xl mb-6">✨</div>
                    <blockquote className="text-2xl text-amber-100 italic mb-6 leading-relaxed" style={{ fontFamily: "'Cinzel', serif" }}>
                      "{todayAffirmation}"
                    </blockquote>
                    <p className="text-amber-400 mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Астрологічна мудрість на {isValidDate(selectedDate) ? selectedDate.toLocaleDateString('uk-UA') : 'сьогодні'}
                    </p>
                    
                    {/* Energy rating */}
                    <div className="mb-6">
                      <p className="text-gray-400 mb-3">Енергетичний рівень дня:</p>
                      <div className="flex justify-center space-x-2">
                        {[1,2,3,4,5].map(star => (
                          <Star 
                            key={star} 
                            className={`h-8 w-8 transition-all duration-300 ${
                              star <= (Math.abs(selectedDate.getDate()) % 5 + 1) 
                                ? 'text-amber-400 fill-current cosmic-twinkle' 
                                : 'text-gray-500'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => setSelectedDate(new Date())}
                      className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-2xl hover:shadow-2xl transition-all duration-300 mystical-glow transform hover:scale-105"
                    >
                      Отримати мудрість сьогодні
                    </button>
                  </div>
                  
                  {/* Daily cosmic influences */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-700/30 rounded-2xl p-6 border border-amber-500/30">
                      <div className="flex items-center gap-3 mb-4">
                        <Sun className="h-6 w-6 text-amber-400" />
                        <h5 className="text-amber-400" style={{ fontFamily: "'Cinzel', serif" }}>
                          Сонячна енергія
                        </h5>
                      </div>
                      <p className="text-gray-300 text-sm">
                        Сьогодні сонце особливо благополучно впливає на творчі проекти та самовираження.
                      </p>
                    </div>
                    
                    <div className="bg-gray-700/30 rounded-2xl p-6 border border-amber-500/30">
                      <div className="flex items-center gap-3 mb-4">
                        <Heart className="h-6 w-6 text-pink-400" />
                        <h5 className="text-pink-400" style={{ fontFamily: "'Cinzel', serif" }}>
                          Енергія кохання
                        </h5>
                      </div>
                      <p className="text-gray-300 text-sm">
                        Ваше серце відкрите для нових емоційних зв'язків та поглиблення існуючих стосунків.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 scroll-animate">
          <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-3xl p-8 backdrop-blur-sm hover:border-pink-400/30 transition-colors duration-300 max-w-2xl mx-auto">
            <h3 className="text-2xl mb-4 pink-purple-gradient" style={{
              fontFamily: "'Cinzel', serif"
            }}>
              Хочете персональний розбір?
            </h3>
            <p className="text-gray-300 mb-6" style={{
              fontFamily: "'Inter', sans-serif"
            }}>
              Ці інструменти дають загальне уявлення. Для детального аналізу замовте консультацію
            </p>
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full hover:shadow-2xl transition-all duration-500 transform hover:scale-105 mystical-glow"
            >
              Замовити консультацію
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}