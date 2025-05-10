
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";

interface AudioPlayerProps {
  audioUrl: string;
  audioCredit: string;
  isPlaying: boolean;
  onPlayPause: (isPlaying: boolean) => void;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  audioUrl,
  audioCredit,
  isPlaying,
  onPlayPause
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [progress, setProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [volume, setVolume] = useState<number>(70);
  
  // Обработка загрузки аудио
  useEffect(() => {
    const audio = audioRef.current;
    
    if (audio) {
      // Установка начального уровня громкости
      audio.volume = volume / 100;
      
      // Установка длительности при загрузке метаданных
      const handleLoadedMetadata = () => {
        setDuration(audio.duration);
      };
      
      // Обновление прогресса во время воспроизведения
      const handleTimeUpdate = () => {
        setCurrentTime(audio.currentTime);
        setProgress((audio.currentTime / audio.duration) * 100);
      };
      
      // Обработка завершения воспроизведения
      const handleEnded = () => {
        setProgress(0);
        setCurrentTime(0);
        onPlayPause(false);
      };
      
      audio.addEventListener("loadedmetadata", handleLoadedMetadata);
      audio.addEventListener("timeupdate", handleTimeUpdate);
      audio.addEventListener("ended", handleEnded);
      
      return () => {
        audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
        audio.removeEventListener("timeupdate", handleTimeUpdate);
        audio.removeEventListener("ended", handleEnded);
      };
    }
  }, [audioUrl, volume, onPlayPause]);
  
  // Управление воспроизведением
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    
    if (isPlaying) {
      audio.play().catch(error => {
        console.error("Ошибка воспроизведения:", error);
        onPlayPause(false);
      });
    } else {
      audio.pause();
    }
  }, [isPlaying, onPlayPause]);
  
  // Функция для форматирования времени в формат MM:SS
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  // Обработчик изменения громкости
  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
  };
  
  // Обработчик перемотки
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current) return;
    
    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const newTime = percent * duration;
    
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
    setProgress(percent * 100);
  };
  
  return (
    <Card className="bg-[#F1F0FB] shadow-md">
      <CardContent className="p-4">
        <audio ref={audioRef} src={audioUrl} preload="metadata" />
        
        <div className="flex items-center mb-2">
          <Button 
            size="sm" 
            variant="ghost" 
            className="w-10 h-10 rounded-full p-0 mr-3"
            onClick={() => onPlayPause(!isPlaying)}
          >
            <Icon 
              name={isPlaying ? "Pause" : "Play"} 
              className="h-6 w-6 text-[#9b87f5]" 
            />
          </Button>
          
          <div className="flex-1">
            <div 
              className="relative h-2 bg-gray-200 rounded-full cursor-pointer" 
              onClick={handleSeek}
            >
              <Progress value={progress} className="h-2" />
            </div>
            
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
          
          <div className="flex items-center ml-4 w-24">
            <Button 
              size="sm" 
              variant="ghost" 
              className="h-8 w-8 p-0"
              onClick={() => handleVolumeChange(Math.max(0, volume - 10))}
            >
              <Icon name="VolumeX" className="h-4 w-4 text-gray-600" />
            </Button>
            
            <div className="flex-1 mx-1">
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={(e) => handleVolumeChange(Number(e.target.value))}
                className="w-full h-1 rounded-lg appearance-none cursor-pointer bg-gray-300 accent-[#9b87f5]"
              />
            </div>
            
            <Button 
              size="sm" 
              variant="ghost" 
              className="h-8 w-8 p-0"
              onClick={() => handleVolumeChange(Math.min(100, volume + 10))}
            >
              <Icon name="Volume2" className="h-4 w-4 text-gray-600" />
            </Button>
          </div>
        </div>
        
        <p className="text-xs text-gray-500 text-center italic">
          Музыка: {audioCredit}
        </p>
      </CardContent>
    </Card>
  );
};

export default AudioPlayer;
