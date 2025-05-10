
import React from 'react';
import { MessageItemProps } from './types';

const MessageItem: React.FC<MessageItemProps> = ({ message, formatTime }) => {
  return (
    <div
      className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
    >
      <div 
        className={`p-3 rounded-lg max-w-[80%] ${
          message.sender === 'user' 
            ? 'bg-[#E5DEFF] text-gray-800' 
            : 'bg-white text-gray-700 shadow-sm'
        }`}
      >
        <p className="text-sm">{message.text}</p>
        <p className="text-xs text-gray-500 mt-1 text-right">
          {formatTime(message.timestamp)}
        </p>
      </div>
    </div>
  );
};

export default MessageItem;
