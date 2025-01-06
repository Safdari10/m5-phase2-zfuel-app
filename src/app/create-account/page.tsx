"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CreateAccountPage: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobile: "",
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
      const response = await fetch("/create-account/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.firstName + " " + formData.lastName,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create account");
      }

      // Redirect to login page on success
      router.push("/login");
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
        <section className="relative bg-gradient-to-r from-yellow-500 to-orange-400">
          <div className="relative">
            <Image
              src="/homepage-images/cabanner.png"
              alt="Create Account Banner"
              width={1920}
              height={1080}
              className="mx-auto w-full max-w-5x1"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-300 opacity-80"></div>
            <h1 className="absolute top-1/2 left-32 text-7xl lg:text-[8.5rem] font-bold text-white drop-shadow-lg transform -translate-y-1/2" style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.4)' }}>
              Create Account
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
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* First Name */}
                <div>
                  <label htmlFor="firstName" className="block text-3xl font-bold text-[#1E196B] mb-4">
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Please enter your first name here"
                    className="w-full px-6 py-4 text-lg rounded-lg border border-gray-300 focus:outline-none focus:border-[#1E196B]"
                    required
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label htmlFor="lastName" className="block text-3xl font-bold text-[#1E196B] mb-4">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Please enter your last name here"
                    className="w-full px-6 py-4 text-lg rounded-lg border border-gray-300 focus:outline-none focus:border-[#1E196B]"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-3xl font-bold text-[#1E196B] mb-4">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Please enter your email address here"
                    className="w-full px-6 py-4 text-lg rounded-lg border border-gray-300 focus:outline-none focus:border-[#1E196B]"
                    required
                  />
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="password" className="block text-3xl font-bold text-[#1E196B] mb-4">
                    Password
                  </label>
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

                {/* Submit Button */}
                <div className="flex gap-8 mt-12">
                  <button type="button" className="bg-white text-black border border-black font-bold py-5 rounded-full text-3xl w-1/2" onClick={() => window.location.href='/login'}>
                    Login
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className={`bg-[#1E196B] text-white font-bold py-5 rounded-full text-3xl w-1/2 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {loading ? 'Creating Account...' : 'Create Account'}
                  </button>
                </div>
              </form>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <Image
                src="/homepage-images/caimage.png"
                alt="Create Account"
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

export default CreateAccountPage;
