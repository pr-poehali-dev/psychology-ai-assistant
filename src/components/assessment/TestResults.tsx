
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { TestResult } from '@/data/assessment-data';

interface TestResultsProps {
  score: number;
  maxPossibleScore: number;
  result: TestResult;
  onRetakeTest: () => void;
  onSelectDifferentTest: () => void;
}

const TestResults: React.FC<TestResultsProps> = ({
  score,
  maxPossibleScore,
  result,
  onRetakeTest,
  onSelectDifferentTest
}) => {
  // Функция для определения цвета уровня тревожности
  const getLevelColor = () => {
    if (result.level.includes("Минимальный") || result.level.includes("Незначительный")) {
      return "text-green-600";
    } else if (result.level.includes("Легкая") || result.level.includes("Умеренный")) {
      return "text-yellow-600";
    } else if (result.level.includes("Умеренная") || result.level.includes("Повышенный")) {
      return "text-orange-600";
    } else {
      return "text-red-600";
    }
  };
  
  return (
    <div>
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold mb-1">Результаты теста</h2>
              <p className="text-gray-600 mb-4">Ваш результат основан на ваших ответах</p>
            </div>
            <div className="bg-[#F1F0FB] p-3 rounded-lg text-center">
              <div className="text-2xl font-bold text-[#9b87f5]">{score}</div>
              <div className="text-xs text-gray-500">из {maxPossibleScore}</div>
            </div>
          </div>
          
          <div className="bg-[#E5DEFF] p-4 rounded-lg my-4">
            <h3 className={`text-xl font-bold ${getLevelColor()}`}>
              {result.level}
            </h3>
            <p className="mt-2">{result.description}</p>
          </div>
          
          <div className="mt-6">
            <h4 className="font-semibold mb-3 flex items-center">
              <Icon name="Lightbulb" className="mr-2 text-[#9b87f5]" />
              Рекомендации:
            </h4>
            <ul className="space-y-2">
              {result.recommendations.map((rec, index) => (
                <li key={index} className="flex items-start">
                  <Icon name="CheckCircle" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <Button 
              onClick={onRetakeTest}
              variant="outline"
              className="border-[#9b87f5] text-[#9b87f5]"
            >
              <Icon name="RefreshCcw" className="mr-2" />
              Пройти тест заново
            </Button>
            
            <Button 
              onClick={onSelectDifferentTest}
              className="bg-[#9b87f5] hover:bg-[#7E69AB]"
            >
              <Icon name="ListChecks" className="mr-2" />
              Выбрать другой тест
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
        <div className="flex items-start">
          <Icon name="AlertTriangle" className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-yellow-800">Важное примечание</h4>
            <p className="text-sm text-yellow-700 mt-1">
              Результаты этого теста не являются медицинским диагнозом. Они предназначены
              только для образовательных целей и самонаблюдения. Если у вас есть серьезные
              опасения относительно вашего психического здоровья, пожалуйста, обратитесь к
              квалифицированному специалисту.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestResults;
