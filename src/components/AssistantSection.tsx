
import React from 'react';
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import AssistantDialog from './AssistantDialog';
import { assistantFeatures } from '@/data/techniques';

const AssistantSection = () => {
  return (
    <section id="assistant" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">ИИ-ассистент для психологической поддержки</h2>
            <p className="text-lg text-gray-600 mb-6">
              Наш ИИ-ассистент всегда готов выслушать вас и предложить поддержку в трудную минуту. Он поможет снять тревогу, справиться со стрессом и направит к дальнейшим ресурсам, если это необходимо.
            </p>
            <ul className="space-y-3 mb-8">
              {assistantFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Icon name="CheckCircle" className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-lg py-6 px-8">
              Начать диалог
              <Icon name="ArrowRight" className="ml-2" />
            </Button>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <AssistantDialog />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssistantSection;
