
import React from 'react';
import MobileAssistant from './assistant/MobileAssistant';
import DesktopAssistant from './assistant/DesktopAssistant';
import useAssistantChat from './assistant/useAssistantChat';

/**
 * AIAssistant - интерактивный чат-бот для психологической поддержки
 * Компонент содержит две версии интерфейса - для мобильных и десктопных устройств
 */
const AIAssistant: React.FC = () => {
  // Используем выделенный хук для логики чата
  const {
    messages,
    input,
    setInput,
    isOpen, 
    setIsOpen,
    handleSendMessage,
    formatTime
  } = useAssistantChat();

  return (
    <>
      {/* Мобильная версия (Sheet снизу экрана) */}
      <MobileAssistant 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        messages={messages}
        input={input}
        setInput={setInput}
        handleSendMessage={handleSendMessage}
        formatTime={formatTime}
      />

      {/* Десктопная версия (Плавающее окно) */}
      <DesktopAssistant 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        messages={messages}
        input={input}
        setInput={setInput}
        handleSendMessage={handleSendMessage}
        formatTime={formatTime}
      />
    </>
  );
};

export default AIAssistant;
