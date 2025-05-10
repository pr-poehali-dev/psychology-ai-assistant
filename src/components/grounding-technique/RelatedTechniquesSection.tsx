
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface RelatedTechnique {
  title: string;
  description: string;
  link?: string;
  icon: string;
}

interface RelatedTechniquesSectionProps {
  techniques: RelatedTechnique[];
}

/**
 * Секция с другими похожими техниками
 */
const RelatedTechniquesSection: React.FC<RelatedTechniquesSectionProps> = ({ techniques }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Другие полезные техники</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {techniques.map((technique, index) => (
          <Card key={index} className="overflow-hidden shadow hover:shadow-md transition-shadow">
            <CardContent className="p-5">
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
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RelatedTechniquesSection;
