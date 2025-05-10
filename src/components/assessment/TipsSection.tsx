
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface Tip {
  title: string;
  content: string;
  icon: string;
}

interface TipsSectionProps {
  tips: Tip[];
  title: string;
}

const TipsSection: React.FC<TipsSectionProps> = ({ tips, title }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tips.map((tip, index) => (
          <Card key={index} className="h-full">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <div className="bg-[#E5DEFF] p-2 rounded-lg">
                  <Icon name={tip.icon} className="h-5 w-5 text-[#9b87f5]" />
                </div>
                
                <div>
                  <h3 className="font-semibold mb-1">{tip.title}</h3>
                  <p className="text-sm text-gray-600">{tip.content}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TipsSection;
