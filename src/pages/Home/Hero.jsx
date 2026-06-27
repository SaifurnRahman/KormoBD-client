import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import {
  HiOutlineSearch,
  HiOutlineLocationMarker,
  HiOutlineBriefcase,
  HiOutlineUsers,
  HiOutlineOfficeBuilding,
  HiOutlineTrendingUp,
  HiArrowRight,
} from "react-icons/hi";
import { FaCheckCircle } from "react-icons/fa";

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const floatAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50 overflow-hidden">

      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ========== LEFT - Text Content ========== */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                #1 Job Portal in Bangladesh
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight"
            >
              Find Your{" "}
              <span className="relative">
                <span className="relative z-10 text-green-500">Dream Job</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="absolute bottom-2 left-0 w-full h-3 bg-green-200 -z-0 origin-left"
                />
              </span>
              <br />
              in Bangladesh
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 max-w-xl"
            >
              Connect with top employers across Bangladesh. Browse thousands of
              jobs, build your career, and find the perfect role that matches
              your skills.
            </motion.p>

            {/* Search Bar */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-xl p-2 flex flex-col sm:flex-row gap-2"
            >
              <div className="flex-1 flex items-center gap-2 px-4 py-2">
                <HiOutlineSearch className="w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Job title or keyword"
                  className="w-full outline-none text-sm text-slate-700 placeholder:text-slate-400"
                />
              </div>
              <div className="hidden sm:block w-px bg-slate-200" />
              <div className="flex-1 flex items-center gap-2 px-4 py-2">
                <HiOutlineLocationMarker className="w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Location (Dhaka, CTG...)"
                  className="w-full outline-none text-sm text-slate-700 placeholder:text-slate-400"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-green-500 text-white font-semibold text-sm rounded-xl hover:bg-green-600 transition shadow-lg shadow-green-500/30"
              >
                Search Jobs
              </motion.button>
            </motion.div>

            {/* Popular Tags */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-2"
            >
              <span className="text-sm text-slate-500">Popular:</span>
              {["Software Engineer", "Marketing", "Designer", "Remote"].map(
                (tag) => (
                  <button
                    key={tag}
                    className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-xs rounded-full hover:border-green-500 hover:text-green-500 transition"
                  >
                    {tag}
                  </button>
                )
              )}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link to="/jobs">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition flex items-center gap-2"
                >
                  Browse All Jobs
                  <HiArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>

              <Link to="/post-job">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white border-2 border-slate-200 text-slate-700 font-medium rounded-xl hover:border-green-500 hover:text-green-500 transition"
                >
                  Post a Job
                </motion.button>
              </Link>
            </motion.div>

            {/* Trusted By */}
            <motion.div
              variants={itemVariants}
              className="pt-6 flex items-center gap-3"
            >
              <div className="flex -space-x-2">
                {[
                  "https://i.pravatar.cc/40?img=1",
                  "https://i.pravatar.cc/40?img=2",
                  "https://i.pravatar.cc/40?img=3",
                  "https://i.pravatar.cc/40?img=4",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="User"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-700">
                  50,000+ Job Seekers
                </p>
                <p className="text-xs text-slate-500">
                  Trust KormoBD for their career
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* ========== RIGHT - Visual Content ========== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Main Image Container */}
            <div className="relative">

              {/* Background Card */}
              <motion.div
                animate={floatAnimation}
                className="absolute -top-6 -right-6 w-72 h-72 bg-gradient-to-br from-green-400 to-emerald-600 rounded-3xl rotate-6 shadow-2xl"
              />

              {/* Main Image */}
              <motion.div
                whileHover={{ rotate: -2 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-[500px] bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-white"
              >
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800"
                  alt="Professional"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating Card 1 - Job Alert */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="absolute top-10 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 max-w-xs"
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <HiOutlineBriefcase className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    New Job Alert!
                  </p>
                  <p className="text-xs text-slate-500">
                    5 jobs match your profile
                  </p>
                </div>
              </motion.div>

              {/* Floating Card 2 - Stats */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="absolute bottom-20 -right-6 bg-white p-4 rounded-2xl shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <HiOutlineTrendingUp className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-800">+25%</p>
                    <p className="text-xs text-slate-500">Salary Growth</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 3 - Verified */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="absolute bottom-6 left-6 bg-white p-3 rounded-2xl shadow-xl flex items-center gap-2"
              >
                <FaCheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-sm font-semibold text-slate-700">
                  Verified Employers
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ========== Stats Section ========== */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            {
              icon: HiOutlineBriefcase,
              count: "10K+",
              label: "Active Jobs",
              color: "green",
            },
            {
              icon: HiOutlineOfficeBuilding,
              count: "5K+",
              label: "Companies",
              color: "blue",
            },
            {
              icon: HiOutlineUsers,
              count: "50K+",
              label: "Job Seekers",
              color: "purple",
            },
            {
              icon: HiOutlineTrendingUp,
              count: "98%",
              label: "Success Rate",
              color: "orange",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition border border-slate-100"
            >
              <div
                className={`w-12 h-12 bg-${stat.color}-100 rounded-xl flex items-center justify-center mb-4`}
              >
                <stat.icon className={`w-6 h-6 text-${stat.color}-500`} />
              </div>
              <p className="text-3xl font-bold text-slate-800">{stat.count}</p>
              <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;