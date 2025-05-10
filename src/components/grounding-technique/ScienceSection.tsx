
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface ScienceSectionProps {
  scientificBasis: string[];
  research: Array<{
    title: string;
    authors: string;
    year: string;
    journal: string;
    summary: string;
  }>;
}

const ScienceSection: React.FC<ScienceSectionProps> = ({
  scientificBasis,
  research
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Научное обоснование</h2>
      
      <div className="mb-8">
        <ul className="space-y-3">
          {scientificBasis.map((fact, index) => (
            <li key={index} className="flex items-start">
              <Icon 
                name="FlaskConical" 
                className="h-5 w-5 text-[#9b87f5] mr-2 flex-shrink-0 mt-0.5" 
              />
              <span>{fact}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <h3 className="text-xl font-bold mb-4 text-gray-800">Исследования эффективности</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {research.map((study, index) => (
          <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-5">
              <h4 className="font-bold text-lg mb-2 text-[#9b87f5]">{study.title}</h4>
              <p className="text-sm text-gray-500 mb-3">
                {study.authors}, {study.year}
              </p>
              <p className="text-sm mb-2">
                <span className="font-medium">Журнал:</span> {study.journal}
              </p>
              <p className="text-gray-600">{study.summary}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ScienceSection;
