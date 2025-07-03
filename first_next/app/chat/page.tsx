"use client";

import React, { useState } from "react";
import Header from "../components/Header";

export default function ChatPage() {
  const [userName, setUserName] = useState("");

  function handleSubmit(formData: FormData) {
    const input = formData.get("name");
    if (typeof input === "string") {
      const trimmed = input.trim();
      if (trimmed) {
        setUserName(trimmed);
      }
    }
  }
  if (!userName) {
    return (
      <>
        <div className="w-full h-screen flex items-end md:items-center justify-center bg-neutral-800">
          <form
            action={handleSubmit}
            className="bg-neutral-700 p-6 rounded-4xl shadow-md w-full md:min-w-2xl md:w-auto m-2 md:m-0 mb-4"
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
                  className="bg-gray-300 p-3 rounded-full hover:bg-neutral-500 hover:text-gray-300 transition"
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
      <Header/>
      <main className="w-full h-screen bg-neutral-800">
      <h1>hello {userName}, o que posso fazer por ti hoje?</h1>
      </main>
      
    </>
  );
}
