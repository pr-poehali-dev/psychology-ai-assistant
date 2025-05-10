
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { InstructionStep } from "@/data/relaxation-data";

interface BreathingTimerProps {
  steps: InstructionStep[];
  onComplete?: () => void;
}

const BreathingTimer: React.FC<BreathingTimerProps> = ({ 
  steps,
  onComplete
}) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [timerSeconds, setTimerSeconds] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  
  const totalSteps = steps.length;
  const currentStepData = steps[currentStep];
  const totalTime = currentStepData?.duration * 60 || 0; // в секундах
  
  // Запуск и останов таймера
  const toggleTimer = () => {
    setIsRunning(!isRunning);
    if (!isRunning) {
      setTimerSeconds(totalTime);
      setProgress(0);
      setIsCompleted(false);
    }
  };
  
  // Сброс текущего шага
  const resetStep = () => {
    setIsRunning(false);
    setTimerSeconds(totalTime);
    setProgress(0);
    setIsCompleted(false);
  };
  
  // Переход к следующему шагу
  const nextStep = () => {
    resetStep();
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Если это последний шаг, вернуться к первому
      setCurrentStep(0);
    }
  };
  
  // Переход к предыдущему шагу
  const prevStep = () => {
    resetStep();
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      // Если это первый шаг, перейти к последнему
      setCurrentStep(totalSteps - 1);
    }
  };
  
  // Эффект для работы таймера
  useEffect(() => {
    let interval: number | undefined;
    
    if (isRunning && timerSeconds > 0) {
      interval = window.setInterval(() => {
        setTimerSeconds(prev => prev - 1);
        setProgress(prev => prev + (100 / totalTime));
      }, 1000);
    } else if (timerSeconds === 0 && isRunning) {
      setIsRunning(false);
      
      // Если это последний шаг, уведомить о завершении
      if (currentStep === totalSteps - 1) {
        setIsCompleted(true);
        if (onComplete) onComplete();
      } else {
        // Автоматически перейти к следующему шагу
        setTimeout(() => {
          nextStep();
          setIsRunning(true);
        }, 1500);
      }
    }
    
    return () => window.clearInterval(interval);
  }, [isRunning, timerSeconds, totalTime, currentStep, totalSteps, onComplete]);
  
  // Форматирование времени для отображения
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Инициализация таймера при изменении шага
  useEffect(() => {
    setTimerSeconds(currentStepData.duration * 60);
  }, [currentStep, currentStepData]);

  return (
    <div className="bg-[#F1F0FB] rounded-lg p-6 shadow-lg">
      <h3 className="text-2xl font-bold mb-6 text-center">Пошаговая практика</h3>
      
      <div className="flex justify-between items-center mb-4">
        <Button 
          variant="outline" 
          onClick={prevStep}
          className="border-[#9b87f5] text-[#9b87f5]"
        >
          <Icon name="ArrowLeft" className="mr-2" />
          Предыдущий
        </Button>
        
        <span className="text-lg font-bold">
          Шаг {currentStep + 1} из {totalSteps}
        </span>
        
        <Button 
          variant="outline" 
          onClick={nextStep}
          className="border-[#9b87f5] text-[#9b87f5]"
        >
          Следующий
          <Icon name="ArrowRight" className="ml-2" />
        </Button>
      </div>
      
      <Card className="mb-6 overflow-hidden">
        <div className="h-56 overflow-hidden">
          <img
            src={currentStepData.image}
            alt={currentStepData.title}
            className="w-full h-full object-cover"
          />
        </div>
        <CardContent className="p-6">
          <h4 className="text-xl font-bold mb-3">{currentStepData.title}</h4>
          <p className="text-gray-700">{currentStepData.content}</p>
          
          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Прогресс:</span>
              <span className="text-[#9b87f5] font-medium">
                {formatTime(timerSeconds)}
              </span>
            </div>
            <Progress value={progress} className="h-2 mb-4" />
            
            <div className="flex justify-center gap-4">
              <Button 
                onClick={toggleTimer} 
                className={isRunning ? "bg-red-500 hover:bg-red-600" : "bg-[#9b87f5] hover:bg-[#7E69AB]"}
              >
                <Icon name={isRunning ? "Pause" : "Play"} className="mr-2" />
                {isRunning ? "Пауза" : "Начать"}
              </Button>
              <Button 
                variant="outline" 
                onClick={resetStep}
                className="border-[#9b87f5] text-[#9b87f5]"
              >
                <Icon name="RefreshCcw" className="mr-2" />
                Сбросить
              </Button>
            </div>
            
            {isCompleted && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg text-center">
                <Icon name="CheckCircle" className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <h5 className="text-lg font-medium text-green-800">Отлично!</h5>
                <p className="text-green-600">Вы успешно завершили этот шаг практики.</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BreathingTimer;
