
import React, { useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQSection from "@/components/progressive-relaxation/FAQSection";
import RelatedTechniques from "@/components/progressive-relaxation/RelatedTechniques";
import VisualizationHero from "@/components/visualization/VisualizationHero";
import SceneCard from "@/components/visualization/SceneCard";
import VisualizationPlayer from "@/components/visualization/VisualizationPlayer";

import { 
  visualizationScenes,
  visualizationBenefits,
  visualizationFAQs,
  visualizationFacts,
  visualizationTips
} from "@/data/visualization-data";
import { relatedTechniques } from "@/data/relaxation-data";

const Visualization: React.FC = () => {
  // Состояние для отслеживания выбранной сцены
  const [selectedSceneId, setSelectedSceneId] = useState<string>(visualizationScenes[0].id);
  const playerRef = useRef<HTMLDivElement>(null);
  
  // Найти выбранную сцену
  const selectedScene = visualizationScenes.find(
    scene => scene.id === selectedSceneId
  ) || visualizationScenes[0];
  
  // Функция для прокрутки к плееру
  const scrollToPlayer = () => {
    playerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  // Функция для выбора сцены и прокрутки к плееру
  const handleSelectScene = (sceneId: string) => {
    setSelectedSceneId(sceneId);
    setTimeout(scrollToPlayer, 100);
  };
  
  // Модифицируем связанные техники для отображения на этой странице
  const modifiedRelatedTechniques = [
    {
      ...relatedTechniques[0], // Майндфулнесс медитация
      link: "/techniques/mindfulness-meditation"
    },
    {
      ...relatedTechniques[1], // Дыхательные практики
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
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Выберите сцену для визуализации</h2>
          <p className="text-lg text-gray-600 mb-8">
            Выберите место, которое вызывает у вас чувство покоя и умиротворения. 
            Каждая сцена сопровождается подробными инструкциями и расслабляющей музыкой.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visualizationScenes.map(scene => (
              <SceneCard 
                key={scene.id}
                scene={scene}
                onSelect={handleSelectScene}
                isActive={scene.id === selectedSceneId}
              />
            ))}
          </div>
        </div>
        
        {/* Плеер для визуализации */}
        <div ref={playerRef} className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Практика визуализации
          </h2>
          
          <VisualizationPlayer scene={selectedScene} />
        </div>
        
        {/* Вкладки с руководством по практике */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Руководство по практике</h2>
          
          <Tabs defaultValue="beginners">
            <TabsList className="mb-6 grid w-full grid-cols-3">
              <TabsTrigger value="beginners">Для начинающих</TabsTrigger>
              <TabsTrigger value="advanced">Углубленная практика</TabsTrigger>
              <TabsTrigger value="tips">Полезные советы</TabsTrigger>
            </TabsList>
            
            <TabsContent value="beginners" className="p-4 bg-gray-50 rounded-md">
              <h3 className="text-xl font-bold mb-3">Руководство для начинающих</h3>
              <p className="mb-4">
                Если вы только начинаете практиковать визуализацию, следуйте этим рекомендациям 
                для достижения наилучших результатов:
              </p>
              
              <ol className="space-y-4 mb-4">
                <li className="flex items-start">
                  <div className="bg-[#E5DEFF] rounded-full h-6 w-6 flex items-center justify-center text-[#9b87f5] font-bold mr-3 mt-0.5 flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-medium">Создайте комфортную обстановку</h4>
                    <p>Найдите тихое место, где вас никто не потревожит. Используйте приглушённый свет, удобную одежду и подходящую температуру.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#E5DEFF] rounded-full h-6 w-6 flex items-center justify-center text-[#9b87f5] font-bold mr-3 mt-0.5 flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-medium">Начните с короткой практики</h4>
                    <p>Для начала достаточно 5-10 минут. Позже вы сможете увеличить продолжительность сессий.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#E5DEFF] rounded-full h-6 w-6 flex items-center justify-center text-[#9b87f5] font-bold mr-3 mt-0.5 flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-medium">Подготовьтесь с помощью дыхания</h4>
                    <p>Перед началом визуализации сделайте несколько глубоких вдохов, чтобы успокоить ум и расслабить тело.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#E5DEFF] rounded-full h-6 w-6 flex items-center justify-center text-[#9b87f5] font-bold mr-3 mt-0.5 flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-medium">Следуйте за голосом</h4>
                    <p>Позвольте инструкциям направлять вас. Не пытайтесь контролировать каждый аспект визуализации, просто следуйте подсказкам.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#E5DEFF] rounded-full h-6 w-6 flex items-center justify-center text-[#9b87f5] font-bold mr-3 mt-0.5 flex-shrink-0">5</div>
                  <div>
                    <h4 className="font-medium">Будьте терпеливы</h4>
                    <p>Визуализация — это навык, который развивается с практикой. Если поначалу сложно удерживать образы, это совершенно нормально.</p>
                  </div>
                </li>
              </ol>
            </TabsContent>
            
            <TabsContent value="advanced" className="p-4 bg-gray-50 rounded-md">
              <h3 className="text-xl font-bold mb-3">Углубленная практика</h3>
              <p className="mb-4">
                Когда вы освоите основы, попробуйте эти техники для углубления вашей практики:
              </p>
              
              <ul className="space-y-4 mb-4">
                <li className="flex items-start">
                  <Icon name="Stars" className="h-6 w-6 text-[#9b87f5] mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Используйте все органы чувств</h4>
                    <p>Добавляйте к образам звуки, запахи, вкусы и тактильные ощущения. Чем больше чувств вы задействуете, тем глубже будет опыт визуализации.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Icon name="Stars" className="h-6 w-6 text-[#9b87f5] mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Создайте личное "безопасное место"</h4>
                    <p>Разработайте собственное место силы, куда вы можете мысленно возвращаться в моменты стресса. Добавьте в него все детали, которые создают ощущение безопасности.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Icon name="Stars" className="h-6 w-6 text-[#9b87f5] mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Попробуйте технику внутреннего диалога</h4>
                    <p>В процессе визуализации представьте встречу с мудрым наставником или будущей версией себя. Задайте вопрос и прислушайтесь к ответу.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Icon name="Stars" className="h-6 w-6 text-[#9b87f5] mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Используйте цветотерапию</h4>
                    <p>Представляйте себя окруженным целительными цветами. Например, синий для спокойствия, зеленый для гармонии, фиолетовый для вдохновения.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Icon name="Stars" className="h-6 w-6 text-[#9b87f5] mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Ведите дневник визуализаций</h4>
                    <p>После каждой практики записывайте свои впечатления, инсайты и ощущения. Это поможет отслеживать прогресс и углублять практику.</p>
                  </div>
                </li>
              </ul>
            </TabsContent>
            
            <TabsContent value="tips" className="p-4 bg-gray-50 rounded-md">
              <h3 className="text-xl font-bold mb-3">Полезные советы</h3>
              
              <div className="space-y-4">
                {visualizationTips.map((tip, index) => (
                  <Card key={index} className="bg-white shadow-sm">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-[#9b87f5]">{tip.title}</h4>
                      <p className="text-gray-700 mt-1">{tip.content}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Секция остальных преимуществ */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Все преимущества визуализации</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {visualizationBenefits.map((benefit, index) => (
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
        
        {/* Секция с частыми вопросами */}
        <FAQSection faqItems={visualizationFAQs} />
        
        {/* Секция с похожими техниками */}
        <RelatedTechniques techniques={modifiedRelatedTechniques} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Visualization;
