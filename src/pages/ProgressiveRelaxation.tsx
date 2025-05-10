
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";

// Шаги прогрессивной мышечной релаксации
const relaxationSteps = [
  {
    title: "Подготовка",
    content: "Найдите тихое место, где вас никто не побеспокоит в течение 15-20 минут. Сядьте в удобное кресло или лягте на спину, подложив под колени подушку для поддержки. Расстегните тесную одежду и снимите обувь. Можно включить спокойную музыку на фоне.",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    duration: 2
  },
  {
    title: "Руки и предплечья",
    content: "Начните с правой руки. Сожмите кулак и напрягите мышцы предплечья. Удерживайте напряжение 5-7 секунд, обращая внимание на ощущение напряжения. Затем быстро расслабьте руку и позвольте ей упасть свободно. Заметьте разницу между напряжением и расслаблением. Повторите для левой руки.",
    image: "https://images.unsplash.com/photo-1544048242-e1e8aa5646a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    duration: 2
  },
  {
    title: "Плечи и шея",
    content: "Поднимите плечи вверх, стараясь коснуться ими ушей. Удерживайте 5-7 секунд, чувствуя напряжение в плечах и шее. Затем быстро опустите плечи и расслабьтесь. Ощутите, как напряжение исчезает, а тепло разливается по мышцам.",
    image: "https://images.unsplash.com/photo-1616699002805-0741e1e4a9c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    duration: 2
  },
  {
    title: "Лицо",
    content: "Напрягите мышцы лица, сморщив нос, нахмурив брови и сжав губы. Удерживайте 5-7 секунд. Затем полностью расслабьте лицо, почувствуйте, как разглаживаются морщины, и лицо словно 'растекается'. Уделите внимание ощущению расслабления в мышцах лба, щек и челюсти.",
    image: "https://images.unsplash.com/photo-1508243771214-6e95d137426b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    duration: 3
  },
  {
    title: "Грудь и живот",
    content: "Сделайте глубокий вдох, наполнив грудь и живот воздухом. Задержите дыхание на 5-7 секунд, чувствуя напряжение в мышцах груди и живота. Затем медленно выдохните, позволяя всему напряжению уйти вместе с выдохом. Отметьте ощущение легкости и покоя в этой области.",
    image: "https://images.unsplash.com/photo-1559329255-8e19e04e1302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    duration: 3
  },
  {
    title: "Спина",
    content: "Осторожно выгните спину, отводя плечи назад. Удерживайте 5-7 секунд. Затем позвольте спине расслабиться и вернуться в нейтральное положение. Прочувствуйте, как теплота охватывает мышцы спины, а позвоночник словно удлиняется.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    duration: 2
  },
  {
    title: "Ноги",
    content: "Вытяните ноги перед собой и напрягите мышцы бедер, затем поднимите ступни, направляя пальцы к себе. Удерживайте 5-7 секунд. Потом быстро отпустите напряжение, позволяя ногам тяжело опуститься. Отметьте контраст между напряжением и приятной тяжестью в расслабленных ногах.",
    image: "https://images.unsplash.com/photo-1602516278221-9ef44653d759?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    duration: 3
  },
  {
    title: "Полное тело",
    content: "Завершите практику, напрягая все тело одновременно. Сожмите кулаки, напрягите руки, плечи, лицо, живот, ягодицы и ноги. Удерживайте 5-7 секунд. Затем одновременно расслабьте все тело, позволяя ему полностью освободиться от напряжения. Сделайте несколько глубоких вдохов и насладитесь ощущением полного расслабления.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    duration: 3
  }
];

