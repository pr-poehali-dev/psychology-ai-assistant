
import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import BenefitsList from "../progressive-relaxation/BenefitsList";

interface BreathingHeroProps {
  introduction: string;
  scienceFacts: string[];
  howToUse: string;
  onStartPractice: () => void;
}

const BreathingHero: React.FC<BreathingHeroProps> = ({ 
  introduction, 
  scienceFacts,
  howToUse,
  onStartPractice 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">
            Дыхательные техники
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            {introduction}
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
            Научные факты:
          </h2>
          
          <BenefitsList benefits={scienceFacts} />
          
          <p className="text-lg text-gray-600 mt-6 mb-6">
            {howToUse}
          </p>
          
          <div className="mt-8">
            <Button 
              className="bg-[#9b87f5] hover:bg-[#7E69AB] text-lg py-6 px-8"
              onClick={onStartPractice}
            >
              Начать практику
              <Icon name="Wind" className="ml-2" />
            </Button>
          </div>
        </div>
        
        <div className="md:w-1/2">
          <div className="rounded-lg overflow-hidden shadow-lg mb-6">
            <img 
              src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80" 
              alt="Дыхательные практики"
              className="w-full h-auto"
            />
          </div>
          
          <div className="bg-[#E5DEFF] rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Icon name="Info" className="mr-2 text-[#9b87f5]" />
              Важно помнить
            </h3>
            <p className="text-gray-700">
              Ключ к эффективности дыхательных техник — регулярная практика. 
              Начните с коротких сессий по 3-5 минут и постепенно увеличивайте 
              время. Будьте терпеливы к себе и помните, что каждый вдох — это шаг 
              к большему спокойствию и осознанности.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreathingHero;
