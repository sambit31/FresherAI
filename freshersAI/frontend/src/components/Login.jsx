import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { X } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { auth, provider } from "../utils/firebase";
import { signInWithPopup } from "firebase/auth";
import api from "../utils/axios";


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up authentication
  };

  const handleClose = () => {
    navigate("/");
  }

  const handleGoogleLogin = async () => {
    try{
        const result = await signInWithPopup(auth, provider);
        const token = await result.user.getIdToken();

        const response = await api.post('/api/auth/login', { token });
        console.log("Google login successful:", token);
    }catch(error){
      console.error("Google login failed:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md px-4">
<motion.div
  initial={{ opacity: 0, y: 16 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="relative w-full max-w-sm bg-[#15151B] border border-white/10 rounded-2xl p-8"
>

  {/* Heading */}
  <div className="mb-8">
    <button onClick={handleClose} className="absolute top-4 right-4 text-gray-500 hover:text-white">
      <X size={20} />
    </button>
    <p className="text-xs font-semibold tracking-[0.2em] text-[#F5B841] mb-3">
      WELCOME BACK
    </p>

    <h1 className="text-2xl font-bold text-white mb-3">
      Sign in to FresherAI
    </h1>

    <p className="text-sm leading-6 text-gray-400">
      Pick up your resume, interview prep, and matches where you left off.
    </p>
  </div>

  {/* Form */}
  <form onSubmit={handleSubmit} className="flex flex-col gap-5">

    {/* Email */}
    <div className="flex flex-col gap-2">
      <label
        htmlFor="email"
        className="text-xs font-medium text-gray-400"
      >
        Email
      </label>

      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        required
        className="bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#F5B841]/60 transition"
      />
    </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="text-xs text-gray-400">
                Password
              </label>
              <a
                href="/forgot-password"
                className="text-xs text-gray-500 hover:text-[#F5B841] transition"
              >
                Forgot?
              </a>
            </div>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#F5B841]/60 transition"
            />
          </div>

          <button
            type="submit"
            className="mt-2 bg-[#F5B841] hover:bg-[#e3a72f] text-black font-semibold py-3 rounded-full transition"
          >
            Sign in
          </button>

          <button
            onClick={handleGoogleLogin}
            type="button"
            className="mt-2 bg-transparent border border-[#F5B841] text-[#F5B841] hover:bg-[#F5B841]/20 font-semibold py-3 rounded-full transition"
          >
            <FcGoogle className="inline mr-2" />
            Continue with Google
          </button>
        </form>

        <p className="text-sm text-gray-500 text-center mt-8">
          New here?{" "}
          <Link to="/signup" className="text-[#F5B841] px-2 hover:underline">
            sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;