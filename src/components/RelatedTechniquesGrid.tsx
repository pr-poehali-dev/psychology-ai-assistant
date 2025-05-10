
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export interface RelatedTechnique {
  title: string;
  description: string;
  image: string;
  icon: string;
  link?: string;
}

interface RelatedTechniquesGridProps {
  techniques: RelatedTechnique[];
  title?: string;
}

/**
 * Компонент для отображения сетки связанных техник
 */
const RelatedTechniquesGrid: React.FC<RelatedTechniquesGridProps> = ({ 
  techniques,
  title = "Другие техники, которые могут вам понравиться"
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">{title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {techniques.map((technique, index) => (
          <Card key={index} className="overflow-hidden shadow hover:shadow-md transition-shadow">
            <div className="h-40 overflow-hidden">
              <img
                src={technique.image}
                alt={technique.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2 flex items-center">
                <Icon name={technique.icon} className="mr-2 text-[#9b87f5]" />
                {technique.title}
              </h3>
              <p className="text-gray-600 mb-4">{technique.description}</p>
              <Button 
                variant="outline" 
                className="w-full border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white"
                asChild={!!technique.link}
              >
                {technique.link ? (
                  <a href={technique.link}>Подробнее</a>
                ) : (
                  <>Подробнее</>
                )}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RelatedTechniquesGrid;
