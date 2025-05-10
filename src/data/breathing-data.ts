
import { type InstructionStep } from "./relaxation-data";

// Типы данных для дыхательных техник
export interface BreathingTechnique {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  instructions: InstructionStep[];
  benefits: string[];
  durationMinutes: number;
}

// Данные о дыхательных техниках
export const breathingTechniques: BreathingTechnique[] = [
  {
    id: "box-breathing",
    title: "Квадратное дыхание",
    description: "Простая и эффективная техника, которая быстро успокаивает нервную систему и снижает уровень стресса.",
    icon: "Square",
    image: "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80",
    instructions: [
      {
        title: "Подготовка",
        content: "Сядьте в удобное положение с прямой спиной. Положите руки на колени и расслабьте плечи.",
        image: "https://images.unsplash.com/photo-1552693673-1bf958298935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80",
        duration: 1
      },
      {
        title: "Вдох",
        content: "Медленно вдохните через нос, считая до 4. Почувствуйте, как воздух наполняет ваши легкие и слегка расширяет живот.",
        image: "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80",
        duration: 1
      },
      {
        title: "Задержка дыхания",
        content: "Задержите дыхание на 4 счета. Сохраняйте расслабленное состояние, не напрягаясь.",
        image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80",
        duration: 1
      },
      {
        title: "Выдох",
        content: "Медленно выдохните через рот, считая до 4. Полностью опустошите легкие.",
        image: "https://images.unsplash.com/photo-1486218119243-13883505764c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80",
        duration: 1
      },
      {
        title: "Пауза",
        content: "Оставайтесь с пустыми легкими еще 4 счета перед новым вдохом.",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80",
        duration: 1
      },
      {
        title: "Повторение",
        content: "Повторите цикл 4-5 раз. Постепенно вы почувствуете, как ваше тело расслабляется, а ум успокаивается.",
        image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80",
        duration: 2
      }
    ],
    benefits: [
      "Быстрое снижение стресса",
      "Снижение кровяного давления",
      "Улучшение концентрации",
      "Помощь при панических атаках",
      "Улучшение качества сна"
    ],
    durationMinutes: 5
  },
  {
    id: "4-7-8-technique",
    title: "Техника 4-7-8",
    description: "Мощная техника дыхания, разработанная доктором Эндрю Вейлом, для быстрого расслабления и засыпания.",
    icon: "Moon",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80",
    instructions: [
      {
        title: "Подготовка",
        content: "Сядьте с прямой спиной или лягте на спину. Расслабьте плечи и положите кончик языка за верхними зубами.",
        image: "https://images.unsplash.com/photo-1552693673-1bf958298935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80",
        duration: 1
      },
      {
        title: "Выдох через рот",
        content: "Полностью выдохните через рот, создавая мягкий шипящий звук.",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80",
        duration: 1
      },
      {
        title: "Вдох через нос",
        content: "Закройте рот и тихо вдохните через нос, считая до 4.",
        image: "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80",
        duration: 1
      },
      {
        title: "Задержка дыхания",
        content: "Задержите дыхание, считая до 7.",
        image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80",
        duration: 2
      },
      {
        title: "Выдох",
        content: "Выдохните полностью через рот со звуком, считая до 8.",
        image: "https://images.unsplash.com/photo-1486218119243-13883505764c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80",
        duration: 2
      },
      {
        title: "Повторение",
        content: "Повторите цикл 3-4 раза. Техника становится более эффективной с регулярной практикой.",
        image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80",
        duration: 2
      }
    ],
    benefits: [
      "Помогает быстро заснуть",
      "Снижает тревогу и стресс",
      "Помогает контролировать эмоциональные реакции",
      "Снижает кровяное давление",
      "Улучшает пищеварение"
    ],
    durationMinutes: 7
  },
  {
    id: "diaphragmatic-breathing",
    title: "Диафрагмальное дыхание",
    description: "Также известное как 'брюшное дыхание', оно помогает задействовать диафрагму и максимально наполнить легкие воздухом.",
    icon: "Lungs",
    image: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80",
    instructions: [
      {
        title: "Подготовка",
        content: "Лягте на спину или сядьте в удобное положение. Положите одну руку на грудь, а другую - на живот чуть ниже ребер.",
        image: "https://images.unsplash.com/photo-1552693673-1bf958298935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80",
        duration: 1
      },
      {
        title: "Вдох",
        content: "Медленно вдохните через нос, чувствуя, как живот поднимается под рукой. Рука на груди должна оставаться относительно неподвижной.",
        image: "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80",
        duration: 1
      },
      {
        title: "Выдох",
        content: "Сожмите мышцы живота и выдохните через сжатые губы, контролируя выход воздуха. Почувствуйте, как опускается живот.",
        image: "https://images.unsplash.com/photo-1486218119243-13883505764c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80",
        duration: 1
      },
      {
        title: "Ритм дыхания",
        content: "Повторяйте дыхание в ритме 5-10 дыханий в минуту: вдох примерно 4-5 секунд, выдох 5-6 секунд.",
        image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80",
        duration: 2
      },
      {
        title: "Практика",
        content: "Продолжайте это упражнение 5-10 минут. С практикой вы сможете использовать диафрагмальное дыхание в любом положении.",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80",
        duration: 2
      }
    ],
    benefits: [
      "Снижает уровень кортизола (гормона стресса)",
      "Снижает частоту сердечных сокращений",
      "Помогает при астме и ХОБЛ",
      "Улучшает сердечную функцию",
      "Повышает энергию и снижает усталость"
    ],
    durationMinutes: 10
  }
];

