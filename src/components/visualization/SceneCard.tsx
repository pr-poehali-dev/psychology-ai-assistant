
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { VisualizationScene } from "@/data/visualization-data";

interface SceneCardProps {
  scene: VisualizationScene;
  onSelect: (sceneId: string) => void;
  isActive: boolean;
}

const SceneCard: React.FC<SceneCardProps> = ({
  scene,
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
      onClick={() => onSelect(scene.id)}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={scene.coverImage}
          alt={scene.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <div className={`p-2 rounded-full ${isActive ? 'bg-[#9b87f5] text-white' : 'bg-[#E5DEFF] text-[#9b87f5]'}`}>
            <Icon name="Sparkles" className="h-5 w-5" />
          </div>
          <h3 className="text-xl font-bold">{scene.title}</h3>
        </div>
        
        <p className="text-gray-600 mb-4">{scene.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            {scene.duration} мин
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
              onSelect(scene.id);
            }}
          >
            {isActive ? "Выбрано" : "Выбрать"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SceneCard;
