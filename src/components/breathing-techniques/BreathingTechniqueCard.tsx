
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { BreathingTechnique } from "@/data/breathing-data";

interface BreathingTechniqueCardProps {
  technique: BreathingTechnique;
  onSelect: (techniqueId: string) => void;
  isActive: boolean;
}

const BreathingTechniqueCard: React.FC<BreathingTechniqueCardProps> = ({
  technique,
  onSelect,
  isActive
}) => {
  return (
    <Card 
      className={`
        shadow-md hover:shadow-lg transition-all cursor-pointer 
        border-2 overflow-hidden
        ${isActive ? 'border-[#9b87f5]' : 'border-transparent'}
      `}
      onClick={() => onSelect(technique.id)}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={technique.image}
          alt={technique.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <div className={`p-2 rounded-full bg-[#E5DEFF] ${isActive ? 'bg-[#9b87f5] text-white' : 'text-[#9b87f5]'}`}>
            <Icon name={technique.icon} className="h-5 w-5" />
          </div>
          <h3 className="text-xl font-bold">{technique.title}</h3>
        </div>
        
        <p className="text-gray-600 mb-4">{technique.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            {technique.durationMinutes} мин
          </span>
          
          <Button 
            variant={isActive ? "default" : "outline"} 
            size="sm"
            className={isActive ? 
              "bg-[#9b87f5] hover:bg-[#7E69AB]" : 
              "border-[#9b87f5] text-[#9b87f5]"
            }
            onClick={(e) => {
              e.stopPropagation();
              onSelect(technique.id);
            }}
          >
            {isActive ? "Выбрано" : "Выбрать"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BreathingTechniqueCard;
