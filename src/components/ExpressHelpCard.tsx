
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface ExpressHelpCardProps {
  title: string;
  description: string;
  content: string;
  icon: string;
  action: string;
  actionIcon: string;
  bgColor: string;
  iconColor: string;
}

const ExpressHelpCard: React.FC<ExpressHelpCardProps> = ({
  title,
  description,
  content,
  icon,
  action,
  actionIcon,
  bgColor,
  iconColor
}) => {
  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
      <CardHeader className={`${bgColor} rounded-t-lg`}>
        <CardTitle className="flex items-center text-gray-800">
          <Icon name={icon} className={`mr-2 ${iconColor}`} />
          {title}
        </CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <p>{content}</p>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="text-[#9b87f5] hover:text-[#7E69AB] hover:bg-[#F1F0FB] w-full justify-start">
          <Icon name={actionIcon} className="mr-2" />
          {action}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ExpressHelpCard;
