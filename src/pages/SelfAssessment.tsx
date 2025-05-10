import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TestCard from "@/components/assessment/TestCard";
import TestQuestion from "@/components/assessment/TestQuestion";
import TestResults from "@/components/assessment/TestResults";
import TipsSection from "@/components/assessment/TipsSection";

import {
  availableTests,
  assessmentInfo,
  anxietyReductionTips,
  getTestById,
  DiagnosticTest,
  TestResult,
} from "@/data/assessment";

const SelfAssessment: React.FC = () => {
  // Состояния для управления процессом тестирования
  const [selectedTestId, setSelectedTestId] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState<"select" | "test" | "results">(
    "select",
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [testResult, setTestResult] = useState<{
    score: number;
    result: TestResult;
  } | null>(null);

  // Реф для прокрутки к тесту
  const testSectionRef = useRef<HTMLDivElement>(null);

  // Получение выбранного теста
  const getSelectedTest = (): DiagnosticTest | null => {
    if (!selectedTestId) return null;
    const test = getTestById(selectedTestId);
    if (!test) {
      alert(
        "Этот тест находится в разработке. Пожалуйста, выберите другой тест.",
      );
      setSelectedTestId(null);
      return null;
    }
    return test;
  };

  const selectedTest = getSelectedTest();

  // Выбор теста
  const handleSelectTest = (testId: string) => {
    setSelectedTestId(testId);
    // Сбрасываем состояния при выборе нового теста
    setAnswers({});
    setCurrentQuestionIndex(0);
    setTestResult(null);
  };

  // Начало прохождения теста
  const handleStartTest = () => {
    setCurrentStep("test");
    // Прокрутка к началу теста
    setTimeout(() => {
      testSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  // Ответ на вопрос
  const handleAnswer = (questionId: number, value: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  // Переход к следующему вопросу
  const handleNextQuestion = () => {
    if (!selectedTest) return;

    if (currentQuestionIndex < selectedTest.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      // Прокрутка к началу вопроса
      testSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Завершение теста
      calculateResults();
    }
  };

  // Переход к предыдущему вопросу
  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
      // Прокрутка к началу вопроса
      testSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Расчет результатов теста
  const calculateResults = () => {
    if (!selectedTest) return;

    // Подсчет общей суммы баллов
    const totalScore = Object.values(answers).reduce(
      (sum, value) => sum + value,
      0,
    );

    // Определение результата по сумме баллов
    const result = selectedTest.results.find(
      (r) => totalScore >= r.minScore && totalScore <= r.maxScore,
    );

    if (result) {
      setTestResult({
        score: totalScore,
        result: result,
      });
      setCurrentStep("results");
      // Прокрутка к результатам
      setTimeout(() => {
        testSectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  // Повторное прохождение текущего теста
  const handleRetakeTest = () => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setTestResult(null);
    setCurrentStep("test");
  };

  // Выбор другого теста
  const handleSelectDifferentTest = () => {
    setSelectedTestId(null);
    setAnswers({});
    setCurrentQuestionIndex(0);
    setTestResult(null);
    setCurrentStep("select");
  };

  // Расчет прогресса теста
  const calculateProgress = (): number => {
    if (!selectedTest) return 0;
    return ((currentQuestionIndex + 1) / selectedTest.questions.length) * 100;
  };

  // Расчет максимально возможного балла для теста
  const calculateMaxScore = (): number => {
    if (!selectedTest) return 0;

    // Максимальный балл из результатов
    const maxFromResults = Math.max(
      ...selectedTest.results.map((r) => r.maxScore),
    );

    return maxFromResults;
  };

  // Проверка, ответил ли пользователь на текущий вопрос
  const isCurrentQuestionAnswered = (): boolean => {
    if (!selectedTest) return false;
    const currentQuestion = selectedTest.questions[currentQuestionIndex];
    return answers[currentQuestion.id] !== undefined;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F1F0FB]">
      <Navigation />

      <main className="container mx-auto px-4 py-12">
        {/* Навигационная ссылка для возврата */}
        <div className="mb-6">
          <a
            href="/"
            className="text-[#9b87f5] hover:text-[#7E69AB] flex items-center"
          >
            <Icon name="ChevronLeft" className="h-4 w-4 mr-1" />
            Вернуться на главную
          </a>
        </div>

        {/* Заголовок и описание раздела */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <h1 className="text-4xl font-bold mb-6 text-gray-800">
                {assessmentInfo.title}
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                {assessmentInfo.description}
              </p>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-6">
                <div className="flex items-start">
                  <Icon
                    name="AlertTriangle"
                    className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5"
                  />
                  <p className="text-sm text-yellow-700">
                    {assessmentInfo.disclaimer}
                  </p>
                </div>
              </div>

              <p className="font-medium">{assessmentInfo.callToAction}</p>
            </div>

            <div className="md:w-1/3">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1590071089561-27bbe9b543b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80"
                  alt="Самодиагностика"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Панель выбора теста */}
        {currentStep === "select" && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">
              Выберите тест для самодиагностики
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {availableTests.map((test) => (
                <TestCard
                  key={test.id}
                  id={test.id}
                  title={test.title}
                  description={test.shortDescription}
                  icon={test.icon}
                  timeToComplete={test.timeToComplete}
                  testType={test.testType}
                  onSelect={handleSelectTest}
                  isSelected={selectedTestId === test.id}
                />
              ))}
            </div>

            {selectedTestId && (
              <div className="flex justify-center">
                <Button
                  onClick={handleStartTest}
                  className="bg-[#9b87f5] hover:bg-[#7E69AB] py-6 px-8 text-lg"
                >
                  Начать тест
                  <Icon name="ArrowRight" className="ml-2" />
                </Button>
              </div>
            )}
          </div>
        )}

        {/* Раздел прохождения теста */}
        {currentStep === "test" && selectedTest && (
          <div ref={testSectionRef} className="mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">{selectedTest.title}</h2>
                <span className="bg-[#E5DEFF] text-[#9b87f5] px-3 py-1 rounded-full text-sm">
                  Вопрос {currentQuestionIndex + 1} из{" "}
                  {selectedTest.questions.length}
                </span>
              </div>

              <div className="mb-6">
                <p className="text-gray-600 mb-2">Прогресс:</p>
                <Progress value={calculateProgress()} className="h-2" />
              </div>

              <div className="bg-[#F1F0FB] p-4 rounded-lg mb-6">
                <p className="text-sm">{selectedTest.instructions}</p>
              </div>

              {/* Текущий вопрос */}
              <TestQuestion
                question={selectedTest.questions[currentQuestionIndex]}
                currentAnswer={
                  answers[selectedTest.questions[currentQuestionIndex].id] ||
                  null
                }
                onAnswerSelect={handleAnswer}
              />

              <div className="flex justify-between mt-6">
                <Button
                  onClick={handlePrevQuestion}
                  variant="outline"
                  disabled={currentQuestionIndex === 0}
                  className="border-[#9b87f5] text-[#9b87f5]"
                >
                  <Icon name="ArrowLeft" className="mr-2" />
                  Предыдущий
                </Button>

                <Button
                  onClick={handleNextQuestion}
                  disabled={!isCurrentQuestionAnswered()}
                  className="bg-[#9b87f5] hover:bg-[#7E69AB]"
                >
                  {currentQuestionIndex < selectedTest.questions.length - 1 ? (
                    <>
                      Следующий
                      <Icon name="ArrowRight" className="ml-2" />
                    </>
                  ) : (
                    <>
                      Завершить тест
                      <Icon name="CheckCircle" className="ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </div>

            <div className="bg-[#E5DEFF] p-4 rounded-lg">
              <div className="flex items-start">
                <Icon
                  name="Info"
                  className="h-5 w-5 text-[#9b87f5] mr-2 flex-shrink-0 mt-0.5"
                />
                <div>
                  <p className="text-sm">
                    <span className="font-medium">Автор теста:</span>{" "}
                    {selectedTest.author}, {selectedTest.year}
                  </p>
                  <p className="text-sm mt-1">
                    Для получения наиболее точных результатов, пожалуйста,
                    отвечайте честно и без длительных размышлений.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Раздел результатов теста */}
        {currentStep === "results" && selectedTest && testResult && (
          <div ref={testSectionRef} className="mb-12">
            <TestResults
              score={testResult.score}
              maxPossibleScore={calculateMaxScore()}
              result={testResult.result}
              onRetakeTest={handleRetakeTest}
              onSelectDifferentTest={handleSelectDifferentTest}
            />

            {/* Раздел с полезными советами */}
            <TipsSection
              tips={anxietyReductionTips}
              title="Советы по снижению тревожности"
            />

            {/* Ссылки на научные источники */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-3">
                Источники и литература:
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {selectedTest.references.map((ref, index) => (
                  <li key={index} className="pl-4 border-l-2 border-gray-200">
                    {ref}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default SelfAssessment;
