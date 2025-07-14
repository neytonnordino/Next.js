"use client";
import React from "react";

const LoadingDot = () => {
  return (
    <div className="flex items-center justify-center">
      <span className="h-5 w-5 rounded-full bg-gray-200 animate-pulse"></span>
    </div>
  );
};

export default LoadingDot;
