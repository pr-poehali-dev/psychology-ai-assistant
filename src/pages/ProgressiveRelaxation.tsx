
import React, { useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

// Импорт рефакторингованных компонентов
import RelaxationHero from "@/components/progressive-relaxation/RelaxationHero";
import RelaxationTimer from "@/components/progressive-relaxation/RelaxationTimer";
import FAQSection from "@/components/progressive-relaxation/FAQSection";
import RelatedTechniques from "@/components/progressive-relaxation/RelatedTechniques";

// Импорт данных
import { 
  relaxationBenefits,
  relaxationSteps,
  relaxationFAQs,
  relatedTechniques
} from "@/data/relaxation-data";

const ProgressiveRelaxation: React.FC = () => {
  const timerRef = useRef<HTMLDivElement>(null);

  // Функция для прокрутки к таймеру
  const scrollToTimer = () => {
    timerRef.current?.scrollIntoView({ behavior: 'smooth' });
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
        
        {/* Героический раздел с основной информацией */}
        <RelaxationHero 
          benefits={relaxationBenefits} 
          onStartSession={scrollToTimer}
        />
        
        {/* Раздел с таймером упражнений */}
        <div ref={timerRef} className="mb-12">
          <RelaxationTimer steps={relaxationSteps} />
        </div>
        
        {/* Раздел с частыми вопросами */}
        <FAQSection faqItems={relaxationFAQs} />
        
        {/* Раздел с похожими техниками */}
        <RelatedTechniques techniques={relatedTechniques} />
      </main>
      
      <Footer />
    </div>
  );
};

export default ProgressiveRelaxation;
