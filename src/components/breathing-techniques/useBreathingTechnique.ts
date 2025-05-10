
import { useState, useRef, useCallback } from 'react';
import { BreathingTechnique } from '@/data/breathing-data';

/**
 * Хук для управления выбором дыхательной техники и навигации по странице
 * @param initialTechniqueId ID техники, выбранной по умолчанию
 * @param techniques Массив доступных техник
 * @returns Объект с выбранной техникой и функциями управления
 */
export function useBreathingTechnique(
  initialTechniqueId: string,
  techniques: BreathingTechnique[]
) {
  // Состояние для отслеживания выбранной техники
  const [selectedTechniqueId, setSelectedTechniqueId] = useState<string>(initialTechniqueId);
  
  // Реф для прокрутки к таймеру
  const timerRef = useRef<HTMLDivElement>(null);
  
  // Найти выбранную технику
  const selectedTechnique = techniques.find(
    tech => tech.id === selectedTechniqueId
  ) || techniques[0];
  
  // Функция для прокрутки к таймеру
  const scrollToTimer = useCallback(() => {
    timerRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);
  
  // Функция для выбора техники и прокрутки к таймеру
  const handleSelectTechnique = useCallback((techniqueId: string) => {
    setSelectedTechniqueId(techniqueId);
    setTimeout(scrollToTimer, 100);
  }, [scrollToTimer]);
  
  return {
    selectedTechniqueId,
    selectedTechnique,
    timerRef,
    scrollToTimer,
    handleSelectTechnique
  };
}
