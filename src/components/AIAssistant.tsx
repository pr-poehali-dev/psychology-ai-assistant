
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

// Заготовленные ответы ассистента на основе ключевых слов
const assistantResponses: Record<string, string[]> = {
  'привет': [
    'Здравствуйте! Чем я могу вам помочь сегодня?',
    'Добрый день! Я ваш ассистент по психологической поддержке. Как ваше настроение?',
    'Привет! Я здесь, чтобы помочь вам. Что вас беспокоит?'
  ],
  'тревога': [
    'Тревога — это естественная реакция на стресс. Попробуйте технику глубокого дыхания: вдох на 4 счета, задержка на 4, выдох на 6.',
    'Для снижения тревоги хорошо подходит прогрессивная мышечная релаксация. Хотите, я расскажу о ней подробнее?',
    'Когда вы испытываете тревогу, попробуйте технику 5-4-3-2-1: назовите 5 вещей, которые вы видите, 4 вещи, которые вы можете потрогать, 3 звука, которые слышите, 2 запаха и 1, что вы чувствуете на вкус.'
  ],
  'стресс': [
    'Стресс накапливается постепенно. Важно регулярно делать перерывы и практиковать техники релаксации. Майндфулнесс медитация может быть очень полезна.',
    'При стрессе помогает физическая активность. Даже 10-минутная прогулка может значительно улучшить ваше состояние.',
    'Для управления стрессом рекомендую вести дневник благодарности. Каждый день записывайте 3 вещи, за которые вы благодарны.'
  ],
  'сон': [
    'Проблемы со сном часто связаны с тревогой. Попробуйте создать регулярный ритуал перед сном и ложиться в одно и то же время.',
    'Для улучшения сна рекомендую технику прогрессивной мышечной релаксации перед сном. Она помогает снять напряжение в теле.',
    'Избегайте экранов за час до сна. Вместо этого попробуйте почитать книгу или послушать спокойную музыку.'
  ],
  'злость': [
    'Злость — это нормальная эмоция. Когда вы злитесь, попробуйте сделать паузу и несколько глубоких вдохов, прежде чем реагировать.',
    'Для управления гневом полезно вести дневник эмоций. Записывайте, что вызвало гнев и как вы на это отреагировали.',
    'Физическая активность — отличный способ высвободить накопившийся гнев. Попробуйте пойти на быструю прогулку или сделать несколько приседаний.'
  ],
  'грусть': [
    'Грусть — естественная часть жизни. Позвольте себе прочувствовать эту эмоцию, не осуждая себя за неё.',
    'Когда вы грустите, попробуйте заняться тем, что обычно приносит вам радость, даже если сейчас не хочется.',
    'Общение с близкими людьми может помочь справиться с грустью. Поделитесь своими чувствами с человеком, которому доверяете.'
  ],
  'упражнение': [
    'Я могу предложить вам технику диафрагмального дыхания. Сядьте удобно, положите руку на живот. Вдыхайте медленно через нос, чувствуя, как рука поднимается. Выдыхайте через рот. Повторите 10 раз.',
    'Попробуйте практику благодарности: каждый вечер записывайте три вещи, за которые вы благодарны. Это помогает сместить фокус с негативных мыслей.',
    'Техника «Безопасное место»: закройте глаза и представьте место, где вы чувствуете себя спокойно и защищенно. Обратите внимание на детали, звуки, запахи. Вы можете мысленно возвращаться в это место в моменты стресса.'
  ],
  'техника': [
    'Для быстрого снятия тревоги рекомендую технику 4-7-8: вдох на 4 счета, задержка дыхания на 7, выдох на 8 счета. Повторите 4 раза.',
    'Техника «Заземление»: найдите 5 предметов определенного цвета, 4 текстуры, 3 звука, 2 запаха и 1 вкус. Это помогает вернуться в настоящий момент.',
    'Попробуйте технику «Сканирование тела»: лягте и постепенно переключайте внимание от стоп к голове, расслабляя каждую часть тела.'
  ],
  'спасибо': [
    'Пожалуйста! Я рад, что смог помочь. Есть ли ещё что-то, что вас интересует?',
    'Не за что! Я здесь, чтобы поддержать вас. Обращайтесь, если понадобится ещё помощь.',
    'Всегда пожалуйста! Надеюсь, наш разговор был полезным. Не стесняйтесь обращаться снова.'
  ],
  'помощь': [
    'Я могу помочь вам разобраться с различными эмоциональными состояниями и предложить техники для самопомощи. Какая конкретно область вас интересует?',
    'Я могу предложить рекомендации по управлению стрессом, тревогой, улучшению сна и многому другому. Что именно вас беспокоит?',
    'Вы можете спросить меня о различных техниках релаксации, майндфулнесс-практиках или других способах психологической самопомощи.'
  ]
};

