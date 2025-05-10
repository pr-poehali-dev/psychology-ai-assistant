
// Экспорт типов данных
export * from './types';

// Экспорт тестов
export * from './anxiety-tests';
export * from './depression-tests';
export * from './stress-tests';
export * from './personality-tests';

// Экспорт информации о модуле
export * from './module-info';

// Импорт всех тестов для создания списка доступных тестов
import { TestInfo } from './types';
import { spielbergerAnxietyTest, beckAnxietyTest } from './anxiety-tests';
import { beckDepressionTest, zungDepressionTest } from './depression-tests';
import { holmesRaheStressTest, boykoEmotionalBurnoutTest } from './stress-tests';
import { mmpiTest, leonhardTest, ghq28Test } from './personality-tests';

/**
 * Список всех доступных тестов, разделенных по категориям
 */
export const availableTests: TestInfo[] = [
  // Категория: Тревожность
  {
    id: spielbergerAnxietyTest.id,
    title: spielbergerAnxietyTest.title,
    shortDescription: spielbergerAnxietyTest.shortDescription,
    icon: "Brain",
    timeToComplete: spielbergerAnxietyTest.timeToComplete,
    testType: "Тревожность",
  },
  {
    id: beckAnxietyTest.id,
    title: beckAnxietyTest.title,
    shortDescription: beckAnxietyTest.shortDescription,
    icon: "Activity",
    timeToComplete: beckAnxietyTest.timeToComplete,
    testType: "Тревожность",
  },

  // Категория: Депрессия
  {
    id: beckDepressionTest.id,
    title: beckDepressionTest.title,
    shortDescription: beckDepressionTest.shortDescription,
    icon: "Cloud",
    timeToComplete: beckDepressionTest.timeToComplete,
    testType: "Депрессия",
  },
  {
    id: zungDepressionTest.id,
    title: zungDepressionTest.title,
    shortDescription: zungDepressionTest.shortDescription,
    icon: "Moon",
    timeToComplete: zungDepressionTest.timeToComplete,
    testType: "Депрессия",
  },

  // Категория: Стресс и выгорание
  {
    id: holmesRaheStressTest.id,
    title: holmesRaheStressTest.title,
    shortDescription: holmesRaheStressTest.shortDescription,
    icon: "Zap",
    timeToComplete: holmesRaheStressTest.timeToComplete,
    testType: "Стресс",
  },
  {
    id: boykoEmotionalBurnoutTest.id,
    title: boykoEmotionalBurnoutTest.title,
    shortDescription: boykoEmotionalBurnoutTest.shortDescription,
    icon: "Flame",
    timeToComplete: boykoEmotionalBurnoutTest.timeToComplete,
    testType: "Выгорание",
  },

  // Категория: Личностные особенности
  {
    id: mmpiTest.id,
    title: mmpiTest.title,
    shortDescription: mmpiTest.shortDescription,
    icon: "Sparkles",
    timeToComplete: mmpiTest.timeToComplete,
    testType: "Личностные особенности",
  },
  {
    id: leonhardTest.id,
    title: leonhardTest.title,
    shortDescription: leonhardTest.shortDescription,
    icon: "Star",
    timeToComplete: leonhardTest.timeToComplete,
    testType: "Личностные особенности",
  },

  // Категория: Общее психическое состояние
  {
    id: ghq28Test.id,
    title: ghq28Test.title,
    shortDescription: ghq28Test.shortDescription,
    icon: "Heart",
    timeToComplete: ghq28Test.timeToComplete,
    testType: "Общее состояние",
  },
];

/**
 * Функция для получения теста по ID
 * 
 * @param id Идентификатор теста
 * @returns Объект теста или null если тест не найден
 */
export function getTestById(id: string): any {
  switch (id) {
    case "spielberger-anxiety":
      return spielbergerAnxietyTest;
    case "beck-anxiety":
      return beckAnxietyTest;
    case "beck-depression":
      return beckDepressionTest;
    case "holmes-rahe-stress":
      return holmesRaheStressTest;
    case "zung-depression":
    case "boyko-burnout":
    case "mmpi":
    case "leonhard-test":
    case "ghq-28":
      // Тесты в разработке
      return null;
    default:
      return null;
  }
}
