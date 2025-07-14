"use client";

import React, { useState } from "react";
import ChatMessage from "../components/ChatMessage";
import ChatHelp from "../components/ChatHelp";
import { useUser } from "../contexts/UserContext";
import ChatInput from "../components/ChatInput";

type Message = {
  sender: "user" | "ai";
  text: string;
};

function ChatPage() {
  const { userName } = useUser();
  const [messages, setMessages] = useState<Message[]>([]);

  return (
    <>
      <main className="h-full  ">
        <div className="max-w-2xl mx-auto h-full flex flex-col gap-12 justify-end md:justify-center py-2">
          <h1 className=" text-xl md:text-3xl text-center">
            Olá {userName}, o que posso fazer por ti hoje?
          </h1>
          <div className="flex-1  space-y-4 mb-4 pr-2">
            {messages.map((msg, index) => (
              <ChatMessage key={index} sender={msg.sender} text={msg.text} />
            ))}
          </div>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <ChatInput chatId=""/>
              <ChatHelp />
            </div>
            <p className="text-center py-2">
              Claudio pode cometer erros. Considere verificar informações
              importantes.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default ChatPage;
