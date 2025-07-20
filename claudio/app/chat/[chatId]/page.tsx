"use client";

import React, { useEffect, useState } from "react";
import ChatInput from "@/app/components/ChatInput";
import { ChatSkeleton, ChatInputSkeleton } from "@/app/components/Skeleton";

interface Props {
  params: {
    chatId: string;
  };
}

const ChatPage = ({ params: { chatId } }: Props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for chat data
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsLoaded(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Show skeleton while loading
  if (isLoading) {
    return (
      <main>
        <div className="flex flex-col justify-center h-screen overflow-hidden p-5 absolute top-0 left-0 right-0">
          <div className="flex-1 pt-10 space-y-4">
            <ChatSkeleton />
            <ChatSkeleton />
            <ChatSkeleton />
          </div>
          <ChatInputSkeleton />
          <div className="text-center py-2">
            <div className="h-4 bg-white/10 rounded animate-pulse w-2/3 mx-auto"></div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <>
      <main>
        <div
          className={`flex flex-col justify-center h-screen overflow-hidden p-5 absolute top-0 left-0 right-0 transition-all duration-600 ${
            isLoaded ? "slide-up-animation" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex-1 pt-10">chat</div>
          <ChatInput chatId={chatId} />
          <p className="text-center py-2">
            Claudio pode cometer erros. Considere verificar informações
            importantes.
          </p>
        </div>
      </main>
    </>
  );
};

export default ChatPage;