// Компонент пошаговой инструкции с таймером
const GuidedExercise: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [timerSeconds, setTimerSeconds] = useState<number>(0);
  
  const totalSteps = relaxationSteps.length;
  const currentStepData = relaxationSteps[currentStep];
  const totalTime = currentStepData?.duration * 60 || 0; // в секундах
  
  // Запуск и останов таймера
  const toggleTimer = () => {
    setIsRunning(!isRunning);
    if (!isRunning) {
      setTimerSeconds(totalTime);
      setProgress(0);
    }
  };
  
  // Сброс текущего шага
  const resetStep = () => {
    setIsRunning(false);
    setTimerSeconds(totalTime);
    setProgress(0);
  };
  
  // Переход к следующему шагу
  const nextStep = () => {
    resetStep();
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  // Переход к предыдущему шагу
  const prevStep = () => {
    resetStep();
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  // Эффект для работы таймера
  React.useEffect(() => {
    let interval: number | undefined;
    
    if (isRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds(prev => prev - 1);
        setProgress(prev => prev + (100 / totalTime));
      }, 1000);
    } else if (timerSeconds === 0) {
      setIsRunning(false);
    }
    
    return () => clearInterval(interval);
  }, [isRunning, timerSeconds, totalTime]);
  
  // Форматирование времени для отображения
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="bg-[#F1F0FB] rounded-lg p-6 shadow-lg">
      <h3 className="text-2xl font-bold mb-6 text-center">Пошаговое руководство</h3>
      
      <div className="flex justify-between items-center mb-4">
        <Button 
          variant="outline" 
          onClick={prevStep} 
          disabled={currentStep === 0}
          className="border-[#9b87f5] text-[#9b87f5]"
        >
          <Icon name="ArrowLeft" className="mr-2" />
          Предыдущий
        </Button>
        
        <span className="text-lg font-bold">
          Шаг {currentStep + 1} из {totalSteps}
        </span>
        
        <Button 
          variant="outline" 
          onClick={nextStep} 
          disabled={currentStep === totalSteps - 1}
          className="border-[#9b87f5] text-[#9b87f5]"
        >
          Следующий
          <Icon name="ArrowRight" className="ml-2" />
        </Button>
      </div>
      
      <Card className="mb-6 overflow-hidden">
        <div className="h-56 overflow-hidden">
          <img
            src={currentStepData.image}
            alt={currentStepData.title}
            className="w-full h-full object-cover"
          />
        </div>
        <CardContent className="p-6">
          <h4 className="text-xl font-bold mb-3">{currentStepData.title}</h4>
          <p className="text-gray-700">{currentStepData.content}</p>
          
          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Прогресс:</span>
              <span className="text-[#9b87f5] font-medium">
                {formatTime(timerSeconds)}
              </span>
            </div>
            <Progress value={progress} className="h-2 mb-4" />
            
            <div className="flex justify-center gap-4">
              <Button 
                onClick={toggleTimer} 
                className={isRunning ? "bg-red-500 hover:bg-red-600" : "bg-[#9b87f5] hover:bg-[#7E69AB]"}
              >
                <Icon name={isRunning ? "Pause" : "Play"} className="mr-2" />
                {isRunning ? "Пауза" : "Начать"}
              </Button>
              <Button 
                variant="outline" 
                onClick={resetStep}
                className="border-[#9b87f5] text-[#9b87f5]"
              >
                <Icon name="RefreshCcw" className="mr-2" />
                Сбросить
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const ProgressiveRelaxation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F1F0FB]">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="mb-6">
          <a href="/" className="text-[#9b87f5] hover:text-[#7E69AB] flex items-center">
            <Icon name="ChevronLeft" className="h-4 w-4 mr-1" />
            Вернуться на главную
          </a>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold mb-6 text-gray-800">Прогрессивная мышечная релаксация</h1>
              <p className="text-lg text-gray-600 mb-4">
                Прогрессивная мышечная релаксация — метод, разработанный американским физиологом Эдмундом Джекобсоном в 1920-х годах. 
                Эта техника основана на простом принципе: после напряжения мышцы наступает более глубокое расслабление.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">Преимущества метода:</h2>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Icon name="CheckCircle" className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Снижает общий уровень тревоги и напряжения</span>
                </li>
                <li className="flex items-start">
                  <Icon name="CheckCircle" className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Помогает при бессоннице и проблемах со сном</span>
                </li>
                <li className="flex items-start">
                  <Icon name="CheckCircle" className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Снижает симптомы хронической боли и головной боли</span>
                </li>
                <li className="flex items-start">
                  <Icon name="CheckCircle" className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Снижает кровяное давление и частоту сердечных сокращений</span>
                </li>
                <li className="flex items-start">
                  <Icon name="CheckCircle" className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Улучшает осознание тела и самоконтроль</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-lg py-6 px-8">
                  Начать сеанс
                  <Icon name="Play" className="ml-2" />
                </Button>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-lg mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80" 
                  alt="Медитация и релаксация"
                  className="w-full h-auto"
                />
              </div>
              
              <div className="bg-[#E5DEFF] rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Icon name="Info" className="mr-2 text-[#9b87f5]" />
                  Знаете ли вы?
                </h3>
                <p className="text-gray-700">
                  Регулярная практика прогрессивной мышечной релаксации (всего 15-20 минут в день) может снизить уровень тревоги на 60% и существенно улучшить качество сна. Это подтверждено многочисленными исследованиями в области психологии и неврологии.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <GuidedExercise />
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Часто задаваемые вопросы</h2>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-medium">
                Как часто нужно практиковать прогрессивную мышечную релаксацию?
              </AccordionTrigger>
              <AccordionContent>
                Для достижения наилучших результатов рекомендуется практиковать технику ежедневно, хотя бы один раз в день. 
                По мере освоения метода, эффект расслабления будет наступать быстрее, и вы сможете применять его в любых стрессовых ситуациях.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-medium">
                Сколько времени занимает полная процедура?
              </AccordionTrigger>
              <AccordionContent>
                Полная процедура прогрессивной мышечной релаксации обычно занимает 15-20 минут. С опытом вы можете сократить это время до 5-7 минут, 
                фокусируясь только на тех группах мышц, где чаще всего ощущаете напряжение.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-medium">
                Могут ли быть противопоказания к этой технике?
              </AccordionTrigger>
              <AccordionContent>
                Техника обычно безопасна для большинства людей, но если у вас есть травмы мышц, проблемы с суставами или какие-либо другие физические ограничения, 
                следует проконсультироваться с врачом перед началом практики. Также стоит быть осторожными при напряжении определенных групп мышц, 
                если у вас есть проблемы с сердцем или высокое кровяное давление.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-medium">
                Можно ли использовать эту технику детям?
              </AccordionTrigger>
              <AccordionContent>
                Да, прогрессивная мышечная релаксация может быть адаптирована для детей. Для младших детей можно представить упражнения в форме игры, 
                например, "сожми лимон" для рук или "встань на цыпочки как жираф" для ног. Важно делать упражнения короче и использовать образные сравнения, 
                понятные ребенку.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left font-medium">
                Как понять, что я правильно выполняю технику?
              </AccordionTrigger>
              <AccordionContent>
                При правильном выполнении вы должны чувствовать явный контраст между напряжением и расслаблением мышц. После полной сессии вы можете 
                ощущать приятную тяжесть в теле, чувство тепла в мышцах и общее снижение тревоги. Важно не перенапрягать мышцы — напряжение должно быть 
                умеренным, без боли или дискомфорта.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Другие техники, которые могут вам понравиться</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden shadow hover:shadow-md transition-shadow">
              <div className="h-40 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1488190735562-0a94ff2026f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                  alt="Майндфулнесс медитация"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 flex items-center">
                  <Icon name="Leaf" className="mr-2 text-[#9b87f5]" />
                  Майндфулнесс медитация
                </h3>
                <p className="text-gray-600 mb-4">Практика осознанности, помогающая сосредоточиться на настоящем моменте.</p>
                <Button variant="outline" className="w-full border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white">
                  Подробнее
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
                <p className="text-gray-600 mb-4">Техники дыхания для быстрого снятия стресса и нормализации состояния.</p>
                <Button variant="outline" className="w-full border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white">
                  Подробнее
                </Button>
              </div>
            </Card>
            
            <Card className="overflow-hidden shadow hover:shadow-md transition-shadow">
              <div className="h-40 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                  alt="Визуализация"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 flex items-center">
                  <Icon name="Star" className="mr-2 text-[#9b87f5]" />
                  Техники визуализации
                </h3>
                <p className="text-gray-600 mb-4">Использование силы воображения для создания спокойствия и гармонии.</p>
                <Button variant="outline" className="w-full border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white">
                  Подробнее
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

export default ProgressiveRelaxation;
