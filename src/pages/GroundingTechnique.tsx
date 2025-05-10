
import React, { useState, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

// Компоненты для страницы техники заземления
import GroundingHero from "@/components/grounding-technique/GroundingHero";
import GroundingPractice from "@/components/grounding-technique/GroundingPractice";
import ScienceSection from "@/components/grounding-technique/ScienceSection";
import TechniqueVariantsSection from "@/components/grounding-technique/TechniqueVariantsSection";
import AdditionalTipsSection from "@/components/grounding-technique/AdditionalTipsSection";
import FAQSection from "@/components/grounding-technique/FAQSection";
import RelatedTechniquesSection from "@/components/grounding-technique/RelatedTechniquesSection";
import HistorySection from "@/components/grounding-technique/HistorySection";

// Данные для техники заземления
import {
  sensoryPrompts,
  groundingExercises,
  groundingTechniqueInfo,
  groundingTechniqueFAQs,
  groundingResearch,
  relatedTechniques
} from "@/data/grounding-technique-data";

/**
 * Страница с техникой заземления 5-4-3-2-1
 */
const GroundingTechnique: React.FC = () => {
  // Состояние для отслеживания выбранного варианта упражнения
  const [selectedExerciseId, setSelectedExerciseId] = useState<string>(groundingExercises[0].id);
  
  // Реф для прокрутки к практическому упражнению
  const practiceRef = useRef<HTMLDivElement>(null);
  
  // Найти выбранное упражнение
  const selectedExercise = groundingExercises.find(
    ex => ex.id === selectedExerciseId
  ) || groundingExercises[0];
  
  // Функция для прокрутки к практике
  const scrollToPractice = () => {
    practiceRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  // Функция для выбора упражнения
  const handleSelectExercise = (exerciseId: string) => {
    setSelectedExerciseId(exerciseId);
    setTimeout(scrollToPractice, 100);
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
        
        {/* Героический раздел с информацией о технике */}
        <GroundingHero 
          introduction={groundingTechniqueInfo.introduction}
          benefits={groundingTechniqueInfo.benefits}
          onStartPractice={scrollToPractice}
        />
        
        {/* Секция с различными вариантами техники */}
        <TechniqueVariantsSection 
          exercises={groundingExercises}
          selectedExerciseId={selectedExerciseId}
          onSelectExercise={handleSelectExercise}
        />
        
        {/* Секция практики */}
        <div ref={practiceRef} className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Практика техники
          </h2>
          
          <GroundingPractice 
            sensoryPrompts={sensoryPrompts} 
            selectedExercise={selectedExercise}
          />
        </div>
        
        {/* Научная секция */}
        <ScienceSection 
          scientificBasis={groundingTechniqueInfo.scientificBasis}
          research={groundingResearch}
        />
        
        {/* Секция с дополнительными советами */}
        <AdditionalTipsSection tips={groundingTechniqueInfo.extraTips} />
        
        {/* Секция с частыми вопросами */}
        <FAQSection faqs={groundingTechniqueFAQs} />
        
        {/* Секция с другими похожими техниками */}
        <RelatedTechniquesSection techniques={relatedTechniques} />
        
        {/* История и происхождение техники */}
        <HistorySection historyText={groundingTechniqueInfo.historyAndOrigins} />
      </main>
      
      <Footer />
    </div>
  );
};

export default GroundingTechnique;
