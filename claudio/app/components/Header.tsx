"use client";

import React from "react";
import Avatar from "./Avatar";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { FaRegUser } from "react-icons/fa";
import LogOut from "./LogOut";

type SideBarProps = {
  isOpen?: boolean;
  toggleSideBar?: () => void;
};

function Header({ isOpen, toggleSideBar }: SideBarProps) {
  const { data: session } = useSession();

  return (
    <header className="bg-[#212121] py-1 border-b-1 border-white/3 w-full z-10 absolute top-0 left-0 right-0">
      <div className="flex justify-between items-center w-full text-white px-3">
        <button
          onClick={toggleSideBar}
          className={`lg:hidden ${isOpen ? "hidden" : "block"}`}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
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
        </button>
        <button className="flex gap-2 items-center cursor-pointer hover:bg-white/10 group  p-2 rounded-md transition">
          <h2 className="text-xl md:text-2xl text-white  transition ">
            Cláudio
          </h2>
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 hidden lg:inline-flex"
          >
            <path
              d="M10.5575 14.6925L4.3075 8.44254C4.24944 8.38447 4.20338 8.31553 4.17195 8.23966C4.14052 8.16379 4.12435 8.08247 4.12435 8.00035C4.12435 7.91823 4.14052 7.83691 4.17195 7.76104C4.20338 7.68517 4.24944 7.61623 4.3075 7.55816C4.36557 7.50009 4.43451 7.45403 4.51038 7.4226C4.58625 7.39117 4.66757 7.375 4.7497 7.375C4.83182 7.375 4.91315 7.39117 4.98902 7.4226C5.06489 7.45403 5.13383 7.50009 5.1919 7.55816L11.0006 13.3668L16.8083 7.55816C16.9256 7.44088 17.0846 7.375 17.2505 7.375C17.4163 7.375 17.5754 7.44088 17.6927 7.55816C17.81 7.67544 17.8759 7.8345 17.8759 8.00035C17.8759 8.1662 17.81 8.32526 17.6927 8.44254L11.4427 14.6925C11.3846 14.7506 11.3157 14.7967 11.2398 14.8282C11.164 14.8597 11.0826 14.8758 11.0005 14.8758C10.9183 14.8758 10.837 14.8597 10.7611 14.8282C10.6853 14.7967 10.6163 14.7506 10.5575 14.6925Z"
              fill="#ffffffa4"
            />
          </svg>
        </button>
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

        <div className="hidden lg:flex items-center gap-2 ">
          <div className="flex gap-2 items-center cursor-pointer hover:bg-white/10  p-2 rounded-md transition">
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

          <div className="flex gap-4 items-center">
            {/* three dots icon */}
            <div className="p-2 cursor-pointer hover:bg-white/10 rounded-md transition">
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
            </div>
            {session?.user ? (
              <>
                <div className="hover:bg-white/10 rounded-full transition p-2">
                  <Avatar className="">
                    {session?.user?.image ? (
                      <Image
                        src={session.user.image}
                        alt="Avatar icon"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    ) : (
                      <FaRegUser className="text-24" />
                    )}
                  </Avatar>
                </div>
                <LogOut />
              </>
            ) : (
              <Link href="/signin">SignIn</Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
