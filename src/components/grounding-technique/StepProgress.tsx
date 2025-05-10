
import React from 'react';
import Icon from '@/components/ui/icon';
import { SensoryPrompt } from '@/data/grounding-technique-data';

interface StepProgressProps {
  totalSteps: number;
  currentStep: number;
  completedSteps: boolean[];
  sensoryPrompts: SensoryPrompt[];
}

/**
 * Компонент для отображения прогресса по шагам техники заземления
 */
const StepProgress: React.FC<StepProgressProps> = ({
  totalSteps,
  currentStep,
  completedSteps,
  sensoryPrompts
}) => {
  return (
    <div className="mt-6">
      <div className="flex justify-between">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div 
            key={index}
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              index === currentStep 
                ? 'bg-[#9b87f5] text-white' 
                : completedSteps[index]
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200 text-gray-600'
            }`}
          >
            {completedSteps[index] ? (
              <Icon name="Check" className="h-4 w-4" />
            ) : (
              totalSteps - index
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-2 text-xs text-gray-500">
        {sensoryPrompts.map((prompt, index) => (
          <div key={index} className="w-8 text-center">
            {prompt.sense.slice(0, 1).toUpperCase()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepProgress;
