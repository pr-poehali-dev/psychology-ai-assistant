
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { TestQuestion as TestQuestionType, TestOption } from '@/data/assessment-data';

interface TestQuestionProps {
  question: TestQuestionType;
  currentAnswer: number | null;
  onAnswerSelect: (questionId: number, optionValue: number) => void;
}

const TestQuestion: React.FC<TestQuestionProps> = ({
  question,
  currentAnswer,
  onAnswerSelect
}) => {
  return (
    <Card className="mb-4">
      <CardContent className="p-6">
        <h3 className="text-lg font-medium mb-4">
          {question.id}. {question.text}
        </h3>
        
        <RadioGroup 
          value={currentAnswer !== null ? currentAnswer.toString() : undefined}
          onValueChange={(value) => onAnswerSelect(question.id, parseInt(value))}
          className="space-y-3"
        >
          {question.options.map((option: TestOption) => (
            <div key={option.id} className="flex items-center space-x-2 rounded-md border p-3 hover:bg-gray-50">
              <RadioGroupItem value={option.value.toString()} id={`q${question.id}-o${option.id}`} />
              <Label 
                htmlFor={`q${question.id}-o${option.id}`}
                className="flex-1 cursor-pointer"
              >
                {option.text}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

export default TestQuestion;
