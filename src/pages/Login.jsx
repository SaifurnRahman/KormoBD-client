import React, { use } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router";
import {
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlineEye,
  HiCheckCircle,
} from "react-icons/hi";
import { FaUserTie, FaBuilding } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";



const Login = () => {

    const {signInUser, }= use(AuthContext)

const handleLogin = (e) => {
    e.preventDefault();    
  const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    signInUser(email, password)
    .then(result => {
        console.log(result.user);
    })
    .catch(err => {
        console.log(err);
    })

}

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">

        {/* ========== LEFT - Animation ========== */}
        <div className="hidden lg:flex flex-col items-center justify-center bg-gradient-to-br from-green-500 to-emerald-600 p-10">

          {/* Lottie Animation */}
          <div className="w-80 h-80">
            <Player
              autoplay
              loop
              src="https://assets9.lottiefiles.com/packages/lf20_jcikwtux.json"
              style={{ height: "100%", width: "100%" }}
            />
          </div>

          {/* Heading */}
          <h2 className="text-white text-3xl font-bold mt-6 text-center">
            Welcome Back!
          </h2>
          <p className="text-green-100 text-sm mt-3 text-center max-w-xs">
            Log in to continue your career journey with KormoBD. Your dream job
            is just one click away.
          </p>

          {/* Features */}
          <div className="mt-8 space-y-3 w-full max-w-xs">
            <div className="flex items-center gap-3 text-white text-sm">
              <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <HiCheckCircle className="w-5 h-5" />
              </span>
              Access thousands of jobs
            </div>
            <div className="flex items-center gap-3 text-white text-sm">
              <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <HiCheckCircle className="w-5 h-5" />
              </span>
              Apply with 1-click
            </div>
            <div className="flex items-center gap-3 text-white text-sm">
              <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <HiCheckCircle className="w-5 h-5" />
              </span>
              Get instant job alerts
            </div>
          </div>
        </div>

        {/* ========== RIGHT - Form ========== */}
        <form onSubmit={handleLogin} className="p-8 sm:p-10 lg:p-12">

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-slate-800">
            Kormo<span className="text-green-500">BD</span>
          </Link>

          {/* Title */}
          <h3 className="mt-6 text-2xl font-semibold text-slate-800">
            Log in to your account
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-green-500 font-medium hover:underline"
            >
              Sign Up
            </Link>
          </p>

          {/* Role Selection */}
          <div className="mt-6 flex gap-3">
            <label className="flex-1 cursor-pointer">
              <input
                type="radio"
                name="role"
                value="jobseeker"
                defaultChecked
                className="peer hidden"
              />
              <div className="py-2.5 flex items-center justify-center gap-2 rounded-xl text-sm font-medium border-2 border-slate-200 text-slate-500 peer-checked:border-green-500 peer-checked:bg-green-50 peer-checked:text-green-600 peer-checked:shadow-sm transition-all duration-300">
                <FaUserTie className="w-4 h-4" />
                Job Seeker
              </div>
            </label>

            <label className="flex-1 cursor-pointer">
              <input
                type="radio"
                name="role"
                value="employer"
                className="peer hidden"
              />
              <div className="py-2.5 flex items-center justify-center gap-2 rounded-xl text-sm font-medium border-2 border-slate-200 text-slate-500 peer-checked:border-green-500 peer-checked:bg-green-50 peer-checked:text-green-600 peer-checked:shadow-sm transition-all duration-300">
                <FaBuilding className="w-4 h-4" />
                Employer
              </div>
            </label>
          </div>

          {/* Inputs */}
          <div className="mt-6 space-y-4">

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <HiOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500  text-black focus:border-transparent transition"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-sm font-medium text-slate-700">
                  Password
                </label>
                <Link
                  to="/forgot-password"
                  className="text-xs text-green-500 font-medium hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <HiOutlineLockClosed className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500  text-black  focus:border-transparent transition"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <HiOutlineEye className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                className="h-4 w-4 rounded border-slate-300 text-green-500 focus:ring-green-500"
              />
              <label htmlFor="remember" className="text-sm text-slate-600">
                Keep me logged in
              </label>
            </div>

            {/* Submit */}
            <button 
              type="submit"
              className="w-full py-3 bg-green-500 text-white font-semibold text-sm rounded-xl hover:bg-green-600 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-green-500/20"
            >
              Log In
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-slate-200" />
            <span className="text-xs text-slate-400 font-medium">
              Or continue with
            </span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          {/* Social Buttons */}
          <div className="flex gap-3">

            {/* Google */}
            <button
              type="button"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition"
            >
              <FcGoogle className="w-5 h-5" />
              Google
            </button>

            {/* Facebook */}
            <button
              type="button"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition"
            >
              <FaFacebook className="w-5 h-5 text-[#1877F2]" />
              Facebook
            </button>

            {/* LinkedIn */}
            <button
              type="button"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition"
            >
              <FaLinkedin className="w-5 h-5 text-[#0A66C2]" />
              LinkedIn
            </button>
          </div>

          {/* Footer Note */}
          <p className="mt-6 text-center text-xs text-slate-400">
            By logging in, you agree to our{" "}
            <Link to="/terms" className="text-green-500 hover:underline">
              Terms
            </Link>{" "}
            &{" "}
            <Link to="/privacy" className="text-green-500 hover:underline">
              Privacy Policy
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;