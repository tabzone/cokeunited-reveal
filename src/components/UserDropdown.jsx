"use client";

import { useState } from "react";
import { ChevronDown, User, LogOut } from "lucide-react";

export default function UserDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2"
      >
        <div className="w-9 h-9 rounded-full bg-blue-500 text-white flex items-center justify-center">
          F
        </div>

        <span>Francisco</span>

        <ChevronDown size={16} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
          <button className="w-full flex items-center gap-2 px-4 py-3 hover:bg-gray-100">
            <User size={18} />
            Profile
          </button>

          <button className="w-full flex items-center gap-2 px-4 py-3 hover:bg-gray-100 text-red-500">
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}