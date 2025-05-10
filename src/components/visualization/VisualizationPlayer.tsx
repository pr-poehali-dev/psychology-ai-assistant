
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { VisualizationScene } from "@/data/visualization-data";
import AudioPlayer from "./AudioPlayer";

interface VisualizationPlayerProps {
  scene: VisualizationScene;
}

const VisualizationPlayer: React.FC<VisualizationPlayerProps> = ({ scene }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [remainingTime, setRemainingTime] = useState<number>(scene.duration * 60);
  const intervalRef = useRef<number | null>(null);
  
  // Общее время для всей визуализации (в секундах)
  const totalDuration = scene.duration * 60;
  // Время на каждый шаг (в секундах)
  const stepDuration = Math.floor(totalDuration / scene.narration.length);
  
  // Управление запуском и остановкой визуализации
  useEffect(() => {
    if (isPlaying) {
      // Запуск таймера
      intervalRef.current = window.setInterval(() => {
        setRemainingTime(prev => {
          if (prev <= 1) {
            // Завершение визуализации
            clearInterval(intervalRef.current!);
            setIsPlaying(false);
            return 0;
          }
          
          const newRemainingTime = prev - 1;
          const elapsed = totalDuration - newRemainingTime;
          
          // Обновление прогресса
          setProgress((elapsed / totalDuration) * 100);
          
          // Определение текущего шага
          const newStepIndex = Math.min(
            Math.floor(elapsed / stepDuration),
            scene.narration.length - 1
          );
          
          if (newStepIndex !== currentStepIndex) {
            setCurrentStepIndex(newStepIndex);
          }
          
          return newRemainingTime;
        });
      }, 1000);
    } else if (intervalRef.current) {
      // Остановка таймера
      clearInterval(intervalRef.current);
    }
    
    // Очистка интервала при размонтировании компонента
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, currentStepIndex, totalDuration, stepDuration, scene.narration.length]);
  
  // Изменение сцены - сброс состояний
  useEffect(() => {
    setCurrentStepIndex(0);
    setProgress(0);
    setRemainingTime(scene.duration * 60);
    setIsPlaying(false);
    
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, [scene]);
  
  // Запуск/пауза визуализации
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  
  // Сброс визуализации
  const resetVisualization = () => {
    setCurrentStepIndex(0);
    setProgress(0);
    setRemainingTime(scene.duration * 60);
    setIsPlaying(false);
    
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };
  
  // Форматирование времени для отображения
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-3">{scene.title}</h2>
        <p className="text-gray-600">{scene.description}</p>
      </div>
      
      <div className="mb-6 overflow-hidden rounded-lg">
        <img 
          src={scene.coverImage} 
          alt={scene.title}
          className="w-full h-64 object-cover"
        />
      </div>
      
      <AudioPlayer 
        audioUrl={scene.musicUrl}
        audioCredit={scene.musicCredit}
        isPlaying={isPlaying}
        onPlayPause={setIsPlaying}
      />
      
      <div className="mt-6 bg-[#F1F0FB] p-5 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Инструкции:</h3>
          <span className="text-[#9b87f5] font-bold">
            {formatTime(remainingTime)}
          </span>
        </div>
        
        <Progress value={progress} className="h-2 mb-5" />
        
        <Card className="bg-white mb-6">
          <CardContent className="p-4">
            <p className="text-gray-800 text-lg italic">
              "{scene.narration[currentStepIndex]}"
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Шаг {currentStepIndex + 1} из {scene.narration.length}
            </p>
          </CardContent>
        </Card>
        
        <div className="flex justify-center gap-4">
          <Button 
            onClick={togglePlayPause}
            className={isPlaying ? 
              "bg-red-500 hover:bg-red-600" : 
              "bg-[#9b87f5] hover:bg-[#7E69AB]"
            }
            size="lg"
          >
            <Icon name={isPlaying ? "Pause" : "Play"} className="mr-2" />
            {isPlaying ? "Пауза" : "Начать"}
          </Button>
          
          <Button 
            variant="outline" 
            onClick={resetVisualization}
            className="border-[#9b87f5] text-[#9b87f5]"
            size="lg"
          >
            <Icon name="RefreshCcw" className="mr-2" />
            Сбросить
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VisualizationPlayer;
