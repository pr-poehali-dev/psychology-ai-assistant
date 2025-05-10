
import React, { useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FAQSection from "@/components/progressive-relaxation/FAQSection";
import RelatedTechniques from "@/components/progressive-relaxation/RelatedTechniques";

// Компоненты для дыхательных техник
import BreathingHero from "@/components/breathing-techniques/BreathingHero";
import BreathingTechniqueCard from "@/components/breathing-techniques/BreathingTechniqueCard";
import BreathingTimer from "@/components/breathing-techniques/BreathingTimer";

// Данные для страницы
import { 
  breathingTechniques, 
  breathingInfo, 
  breathingFAQs 
} from "@/data/breathing-data";
import { relatedTechniques } from "@/data/relaxation-data";

const BreathingTechniques: React.FC = () => {
  // Состояние для отслеживания выбранной техники
  const [selectedTechniqueId, setSelectedTechniqueId] = useState<string>(breathingTechniques[0].id);
  const timerRef = useRef<HTMLDivElement>(null);
  
  // Найти выбранную технику
  const selectedTechnique = breathingTechniques.find(
    tech => tech.id === selectedTechniqueId
  ) || breathingTechniques[0];
  
  // Функция для прокрутки к таймеру
  const scrollToTimer = () => {
    timerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  // Функция для выбора техники и прокрутки к таймеру
  const handleSelectTechnique = (techniqueId: string) => {
    setSelectedTechniqueId(techniqueId);
    setTimeout(scrollToTimer, 100);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F1F0FB]">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        {/* Навигационная ссылка для возврата */}
        <div className="mb-6">
          <a href="/" className="text-[#9b87f5] hover:text-[#7E69AB] flex items-center">
            <Icon name="ChevronLeft" className="h-4 w-4 mr-1" />
            Вернуться на главную
          </a>
        </div>
        
        {/* Героический раздел с информацией о дыхательных техниках */}
        <BreathingHero 
          introduction={breathingInfo.introduction}
          scienceFacts={breathingInfo.scienceFacts}
          howToUse={breathingInfo.howToUse}
          onStartPractice={scrollToTimer}
        />
        
        {/* Секция с выбором техники */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Выберите технику</h2>
          <p className="text-lg text-gray-600 mb-8">
            Каждая техника имеет свои особенности и преимущества. Выберите ту, которая 
            соответствует вашим текущим потребностям — для снятия стресса, засыпания или 
            повышения энергии.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {breathingTechniques.map(technique => (
              <BreathingTechniqueCard 
                key={technique.id}
                technique={technique}
                onSelect={handleSelectTechnique}
                isActive={technique.id === selectedTechniqueId}
              />
            ))}
          </div>
        </div>
        
        {/* Таймер для практики */}
        <div ref={timerRef} className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            {selectedTechnique.title}
          </h2>
          <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-full bg-[#E5DEFF] text-[#9b87f5]">
                <Icon name={selectedTechnique.icon} className="h-6 w-6" />
              </div>
              <div>
                <p className="text-lg text-gray-600 mb-4">
                  {selectedTechnique.description}
                </p>
                
                <h3 className="text-xl font-semibold mb-2">Преимущества:</h3>
                <ul className="space-y-2 mb-4">
                  {selectedTechnique.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Icon 
                        name="CheckCircle" 
                        className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" 
                      />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <BreathingTimer steps={selectedTechnique.instructions} />
        </div>
        
        {/* Вкладки с дополнительной информацией */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Дополнительная информация</h2>
          
          <Tabs defaultValue="daily-use">
            <TabsList className="mb-6 grid w-full grid-cols-3">
              <TabsTrigger value="daily-use">Ежедневная практика</TabsTrigger>
              <TabsTrigger value="stress-relief">В моменты стресса</TabsTrigger>
              <TabsTrigger value="sleep">Для улучшения сна</TabsTrigger>
            </TabsList>
            
            <TabsContent value="daily-use" className="p-4 bg-gray-50 rounded-md">
              <h3 className="text-xl font-bold mb-3">Ежедневная практика дыхания</h3>
              <p className="mb-4">
                Регулярная практика дыхательных техник помогает натренировать нервную систему 
                и сделать её более устойчивой к стрессу. Рекомендуется выделять 5-10 минут 
                утром и вечером для дыхательных упражнений.
              </p>
              <h4 className="font-semibold mb-2">Рекомендации:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Icon name="Clock" className="h-5 w-5 text-[#9b87f5] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Практикуйте в одно и то же время, чтобы сформировать привычку</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Home" className="h-5 w-5 text-[#9b87f5] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Создайте специальное место для практики, где вас никто не побеспокоит</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Bell" className="h-5 w-5 text-[#9b87f5] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Установите напоминания на телефоне</span>
                </li>
              </ul>
            </TabsContent>
            
            <TabsContent value="stress-relief" className="p-4 bg-gray-50 rounded-md">
              <h3 className="text-xl font-bold mb-3">Дыхание в моменты стресса</h3>
              <p className="mb-4">
                В моменты острого стресса нужны техники, которые можно применить быстро 
                и незаметно для окружающих. Техника "4-7-8" и квадратное дыхание 
                особенно эффективны в таких ситуациях.
              </p>
              <h4 className="font-semibold mb-2">Ситуации для применения:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Icon name="Users" className="h-5 w-5 text-[#9b87f5] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Перед важными переговорами или выступлением</span>
                </li>
                <li className="flex items-start">
                  <Icon name="AlertCircle" className="h-5 w-5 text-[#9b87f5] mr-2 flex-shrink-0 mt-0.5" />
                  <span>При возникновении конфликтной ситуации</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Brain" className="h-5 w-5 text-[#9b87f5] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Когда замечаете, что "накручиваете" себя негативными мыслями</span>
                </li>
              </ul>
            </TabsContent>
            
            <TabsContent value="sleep" className="p-4 bg-gray-50 rounded-md">
              <h3 className="text-xl font-bold mb-3">Дыхание для улучшения сна</h3>
              <p className="mb-4">
                Правильное дыхание перед сном помогает успокоить ум и подготовить тело 
                к отдыху. Техника "4-7-8" особенно эффективна для засыпания, а диафрагмальное 
                дыхание помогает расслабить тело.
              </p>
              <h4 className="font-semibold mb-2">Вечерний ритуал:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Icon name="Smartphone" className="h-5 w-5 text-[#9b87f5] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Отложите электронные устройства за час до сна</span>
                </li>
                <li className="flex items-start">
                  <Icon name="MoonStar" className="h-5 w-5 text-[#9b87f5] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Приглушите свет и создайте спокойную атмосферу</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Wind" className="h-5 w-5 text-[#9b87f5] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Практикуйте дыхательную технику "4-7-8" лежа в постели</span>
                </li>
              </ul>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Секция с частыми вопросами */}
        <FAQSection faqItems={breathingFAQs} />
        
        {/* Секция с похожими техниками */}
        <RelatedTechniques techniques={relatedTechniques} />
      </main>
      
      <Footer />
    </div>
  );
};

export default BreathingTechniques;
