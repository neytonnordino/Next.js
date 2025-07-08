import React from "react";

type ChatMessageProps = {
  sender: "user" | "ai";
  text: string;
};

export default function ChatMessage({ sender, text }: ChatMessageProps) {
  const isUser = sender === "user";

  return (
    <div
      className={`max-w-[80%] p-3 rounded-xl whitespace-pre-wrap ${
        isUser
          ? "bg-neutral-600 text-white self-end ml-auto"
          : "bg-transparent text-white self-start mr-auto"
      }`}
    >
      {text}
    </div>
  );
}
