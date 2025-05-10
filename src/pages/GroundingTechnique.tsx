
import React, { useState, useRef } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Компоненты для страницы техники заземления
import GroundingHero from "@/components/grounding-technique/GroundingHero";
import ExerciseVariantCard from "@/components/grounding-technique/ExerciseVariantCard";
import GroundingPractice from "@/components/grounding-technique/GroundingPractice";
import ScienceSection from "@/components/grounding-technique/ScienceSection";

// Данные для техники заземления
import {
  sensoryPrompts,
  groundingExercises,
  groundingTechniqueInfo,
  groundingTechniqueFAQs,
  groundingResearch,
  relatedTechniques
} from "@/data/grounding-technique-data";

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
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Варианты техники</h2>
          <p className="text-lg text-gray-600 mb-8">
            Существуют разные варианты техники 5-4-3-2-1, которые можно применять в зависимости от 
            ситуации и ваших потребностей. Выберите вариант, который подходит вам в данный момент.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {groundingExercises.map(exercise => (
              <ExerciseVariantCard 
                key={exercise.id}
                exercise={exercise}
                isActive={exercise.id === selectedExerciseId}
                onSelect={handleSelectExercise}
              />
            ))}
          </div>
        </div>
        
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
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Дополнительные советы</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {groundingTechniqueInfo.extraTips.map((tip, index) => (
              <Card key={index} className="shadow-sm">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="bg-[#E5DEFF] p-2 rounded-lg">
                      <Icon name="Lightbulb" className="h-5 w-5 text-[#9b87f5]" />
                    </div>
                    <p className="text-gray-700">{tip}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-[#F1F0FB] p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Icon name="AlertCircle" className="mr-2 text-[#9b87f5]" />
              Важно помнить
            </h3>
            <p className="text-gray-700">
              Техника 5-4-3-2-1 не заменяет профессиональную помощь. Если вы регулярно испытываете сильную 
              тревогу, панические атаки или другие интенсивные эмоциональные состояния, рекомендуется 
              обратиться к психологу или психотерапевту. Эта техника — один из инструментов самопомощи, 
              который может быть частью комплексного подхода к вашему психологическому благополучию.
            </p>
          </div>
        </div>
        
        {/* Секция с частыми вопросами */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Часто задаваемые вопросы</h2>
          
          <Accordion type="single" collapsible className="w-full">
            {groundingTechniqueFAQs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        {/* Секция с другими похожими техниками */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Другие полезные техники</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedTechniques.map((technique, index) => (
              <Card key={index} className="overflow-hidden shadow hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <h3 className="font-bold text-lg mb-2 flex items-center">
                    <Icon name="Link" className="mr-2 text-[#9b87f5]" />
                    {technique.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{technique.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white"
                    asChild={!!technique.link}
                  >
                    {technique.link ? (
                      <a href={technique.link}>Подробнее</a>
                    ) : (
                      <>Подробнее</>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* История и происхождение техники */}
        <div className="bg-[#E5DEFF] rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Происхождение техники</h2>
          <p className="text-gray-700">
            {groundingTechniqueInfo.historyAndOrigins}
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GroundingTechnique;
