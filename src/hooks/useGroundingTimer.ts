
import { useState, useEffect, useCallback } from 'react';
import { GroundingExercise } from '@/data/grounding-technique-data';

/**
 * Хук для управления таймером в практике заземления
 * 
 * @param exercise Выбранное упражнение
 * @param totalSteps Общее количество шагов
 * @returns Объект с состоянием таймера и функциями управления
 */
export function useGroundingTimer(exercise: GroundingExercise, totalSteps: number) {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [timerSeconds, setTimerSeconds] = useState<number>(exercise.duration * 60);
  
  // Общее время для всего упражнения
  const totalTime = exercise.duration * 60;
  
  // Функция форматирования времени
  const formatTime = useCallback((seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }, []);
  
  // Запуск и останов таймера
  const toggleTimer = useCallback(() => {
    setIsRunning(prev => !prev);
  }, []);
  
  // Сброс таймера
  const resetTimer = useCallback(() => {
    setIsRunning(false);
    setTimerSeconds(totalTime);
    setProgress(0);
    setCurrentStep(0);
  }, [totalTime]);
  
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
    resetTimer();
  }, [exercise, resetTimer]);
  
  return {
    currentStep,
    setCurrentStep,
    isRunning,
    toggleTimer,
    resetTimer,
    progress,
    timerSeconds,
    formatTime,
    totalTime
  };
}
