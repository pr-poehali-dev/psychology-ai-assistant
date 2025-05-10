
import React from 'react';
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import MessageList from './MessageList';
import ChatInput from './ChatInput';
import ChatContainer from './ChatContainer';
import { Message } from './types';

interface DesktopAssistantProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  messages: Message[];
  input: string;
  setInput: (input: string) => void;
  handleSendMessage: () => void;
  formatTime: (date: Date) => string;
}

const DesktopAssistant: React.FC<DesktopAssistantProps> = ({
  isOpen,
  setIsOpen,
  messages,
  input,
  setInput,
  handleSendMessage,
  formatTime
}) => {
  return (
    <div className="hidden md:block fixed bottom-5 right-5 z-30">
      <div className={`transition-all duration-300 ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
        <div className="w-80 h-[500px] shadow-xl">
          <ChatContainer 
            showMinimize={true} 
            onMinimize={() => setIsOpen(false)}
          >
            <MessageList 
              messages={messages} 
              formatTime={formatTime} 
            />
            <ChatInput 
              input={input} 
              setInput={setInput} 
              handleSendMessage={handleSendMessage} 
            />
          </ChatContainer>
        </div>
      </div>
      
      {/* Кнопка для открытия чата */}
      {!isOpen && (
        <Button 
          onClick={() => setIsOpen(true)}
          className="rounded-full h-14 w-14 bg-[#9b87f5] hover:bg-[#7E69AB] shadow-lg"
        >
          <Icon name="MessageCircle" size={24} />
        </Button>
      )}
    </div>
  );
};

export default DesktopAssistant;
