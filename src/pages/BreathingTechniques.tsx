
import React, { useRef, useState, useCallback } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";
import FAQSection from "@/components/progressive-relaxation/FAQSection";
import RelatedTechniques from "@/components/progressive-relaxation/RelatedTechniques";

// Подключаем компоненты для дыхательных техник
import BreathingHero from "@/components/breathing-techniques/BreathingHero";
import BreathingTimer from "@/components/breathing-techniques/BreathingTimer";
import BreathingTabs from "@/components/breathing-techniques/BreathingTabs";
import BreathingTechniquesList from "@/components/breathing-techniques/BreathingTechniquesList";
import BreathingTechniqueDescription from "@/components/breathing-techniques/BreathingTechniqueDescription";

// Импортируем данные для страницы
import { 
  breathingTechniques, 
  breathingInfo, 
  breathingFAQs 
} from '@/data/breathing-data';
import { relatedTechniques } from '@/data/relaxation-data';

/**
 * Страница с дыхательными техниками
 */
const BreathingTechniques: React.FC = () => {
  // Состояние для отслеживания выбранной техники
  const [selectedTechniqueId, setSelectedTechniqueId] = useState<string>(breathingTechniques[0].id);
  
  // Реф для прокрутки к таймеру
  const timerRef = useRef<HTMLDivElement>(null);
  
  // Найти выбранную технику
  const selectedTechnique = breathingTechniques.find(
    tech => tech.id === selectedTechniqueId
  ) || breathingTechniques[0];
  
  // Функция для прокрутки к таймеру
  const scrollToTimer = useCallback(() => {
    timerRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);
  
  // Функция для выбора техники и прокрутки к таймеру
  const handleSelectTechnique = useCallback((techniqueId: string) => {
    setSelectedTechniqueId(techniqueId);
    setTimeout(scrollToTimer, 100);
  }, [scrollToTimer]);
  
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
          
          <BreathingTechniquesList 
            techniques={breathingTechniques}
            selectedTechniqueId={selectedTechniqueId}
            onSelectTechnique={handleSelectTechnique}
          />
        </div>
        
        {/* Таймер для практики */}
        <div ref={timerRef} className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            {selectedTechnique.title}
          </h2>
          
          <BreathingTechniqueDescription technique={selectedTechnique} />
          
          <BreathingTimer steps={selectedTechnique.instructions} />
        </div>
        
        {/* Вкладки с дополнительной информацией */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Дополнительная информация</h2>
          <BreathingTabs />
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
