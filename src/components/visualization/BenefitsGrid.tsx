
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { VisualizationBenefit } from '@/data/visualization-data';

interface BenefitsGridProps {
  benefits: VisualizationBenefit[];
}

/**
 * Компонент для отображения сетки преимуществ визуализации
 */
const BenefitsGrid: React.FC<BenefitsGridProps> = ({ benefits }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Все преимущества визуализации</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <Card key={index} className="shadow-sm overflow-hidden">
            <CardContent className="p-5">
              <div className="bg-[#E5DEFF] p-3 rounded-lg inline-block mb-3">
                <Icon name={benefit.icon} className="h-6 w-6 text-[#9b87f5]" />
              </div>
              <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BenefitsGrid;