// Стандартный ответ, если не найдено соответствий
const defaultResponses = [
  'Расскажите подробнее о том, что вы чувствуете?',
  'Я понимаю, что это может быть сложно. Как я могу помочь вам прямо сейчас?',
  'Хотели бы вы узнать о какой-то конкретной технике психологической самопомощи?',
  'Звучит непросто. Давайте вместе поищем решение.'
];

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Здравствуйте! Я — ИИ-ассистент по психологической поддержке. Как я могу помочь вам сегодня?',
      sender: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Прокрутка вниз при появлении новых сообщений
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Функция для генерации ответа ассистента
  const generateResponse = (userMessage: string): string => {
    const lowercaseMessage = userMessage.toLowerCase();
    
    // Проверяем каждое ключевое слово
    for (const [keyword, responses] of Object.entries(assistantResponses)) {
      if (lowercaseMessage.includes(keyword)) {
        const randomIndex = Math.floor(Math.random() * responses.length);
        return responses[randomIndex];
      }
    }
    
    // Если ключевое слово не найдено, возвращаем случайный ответ по умолчанию
    const randomIndex = Math.floor(Math.random() * defaultResponses.length);
    return defaultResponses[randomIndex];
  };

  // Обработчик отправки сообщения
  const handleSendMessage = () => {
    if (input.trim() === '') return;
    
    // Добавляем сообщение пользователя
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    
    // Имитация задержки перед ответом ассистента
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(input),
        sender: 'assistant',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, assistantMessage]);
    }, 800);
  };

  // Форматирование времени сообщения
  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Кнопка-триггер для мобильной версии */}
      <div className="fixed bottom-5 right-5 md:hidden z-30">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button className="rounded-full h-14 w-14 bg-[#9b87f5] hover:bg-[#7E69AB] shadow-lg">
              <Icon name="MessageCircle" size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent className="p-0 sm:max-w-md" side="bottom">
            <Card className="h-[80vh] border-0 rounded-t-xl rounded-b-none shadow-none flex flex-col">
              <CardHeader className="bg-[#9b87f5] text-white rounded-t-xl">
                <CardTitle className="flex items-center">
                  <Icon name="Bot" className="mr-2" />
                  ИИ-Ассистент
                </CardTitle>
                <CardDescription className="text-white/80">
                  Ваш личный помощник по психологической поддержке
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow p-0 overflow-hidden">
                <div className="h-full flex flex-col">
                  <div className="flex-grow overflow-y-auto p-4 bg-gray-50">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div 
                          className={`p-3 rounded-lg max-w-[80%] ${
                            message.sender === 'user' 
                              ? 'bg-[#E5DEFF] text-gray-800' 
                              : 'bg-white text-gray-700 shadow-sm'
                          }`}
                        >
                          <p className="text-sm">{message.text}</p>
                          <p className="text-xs text-gray-500 mt-1 text-right">
                            {formatTime(message.timestamp)}
                          </p>
                        </div>
                      </div>
                    ))}
                    <div ref={messagesEndRef} />
                  </div>
                  <div className="p-4 border-t flex gap-2">
                    <Input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="Напишите сообщение..."
                      className="flex-grow"
                    />
                    <Button 
                      onClick={handleSendMessage} 
                      className="bg-[#9b87f5] hover:bg-[#7E69AB]"
                    >
                      <Icon name="Send" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </SheetContent>
        </Sheet>
      </div>

      {/* Десктопная версия */}
      <div className="hidden md:block fixed bottom-5 right-5 z-30">
        <div className={`transition-all duration-300 ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
          <Card className="w-80 h-[500px] shadow-xl flex flex-col">
            <CardHeader className="bg-[#9b87f5] text-white rounded-t-lg">
              <div className="flex justify-between items-center">
                <CardTitle className="flex items-center text-lg">
                  <Icon name="Bot" className="mr-2" />
                  ИИ-Ассистент
                </CardTitle>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20"
                >
                  <Icon name="Minimize2" size={20} />
                </Button>
              </div>
              <CardDescription className="text-white/80">
                Расскажите, что вас беспокоит
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow p-0 overflow-hidden">
              <div className="h-full flex flex-col">
                <div className="flex-grow overflow-y-auto p-4 bg-gray-50">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div 
                        className={`p-3 rounded-lg max-w-[80%] ${
                          message.sender === 'user' 
                            ? 'bg-[#E5DEFF] text-gray-800' 
                            : 'bg-white text-gray-700 shadow-sm'
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <p className="text-xs text-gray-500 mt-1 text-right">
                          {formatTime(message.timestamp)}
                        </p>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
                <div className="p-4 border-t flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Напишите сообщение..."
                    className="flex-grow"
                  />
                  <Button 
                    onClick={handleSendMessage} 
                    className="bg-[#9b87f5] hover:bg-[#7E69AB]"
                  >
                    <Icon name="Send" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Кнопка для открытия чата */}
        {!isOpen && (
          <Button 
            onClick={() => setIsOpen(true)}
            className="rounded-full h-14 w-14 bg-[#9b87f5] hover:bg-[#7E69AB] shadow-lg"
          >
            <Icon name="MessageCircle" size={24} />
          </Button>
        )}
      </div>
    </>
  );
};

export default AIAssistant;
