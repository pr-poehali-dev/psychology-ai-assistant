import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Данные для разных типов майндфулнесс-практик
const mindfulnessTypes = [
  {
    id: "breathing",
    title: "Внимательное дыхание",
    description:
      "Самая базовая и доступная техника майндфулнесс - внимательное наблюдение за дыханием",
    image:
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    durationMinutes: 5,
    steps: [
      "Сядьте в удобную позу, выпрямите спину, расслабьте плечи",
      "Закройте глаза или мягко опустите взгляд на пол перед собой",
      "Обратите внимание на естественный ритм своего дыхания, не пытаясь его изменить",
      "Наблюдайте, как воздух входит и выходит через нос, как поднимается и опускается грудь и живот",
      "Если ум начинает блуждать, мягко верните внимание к дыханию",
      "Продолжайте наблюдать за дыханием, полностью присутствуя в каждом вдохе и выдохе",
    ],
  },
  {
    id: "bodyscan",
    title: "Сканирование тела",
    description:
      "Техника последовательного перемещения внимания по всему телу для глубокого расслабления",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    durationMinutes: 15,
    steps: [
      "Лягте на спину в удобное положение, закройте глаза",
      "Начните с осознания дыхания, делая несколько глубоких вдохов и выдохов",
      "Направьте внимание к ступням ног, ощущая любые сенсации: тепло, холод, легкость, тяжесть",
      "Медленно перемещайте внимание вверх по телу: лодыжки, голени, колени, бедра",
      "Продолжайте сканировать: таз, живот, грудь, спина, плечи, руки, шея, лицо",
      "Завершите практику, почувствовав все тело целиком, и несколько минут оставайтесь в состоянии полного осознания",
    ],
  },
  {
    id: "mindful-eating",
    title: "Осознанное питание",
    description:
      "Практика полного присутствия и внимательности во время приема пищи",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    durationMinutes: 10,
    steps: [
      "Выберите небольшой кусочек пищи (например, изюм, кусочек фрукта или орех)",
      "Внимательно рассмотрите его, как будто видите впервые, отмечая цвет, форму, текстуру",
      "Поднесите пищу к носу и обратите внимание на аромат",
      "Положите пищу в рот, но не жуйте сразу. Ощутите текстуру и вес на языке",
      "Медленно начните жевать, отмечая вкус, звуки и ощущения во рту",
      "Отследите момент глотания и ощущение пищи, проходящей по горлу",
      "Завершите практику, осознавая послевкусие и свои чувства",
    ],
  },
];

// Преимущества майндфулнесс
const mindfulnessBenefits = [
  "Снижение уровня стресса и тревоги",
  "Улучшение концентрации внимания",
  "Повышение осознанности и присутствия в моменте",
  "Улучшение эмоциональной регуляции",
  "Снижение риска депрессии",
  "Улучшение качества сна",
  "Повышение иммунитета",
  "Снижение кровяного давления",
];

// Научные исследования о майндфулнесс
const mindfulnessResearch = [
  {
    title: "Исследование Гарвардского университета (2011)",
    description:
      "Показало, что регулярная практика майндфулнесс увеличивает плотность серого вещества в области гиппокампа, связанной с обучением и памятью.",
    source: "Harvard Gazette",
  },
  {
    title: "Исследование Университета Оксфорда (2013)",
    description:
      "Выявило, что майндфулнесс-терапия так же эффективна, как антидепрессанты, в предотвращении рецидивов депрессии.",
    source: "Journal of Consulting and Clinical Psychology",
  },
  {
    title: "Исследование Университета Висконсина (2016)",
    description:
      "Продемонстрировало, что регулярная практика майндфулнесс снижает реактивность на стресс и ускоряет восстановление после стрессовых ситуаций.",
    source: "Journal of Psychosomatic Research",
  },
];

