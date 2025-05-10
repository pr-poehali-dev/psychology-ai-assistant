
import React from 'react';
import Icon from "@/components/ui/icon";
import { BreathingTechnique } from '@/data/breathing-data';

interface BreathingTechniqueDescriptionProps {
  technique: BreathingTechnique;
}

/**
 * Компонент для отображения описания выбранной дыхательной техники
 */
const BreathingTechniqueDescription: React.FC<BreathingTechniqueDescriptionProps> = ({
  technique
}) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 rounded-full bg-[#E5DEFF] text-[#9b87f5]">
          <Icon name={technique.icon} className="h-6 w-6" />
        </div>
        <div>
          <p className="text-lg text-gray-600 mb-4">
            {technique.description}
          </p>
          
          <h3 className="text-xl font-semibold mb-2">Преимущества:</h3>
          <ul className="space-y-2 mb-4">
            {technique.benefits.map((benefit, index) => (
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
  );
};

export default BreathingTechniqueDescription;
