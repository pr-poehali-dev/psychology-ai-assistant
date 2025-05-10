
import React from "react";
import Icon from "@/components/ui/icon";

interface BenefitsListProps {
  benefits: string[];
}

const BenefitsList: React.FC<BenefitsListProps> = ({ benefits }) => {
  return (
    <ul className="space-y-2 mb-6">
      {benefits.map((benefit, index) => (
        <li key={index} className="flex items-start">
          <Icon 
            name="CheckCircle" 
            className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" 
          />
          <span>{benefit}</span>
        </li>
      ))}
    </ul>
  );
};

export default BenefitsList;
