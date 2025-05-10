import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-[#F1F0FB]">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-left md:pr-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Психологическая помощь
            <br />в одно касание
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            Получите поддержку от наших специалистов и ИИ-ассистента в любое
            время и в любом месте
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-lg py-6 px-8">
              Поговорить с ассистентом
              <Icon name="MessageSquare" className="ml-2" />
            </Button>
            <Button
              variant="outline"
              className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white text-lg py-6 px-8"
            >
              Экспресс-техники
              <Icon name="Zap" className="ml-2" />
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1573740144655-bbb6e88fb18a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=675&q=80"
            alt="Психологическая поддержка"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
