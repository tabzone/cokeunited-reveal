"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../components/AuthProvider";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();
    const { login } = useAuth();

    const USERS = [
        { username: "admin@gmail.com", password: "admin123", role: "admin" },
        { username: "retailer@gmail.com", password: "retailer123", role: "retailer" },
        { username: "user@gmail.com", password: "user123", role: "user" },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();

        const foundUser = USERS.find(
            (u) => u.username === username && u.password === password
        );

        if (!foundUser) {
            setError("Invalid username or password");
            return;
        }

        login({
            username: foundUser.username,
            role: foundUser.role,
        });

        router.push("/");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="w-full max-w-md p-8 bg-white shadow rounded">
                <h1 className="text-2xl font-bold mb-6">Sign in</h1>
                {error && <div className="text-red-600 mb-4">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <label className="block mb-2">Username</label>
                    <input
                        className="w-full p-2 border rounded mb-4"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        autoComplete="username"
                    />

                    <label className="block mb-2">Password</label>
                    <input
                        type="password"
                        className="w-full p-2 border rounded mb-4"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-2 rounded"
                    >
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    );
}
