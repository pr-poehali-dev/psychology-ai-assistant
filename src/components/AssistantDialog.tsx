
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { assistantDialog } from '@/data/techniques';

const AssistantDialog = () => {
  return (
    <Card className="border-none shadow-xl w-full max-w-lg mx-auto">
      <CardHeader className="bg-[#9b87f5] text-white rounded-t-lg">
        <CardTitle>Диалог с Ассистентом</CardTitle>
        <CardDescription className="text-white/80">
          Получите поддержку прямо сейчас
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="p-4 bg-gray-50 min-h-[300px] flex flex-col">
          {assistantDialog.map((message, index) => (
            <div 
              key={index}
              className={`${
                message.sender === 'assistant' 
                  ? 'bg-white self-start' 
                  : 'bg-[#E5DEFF] self-end'
              } p-3 rounded-lg shadow-sm max-w-[80%] mb-4`}
            >
              <p className="text-sm text-gray-700">{message.message}</p>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t">
        <div className="flex w-full gap-2 mt-2">
          <input 
            type="text" 
            placeholder="Напишите сообщение..." 
            className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b87f5]"
          />
          <Button className="bg-[#9b87f5] hover:bg-[#7E69AB]">
            <Icon name="Send" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default AssistantDialog;
