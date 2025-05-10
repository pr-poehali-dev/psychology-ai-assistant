
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { SensoryPrompt, GroundingExercise } from "@/data/grounding-technique-data";
import SensoryStep from "./SensoryStep";
import StepProgress from "./StepProgress";
import PracticeTimer from "./PracticeTimer";
import { useGroundingTimer } from "@/hooks/useGroundingTimer";

interface GroundingPracticeProps {
  sensoryPrompts: SensoryPrompt[];
  selectedExercise: GroundingExercise;
}

const GroundingPractice: React.FC<GroundingPracticeProps> = ({
  sensoryPrompts,
  selectedExercise
}) => {
  // Состояния для наблюдений пользователя и прогресса по шагам
  const [userObservations, setUserObservations] = useState<string[]>(
    Array(sensoryPrompts.length).fill('')
  );
  const [completedSteps, setCompletedSteps] = useState<boolean[]>(
    Array(sensoryPrompts.length).fill(false)
  );

  // Используем кастомный хук для логики таймера
  const { 
    currentStep,
    setCurrentStep,
    isRunning, 
    toggleTimer, 
    resetTimer, 
    progress,
    timerSeconds,
    formatTime
  } = useGroundingTimer(selectedExercise, sensoryPrompts.length);

  // Обработчик перехода к следующему шагу
  const handleNextStep = () => {
    if (currentStep < sensoryPrompts.length - 1) {
      // Отмечаем текущий шаг как завершенный
      const newCompleted = [...completedSteps];
      newCompleted[currentStep] = true;
      setCompletedSteps(newCompleted);
      
      // Переходим к следующему шагу
      setCurrentStep(currentStep + 1);
    } else {
      // Последний шаг - отмечаем как завершенный
      const newCompleted = [...completedSteps];
      newCompleted[currentStep] = true;
      setCompletedSteps(newCompleted);
    }
  };
  
  // Обработчик перехода к предыдущему шагу
  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  // Обработчик добавления наблюдения пользователя
  const handleObservationChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) => {
    const newObservations = [...userObservations];
    newObservations[index] = e.target.value;
    setUserObservations(newObservations);
  };
  
  // Эффект для сброса при изменении упражнения
  useEffect(() => {
    resetTimer();
    setUserObservations(Array(sensoryPrompts.length).fill(''));
    setCompletedSteps(Array(sensoryPrompts.length).fill(false));
  }, [selectedExercise, sensoryPrompts.length, resetTimer]);
  
  // Получаем текущую сенсорную подсказку
  const currentPrompt = sensoryPrompts[currentStep];
  
  return (
    <div className="bg-[#F1F0FB] rounded-lg p-6 shadow-lg">
      <h3 className="text-2xl font-bold mb-6 text-center">Практика техники 5-4-3-2-1</h3>
      
      {/* Компонент таймера */}
      <PracticeTimer 
        timerSeconds={timerSeconds}
        progress={progress}
        formatTime={formatTime}
      />
      
      {/* Карточка с текущим шагом */}
      <SensoryStep
        currentPrompt={currentPrompt}
        observation={userObservations[currentStep]}
        onObservationChange={(e) => handleObservationChange(e, currentStep)}
        onNext={handleNextStep}
        onPrev={handlePrevStep}
        isFirstStep={currentStep === 0}
        isLastStep={currentStep === sensoryPrompts.length - 1}
      />
      
      {/* Кнопки управления таймером */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
        <Button 
          onClick={toggleTimer}
          className={isRunning ? "bg-red-500 hover:bg-red-600" : "bg-[#9b87f5] hover:bg-[#7E69AB]"}
          size="lg"
        >
          <Icon name={isRunning ? "Pause" : "Play"} className="mr-2" />
          {isRunning ? "Пауза" : "Начать"}
        </Button>
        
        <Button 
          variant="outline" 
          onClick={resetTimer}
          className="border-[#9b87f5] text-[#9b87f5]"
          size="lg"
        >
          <Icon name="RefreshCcw" className="mr-2" />
          Сбросить
        </Button>
      </div>
      
      {/* Индикатор прогресса по шагам */}
      <StepProgress 
        totalSteps={sensoryPrompts.length}
        currentStep={currentStep}
        completedSteps={completedSteps}
        sensoryPrompts={sensoryPrompts}
      />
    </div>
  );
};

export default GroundingPractice;
