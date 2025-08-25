import {
  ChevronDown,
  ChevronUp,
  Edit3,
  Save,
  X,
  Plus,
} from "lucide-react";
import { useState } from "react";

interface QAItem {
  id: number;
  question: string;
  answer: string;
}

export function QASection() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [editingItem, setEditingItem] = useState<number | null>(
    null,
  );
  const [qaItems, setQaItems] = useState<QAItem[]>([
    {
      id: 1,
      question: "Що я можу дізнатись з допомогою матриці долі?",
      answer: `Матриця долі включає в себе велику кількість аспектів та деталей, що допоможуть вам проаналізувати себе:
      
1. Вашу зону комфорта, те, що допоможе вам реалізуватись в соціумі та дарує зону комфорту
2. Вашу візитку, те, як вас бачать інші люди та які ваші сильні сторони помітні оточуючим
3. Таланти, що передані вам вищими силами
4. Таланти, що передані вам від жіночого роду вашої сім'ї
5. Таланти, що передані вам від чоловічого роду вашої сім'ї
6. Яка карма передалась вам з минулого життя (Ваші дії та вчинки в минулому житті мають наслідки у вигляді карми, яку ви обов'язково маєте пропрацювати в цьому житті)
7. Карма жіночого роду, що впливає на вас
8. Карма чоловічого роду, що впливає на вас
9. Матеріальна карма + Здоров'я
10. Як збільшити фінанси, що може їх зменьшувати та через що вам найкраще за все реалізуватись
11. Яким є для вас ваш ідеальний партнер, та якими в майбутньому можуть стати проблеми в стосунках
12. Бажання вашого серця, до яких ви все життя будете тягнутись`,
    },
    {
      id: 2,
      question: "А це працює?",
      answer:
        "Так, нумерологія побудована на вашій особистій даті народження, тож інформація, яка буде в матриці працюватиме і буде відповідати дійсності. По крайній мірі я жодного разу не чула, аби розбір матриці долі не був правдивим, ні на власній практиці, ні на практиці інших.",
    },
    {
      id: 3,
      question: "Що від мене потрібно?",
      answer:
        "Від вас потрібна тільки ваша повна дата народження: день, місяць та рік.",
    },
    {
      id: 4,
      question: "Який час очікування?",
      answer:
        "В середньому, на повний розбір мені потрібен буде тиждень. Розбір однієї - декількох зон залежитиме від наявності замовлень, але в середньому 3-5 днів.",
    },
    {
      id: 5,
      question: "Який формат розбору матриці?",
      answer:
        "Матриця надсилається вам в телеграм або інший зручний застосунок у PDF форматі.",
    },
    {
      id: 6,
      question: "Який обсяг інформації?",
      answer:
        "Повний розбір матриці долі починається з 80 сторінок А4 і вище, розбір декількох зон варіюється від 10 до 40 сторінок А4.",
    },
  ]);

  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");
  const [editingQuestion, setEditingQuestion] = useState("");
  const [editingAnswer, setEditingAnswer] = useState("");

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id],
    );
  };

  const startEditing = (item: QAItem) => {
    setEditingItem(item.id);
    setEditingQuestion(item.question);
    setEditingAnswer(item.answer);
  };

  const saveEdit = () => {
    if (editingItem) {
      setQaItems((prev) =>
        prev.map((item) =>
          item.id === editingItem
            ? {
                ...item,
                question: editingQuestion,
                answer: editingAnswer,
              }
            : item,
        ),
      );
      setEditingItem(null);
      setEditingQuestion("");
      setEditingAnswer("");
    }
  };

  const cancelEdit = () => {
    setEditingItem(null);
    setEditingQuestion("");
    setEditingAnswer("");
  };

  const addNewItem = () => {
    if (newQuestion.trim() && newAnswer.trim()) {
      const newItem: QAItem = {
        id: Math.max(...qaItems.map((item) => item.id)) + 1,
        question: newQuestion.trim(),
        answer: newAnswer.trim(),
      };
      setQaItems((prev) => [...prev, newItem]);
      setNewQuestion("");
      setNewAnswer("");
    }
  };

  const deleteItem = (id: number) => {
    setQaItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <section id="qa" className="py-24 px-4 relative">
      {/* Background cosmic effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/3 w-3 h-3 bg-violet-400/40 rounded-full cosmic-twinkle" />
        <div
          className="absolute bottom-20 right-1/3 w-2 h-2 bg-pink-400/40 rounded-full cosmic-twinkle"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-2/3 left-10 w-4 h-4 bg-purple-400/40 rounded-full cosmic-twinkle"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-20 scroll-animate">
          <div className="flex items-center justify-center gap-4 mb-8">
            <h2
              className="text-5xl md:text-7xl pink-purple-gradient tracking-wider"
              style={{
                fontFamily: "'Cinzel', serif",
                textShadow: "0 0 30px rgba(236, 72, 153, 0.3)",
              }}
            >
              Часті питання
            </h2>
            <button
              onClick={() => setIsEditMode(!isEditMode)}
              className={`px-4 py-2 rounded-full border-2 transition-all duration-300 ${
                isEditMode
                  ? "border-pink-400 text-pink-400 bg-pink-400/10"
                  : "border-gray-600 text-gray-400 hover:border-pink-400 hover:text-pink-400"
              }`}
            >
              <Edit3 className="h-5 w-5" />
            </button>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mb-8 rounded-full" />
          <p
            className="text-xl text-gray-300 leading-relaxed"
            style={{
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Відповіді на найчастіші запитання про мої послуги
          </p>
        </div>

        {/* Add new question form (visible in edit mode) */}
        {isEditMode && (
          <div className="mb-12 scroll-animate bg-gray-800/40 backdrop-blur-md border border-pink-500/30 rounded-3xl p-8">
            <h3
              className="text-xl mb-6 text-pink-400"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Додати нове питання
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Введіть питання"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors"
              />
              <textarea
                placeholder="Введіть відповідь"
                value={newAnswer}
                onChange={(e) => setNewAnswer(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors resize-none"
              />
              <button
                onClick={addNewItem}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <Plus className="h-5 w-5" />
                Додати питання
              </button>
            </div>
          </div>
        )}

        {/* Q&A Items */}
        <div className="space-y-6">
          {qaItems.map((item, index) => (
            <div
              key={item.id}
              className="group scroll-animate bg-gray-800/40 backdrop-blur-md border border-gray-700/50 rounded-3xl overflow-hidden hover:border-pink-500/50 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {editingItem === item.id ? (
                // Editing mode
                <div className="p-8">
                  <div className="space-y-4">
                    <input
                      type="text"
                      value={editingQuestion}
                      onChange={(e) =>
                        setEditingQuestion(e.target.value)
                      }
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-2xl text-white focus:outline-none focus:border-pink-500 transition-colors"
                    />
                    <textarea
                      value={editingAnswer}
                      onChange={(e) =>
                        setEditingAnswer(e.target.value)
                      }
                      rows={8}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-2xl text-white focus:outline-none focus:border-pink-500 transition-colors resize-none"
                    />
                    <div className="flex gap-3">
                      <button
                        onClick={saveEdit}
                        className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors"
                      >
                        <Save className="h-4 w-4" />
                        Зберегти
                      </button>
                      <button
                        onClick={cancelEdit}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-xl hover:bg-gray-700 transition-colors"
                      >
                        <X className="h-4 w-4" />
                        Скасувати
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                // Display mode - Fixed: No nested buttons
                <>
                  {/* Header with edit controls separated from toggle button */}
                  <div className="flex items-center justify-between px-8 py-6">
                    {/* Question title - clickable area */}
                    <div
                      onClick={() => toggleItem(item.id)}
                      className="flex-1 cursor-pointer hover:bg-gray-700/10 transition-colors duration-300 rounded-lg -mx-2 px-2 py-2"
                    >
                      <h3
                        className="text-lg text-white group-hover:text-pink-300 transition-colors duration-300"
                        style={{
                          fontFamily: "'Cinzel', serif",
                        }}
                      >
                        {item.question}
                      </h3>
                    </div>

                    {/* Controls section */}
                    <div className="flex items-center gap-3 ml-4">
                      {/* Edit mode buttons */}
                      {isEditMode && (
                        <>
                          <button
                            onClick={() => startEditing(item)}
                            className="p-2 text-gray-400 hover:text-pink-400 transition-colors rounded-lg hover:bg-gray-700/30"
                          >
                            <Edit3 className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => deleteItem(item.id)}
                            className="p-2 text-gray-400 hover:text-red-400 transition-colors rounded-lg hover:bg-gray-700/30"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </>
                      )}

                      {/* Toggle button */}
                      <button
                        onClick={() => toggleItem(item.id)}
                        className="p-2 rounded-lg hover:bg-gray-700/30 transition-colors"
                      >
                        {openItems.includes(item.id) ? (
                          <ChevronUp className="h-6 w-6 text-pink-400" />
                        ) : (
                          <ChevronDown className="h-6 w-6 text-gray-400 group-hover:text-pink-400 transition-colors duration-300" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Answer content */}
                  {openItems.includes(item.id) && (
                    <div className="px-8 pb-8">
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-pink-400/30 to-transparent mb-6" />
                      <div
                        className="text-gray-300 leading-relaxed whitespace-pre-line"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        {item.answer}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 scroll-animate">
          <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-3xl p-8 backdrop-blur-sm hover:border-pink-400/30 transition-colors duration-300">
            <h3
              className="text-2xl mb-4 pink-purple-gradient"
              style={{
                fontFamily: "'Cinzel', serif",
              }}
            >
              Не знайшли відповідь на своє питання?
            </h3>
            <p
              className="text-gray-300 mb-6"
              style={{
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Напишіть мені особисто, і я з радістю відповім на
              всі ваші запитання
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full hover:shadow-2xl transition-all duration-500 transform hover:scale-105 mystical-glow"
            >
              Задати питання
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}