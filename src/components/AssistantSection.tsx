import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import AssistantDialog from "./AssistantDialog";
import ExpressHelpCard from "./ExpressHelpCard";
import { assistantFeatures } from "@/data/techniques";

const AssistantSection = () => {
  return (
    <section id="assistant" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              ИИ-ассистент для психологической поддержки
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Наш ИИ-ассистент всегда готов выслушать вас и предложить поддержку
              в трудную минуту. Он поможет снять тревогу, справиться со стрессом
              и направит к дальнейшим ресурсам, если это необходимо.
            </p>

            <div className="flex mb-8">
              <img
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                alt="ИИ-ассистент"
                className="w-32 h-32 rounded-full border-4 border-[#E5DEFF] shadow-md mr-4"
              />
              <ul className="space-y-3">
                {assistantFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Icon
                      name="CheckCircle"
                      className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-lg py-6 px-8">
              Начать диалог
              <Icon name="ArrowRight" className="ml-2" />
            </Button>

            <a href="/techniques/visualization">
              <ExpressHelpCard
                title="Визуализация"
                description="Мысленное путешествие"
                content="Представьте спокойное место, где вы чувствуете себя в безопасности. Задействуйте все органы чувств."
                icon="Star"
                action="Начать визуализацию"
                actionIcon="Compass"
                bgColor="bg-[#FDE1D3]"
                iconColor="text-orange-500"
              />
            </a>
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
