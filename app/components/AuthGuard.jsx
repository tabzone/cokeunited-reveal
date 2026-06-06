"use client";

import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "./AuthProvider";

export default function AuthGuard({ children }) {
  const { user, logout } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // if not logged in, redirect to /login
    if (!user) {
      if (pathname !== "/login") router.push("/login");
      return;
    }
  }, [user, pathname, router]);

  // Block retailers from any path except the dashboard '/'
  if (user && user.role === "retailer" && pathname !== "/") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-md p-8 bg-white shadow rounded text-center">
          <h2 className="text-xl font-semibold mb-4">Access denied</h2>
          <p className="mb-6">Retailer accounts can only access the dashboard.</p>
          <div className="flex gap-2 justify-center">
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded"
              onClick={() => router.push("/")}
            >
              Go to dashboard
            </button>
            <button
              className="px-4 py-2 border rounded"
              onClick={() => {
                logout();
                router.push("/login");
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
