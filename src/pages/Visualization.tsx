
import React, { useRef, useState, useCallback } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

// Импорт компонентов визуализации
import VisualizationHero from "@/components/visualization/VisualizationHero";
import VisualizationPlayer from "@/components/visualization/VisualizationPlayer";
import SceneSelector from "@/components/visualization/SceneSelector";
import VisualizationGuide from "@/components/visualization/VisualizationGuide";
import BenefitsGrid from "@/components/visualization/BenefitsGrid";
import VisualizationFAQ from "@/components/visualization/VisualizationFAQ";
import RelatedTechniquesGrid from "@/components/RelatedTechniquesGrid";

// Импорт данных
import { 
  visualizationScenes,
  visualizationBenefits,
  visualizationFAQs,
  visualizationFacts,
  visualizationTips
} from "@/data/visualization-data";

/**
 * Страница визуализации
 * Представляет различные техники визуализации и позволяет пользователю 
 * выбирать сцены для практики
 */
const Visualization: React.FC = () => {
  // Состояние для отслеживания выбранной сцены
  const [selectedSceneId, setSelectedSceneId] = useState<string>(visualizationScenes[0].id);
  
  // Реф для прокрутки к плееру
  const playerRef = useRef<HTMLDivElement>(null);
  
  // Найти выбранную сцену
  const selectedScene = visualizationScenes.find(
    scene => scene.id === selectedSceneId
  ) || visualizationScenes[0];
  
  // Функция для прокрутки к плееру
  const scrollToPlayer = useCallback(() => {
    playerRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);
  
  // Функция для выбора сцены и прокрутки к плееру
  const handleSelectScene = useCallback((sceneId: string) => {
    setSelectedSceneId(sceneId);
    setTimeout(scrollToPlayer, 100);
  }, [scrollToPlayer]);
  
  // Связанные техники для отображения на странице
  const relatedTechniques = [
    {
      title: "Майндфулнесс медитация",
      description: "Практика осознанности, помогающая сосредоточиться на настоящем моменте.",
      image: "https://images.unsplash.com/photo-1488190735562-0a94ff2026f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      icon: "Leaf",
      link: "/techniques/mindfulness-meditation"
    },
    {
      title: "Дыхательные практики",
      description: "Техники дыхания для быстрого снятия стресса и нормализации состояния.",
      image: "https://images.unsplash.com/photo-1551847677-9b27c4a15bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      icon: "Wind",
      link: "/techniques/breathing"
    },
    {
      title: "Прогрессивная мышечная релаксация",
      description: "Техника поочередного напряжения и расслабления групп мышц для снятия физического напряжения.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      icon: "Activity",
      link: "/techniques/progressive-relaxation"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F1F0FB]">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        {/* Навигационная ссылка для возврата */}
        <div className="mb-6">
          <a href="/" className="text-[#9b87f5] hover:text-[#7E69AB] flex items-center">
            <Icon name="ChevronLeft" className="h-4 w-4 mr-1" />
            Вернуться на главную
          </a>
        </div>
        
        {/* Героический раздел с информацией о визуализации */}
        <VisualizationHero 
          benefits={visualizationBenefits}
          facts={visualizationFacts}
          onStartVisualization={scrollToPlayer}
        />
        
        {/* Секция с выбором сцены для визуализации */}
        <SceneSelector 
          scenes={visualizationScenes}
          selectedSceneId={selectedSceneId}
          onSelectScene={handleSelectScene}
        />
        
        {/* Плеер для визуализации */}
        <div ref={playerRef} className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Практика визуализации
          </h2>
          
          <VisualizationPlayer scene={selectedScene} />
        </div>
        
        {/* Вкладки с руководством по практике */}
        <VisualizationGuide tips={visualizationTips} />
        
        {/* Секция преимуществ визуализации */}
        <BenefitsGrid benefits={visualizationBenefits} />
        
        {/* Секция с частыми вопросами */}
        <VisualizationFAQ faqs={visualizationFAQs} />
        
        {/* Секция с похожими техниками */}
        <RelatedTechniquesGrid techniques={relatedTechniques} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Visualization;
