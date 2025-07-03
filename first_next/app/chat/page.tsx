// app/chat/page.tsx
import type { Metadata } from "next";
import ChatPage from "./ChatPage"; // componente com 'use client'

export const metadata: Metadata = {
  title: "ClaudioAI",
  description: "ClaudioAI powered by Next.js and React",
};

export default function Page() {
  return <ChatPage />;
}
