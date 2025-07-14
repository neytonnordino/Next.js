"use client";
import React from "react";
import { twMerge } from "tailwind-merge";

type LoadingDotProps={
  className?: string
}

const LoadingDot = ({className} : LoadingDotProps) => {
  return (
    <div className={twMerge("flex items-center justify-center", className)}>
      <span className="h-5 w-5 rounded-full bg-gray-200 animate-pulse"></span>
    </div>
  );
};

export default LoadingDot;
