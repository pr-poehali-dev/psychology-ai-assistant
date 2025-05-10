
import React from 'react';
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";
import { SensoryPrompt } from '@/data/grounding-technique-data';

interface SensoryStepProps {
  currentPrompt: SensoryPrompt;
  observation: string;
  onObservationChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onNext: () => void;
  onPrev: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

/**
 * Компонент для отображения текущего шага сенсорной практики
 */
const SensoryStep: React.FC<SensoryStepProps> = ({
  currentPrompt,
  observation,
  onObservationChange,
  onNext,
  onPrev,
  isFirstStep,
  isLastStep
}) => {
  return (
    <Card className="bg-white mb-6">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-[#E5DEFF] p-3 rounded-lg">
            <Icon name={currentPrompt.icon} className="h-6 w-6 text-[#9b87f5]" />
          </div>
          <h4 className="text-xl font-bold">
            {currentPrompt.count} {currentPrompt.sense.toUpperCase()}
          </h4>
        </div>
        
        <p className="text-gray-700 mb-4">{currentPrompt.description}</p>
        
        <div className="bg-[#F1F0FB] p-4 rounded-lg mb-4">
          <h5 className="font-medium mb-2">Примеры:</h5>
          <ul className="space-y-1">
            {currentPrompt.examples.map((example, index) => (
              <li key={index} className="flex items-center">
                <Icon name="CircleDot" className="h-3 w-3 text-[#9b87f5] mr-2 flex-shrink-0" />
                <span>{example}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mb-4">
          <label htmlFor="observation" className="block text-sm font-medium mb-2">
            Запишите ваши наблюдения:
          </label>
          <textarea
            id="observation"
            rows={3}
            placeholder={`Запишите ${currentPrompt.count} ${currentPrompt.sense}, которые вы заметили...`}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b87f5]"
            value={observation}
            onChange={onObservationChange}
          />
        </div>
        
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={onPrev}
            disabled={isFirstStep}
            className="border-[#9b87f5] text-[#9b87f5]"
          >
            <Icon name="ArrowLeft" className="mr-2" />
            Назад
          </Button>
          
          <Button
            onClick={onNext}
            className="bg-[#9b87f5] hover:bg-[#7E69AB]"
          >
            {isLastStep ? (
              <>
                Завершить
                <Icon name="CheckCircle" className="ml-2" />
              </>
            ) : (
              <>
                Далее
                <Icon name="ArrowRight" className="ml-2" />
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SensoryStep;
