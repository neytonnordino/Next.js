"use client";

import React from "react";

const SignInSkeleton: React.FC = () => {
  return (
    <div className="fixed w-full h-full left-0 bg-black/90 text-white flex items-center justify-center">
      <div className="bg-neutral-800 shadow-gray-200 w-72 h-auto md:w-96 md:h-auto flex flex-col justify-center items-center rounded-lg">
        <div className="px-10 py-6 text-center">
          {/* Title skeleton */}
          <div className="h-8 md:h-12 bg-white/10 rounded-lg animate-pulse mb-4"></div>

          {/* Description skeleton */}
          <div className="space-y-2">
            <div className="h-4 bg-white/10 rounded animate-pulse"></div>
            <div className="h-4 bg-white/10 rounded animate-pulse w-3/4 mx-auto"></div>
            <div className="h-4 bg-white/10 rounded animate-pulse w-1/2 mx-auto"></div>
          </div>
        </div>

        {/* Buttons skeleton */}
        <div className="flex flex-col md:flex-row gap-3 py-6 px-3 w-full">
          <div className="h-12 bg-white/10 rounded-md animate-pulse flex-1"></div>
          <div className="h-12 bg-white/10 rounded-md animate-pulse flex-1"></div>
        </div>
      </div>
    </div>
  );
};

export default SignInSkeleton;
