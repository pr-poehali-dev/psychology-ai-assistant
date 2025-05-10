
import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { VisualizationBenefit } from "@/data/visualization-data";

interface VisualizationHeroProps {
  benefits: VisualizationBenefit[];
  facts: string[];
  onStartVisualization: () => void;
}

const VisualizationHero: React.FC<VisualizationHeroProps> = ({ 
  benefits, 
  facts,
  onStartVisualization 
}) => {
  // Выбираем случайный факт для отображения
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">
            Техника визуализации
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Визуализация — это мощная практика использования воображения для создания 
            успокаивающих мысленных образов. Эта техника помогает снизить стресс, 
            уменьшить тревогу и создать глубокое чувство расслабления и благополучия.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
            Преимущества визуализации:
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {benefits.slice(0, 4).map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-[#E5DEFF] p-2 rounded-lg mr-3 mt-1">
                  <Icon name={benefit.icon} className="h-5 w-5 text-[#9b87f5]" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <Button 
              className="bg-[#9b87f5] hover:bg-[#7E69AB] text-lg py-6 px-8"
              onClick={onStartVisualization}
            >
              Начать практику
              <Icon name="Sparkles" className="ml-2" />
            </Button>
          </div>
        </div>
        
        <div className="md:w-1/2">
          <div className="rounded-lg overflow-hidden shadow-lg mb-6">
            <img 
              src="https://images.unsplash.com/photo-1476611338391-6f395a0dd82a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80" 
              alt="Медитация и визуализация"
              className="w-full h-auto"
            />
          </div>
          
          <div className="bg-[#E5DEFF] rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Icon name="Info" className="mr-2 text-[#9b87f5]" />
              Интересный факт
            </h3>
            <p className="text-gray-700">
              {randomFact}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualizationHero;
