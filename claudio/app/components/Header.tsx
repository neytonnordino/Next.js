import React from "react";
import Avatar from "./Avatar";
import Image from "next/image";

function Header() {
  return (
    <header className="bg-neutral-800 py-4 border-b-1 border-neutral-700 ">
      <div className=" flex justify-between items-center w-full text-white px-3">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="lg:hidden"
        >
          <line
            x1="4"
            y1="8"
            x2="20"
            y2="8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="4"
            y1="16"
            x2="14"
            y2="16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <h2 className="text-xl md:text-2xl text-white">Cláudio</h2>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="lg:hidden"
        >
          {/* Note (paper) */}
          <rect
            x="3"
            y="3"
            width="14"
            height="14"
            rx="2"
            ry="2"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />

          {/* Pen */}
          <path
            d="M18.5 12.5L21 15L16.5 19.5L14 20L14.5 17.5L18.5 13.5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="hidden lg:flex items-center gap-2">
          <div className="flex gap-2 items-center">
            {/* upload icon */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 17V5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 12L12 5L19 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 19H19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <h3 className="font-medium">Partilhar</h3>
          </div>

          {/* three dots icon */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="5" cy="12" r="1.5" fill="currentColor" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
            <circle cx="19" cy="12" r="1.5" fill="currentColor" />
          </svg>
          <Avatar>
            <Image
              src="/avatar.jpeg"
              alt="Avatar icon"
              width={40}
              height={40}
              className="rouned-full"
            />
          </Avatar>
        </div>
      </div>
    </header>
  );
}

export default Header;
