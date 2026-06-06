"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("auth.user");
      if (raw) setUser(JSON.parse(raw));
    } catch (e) {
      console.error("Failed to parse auth.user", e);
    }
  }, []);

  const login = ({ username, role }) => {
    const u = { username, role };
    setUser(u);
    localStorage.setItem("auth.user", JSON.stringify(u));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("auth.user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
