"use client";

import React from "react";
import { twMerge } from "tailwind-merge";

interface SkeletonProps {
  className?: string;
  variant?: "text" | "circular" | "rectangular" | "rounded";
  width?: string | number;
  height?: string | number;
  lines?: number;
  spacing?: "sm" | "md" | "lg";
}

const Skeleton: React.FC<SkeletonProps> = ({
  className,
  variant = "rectangular",
  width,
  height,
  lines = 1,
  spacing = "md",
}) => {
  const baseClasses = "animate-pulse bg-white/10 skeleton-shimmer";

  const variantClasses = {
    text: "rounded",
    circular: "rounded-full",
    rectangular: "rounded-none",
    rounded: "rounded-lg",
  };

  const spacingClasses = {
    sm: "gap-2",
    md: "gap-3",
    lg: "gap-4",
  };

  const style = {
    width: width,
    height: height,
  };

  if (lines > 1) {
    return (
      <div className={twMerge("flex flex-col", spacingClasses[spacing])}>
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={twMerge(baseClasses, variantClasses[variant], className)}
            style={{
              ...style,
              height: height || (variant === "text" ? "1rem" : "1.5rem"),
              width:
                index === lines - 1 && variant === "text"
                  ? "60%"
                  : width || "100%",
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={twMerge(baseClasses, variantClasses[variant], className)}
      style={style}
    />
  );
};

// Specific skeleton components for common use cases
export const ChatSkeleton: React.FC = () => (
  <div className="space-y-4">
    <div className="flex items-start gap-3">
      <Skeleton variant="circular" width="40px" height="40px" />
      <div className="flex-1 space-y-2">
        <Skeleton variant="text" width="120px" height="16px" />
        <Skeleton variant="rounded" width="80%" height="60px" />
      </div>
    </div>
    <div className="flex items-start gap-3 justify-end">
      <div className="flex-1 space-y-2 text-right">
        <Skeleton
          variant="text"
          width="100px"
          height="16px"
          className="ml-auto"
        />
        <Skeleton
          variant="rounded"
          width="70%"
          height="60px"
          className="ml-auto"
        />
      </div>
      <Skeleton variant="circular" width="40px" height="40px" />
    </div>
  </div>
);

export const ChatInputSkeleton: React.FC = () => (
  <div className="bg-white/5 px-4 py-2.5 rounded-full flex items-center gap-2 w-full">
    <Skeleton variant="circular" width="24px" height="24px" />
    <Skeleton variant="text" width="100%" height="24px" />
    <Skeleton variant="circular" width="40px" height="40px" />
  </div>
);

export const SidebarSkeleton: React.FC = () => (
  <div className="space-y-4">
    <Skeleton variant="rounded" width="100%" height="50px" />
    <div className="space-y-2">
      {Array.from({ length: 5 }).map((_, index) => (
        <Skeleton key={index} variant="rounded" width="100%" height="40px" />
      ))}
    </div>
  </div>
);

export const HeaderSkeleton: React.FC = () => (
  <div className="flex items-center justify-between p-4">
    <Skeleton variant="text" width="120px" height="24px" />
    <Skeleton variant="circular" width="40px" height="40px" />
  </div>
);

export default Skeleton;
