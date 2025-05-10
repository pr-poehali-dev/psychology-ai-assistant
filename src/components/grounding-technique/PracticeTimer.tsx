
import React from 'react';
import { Progress } from "@/components/ui/progress";

interface PracticeTimerProps {
  timerSeconds: number;
  progress: number;
  formatTime: (seconds: number) => string;
}

/**
 * Компонент для отображения таймера практики с прогресс-баром
 */
const PracticeTimer: React.FC<PracticeTimerProps> = ({
  timerSeconds,
  progress,
  formatTime
}) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium">Прогресс:</span>
        <span className="text-[#9b87f5] font-medium">
          {formatTime(timerSeconds)}
        </span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  );
};

export default PracticeTimer;
