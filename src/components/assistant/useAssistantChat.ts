
import { useState, useCallback } from 'react';
import { Message } from './types';
import { assistantResponses, defaultResponses } from './responses';

const useAssistantChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Здравствуйте! Я — ИИ-ассистент по психологической поддержке. Как я могу помочь вам сегодня?',
      sender: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  // Форматирование времени сообщения
  const formatTime = useCallback((date: Date): string => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }, []);

  // Функция для генерации ответа ассистента
  const generateResponse = useCallback((userMessage: string): string => {
    const lowercaseMessage = userMessage.toLowerCase();
    
    // Проверяем каждое ключевое слово
    for (const [keyword, responses] of Object.entries(assistantResponses)) {
      if (lowercaseMessage.includes(keyword)) {
        const randomIndex = Math.floor(Math.random() * responses.length);
        return responses[randomIndex];
      }
    }
    
    // Если ключевое слово не найдено, возвращаем случайный ответ по умолчанию
    const randomIndex = Math.floor(Math.random() * defaultResponses.length);
    return defaultResponses[randomIndex];
  }, []);

  // Обработчик отправки сообщения
  const handleSendMessage = useCallback(() => {
    if (input.trim() === '') return;
    
    // Добавляем сообщение пользователя
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    
    // Имитация задержки перед ответом ассистента
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(input),
        sender: 'assistant',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, assistantMessage]);
    }, 800);
  }, [input, generateResponse]);

  return {
    messages,
    input,
    setInput,
    isOpen, 
    setIsOpen,
    handleSendMessage,
    formatTime
  };
};

export default useAssistantChat;