// Краткая информация для страницы дыхательных техник
export const breathingInfo = {
  introduction: "Дыхательные техники — это мощные инструменты для быстрого снижения стресса, тревоги и напряжения. Они влияют на автономную нервную систему, помогая переключиться из состояния 'бей или беги' в состояние расслабления и восстановления.",
  scienceFacts: [
    "Медленное глубокое дыхание активирует парасимпатическую нервную систему, отвечающую за расслабление и восстановление.",
    "Исследования показывают, что регулярная практика дыхательных техник снижает уровень кортизола и адреналина — гормонов стресса.",
    "Всего 5 минут глубокого дыхания могут снизить кровяное давление на 10-15 мм рт. ст.",
    "Контролируемое дыхание улучшает вариабельность сердечного ритма — важный показатель здоровья сердечно-сосудистой системы."
  ],
  howToUse: "Для максимальной эффективности практикуйте дыхательные техники ежедневно, даже когда не испытываете стресс. Это тренирует вашу нервную систему, делая её более устойчивой к стрессовым ситуациям. Выберите одну или несколько техник, которые вам подходят, и интегрируйте их в свой распорядок дня."
};

// Частые вопросы о дыхательных техниках
export const breathingFAQs = [
  {
    question: "Как часто нужно практиковать дыхательные техники?",
    answer: "Для достижения заметных результатов рекомендуется практиковать дыхательные техники ежедневно, хотя бы по 5-10 минут. Однако даже несколько глубоких вдохов в стрессовой ситуации могут помочь вернуть спокойствие. Подобно любому навыку, чем больше вы практикуетесь, тем естественнее становится этот процесс."
  },
  {
    question: "Какая техника лучше всего подходит для снятия острой тревоги?",
    answer: "Для быстрого снятия острой тревоги или паники особенно эффективна техника 4-7-8. Фокусировка на счете и длительный выдох помогают быстро активировать парасимпатическую нервную систему. Также в острых случаях хорошо работает квадратное дыхание, которое легко запомнить и применять в любой ситуации."
  },
  {
    question: "Могут ли возникнуть побочные эффекты от дыхательных упражнений?",
    answer: "У некоторых людей глубокое дыхание может вызвать легкое головокружение из-за изменения уровня CO₂ в крови. Если это происходит, просто вернитесь к нормальному дыханию и в следующий раз снизьте интенсивность практики. Людям с определенными заболеваниями (астма, ХОБЛ, сердечно-сосудистые заболевания) следует проконсультироваться с врачом перед началом интенсивной практики дыхательных техник."
  },
  {
    question: "Какая техника лучше всего подходит для засыпания?",
    answer: "Техника 4-7-8 считается одной из самых эффективных для засыпания. Разработчик этой техники, доктор Эндрю Вейл, называет ее 'естественным транквилизатором для нервной системы'. Для улучшения сна рекомендуется практиковать эту технику перед сном, лежа в постели в темноте."
  },
  {
    question: "Как объяснить дыхательные техники детям?",
    answer: "Для детей лучше всего использовать образные сравнения. Например, 'надуй животик как шарик' для диафрагмального дыхания, или 'подуй на горячий чай' для медленного выдоха. Также эффективны визуальные подсказки — раскрашивание мандал во время дыхания или использование игрушек, которые нужно 'качать на волнах' дыхания."
  }
];
