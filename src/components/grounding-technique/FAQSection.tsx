
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
}

/**
 * Секция часто задаваемых вопросов о технике
 */
const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Часто задаваемые вопросы</h2>
      
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left font-medium">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQSection;
