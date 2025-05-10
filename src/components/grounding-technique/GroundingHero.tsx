
import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface GroundingHeroProps {
  introduction: string;
  benefits: string[];
  onStartPractice: () => void;
}

const GroundingHero: React.FC<GroundingHeroProps> = ({ 
  introduction, 
  benefits,
  onStartPractice 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">
            Техника 5-4-3-2-1
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            {introduction}
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
            Преимущества техники:
          </h2>
          
          <ul className="space-y-2 mb-6">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <Icon 
                  name="CheckCircle" 
                  className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" 
                />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-8">
            <Button 
              className="bg-[#9b87f5] hover:bg-[#7E69AB] text-lg py-6 px-8"
              onClick={onStartPractice}
            >
              Начать практику
              <Icon name="Anchor" className="ml-2" />
            </Button>
          </div>
        </div>
        
        <div className="md:w-1/2">
          <div className="rounded-lg overflow-hidden shadow-lg mb-6">
            <img 
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80" 
              alt="Медитация и заземление"
              className="w-full h-auto"
            />
          </div>
          
          <div className="bg-[#E5DEFF] rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Icon name="Info" className="mr-2 text-[#9b87f5]" />
              Когда использовать
            </h3>
            <p className="text-gray-700 mb-3">
              Техника 5-4-3-2-1 особенно эффективна:
            </p>
            <ul className="space-y-1">
              <li className="flex items-center">
                <Icon name="CircleDot" className="h-3 w-3 text-[#9b87f5] mr-2 flex-shrink-0" />
                <span>При начинающейся панической атаке</span>
              </li>
              <li className="flex items-center">
                <Icon name="CircleDot" className="h-3 w-3 text-[#9b87f5] mr-2 flex-shrink-0" />
                <span>Во время сильной тревоги</span>
              </li>
              <li className="flex items-center">
                <Icon name="CircleDot" className="h-3 w-3 text-[#9b87f5] mr-2 flex-shrink-0" />
                <span>При навязчивых мыслях</span>
              </li>
              <li className="flex items-center">
                <Icon name="CircleDot" className="h-3 w-3 text-[#9b87f5] mr-2 flex-shrink-0" />
                <span>В состояниях диссоциации</span>
              </li>
              <li className="flex items-center">
                <Icon name="CircleDot" className="h-3 w-3 text-[#9b87f5] mr-2 flex-shrink-0" />
                <span>Перед стрессовыми событиями</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroundingHero;
