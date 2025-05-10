
import React from 'react';
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Icon name="Heart" className="text-[#9b87f5] h-6 w-6" />
          <span className="text-xl font-semibold">МойПсихолог</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-[#9b87f5] transition-colors">Главная</a>
          <a href="#techniques" className="text-gray-600 hover:text-[#9b87f5] transition-colors">Техники</a>
          <a href="#assistant" className="text-gray-600 hover:text-[#9b87f5] transition-colors">ИИ-ассистент</a>
          <a href="#" className="text-gray-600 hover:text-[#9b87f5] transition-colors">Контакты</a>
        </div>
        <Button className="bg-[#9b87f5] hover:bg-[#7E69AB]">
          Начать
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
