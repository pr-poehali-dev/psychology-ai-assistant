
import React from 'react';
import TechniqueCard from './TechniqueCard';
import { techniques } from '@/data/techniques';

const TechniquesSection = () => {
  return (
    <section id="techniques" className="py-16 bg-[#F1F0FB]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Техники психологической разгрузки</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techniques.map((technique, index) => (
            <TechniqueCard
              key={index}
              title={technique.title}
              description={technique.description}
              icon={technique.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechniquesSection;
