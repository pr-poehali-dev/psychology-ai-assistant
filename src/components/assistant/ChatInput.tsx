
import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { ChatInputProps } from './types';

const ChatInput: React.FC<ChatInputProps> = ({ 
  input, 
  setInput, 
  handleSendMessage 
}) => {
  // Обработчик нажатия Enter
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  
  return (
    <div className="p-4 border-t flex gap-2">
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Напишите сообщение..."
        className="flex-grow"
      />
      <Button 
        onClick={handleSendMessage} 
        className="bg-[#9b87f5] hover:bg-[#7E69AB]"
        disabled={!input.trim()}
      >
        <Icon name="Send" />
      </Button>
    </div>
  );
};

export default ChatInput;
