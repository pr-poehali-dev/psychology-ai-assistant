
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface TechniqueCardProps {
  title: string;
  description: string;
  icon: string;
}

const TechniqueCard: React.FC<TechniqueCardProps> = ({ title, description, icon }) => {
  return (
    <Card className="border-none shadow hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center text-gray-800">
          <Icon name={icon} fallback="Sparkles" className="mr-2 text-[#9b87f5]" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white">
          Подробнее
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TechniqueCard;
