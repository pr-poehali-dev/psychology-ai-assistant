
import React from 'react';
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Психологическая помощь<br />в одно касание</h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Получите поддержку от наших специалистов и ИИ-ассистента в любое время и в любом месте
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-lg py-6 px-8">
            Поговорить с ассистентом
            <Icon name="MessageSquare" className="ml-2" />
          </Button>
          <Button variant="outline" className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white text-lg py-6 px-8">
            Экспресс-техники
            <Icon name="Zap" className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
