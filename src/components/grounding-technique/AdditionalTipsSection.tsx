
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface AdditionalTipsSectionProps {
  tips: string[];
}

/**
 * Секция с дополнительными советами по технике заземления
 */
const AdditionalTipsSection: React.FC<AdditionalTipsSectionProps> = ({ tips }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Дополнительные советы</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {tips.map((tip, index) => (
          <Card key={index} className="shadow-sm">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <div className="bg-[#E5DEFF] p-2 rounded-lg">
                  <Icon name="Lightbulb" className="h-5 w-5 text-[#9b87f5]" />
                </div>
                <p className="text-gray-700">{tip}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="bg-[#F1F0FB] p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <Icon name="AlertCircle" className="mr-2 text-[#9b87f5]" />
          Важно помнить
        </h3>
        <p className="text-gray-700">
          Техника 5-4-3-2-1 не заменяет профессиональную помощь. Если вы регулярно испытываете сильную 
          тревогу, панические атаки или другие интенсивные эмоциональные состояния, рекомендуется 
          обратиться к психологу или психотерапевту. Эта техника — один из инструментов самопомощи, 
          который может быть частью комплексного подхода к вашему психологическому благополучию.
        </p>
      </div>
    </div>
  );
};

export default AdditionalTipsSection;
