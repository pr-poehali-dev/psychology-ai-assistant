import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

interface TechniqueCardProps {
  title: string;
  description: string;
  icon: string;
  link?: string;
}

const TechniqueCard: React.FC<TechniqueCardProps> = ({
  title,
  description,
  icon,
  link,
}) => {
  // Функция для получения случайного изображения из Unsplash, связанного с психологией
  const getRandomImage = () => {
    const imageIds = [
      "1551847677-9b27c4a15bfc", // медитация
      "1488190735562-0a94ff2026f3", // спокойствие
      "1464377013957-f1421ed2a50e", // пляж
      "1517021795963-c752d685a71a", // горы
      "1507497110722-591549bec80e", // свечи
      "1503023491514-92fdb2ae0bec", // легкое настроение
      "1498019559366-a1cbd07b5160", // лес
    ];
    const randomId = imageIds[Math.floor(Math.random() * imageIds.length)];
    return `https://images.unsplash.com/photo-${randomId}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80`;
  };

  const renderButton = () => {
    if (link) {
      return (
        <Button
          variant="outline"
          className="w-full border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white"
          asChild
        >
          <Link to={link}>Подробнее</Link>
        </Button>
      );
    }

    return (
      <Button
        variant="outline"
        className="w-full border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white"
      >
        Подробнее
      </Button>
    );
  };

  return (
    <Card className="border-none shadow hover:shadow-md transition-shadow overflow-hidden">
      <div className="h-40 overflow-hidden">
        <img
          src={getRandomImage()}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="flex items-center text-gray-800">
          <Icon
            name={icon}
            fallback="Sparkles"
            className="mr-2 text-[#9b87f5]"
          />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter>{renderButton()}</CardFooter>
    </Card>
  );
};

export default TechniqueCard;
