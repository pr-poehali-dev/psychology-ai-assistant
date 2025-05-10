
import { DiagnosticTest } from './types';

/**
 * Опросник MMPI (СМИЛ) - заглушка
 */
export const mmpiTest: DiagnosticTest = {
  id: "mmpi",
  title: "Опросник MMPI (СМИЛ)",
  shortDescription: "Комплексная диагностика психических состояний",
  fullDescription: "Краткое описание...",
  instructions: "Краткая инструкция...",
  author: "С.Р. Хатэуэй, Дж.К. МакКинли, адаптация Л.Н. Собчик",
  year: "1940 (адаптация 1971)",
  timeToComplete: "30-60 минут",
  questions: [],
  results: [],
  references: [],
};

/**
 * Тест Леонгарда-Шмишека - заглушка
 */
export const leonhardTest: DiagnosticTest = {
  id: "leonhard-test",
  title: "Тест Леонгарда-Шмишека",
  shortDescription: "Выявление акцентуаций характера",
  fullDescription: "Краткое описание...",
  instructions: "Краткая инструкция...",
  author: "Карл Леонгард, адаптация Х. Шмишека",
  year: "1970",
  timeToComplete: "15-20 минут",
  questions: [],
  results: [],
  references: [],
};

/**
 * GHQ-28 (General Health Questionnaire) - заглушка
 */
export const ghq28Test: DiagnosticTest = {
  id: "ghq-28",
  title: "GHQ-28 (General Health Questionnaire)",
  shortDescription: "Скрининг психологического неблагополучия",
  fullDescription: "Краткое описание...",
  instructions: "Краткая инструкция...",
  author: "Дэвид Голдберг",
  year: "1978",
  timeToComplete: "10-15 минут",
  questions: [],
  results: [],
  references: [],
};
