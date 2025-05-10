
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface VisualizationTip {
  title: string;
  content: string;
}

interface VisualizationGuideProps {
  tips: VisualizationTip[];
}

/**
 * Компонент руководства по практике визуализации с вкладками
 */
const VisualizationGuide: React.FC<VisualizationGuideProps> = ({ tips }) => {
  return (
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
                <p>Для начала достаточно 5-10 минут. Позже вы сможете увеличить продолжительность сеансов.</p>
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
            {tips.map((tip, index) => (
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
  );
};

export default VisualizationGuide;
