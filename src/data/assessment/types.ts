
/**
 * Типы данных для модуля самооценки и тестирования
 */

// Структура вопроса теста
export interface TestQuestion {
  id: number;
  text: string;
  options: TestOption[];
}

// Вариант ответа на вопрос
export interface TestOption {
  id: number;
  text: string;
  value: number;
}

// Результат теста
export interface TestResult {
  minScore: number;
  maxScore: number;
  level: string;
  description: string;
  recommendations: string[];
}

// Полная структура диагностического теста
export interface DiagnosticTest {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  instructions: string;
  author: string;
  year: string;
  timeToComplete: string;
  questions: TestQuestion[];
  results: TestResult[];
  references: string[];
}

// Сокращенная информация о тесте для списка
export interface TestInfo {
  id: string;
  title: string;
  shortDescription: string;
  icon: string;
  timeToComplete: string;
  testType: string;
}

// Структура совета для помощи
export interface Tip {
  title: string;
  content: string;
  icon: string;
}

// Модуль информации о разделе
export interface ModuleInfo {
  title: string;
  description: string;
  disclaimer: string;
  callToAction: string;
}
