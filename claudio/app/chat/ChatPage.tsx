"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import ChatInput from "../components/ChatInput";
import ChatMessage from "../components/ChatMessage";
import { TbLayoutSidebar } from "react-icons/tb";
import ChatHelp from "../components/ChatHelp";
import SignInPage from "../signin/page";

type Message = {
  sender: "user" | "ai";
  text: string;
};

function chatPage() {
  const [userName, setUserName] = useState("");
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "ai",
      text: `Olá, ${userName}! como posso te ajudar hoje?`,
    },
  ]);

  async function handleSend(userText: string) {
    const newMessages = [...messages, { sender: "user", text: userText }];
    setMessages(newMessages);

    const res = await fetch("api/chat", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({ message: userText }),
    });

    const data = await res.json();
    setMessages([...newMessages, { sender: "ai", text: data.response }]);
  }

  function handleSubmit(formData: FormData) {
    const input = formData.get("name");
    if (typeof input === "string") {
      const trimmed = input.trim();
      setUserName(trimmed);
    }
  }

  if (!userName) {
    return (
      <>
        <div className="w-full h-screen flex items-end md:items-center justify-center bg-[#212121] ">
          <form
            action={handleSubmit}
            className="bg-[#292929] p-6 rounded-4xl shadow-md w-full md:min-w-2xl md:w-auto m-2 md:m-0 mb-4"
          >
            <label className="block font-medium mb-2 text-center text-2xl md:text-4xl text-white/90">
              Olá !
            </label>
            <div className="flex">
              <input
                type="text"
                name="name"
                className="p-2 w-full text-white/70 text-xl md:text-2xl outline-0"
                placeholder="Digite seu nome"
              />
              <div className="flex flex-nowrap">
                <button
                  type="submit"
                  className="bg-gray-300 text-gray-500 p-3 rounded-full hover:bg-neutral-500 hover:text-gray-300 transition"
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
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
  return (
    <>

      <div className="flex h-screen">
        <aside>
          <SideBar
            isOpen={isSideBarOpen}
            toggleSideBar={() => setIsSideBarOpen((prev) => !prev)}
          />
        </aside>
        <div className="bg-[#212121] text-white px-2 py-3  border-none outline-0 hidden md:block">
          <button
            onClick={() => setIsSideBarOpen((prev) => !prev)}
            className="rounded-xl overflow-hidden cursor-e-resize p-2 hover:bg-neutral-600 transition"
          >
            {isSideBarOpen ? (
              ""
            ) : (
              <TbLayoutSidebar className="text-2xl text-white/80" />
            )}
          </button>
        </div>

        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />

          <main className="w-full h-screen bg-[#212121] text-gray-200">
            <div className="max-w-2xl mx-auto h-full flex flex-col gap-12 justify-end md:justify-center py-2">
              <h1 className=" text-xl md:text-3xl text-center">
                Olá {userName}, o que posso fazer por ti hoje?
              </h1>
              <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2">
                {messages.map((msg, index) => (
                  <ChatMessage
                    key={index}
                    sender={msg.sender}
                    text={msg.text}
                  />
                ))}
              </div>
              <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-6">
                  <ChatInput onSend={handleSend} />
                  <ChatHelp sideBar={isSideBarOpen} />
                </div>
                <p className="text-center py-2">
                  Claudio pode cometer erros, considere rever informações
                  importantes.
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default chatPage;
