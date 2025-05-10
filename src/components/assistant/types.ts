
import { ReactNode } from 'react';

// Структура сообщения в чате
export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

// Структура ответов ассистента
export type AssistantResponses = Record<string, string[]>;

// Пропсы для компонента сообщений
export interface MessageItemProps {
  message: Message;
  formatTime: (date: Date) => string;
}

// Пропсы для ChatInput
export interface ChatInputProps {
  input: string;
  setInput: (input: string) => void;
  handleSendMessage: () => void;
}

// Пропсы для контейнера чата
export interface ChatContainerProps {
  children: ReactNode;
  headerTitle?: string;
  headerDescription?: string;
  onMinimize?: () => void;
  showMinimize?: boolean;
}

// Пропсы для MessageList
export interface MessageListProps {
  messages: Message[];
  formatTime: (date: Date) => string;
}
