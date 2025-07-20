"use client";

import React from "react";
import { SidebarSkeleton, HeaderSkeleton } from "./Skeleton";

const AppSkeleton: React.FC = () => {
  return (
    <div className="flex h-screen w-full bg-[#212121] text-white">
      {/* Sidebar skeleton */}
      <div className="fixed top-0 left-0 z-50 lg:relative text-gray-200 overflow-hidden h-screen bg-neutral-900 w-64 md:w-72 px-3">
        <div className="flex justify-between bg-neutral-900 items-center text-white py-6">
          <div className="h-8 w-8 bg-white/10 rounded animate-pulse"></div>
          <div className="h-6 w-6 bg-white/10 rounded animate-pulse"></div>
        </div>
        <SidebarSkeleton />
      </div>

      {/* Sidebar toggle button skeleton */}
      <div className="py-4 hidden lg:block overflow-hidden">
        <div className="h-10 w-10 bg-white/10 rounded-xl animate-pulse"></div>
      </div>

      {/* Main content area */}
      <div className="h-screen flex-1 relative">
        {/* Header skeleton */}
        <div className="bg-[#212121] py-1 border-b-1 border-white/3 w-full z-10 absolute top-0 left-0 right-0">
          <div className="flex justify-between items-center w-full text-white px-3">
            <div className="h-6 w-6 bg-white/10 rounded animate-pulse lg:hidden"></div>
            <div className="h-8 w-24 bg-white/10 rounded animate-pulse"></div>
            <div className="h-6 w-6 bg-white/10 rounded animate-pulse lg:hidden"></div>
            <div className="hidden lg:flex items-center gap-2">
              <div className="h-8 w-20 bg-white/10 rounded animate-pulse"></div>
              <div className="h-8 w-8 bg-white/10 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Main content skeleton */}
        <main className="h-full pt-16">
          <div className="max-w-2xl mx-auto h-full flex flex-col gap-12 justify-end md:justify-center py-2">
            {/* Header skeleton */}
            <div className="text-center">
              <div className="h-8 md:h-12 bg-white/10 rounded-lg animate-pulse mb-4"></div>
            </div>

            {/* Messages skeleton */}
            <div className="flex-1 space-y-4 mb-4 pr-2">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 bg-white/10 rounded-full animate-pulse"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-4 w-24 bg-white/10 rounded animate-pulse"></div>
                      <div className="h-16 w-3/4 bg-white/10 rounded-lg animate-pulse"></div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 justify-end">
                    <div className="flex-1 space-y-2 text-right">
                      <div className="h-4 w-20 bg-white/10 rounded animate-pulse ml-auto"></div>
                      <div className="h-16 w-2/3 bg-white/10 rounded-lg animate-pulse ml-auto"></div>
                    </div>
                    <div className="h-10 w-10 bg-white/10 rounded-full animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Input skeleton */}
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-6">
                <div className="bg-white/5 px-4 py-2.5 rounded-full flex items-center gap-2 w-full">
                  <div className="h-6 w-6 bg-white/10 rounded animate-pulse"></div>
                  <div className="flex-1 h-6 bg-white/10 rounded animate-pulse"></div>
                  <div className="h-10 w-10 bg-white/10 rounded-full animate-pulse"></div>
                </div>

                {/* Help section skeleton */}
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

              {/* Footer skeleton */}
              <div className="text-center py-2">
                <div className="h-4 bg-white/10 rounded animate-pulse w-2/3 mx-auto"></div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AppSkeleton;
