"use client";

import React from "react";
import { signOut } from "next-auth/react";

const LogOut = () => {
  const handleSignOut = async () => {
    try {
      await signOut({ callbackUrl: "/" });
    } catch (error) {
      console.error("SignOut error:", error);
    }
  };

  return (
    <button onClick={handleSignOut} className="text-white hover:text-gray-300">
      Sign Out
    </button>
  );
};

export default LogOut;
