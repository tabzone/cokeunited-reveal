"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "../AuthProvider";
import { useTheme } from "../ThemeProvider";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [showUserMenu, setShowUserMenu] = useState(false);
  const menuRef = useRef(null);

  const { logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  const isProfile =
    pathname?.startsWith("/profile");

  const parts = pathname?.split("/") || [];
  const projectId = parts[2];

  const projectName = projectId
    ? `Project ${projectId}`
    : "Retailer Planogram";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const handleLogout = async () => {
    await logout();
    router.replace("/login");
  };

  return (
    <header
      className="
        flex items-center px-4 py-3
        bg-white dark:bg-[#191919]
        border-b border-gray-200 dark:border-gray-800
        transition-colors duration-300
      "
    >

      {/* Logos */}
      <div className="flex items-center">
        <Link
          href="/"
          className="flex items-center gap-2 pl-2 pr-24"
        >
          <img
            src="/cokeunited-logo.png"
            alt="Coke United"
            className="h-16 w-auto"
          />

          <img
            src="/Parkers-Kitchen-Logo.png"
            alt="Parkers Kitchen"
            className="h-10 w-auto"
          />
        </Link>
      </div>
      {/* Retailer Planogram Header */}
      {isProfile && (
        <div className="flex items-center">
          <button
            onClick={() => router.back()}
            className="
              flex items-center gap-2
              text-gray-600 dark:text-gray-300
              hover:text-[#0066B3]
              transition-colors
               p-2
            rounded-lg
            border
            border-gray-300 dark:border-gray-700
            hover:bg-gray-100 dark:hover:bg-gray-800
            transition-all
            cursor-pointer
              
            "
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className="text-sm">Back</span>
          </button>

          {/* <div className="mx-4 h-6 w-px bg-gray-300 dark:bg-gray-700" />

          <div className="flex flex-col">
            <span className="font-semibold text-lg text-gray-800 dark:text-white">
              {projectName}
            </span>

            <span className="text-xs text-gray-500 dark:text-gray-400">
              Retailer Planogram
            </span>
          </div> */}
        </div>
      )}

      {/* Report Details */}
      <div className="flex-1 flex justify-start ml-4">
        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
          <span className="font-medium text-gray-800 dark:text-white">
            Category Report
          </span>

          <div className="h-4 w-px bg-gray-300 dark:bg-gray-700" />

          <span>
            Data Last Updated:
            <span className="ml-1 font-medium text-gray-800 dark:text-white">
              6/27/2026
            </span>
          </span>

          <div className="h-4 w-px bg-gray-300 dark:bg-gray-700" />

          <span>
            WE:
            <span className="ml-1 font-medium text-gray-800 dark:text-white">
              6/27/2026 (Week 26)
            </span>
          </span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="
          
            p-2
            rounded-lg
            border
            border-gray-300 dark:border-gray-700
            hover:bg-gray-100 dark:hover:bg-gray-800
            transition-all
            cursor-pointer
          "
          aria-label="Toggle Theme"
        >
          {theme === "light" ? (
            // <svg
            //   width="20"
            //   height="20"
            //   viewBox="0 0 24 24"
            //   fill="none"
            //   className="text-gray-700"
            // >
            //   <path
            //     d="M21 12.79A9 9 0 0111.21 3
            //     7 7 0 0021 12.79z"
            //     stroke="currentColor"
            //     strokeWidth="2"
            //     strokeLinecap="round"
            //     strokeLinejoin="round"
            //   />
            // </svg>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"

              className="text-gray-700"
            >
              <path d="M21 12.79A9 9 0 1111.21 3c0 .28.02.56.05.84A7 7 0 0021 12.79z" />
            </svg>
          ) : (
            // <svg
            //   width="20"
            //   height="20"
            //   viewBox="0 0 24 24"
            //   fill="none"
            //   className="text-yellow-400"
            // >
            //   <circle
            //     cx="12"
            //     cy="12"
            //     r="5"
            //     stroke="currentColor"
            //     strokeWidth="2"
            //   />

            //   <path
            //     d="M12 1V3
            //     M12 21V23
            //     M4.22 4.22L5.64 5.64
            //     M18.36 18.36L19.78 19.78
            //     M1 12H3
            //     M21 12H23
            //     M4.22 19.78L5.64 18.36
            //     M18.36 5.64L19.78 4.22"
            //     stroke="currentColor"
            //     strokeWidth="2"
            //     strokeLinecap="round"
            //   />
            // </svg>

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              width="20"
              height="20"
              className="text-yellow-400"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          )}
        </button>

        {/* User Menu */}
        <div
          className="relative"
          ref={menuRef}
        >
          <button
            onClick={() =>
              setShowUserMenu(!showUserMenu)
            }
            className="
              flex items-center gap-2
              px-2 py-1
              rounded-md
              hover:bg-gray-100 dark:hover:bg-gray-800
              text-gray-600 dark:text-gray-300
              hover:text-[#0066B3]
              transition-colors
              cursor-pointer
            "
          >
            <div
              className="
                w-8 h-8
                rounded-full
                bg-blue-50 dark:bg-white/50
                text-[#0066B3]
                flex items-center justify-center
              "
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  cx="12"
                  cy="8"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M4 20C4 16.6863 7.58172 14 12 14C16.4183 14 20 16.6863 20 20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              className={`transition-transform duration-200 ${showUserMenu ? "rotate-180" : ""
                }`}
            >
              <path
                d="M6 9L12 15L18 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {showUserMenu && (
            <div
              className="
                absolute right-0 mt-2
                w-48
                z-[99999]
                bg-white dark:bg-[#191919]
                border border-gray-200 dark:border-gray-700
                rounded-md
                shadow-xl
                overflow-hidden
              "
            >
              <button
                onClick={() => router.push("/profile")}
                className="
                  w-full
                  px-4 py-3
                  text-left
                  text-sm
                  text-gray-700 dark:text-gray-200
                  hover:bg-gray-100 dark:hover:bg-gray-800
                  flex items-center gap-3
                 cursor-pointer
                "
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    cx="12"
                    cy="8"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M4 20C4 16.6863 7.58172 14 12 14C16.4183 14 20 16.6863 20 20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>

                Profile
              </button>

              <button
                onClick={handleLogout}
                className="
                  w-full
                  px-4 py-3
                  text-left
                  text-sm
                  text-red-600
                  hover:bg-red-50
                  dark:hover:bg-red-950
                  flex items-center gap-3
                  cursor-pointer
                "
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9 21H5C4.44772 21 4 20.5523 4 20V4C4 3.44772 4.44772 3 5 3H9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M16 17L21 12L16 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 12H9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>

                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}