
import React from 'react';
import SceneCard from './SceneCard';
import { VisualizationScene } from '@/data/visualization-data';

interface SceneSelectorProps {
  scenes: VisualizationScene[];
  selectedSceneId: string;
  onSelectScene: (sceneId: string) => void;
}

/**
 * Компонент для выбора сцены визуализации
 */
const SceneSelector: React.FC<SceneSelectorProps> = ({
  scenes,
  selectedSceneId,
  onSelectScene
}) => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Выберите сцену для визуализации</h2>
      <p className="text-lg text-gray-600 mb-8">
        Выберите место, которое вызывает у вас чувство покоя и умиротворения. 
        Каждая сцена сопровождается подробными инструкциями и расслабляющей музыкой.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {scenes.map(scene => (
          <SceneCard 
            key={scene.id}
            scene={scene}
            onSelect={onSelectScene}
            isActive={scene.id === selectedSceneId}
          />
        ))}
      </div>
    </div>
  );
};

export default SceneSelector;
