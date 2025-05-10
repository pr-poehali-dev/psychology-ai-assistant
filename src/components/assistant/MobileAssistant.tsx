
import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import MessageList from './MessageList';
import ChatInput from './ChatInput';
import ChatContainer from './ChatContainer';
import { Message } from './types';

interface MobileAssistantProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  messages: Message[];
  input: string;
  setInput: (input: string) => void;
  handleSendMessage: () => void;
  formatTime: (date: Date) => string;
}

const MobileAssistant: React.FC<MobileAssistantProps> = ({
  isOpen,
  setIsOpen,
  messages,
  input,
  setInput,
  handleSendMessage,
  formatTime
}) => {
  return (
    <div className="fixed bottom-5 right-5 md:hidden z-30">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button className="rounded-full h-14 w-14 bg-[#9b87f5] hover:bg-[#7E69AB] shadow-lg">
            <Icon name="MessageCircle" size={24} />
          </Button>
        </SheetTrigger>
        <SheetContent className="p-0 sm:max-w-md" side="bottom">
          <ChatContainer>
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
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileAssistant;
