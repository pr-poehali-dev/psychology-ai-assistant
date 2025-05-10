
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

/**
 * Компонент с табами для дополнительной информации о дыхательных техниках
 */
const BreathingTabs: React.FC = () => {
  return (
    <Tabs defaultValue="daily-use">
      <TabsList className="mb-6 grid w-full grid-cols-3">
        <TabsTrigger value="daily-use">Ежедневная практика</TabsTrigger>
        <TabsTrigger value="stress-relief">В моменты стресса</TabsTrigger>
        <TabsTrigger value="sleep">Для улучшения сна</TabsTrigger>
      </TabsList>
      
      <TabsContent value="daily-use" className="p-4 bg-gray-50 rounded-md">
        <h3 className="text-xl font-bold mb-3">Ежедневная практика дыхания</h3>
        <p className="mb-4">
          Регулярная практика дыхательных техник помогает натренировать нервную систему 
          и сделать её более устойчивой к стрессу. Рекомендуется выделять 5-10 минут 
          утром и вечером для дыхательных упражнений.
        </p>
        <h4 className="font-semibold mb-2">Рекомендации:</h4>
        <ul className="space-y-2">
          <li className="flex items-start">
            <Icon name="Clock" className="h-5 w-5 text-[#9b87f5] mr-2 flex-shrink-0 mt-0.5" />
            <span>Практикуйте в одно и то же время, чтобы сформировать привычку</span>
          </li>
          <li className="flex items-start">
            <Icon name="Home" className="h-5 w-5 text-[#9b87f5] mr-2 flex-shrink-0 mt-0.5" />
            <span>Создайте специальное место для практики, где вас никто не побеспокоит</span>
          </li>
          <li className="flex items-start">
            <Icon name="Bell" className="h-5 w-5 text-[#9b87f5] mr-2 flex-shrink-0 mt-0.5" />
            <span>Установите напоминания на телефоне</span>
          </li>
        </ul>
      </TabsContent>
      
      <TabsContent value="stress-relief" className="p-4 bg-gray-50 rounded-md">
        <h3 className="text-xl font-bold mb-3">Дыхание в моменты стресса</h3>
        <p className="mb-4">
          В моменты острого стресса нужны техники, которые можно применить быстро 
          и незаметно для окружающих. Техника "4-7-8" и квадратное дыхание 
          особенно эффективны в таких ситуациях.
        </p>
        <h4 className="font-semibold mb-2">Ситуации для применения:</h4>
        <ul className="space-y-2">
          <li className="flex items-start">
            <Icon name="Users" className="h-5 w-5 text-[#9b87f5] mr-2 flex-shrink-0 mt-0.5" />
            <span>Перед важными переговорами или выступлением</span>
          </li>
          <li className="flex items-start">
            <Icon name="AlertCircle" className="h-5 w-5 text-[#9b87f5] mr-2 flex-shrink-0 mt-0.5" />
            <span>При возникновении конфликтной ситуации</span>
          </li>
          <li className="flex items-start">
            <Icon name="Brain" className="h-5 w-5 text-[#9b87f5] mr-2 flex-shrink-0 mt-0.5" />
            <span>Когда замечаете, что "накручиваете" себя негативными мыслями</span>
          </li>
        </ul>
      </TabsContent>
      
      <TabsContent value="sleep" className="p-4 bg-gray-50 rounded-md">
        <h3 className="text-xl font-bold mb-3">Дыхание для улучшения сна</h3>
        <p className="mb-4">
          Правильное дыхание перед сном помогает успокоить ум и подготовить тело 
          к отдыху. Техника "4-7-8" особенно эффективна для засыпания, а диафрагмальное 
          дыхание помогает расслабить тело.
        </p>
        <h4 className="font-semibold mb-2">Вечерний ритуал:</h4>
        <ul className="space-y-2">
          <li className="flex items-start">
            <Icon name="Smartphone" className="h-5 w-5 text-[#9b87f5] mr-2 flex-shrink-0 mt-0.5" />
            <span>Отложите электронные устройства за час до сна</span>
          </li>
          <li className="flex items-start">
            <Icon name="MoonStar" className="h-5 w-5 text-[#9b87f5] mr-2 flex-shrink-0 mt-0.5" />
            <span>Приглушите свет и создайте спокойную атмосферу</span>
          </li>
          <li className="flex items-start">
            <Icon name="Wind" className="h-5 w-5 text-[#9b87f5] mr-2 flex-shrink-0 mt-0.5" />
            <span>Практикуйте дыхательную технику "4-7-8" лежа в постели</span>
          </li>
        </ul>
      </TabsContent>
    </Tabs>
  );
};

export default BreathingTabs;
