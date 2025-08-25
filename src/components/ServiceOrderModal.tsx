import { X, Check, CreditCard } from 'lucide-react';
import { useState } from 'react';

interface ServiceOption {
  name: string;
  price: string;
}

interface ServiceOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    category: string;
    description: string;
    options: ServiceOption[];
    color: string;
  } | null;
}

export function ServiceOrderModal({ isOpen, onClose, service }: ServiceOrderModalProps) {
  const [selectedOption, setSelectedOption] = useState<ServiceOption | null>(null);
  const [customerName, setCustomerName] = useState('');
  const [customerContact, setCustomerContact] = useState('');
  const [customerBirthDate, setCustomerBirthDate] = useState('');

  if (!isOpen || !service) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handlePayment = () => {
    if (!selectedOption || !customerName || !customerContact) {
      alert('Будь ласка, заповніть всі обов\'язкові поля');
      return;
    }
    
    // Here you would integrate with a payment system
    alert(`Замовлення "${selectedOption.name}" на суму ${selectedOption.price} оформлено! Аіда з вами зв'яжеться найближчим часом.`);
    onClose();
    
    // Reset form
    setSelectedOption(null);
    setCustomerName('');
    setCustomerContact('');
    setCustomerBirthDate('');
  };

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleOverlayClick}
    >
      <div className="bg-gray-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-pink-500/30 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white transition-colors z-10"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Header */}
        <div className="p-8 pb-6">
          <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl mb-6 flex items-center justify-center mystical-glow mx-auto`}>
            <div className="w-8 h-8 bg-white rounded-full" />
          </div>
          
          <h2 className="text-3xl text-center mb-4 pink-purple-gradient" style={{
            fontFamily: "'Cinzel', serif"
          }}>
            {service.category}
          </h2>
          
          <p className="text-gray-300 text-center leading-relaxed" style={{
            fontFamily: "'Inter', sans-serif"
          }}>
            {service.description}
          </p>
        </div>

        {/* Service options */}
        <div className="px-8 pb-6">
          <h3 className="text-xl mb-6 text-pink-400" style={{
            fontFamily: "'Cinzel', serif"
          }}>
            Оберіть послугу:
          </h3>
          
          <div className="space-y-4 mb-8">
            {service.options.map((option, index) => (
              <button
                key={index}
                onClick={() => setSelectedOption(option)}
                className={`w-full p-4 rounded-2xl border-2 transition-all duration-300 text-left ${
                  selectedOption?.name === option.name
                    ? 'border-pink-500 bg-pink-500/10'
                    : 'border-gray-600 hover:border-pink-500/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white mb-1" style={{
                      fontFamily: "'Inter', sans-serif"
                    }}>
                      {option.name}
                    </h4>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-pink-400" style={{
                      fontFamily: "'Cinzel', serif"
                    }}>
                      {option.price}
                    </span>
                    
                    {selectedOption?.name === option.name && (
                      <Check className="h-5 w-5 text-pink-400" />
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Customer information form */}
          {selectedOption && (
            <div className="space-y-4 mb-8">
              <h3 className="text-xl text-pink-400" style={{
                fontFamily: "'Cinzel', serif"
              }}>
                Контактна інформація:
              </h3>
              
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Ваше ім'я *"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors"
                  required
                />
                
                <input
                  type="text"
                  placeholder="Телефон або Telegram *"
                  value={customerContact}
                  onChange={(e) => setCustomerContact(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors"
                  required
                />

                {(service.category.includes('Матриця') || service.category.includes('Астрологія')) && (
                  <input
                    type="date"
                    placeholder="Дата народження"
                    value={customerBirthDate}
                    onChange={(e) => setCustomerBirthDate(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors"
                  />
                )}
              </div>
              
              <p className="text-sm text-gray-400" style={{
                fontFamily: "'Inter', sans-serif"
              }}>
                * Обов'язкові поля
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        {selectedOption && (
          <div className="p-8 pt-0">
            <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/30 rounded-2xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-300" style={{
                  fontFamily: "'Inter', sans-serif"
                }}>
                  Обрана послуга:
                </span>
                <span className="text-white" style={{
                  fontFamily: "'Inter', sans-serif"
                }}>
                  {selectedOption.name}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-lg" style={{
                  fontFamily: "'Inter', sans-serif"
                }}>
                  До сплати:
                </span>
                <span className="text-2xl pink-purple-gradient" style={{
                  fontFamily: "'Cinzel', serif"
                }}>
                  {selectedOption.price}
                </span>
              </div>
            </div>
            
            <button
              onClick={handlePayment}
              className="w-full py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 mystical-glow flex items-center justify-center gap-3"
            >
              <CreditCard className="h-5 w-5" />
              <span style={{ fontFamily: "'Inter', sans-serif" }}>Оформити замовлення</span>
            </button>
            
            <p className="text-center text-sm text-gray-400 mt-4" style={{
              fontFamily: "'Inter', sans-serif"
            }}>
              Після оформлення замовлення Аіда зв'яжеться з вами для уточнення деталей та способу оплати
            </p>
          </div>
        )}
      </div>
    </div>
  );
}