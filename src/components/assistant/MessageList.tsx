
import React, { useRef, useEffect } from 'react';
import MessageItem from './MessageItem';
import { MessageListProps } from './types';

const MessageList: React.FC<MessageListProps> = ({ messages, formatTime }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Прокрутка вниз при появлении новых сообщений
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  return (
    <div className="flex-grow overflow-y-auto p-4 bg-gray-50">
      {messages.map((message) => (
        <MessageItem 
          key={message.id} 
          message={message} 
          formatTime={formatTime} 
        />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;
