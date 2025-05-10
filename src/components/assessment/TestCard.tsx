
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";

interface TestCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  timeToComplete: string;
  testType: string;
  onSelect: (testId: string) => void;
  isSelected?: boolean;
}

const TestCard: React.FC<TestCardProps> = ({
  id,
  title,
  description,
  icon,
  timeToComplete,
  testType,
  onSelect,
  isSelected = false
}) => {
  return (
    <Card 
      className={cn(
        "cursor-pointer transition-all duration-200 overflow-hidden",
        "hover:shadow-md",
        isSelected && "border-[#9b87f5] border-2"
      )}
      onClick={() => onSelect(id)}
    >
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="bg-[#E5DEFF] text-[#9b87f5] p-3 rounded-lg">
            <Icon name={icon} className="h-6 w-6" />
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 text-sm mb-4">{description}</p>
            
            <div className="flex justify-between text-sm text-gray-500">
              <span className="flex items-center">
                <Icon name="Clock" className="h-4 w-4 mr-1" />
                {timeToComplete}
              </span>
              <span className="bg-[#F1F0FB] px-2 py-1 rounded-full text-xs">
                {testType}
              </span>
            </div>
          </div>
        </div>
        
        <Button 
          variant={isSelected ? "default" : "outline"}
          className={cn(
            "w-full mt-4",
            isSelected ? "bg-[#9b87f5] hover:bg-[#7E69AB]" : "border-[#9b87f5] text-[#9b87f5]"
          )}
          onClick={(e) => {
            e.stopPropagation();
            onSelect(id);
          }}
        >
          {isSelected ? "Выбрано" : "Выбрать этот тест"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default TestCard;
