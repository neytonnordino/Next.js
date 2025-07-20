"use client";

import React from "react";
import { ChatSkeleton, ChatInputSkeleton } from "./Skeleton";

const ChatPageSkeleton: React.FC = () => {
  return (
    <main className="h-full">
      <div className="max-w-2xl mx-auto h-full flex flex-col gap-12 justify-end md:justify-center py-2">
        {/* Header skeleton */}
        <div className="text-center">
          <div className="h-8 md:h-12 bg-white/10 rounded-lg animate-pulse mb-4"></div>
        </div>

        {/* Messages skeleton */}
        <div className="flex-1 space-y-4 mb-4 pr-2">
          <ChatSkeleton />
          <ChatSkeleton />
          <ChatSkeleton />
        </div>

        {/* Input and help skeleton */}
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <ChatInputSkeleton />

            {/* Chat help skeleton */}
            <div className="space-y-3">
              <div className="h-6 bg-white/10 rounded animate-pulse w-1/3"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div
                    key={index}
                    className="h-16 bg-white/5 rounded-lg animate-pulse"
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer text skeleton */}
          <div className="text-center py-2">
            <div className="h-4 bg-white/10 rounded animate-pulse w-2/3 mx-auto"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ChatPageSkeleton;
