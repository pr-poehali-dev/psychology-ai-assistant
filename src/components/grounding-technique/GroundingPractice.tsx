
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { SensoryPrompt, GroundingExercise } from "@/data/grounding-technique-data";

interface GroundingPracticeProps {
  sensoryPrompts: SensoryPrompt[];
  selectedExercise: GroundingExercise;
}

const GroundingPractice: React.FC<GroundingPracticeProps> = ({
  sensoryPrompts,
  selectedExercise
}) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [timerSeconds, setTimerSeconds] = useState<number>(selectedExercise.duration * 60);
  const [userObservations, setUserObservations] = useState<string[]>(Array(sensoryPrompts.length).fill(''));
  const [completed, setCompleted] = useState<boolean[]>(Array(sensoryPrompts.length).fill(false));
  
  // Общее время для всего упражнения
  const totalTime = selectedExercise.duration * 60;
  
  // Обработчик запуска/остановки таймера
  const togglePractice = () => {
    setIsRunning(!isRunning);
  };
  
  // Обработчик сброса упражнения
  const resetPractice = () => {
    setCurrentStep(0);
    setIsRunning(false);
    setProgress(0);
    setTimerSeconds(totalTime);
    setUserObservations(Array(sensoryPrompts.length).fill(''));
    setCompleted(Array(sensoryPrompts.length).fill(false));
  };
  
  // Обработчик перехода к следующему шагу
  const nextStep = () => {
    if (currentStep < sensoryPrompts.length - 1) {
      // Отмечаем текущий шаг как завершенный
      const newCompleted = [...completed];
      newCompleted[currentStep] = true;
      setCompleted(newCompleted);
      
      // Переходим к следующему шагу
      setCurrentStep(currentStep + 1);
    } else {
      // Последний шаг - отмечаем как завершенный и останавливаем таймер
      const newCompleted = [...completed];
      newCompleted[currentStep] = true;
      setCompleted(newCompleted);
      setIsRunning(false);
    }
  };
  
  // Обработчик перехода к предыдущему шагу
  const prevStep = () => {
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
  
  // Эффект для работы таймера
  useEffect(() => {
    let interval: number | undefined;
    
    if (isRunning && timerSeconds > 0) {
      interval = window.setInterval(() => {
        setTimerSeconds(prev => {
          const newTime = prev - 1;
          setProgress((1 - newTime / totalTime) * 100);
          return newTime;
        });
      }, 1000);
    } else if (timerSeconds === 0) {
      setIsRunning(false);
    }
    
    return () => {
      if (interval) {
        window.clearInterval(interval);
      }
    };
  }, [isRunning, timerSeconds, totalTime]);
  
  // Эффект для обновления таймера при изменении упражнения
  useEffect(() => {
    resetPractice();
  }, [selectedExercise]);
  
  // Формат времени для отображения
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  // Текущая сенсорная подсказка
  const currentPrompt = sensoryPrompts[currentStep];
  
  return (
    <div className="bg-[#F1F0FB] rounded-lg p-6 shadow-lg">
      <h3 className="text-2xl font-bold mb-6 text-center">Практика техники 5-4-3-2-1</h3>
      
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium">Прогресс:</span>
          <span className="text-[#9b87f5] font-medium">{formatTime(timerSeconds)}</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
      
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
              value={userObservations[currentStep]}
              onChange={(e) => handleObservationChange(e, currentStep)}
            />
          </div>
          
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 0}
              className="border-[#9b87f5] text-[#9b87f5]"
            >
              <Icon name="ArrowLeft" className="mr-2" />
              Назад
            </Button>
            
            <Button
              onClick={nextStep}
              className="bg-[#9b87f5] hover:bg-[#7E69AB]"
            >
              {currentStep === sensoryPrompts.length - 1 ? (
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
      
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button 
          onClick={togglePractice}
          className={isRunning ? "bg-red-500 hover:bg-red-600" : "bg-[#9b87f5] hover:bg-[#7E69AB]"}
          size="lg"
        >
          <Icon name={isRunning ? "Pause" : "Play"} className="mr-2" />
          {isRunning ? "Пауза" : "Начать"}
        </Button>
        
        <Button 
          variant="outline" 
          onClick={resetPractice}
          className="border-[#9b87f5] text-[#9b87f5]"
          size="lg"
        >
          <Icon name="RefreshCcw" className="mr-2" />
          Сбросить
        </Button>
      </div>
      
      {/* Индикатор прогресса по шагам */}
      <div className="mt-6">
        <div className="flex justify-between">
          {sensoryPrompts.map((_, index) => (
            <div 
              key={index}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                index === currentStep 
                  ? 'bg-[#9b87f5] text-white' 
                  : completed[index]
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-600'
              }`}
            >
              {completed[index] ? (
                <Icon name="Check" className="h-4 w-4" />
              ) : (
                5 - index
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
    </div>
  );
};

export default GroundingPractice;
