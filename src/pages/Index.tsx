
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F1F0FB]">
      {/* Навигация */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Heart" className="text-[#9b87f5] h-6 w-6" />
            <span className="text-xl font-semibold">МойПсихолог</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-[#9b87f5] transition-colors">Главная</a>
            <a href="#techniques" className="text-gray-600 hover:text-[#9b87f5] transition-colors">Техники</a>
            <a href="#assistant" className="text-gray-600 hover:text-[#9b87f5] transition-colors">ИИ-ассистент</a>
            <a href="#" className="text-gray-600 hover:text-[#9b87f5] transition-colors">Контакты</a>
          </div>
          <Button className="bg-[#9b87f5] hover:bg-[#7E69AB]">
            Начать
          </Button>
        </div>
      </nav>

      {/* Герой-секция */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Психологическая помощь<br />в одно касание</h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Получите поддержку от наших специалистов и ИИ-ассистента в любое время и в любом месте
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-lg py-6 px-8">
              Поговорить с ассистентом
              <Icon name="MessageSquare" className="ml-2" />
            </Button>
            <Button variant="outline" className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white text-lg py-6 px-8">
              Экспресс-техники
              <Icon name="Zap" className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Секция "Экспресс-помощь" */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Экспресс-помощь</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-[#E5F9E0] rounded-t-lg">
                <CardTitle className="flex items-center text-gray-800">
                  <Icon name="Breath" fallback="Wind" className="mr-2 text-green-600" />
                  Дыхательная техника
                </CardTitle>
                <CardDescription>
                  Быстрый способ успокоиться
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p>Сделайте глубокий вдох на 4 счета, задержите дыхание на 4 счета, выдохните на 6 счетов.</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-[#9b87f5] hover:text-[#7E69AB] hover:bg-[#F1F0FB] w-full justify-start">
                  <Icon name="PlayCircle" className="mr-2" />
                  Начать упражнение
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-[#E5DEFF] rounded-t-lg">
                <CardTitle className="flex items-center text-gray-800">
                  <Icon name="Brain" fallback="Activity" className="mr-2 text-[#9b87f5]" />
                  Техника 5-4-3-2-1
                </CardTitle>
                <CardDescription>
                  Возвращает в настоящий момент
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p>Назовите 5 предметов, которые видите, 4 вещи, которые можете потрогать, 3 звука, которые слышите, 2 запаха и 1 вкус.</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-[#9b87f5] hover:text-[#7E69AB] hover:bg-[#F1F0FB] w-full justify-start">
                  <Icon name="ListChecks" className="mr-2" />
                  Попробовать
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-[#FDE1D3] rounded-t-lg">
                <CardTitle className="flex items-center text-gray-800">
                  <Icon name="Sparkles" fallback="Star" className="mr-2 text-orange-500" />
                  Визуализация
                </CardTitle>
                <CardDescription>
                  Мысленное путешествие
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p>Представьте спокойное место, где вы чувствуете себя в безопасности. Задействуйте все органы чувств.</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-[#9b87f5] hover:text-[#7E69AB] hover:bg-[#F1F0FB] w-full justify-start">
                  <Icon name="Compass" className="mr-2" />
                  Начать визуализацию
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Секция "Техники" */}
      <section id="techniques" className="py-16 bg-[#F1F0FB]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Техники психологической разгрузки</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techniques.map((technique, index) => (
              <Card key={index} className="border-none shadow hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-gray-800">
                    <Icon name={technique.icon} fallback="Sparkles" className="mr-2 text-[#9b87f5]" />
                    {technique.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{technique.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white">
                    Подробнее
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Секция ИИ-ассистент */}
      <section id="assistant" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">ИИ-ассистент для психологической поддержки</h2>
              <p className="text-lg text-gray-600 mb-6">
                Наш ИИ-ассистент всегда готов выслушать вас и предложить поддержку в трудную минуту. Он поможет снять тревогу, справиться со стрессом и направит к дальнейшим ресурсам, если это необходимо.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Icon name="CheckCircle" className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Доступен 24/7 для поддержки в любое время</span>
                </li>
                <li className="flex items-start">
                  <Icon name="CheckCircle" className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Конфиденциальные беседы без осуждения</span>
                </li>
                <li className="flex items-start">
                  <Icon name="CheckCircle" className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Персонализированные рекомендации техник</span>
                </li>
                <li className="flex items-start">
                  <Icon name="CheckCircle" className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Направит к специалисту при необходимости</span>
                </li>
              </ul>
              <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-lg py-6 px-8">
                Начать диалог
                <Icon name="ArrowRight" className="ml-2" />
              </Button>
            </div>
            <div className="lg:w-1/2 mt-10 lg:mt-0">
              <Card className="border-none shadow-xl w-full max-w-lg mx-auto">
                <CardHeader className="bg-[#9b87f5] text-white rounded-t-lg">
                  <CardTitle>Диалог с Ассистентом</CardTitle>
                  <CardDescription className="text-white/80">
                    Получите поддержку прямо сейчас
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="p-4 bg-gray-50 min-h-[300px] flex flex-col">
                    <div className="bg-white p-3 rounded-lg shadow-sm self-start max-w-[80%] mb-4">
                      <p className="text-sm text-gray-700">Здравствуйте! Я ваш ИИ-ассистент по психологической поддержке. Как вы себя чувствуете сегодня?</p>
                    </div>
                    <div className="bg-[#E5DEFF] p-3 rounded-lg shadow-sm self-end max-w-[80%] mb-4">
                      <p className="text-sm text-gray-700">Я чувствую тревогу и напряжение...</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm self-start max-w-[80%]">
                      <p className="text-sm text-gray-700">Я понимаю, что вы испытываете тревогу. Это распространенное чувство. Давайте попробуем несколько техник, которые могут помочь вам прямо сейчас.</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t">
                  <div className="flex w-full gap-2 mt-2">
                    <input 
                      type="text" 
                      placeholder="Напишите сообщение..." 
                      className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b87f5]"
                    />
                    <Button className="bg-[#9b87f5] hover:bg-[#7E69AB]">
                      <Icon name="Send" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Heart" className="text-[#9b87f5] h-6 w-6" />
                <span className="text-xl font-semibold">МойПсихолог</span>
              </div>
              <p className="text-gray-400">
                Платформа психологической поддержки с использованием искусственного интеллекта
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Разделы</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Главная</a></li>
                <li><a href="#techniques" className="text-gray-400 hover:text-white transition-colors">Техники</a></li>
                <li><a href="#assistant" className="text-gray-400 hover:text-white transition-colors">ИИ-ассистент</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">О нас</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Ресурсы</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Статьи</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Видео</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Книги</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Связаться</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Icon name="Mail" className="mr-2 h-4 w-4" />
                  <a href="mailto:info@mojpsiholog.ru" className="text-gray-400 hover:text-white transition-colors">info@mojpsiholog.ru</a>
                </li>
                <li className="flex items-center">
                  <Icon name="Phone" className="mr-2 h-4 w-4" />
                  <a href="tel:+74951234567" className="text-gray-400 hover:text-white transition-colors">+7 (495) 123-45-67</a>
                </li>
              </ul>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Icon name="Facebook" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Icon name="Instagram" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Icon name="Twitter" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} МойПсихолог. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Данные для карточек техник
const techniques = [
  {
    title: "Прогрессивная мышечная релаксация",
    description: "Техника поочередного напряжения и расслабления групп мышц для снятия физического напряжения.",
    icon: "Activity"
  },
  {
    title: "Майндфулнесс медитация",
    description: "Практика осознанности, помогающая сосредоточиться на настоящем моменте без оценки происходящего.",
    icon: "Leaf"
  },
  {
    title: "Журналирование",
    description: "Метод записи своих мыслей и чувств для лучшего понимания своего эмоционального состояния.",
    icon: "BookOpen"
  },
  {
    title: "Техника когнитивной переоценки",
    description: "Изменение негативных мыслей на более реалистичные и позитивные для улучшения настроения.",
    icon: "Brain"
  },
  {
    title: "Метод STOP",
    description: "Техника остановки негативного потока мыслей и переключения внимания на более полезные действия.",
    icon: "HandStop"
  },
  {
    title: "Техника Эмоциональной свободы (EFT)",
    description: "Метод простукивания акупунктурных точек для снятия эмоционального напряжения.",
    icon: "FilmStrip"
  }
];

export default Index;
