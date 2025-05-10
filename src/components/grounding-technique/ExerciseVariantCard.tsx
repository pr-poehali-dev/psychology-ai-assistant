
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { GroundingExercise } from "@/data/grounding-technique-data";

interface ExerciseVariantCardProps {
  exercise: GroundingExercise;
  isActive: boolean;
  onSelect: (exerciseId: string) => void;
}

const ExerciseVariantCard: React.FC<ExerciseVariantCardProps> = ({
  exercise,
  isActive,
  onSelect
}) => {
  return (
    <Card 
      className={`
        shadow-md hover:shadow-lg transition-all cursor-pointer
        border-2 overflow-hidden
        ${isActive ? 'border-[#9b87f5]' : 'border-transparent'}
      `}
      onClick={() => onSelect(exercise.id)}
    >
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className={`p-2 rounded-full ${isActive ? 'bg-[#9b87f5] text-white' : 'bg-[#E5DEFF] text-[#9b87f5]'}`}>
            <Icon name="Anchor" className="h-5 w-5" />
          </div>
          <h3 className="text-xl font-bold">{exercise.title}</h3>
        </div>
        
        <p className="text-gray-600 mb-4">{exercise.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            {exercise.duration} мин
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
              onSelect(exercise.id);
            }}
          >
            {isActive ? "Выбрано" : "Выбрать"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExerciseVariantCard;
