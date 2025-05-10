
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { ChatContainerProps } from './types';

const ChatContainer: React.FC<ChatContainerProps> = ({
  children,
  headerTitle = "ИИ-Ассистент",
  headerDescription = "Ваш личный помощник по психологической поддержке",
  onMinimize,
  showMinimize = false
}) => {
  return (
    <Card className="h-full border-0 shadow-none flex flex-col">
      <CardHeader className="bg-[#9b87f5] text-white rounded-t-lg">
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center text-lg">
            <Icon name="Bot" className="mr-2" />
            {headerTitle}
          </CardTitle>
          {showMinimize && onMinimize && (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onMinimize}
              className="text-white hover:bg-white/20"
            >
              <Icon name="Minimize2" size={20} />
            </Button>
          )}
        </div>
        <CardDescription className="text-white/80">
          {headerDescription}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow p-0 overflow-hidden">
        <div className="h-full flex flex-col">
          {children}
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatContainer;
