import React, { useState } from "react";
import { TbPaperclip } from "react-icons/tb";

type ChatInputProps = {
  onSend: (message: string) => void;
};

const ChatInput = ({ onSend }: ChatInputProps) => {
  const [input, setInput] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    onSend(trimmed);
    setInput("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/5 px-4 py-2.5 rounded-full flex items-center gap-2 w-full"
    >
      <TbPaperclip className="text-xl md:text-2xl -rotate-45 cursor-pointer" />
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 px-2 text-white/70 text-base sm:text-xl md:text-2xl outline-none bg-transparent"
        placeholder="Pergunte qualquer coisa"
      />
      <button
        disabled={!input}
        type="submit"
        className="bg-white/90 text-black p-2 rounded-full hover:bg-neutral-500 hover:text-neutral-100 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="19" x2="12" y2="5" />
          <polyline points="5 12 12 5 19 12" />
        </svg>
      </button>
    </form>
  );
};

export default ChatInput;
