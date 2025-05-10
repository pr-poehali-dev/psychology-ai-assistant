
import React from 'react';
import BreathingTechniqueCard from './BreathingTechniqueCard';
import { BreathingTechnique } from '@/data/breathing-data';

interface BreathingTechniquesListProps {
  techniques: BreathingTechnique[];
  selectedTechniqueId: string;
  onSelectTechnique: (techniqueId: string) => void;
}

/**
 * Компонент отображения списка доступных дыхательных техник
 */
const BreathingTechniquesList: React.FC<BreathingTechniquesListProps> = ({
  techniques,
  selectedTechniqueId,
  onSelectTechnique
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {techniques.map(technique => (
        <BreathingTechniqueCard 
          key={technique.id}
          technique={technique}
          onSelect={onSelectTechnique}
          isActive={technique.id === selectedTechniqueId}
        />
      ))}
    </div>
  );
};

export default BreathingTechniquesList;