// Компонент таймера для практики
const MeditationTimer: React.FC<{ practice: (typeof mindfulnessTypes)[0] }> = ({
  practice,
}) => {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [timerSeconds, setTimerSeconds] = useState<number>(
    practice.durationMinutes * 60,
  );
  const [currentStep, setCurrentStep] = useState<number>(0);

  const totalTime = practice.durationMinutes * 60; // в секундах

  // Запуск и останов таймера
  const toggleTimer = () => {
    setIsRunning(!isRunning);
    if (!isRunning) {
      setTimerSeconds(totalTime);
      setProgress(0);
    }
  };

  // Сброс таймера
  const resetTimer = () => {
    setIsRunning(false);
    setTimerSeconds(totalTime);
    setProgress(0);
  };

  // Эффект для работы таймера
  React.useEffect(() => {
    let interval: number | undefined;

    if (isRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
        setProgress((prev) => prev + 100 / totalTime);

        // Обновление текущего шага каждые N секунд
        const stepsCount = practice.steps.length;
        const stepDuration = totalTime / stepsCount;
        const newStep = stepsCount - Math.ceil(timerSeconds / stepDuration);
        if (newStep !== currentStep && newStep < stepsCount) {
          setCurrentStep(newStep);
        }
      }, 1000);
    } else if (timerSeconds === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(interval);
  }, [isRunning, timerSeconds, totalTime, practice.steps.length, currentStep]);

  // Форматирование времени для отображения
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <Card className="shadow-lg overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img
          src={practice.image}
          alt={practice.title}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-6">
        <h4 className="text-xl font-bold mb-3">{practice.title}</h4>
        <p className="text-gray-700 mb-4">{practice.description}</p>

        <div className="bg-[#F1F0FB] p-4 rounded-lg mb-4">
          <h5 className="font-medium mb-2">Текущий шаг:</h5>
          <p className="text-[#7E69AB] font-medium">
            {practice.steps[currentStep]}
          </p>
        </div>

        <div className="mt-6">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium">Осталось времени:</span>
            <span className="text-[#9b87f5] font-medium">
              {formatTime(timerSeconds)}
            </span>
          </div>
          <Progress value={progress} className="h-2 mb-4" />

          <div className="flex justify-center gap-4">
            <Button
              onClick={toggleTimer}
              className={
                isRunning
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-[#9b87f5] hover:bg-[#7E69AB]"
              }
            >
              <Icon name={isRunning ? "Pause" : "Play"} className="mr-2" />
              {isRunning ? "Пауза" : "Начать"}
            </Button>
            <Button
              variant="outline"
              onClick={resetTimer}
              className="border-[#9b87f5] text-[#9b87f5]"
            >
              <Icon name="RefreshCcw" className="mr-2" />
              Сбросить
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const MindfulnessMeditation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F1F0FB]">
      <Navigation />

      <main className="container mx-auto px-4 py-12">
        <div className="mb-6">
          <a
            href="/"
            className="text-[#9b87f5] hover:text-[#7E69AB] flex items-center"
          >
            <Icon name="ChevronLeft" className="h-4 w-4 mr-1" />
            Вернуться на главную
          </a>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold mb-6 text-gray-800">
                Майндфулнесс медитация
              </h1>
              <p className="text-lg text-gray-600 mb-4">
                Майндфулнесс, или практика осознанности — это состояние
                сознания, характеризующееся спокойным осознанием и принятием
                своих чувств, мыслей и телесных ощущений. Это форма медитации, в
                которой внимание направлено на настоящий момент без оценки и
                суждений.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
                Преимущества практики:
              </h2>
              <ul className="space-y-2 mb-6">
                {mindfulnessBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Icon
                      name="CheckCircle"
                      className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                    />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-lg py-6 px-8">
                  Начать практику
                  <Icon name="Play" className="ml-2" />
                </Button>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-lg mb-6">
                <img
                  src="https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80"
                  alt="Майндфулнесс медитация"
                  className="w-full h-auto"
                />
              </div>

              <div className="bg-[#E5DEFF] rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Icon name="Info" className="mr-2 text-[#9b87f5]" />
                  Интересный факт
                </h3>
                <p className="text-gray-700">
                  Практика майндфулнесс уходит корнями в буддистские традиции,
                  насчитывающие более 2500 лет. Однако её современная,
                  секулярная форма была разработана в 1979 году Джоном
                  Кабат-Зинном для программы снижения стресса, основанной на
                  осознанности (MBSR).
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Практики майндфулнесс
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Выберите одну из техник майндфулнесс для практики. Каждая техника
            имеет свои особенности и преимущества. Рекомендуем начинать с
            коротких сеансов и постепенно увеличивать их продолжительность.
          </p>

          <Tabs defaultValue="breathing" className="w-full">
            <TabsList className="mb-6 grid w-full grid-cols-3">
              {mindfulnessTypes.map((type) => (
                <TabsTrigger key={type.id} value={type.id}>
                  {type.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {mindfulnessTypes.map((practice) => (
              <TabsContent key={practice.id} value={practice.id}>
                <MeditationTimer practice={practice} />
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Научные исследования
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {mindfulnessResearch.map((research, index) => (
              <Card key={index} className="shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{research.title}</h3>
                  <p className="text-gray-600 mb-3">{research.description}</p>
                  <p className="text-sm text-[#9b87f5]">
                    Источник: {research.source}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-[#F1F0FB] p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Icon name="BookOpen" className="mr-2 text-[#9b87f5]" />
              Для дальнейшего изучения
            </h3>
            <p className="mb-4">
              Если вы хотите глубже погрузиться в практику майндфулнесс,
              рекомендуем следующие книги:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Icon
                  name="BookMarked"
                  className="h-5 w-5 text-[#9b87f5] mr-2 flex-shrink-0 mt-0.5"
                />
                <span>"Куда бы ты ни шел — ты уже там" - Джон Кабат-Зинн</span>
              </li>
              <li className="flex items-start">
                <Icon
                  name="BookMarked"
                  className="h-5 w-5 text-[#9b87f5] mr-2 flex-shrink-0 mt-0.5"
                />
                <span>
                  "Осознанность: Как обрести гармонию в нашем безумном мире" -
                  Марк Уильямс и Денни Пенман
                </span>
              </li>
              <li className="flex items-start">
                <Icon
                  name="BookMarked"
                  className="h-5 w-5 text-[#9b87f5] mr-2 flex-shrink-0 mt-0.5"
                />
                <span>
                  "Медитация и осознанность: 10 минут в день, которые приведут
                  ваши мысли в порядок" - Энди Паддикомб
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Часто задаваемые вопросы
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-medium">
                С чего начать практику майндфулнесс новичку?
              </AccordionTrigger>
              <AccordionContent>
                Новичкам рекомендуется начать с простой практики осознанного
                дыхания. Выделите 5 минут в день, чтобы сесть в удобное
                положение и просто наблюдать за своим дыханием. Когда вы
                заметите, что ваш ум отвлекся (а это неизбежно случится), мягко
                верните внимание к дыханию. Не судите себя за отвлечение — это
                нормальная часть процесса. Постепенно увеличивайте
                продолжительность практики.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-medium">
                Как часто нужно практиковать майндфулнесс?
              </AccordionTrigger>
              <AccordionContent>
                Для достижения заметных результатов рекомендуется практиковать
                ежедневно, даже если это всего 5-10 минут в день. Регулярность
                важнее продолжительности. Исследования показывают, что
                положительные изменения в мозге начинают проявляться уже после 8
                недель регулярной практики по 20-30 минут в день.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-medium">
                Чем майндфулнесс отличается от других видов медитации?
              </AccordionTrigger>
              <AccordionContent>
                Майндфулнесс фокусируется на осознании настоящего момента без
                оценки, в то время как другие виды медитации могут иметь разные
                цели: достижение измененных состояний сознания, визуализация,
                размышления или концентрация на определенном объекте.
                Майндфулнесс особенно выделяется своим нейтральным, принимающим
                подходом к возникающим мыслям и чувствам, а также своей
                доступностью в повседневной жизни.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-medium">
                Можно ли практиковать майндфулнесс в повседневной жизни?
              </AccordionTrigger>
              <AccordionContent>
                Абсолютно! Хотя формальная практика в тихой обстановке важна,
                суть майндфулнесс — в перенесении осознанности в повседневную
                жизнь. Вы можете практиковать майндфулнесс во время еды, ходьбы,
                мытья посуды или даже в разговоре. Просто полностью
                присутствуйте в том, что делаете, обращая внимание на ощущения,
                мысли и эмоции без осуждения.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left font-medium">
                Помогает ли майндфулнесс при тревожных расстройствах?
              </AccordionTrigger>
              <AccordionContent>
                Да, исследования показывают, что майндфулнесс эффективен при
                тревожных расстройствах. Практика помогает распознавать
                тревожные мысли и не отождествляться с ними, а также снижает
                реактивность нервной системы на стрессовые стимулы. Для
                клинических тревожных расстройств рекомендуется комбинировать
                майндфулнесс с другими методами лечения и консультироваться со
                специалистом.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Другие техники, которые могут вам понравиться
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden shadow hover:shadow-md transition-shadow">
              <div className="h-40 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                  alt="Прогрессивная мышечная релаксация"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 flex items-center">
                  <Icon name="Activity" className="mr-2 text-[#9b87f5]" />
                  Прогрессивная мышечная релаксация
                </h3>
                <p className="text-gray-600 mb-4">
                  Техника поочерёдного напряжения и расслабления групп мышц для
                  снятия физического напряжения.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white"
                  asChild
                >
                  <a href="/techniques/progressive-relaxation">Подробнее</a>
                </Button>
              </div>
            </Card>

            <Card className="overflow-hidden shadow hover:shadow-md transition-shadow">
              <div className="h-40 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551847677-9b27c4a15bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                  alt="Дыхательные практики"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 flex items-center">
                  <Icon name="Wind" className="mr-2 text-[#9b87f5]" />
                  Дыхательные практики
                </h3>
                <p className="text-gray-600 mb-4">
                  Техники дыхания для быстрого снятия стресса и нормализации
                  состояния.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white"
                  asChild
                >
                  <a href="/techniques/breathing-practices">Подробнее</a>
                </Button>
              </div>
            </Card>

            <Card className="overflow-hidden shadow hover:shadow-md transition-shadow">
              <div className="h-40 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                  alt="Техники визуализации"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 flex items-center">
                  <Icon name="Star" className="mr-2 text-[#9b87f5]" />
                  Техники визуализации
                </h3>
                <p className="text-gray-600 mb-4">
                  Использование силы воображения для создания спокойствия и
                  гармонии.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white"
                  asChild
                >
                  <a href="/techniques/visualization">Подробнее</a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MindfulnessMeditation;
