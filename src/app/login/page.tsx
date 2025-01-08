"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/login/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to login");
      }

      // Store the token
      localStorage.setItem("token", data.token);

      // Redirect to home page on success
      router.push("/home");
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Header Banner */}
        <section className="relative bg-gradient-to-r from-yellow-500 to-orange-400 text-center mx-auto max-w-[1920px]">
          <div className="relative">
            <Image
              src="/homepage-images/cabanner.png"
              alt="Login Banner"
              width={1920}
              height={1080}
              className="mx-auto w-full max-w-5x1"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-300 opacity-80"></div>
            <h1 className="absolute top-1/2 left-32 text-7xl lg:text-[8.5rem] font-bold text-white drop-shadow-lg transform -translate-y-1/2" style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.4)' }}>
              Login
            </h1>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-8 py-16 bg-white">
          <div className="flex flex-col md:flex-row justify-between items-center gap-16">
            {/* Form Section */}
            <div className="w-full md:w-1/2 max-w-2xl">
              {error && (
                <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
                  {error}
                </div>
              )}
              <form onSubmit={handleSubmit} className="login-form" style={{ width: '100%', maxWidth: '600px', height: 'auto', padding: '20px', fontSize: '22px' }}>
                {/* Email Field */}
                <div>
                  <div style={{ marginBottom: '5px' }}>
                    <label htmlFor="username" className="block text-6xl font-bold text-[#1E196B] mb-1">E-mail</label>
                  </div>
                  <input
                    type="email"
                    id="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Please enter your email address here"
                    className="w-full px-6 py-4 text-lg rounded-lg border border-gray-300 focus:outline-none focus:border-[#1E196B]"
                    required
                  />
                </div>

                {/* Password Field */}
                <div style={{ marginTop: '40px' }}>
                  <div style={{ marginBottom: '5px' }}>
                    <label htmlFor="password" className="block text-6xl font-bold text-[#1E196B] mb-1">Password</label>
                  </div>
                  <input
                    type="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Please enter your password here"
                    className="w-full px-6 py-4 text-lg rounded-lg border border-gray-300 focus:outline-none focus:border-[#1E196B]"
                    required
                  />
                </div>

                {/* Login or Social Buttons */}
                <div className="flex flex-col items-center gap-4 pt-8">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`px-8 py-4 bg-[#1E196B] text-white rounded-full hover:bg-blue-700 transition-colors text-xl font-semibold ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {loading ? 'Logging in...' : 'Login'}
                  </button>
                  <span className="text-xl font-semibold">or</span>
                  <div className="flex gap-6">
                    <button
                      type="button"
                      className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-xl font-semibold"
                    >
                      Google
                    </button>
                    <button
                      type="button"
                      className="px-8 py-4 bg-blue-800 text-white rounded-full hover:bg-blue-900 transition-colors text-xl font-semibold"
                    >
                      Facebook
                    </button>
                  </div>
                </div>

                {/* Create Account Link */}
                <div className="text-sm text-gray-500 mt-4" style={{ fontSize: '14px', padding: '8px', textAlign: 'center' }}>
                  Don&apos;t have an account? <a href="/create-account" className="text-blue-500">Create one</a>
                </div>
              </form>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <Image
                src="/homepage-images/caimage.png"
                alt="Login"
                width={800}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
