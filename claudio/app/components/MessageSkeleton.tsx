"use client";

import React from "react";
import Skeleton from "./Skeleton";

interface MessageSkeletonProps {
  isUser?: boolean;
  showAvatar?: boolean;
}

const MessageSkeleton: React.FC<MessageSkeletonProps> = ({
  isUser = false,
  showAvatar = true,
}) => {
  return (
    <div className={`flex items-start gap-3 ${isUser ? "justify-end" : ""}`}>
      {!isUser && showAvatar && (
        <Skeleton variant="circular" width="40px" height="40px" />
      )}

      <div className={`flex-1 space-y-2 ${isUser ? "text-right" : ""}`}>
        <Skeleton
          variant="text"
          width={isUser ? "100px" : "120px"}
          height="16px"
          className={isUser ? "ml-auto" : ""}
        />
        <div className={`${isUser ? "flex justify-end" : ""}`}>
          <Skeleton
            variant="rounded"
            width={isUser ? "70%" : "80%"}
            height="60px"
            className={isUser ? "ml-auto" : ""}
          />
        </div>
      </div>

      {isUser && showAvatar && (
        <Skeleton variant="circular" width="40px" height="40px" />
      )}
    </div>
  );
};

// Loading message component for when AI is responding
export const AIResponseSkeleton: React.FC = () => (
  <div className="flex items-start gap-3">
    <Skeleton variant="circular" width="40px" height="40px" />
    <div className="flex-1 space-y-2">
      <Skeleton variant="text" width="120px" height="16px" />
      <div className="space-y-2">
        <Skeleton variant="rounded" width="90%" height="20px" />
        <Skeleton variant="rounded" width="75%" height="20px" />
        <Skeleton variant="rounded" width="60%" height="20px" />
      </div>
    </div>
  </div>
);

// Loading message component for when user is sending
export const UserMessageSkeleton: React.FC = () => (
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
);

export default MessageSkeleton;
