
import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import BenefitsList from "./BenefitsList";

interface RelaxationHeroProps {
  benefits: string[];
  onStartSession: () => void;
}

const RelaxationHero: React.FC<RelaxationHeroProps> = ({ 
  benefits, 
  onStartSession 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">
            Прогрессивная мышечная релаксация
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Прогрессивная мышечная релаксация — метод, разработанный американским 
            физиологом Эдмундом Джекобсоном в 1920-х годах. Эта техника основана на 
            простом принципе: после напряжения мышцы наступает более глубокое расслабление.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
            Преимущества метода:
          </h2>
          
          <BenefitsList benefits={benefits} />
          
          <div className="mt-8">
            <Button 
              className="bg-[#9b87f5] hover:bg-[#7E69AB] text-lg py-6 px-8"
              onClick={onStartSession}
            >
              Начать сеанс
              <Icon name="Play" className="ml-2" />
            </Button>
          </div>
        </div>
        
        <div className="md:w-1/2">
          <div className="rounded-lg overflow-hidden shadow-lg mb-6">
            <img 
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80" 
              alt="Медитация и релаксация"
              className="w-full h-auto"
            />
          </div>
          
          <div className="bg-[#E5DEFF] rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Icon name="Info" className="mr-2 text-[#9b87f5]" />
              Знаете ли вы?
            </h3>
            <p className="text-gray-700">
              Регулярная практика прогрессивной мышечной релаксации (всего 15-20 минут в день) 
              может снизить уровень тревоги на 60% и существенно улучшить качество сна. Это 
              подтверждено многочисленными исследованиями в области психологии и неврологии.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelaxationHero;
