import React from "react";
import { useLoaderData, Link } from "react-router";
import { motion } from "framer-motion";
import {
  HiOutlineLocationMarker,
  HiOutlineBriefcase,
  HiOutlineArrowLeft,
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineCheckCircle,
  HiOutlineOfficeBuilding,
  HiOutlineCurrencyDollar,
  HiArrowRight,
} from "react-icons/hi";
import { FaCheckCircle } from "react-icons/fa";

const JobDetails = () => {
  const job = useLoaderData();

  // Format salary: 40000 → ৳40k
  const formatSalary = (salaryRange) => {
    if (!salaryRange) return "Negotiable";
    const { min, max, currency } = salaryRange;
    const symbol = currency === "bdt" ? "৳" : "$";
    return `${symbol}${(min / 1000).toFixed(0)}k - ${symbol}${(
      max / 1000
    ).toFixed(0)}k`;
  };

  // Deadline text
  const getDeadlineText = (deadline) => {
    if (!deadline) return "N/A";
    const deadlineDate = new Date(deadline);
    const today = new Date();
    const diffDays = Math.ceil(
      (deadlineDate - today) / (1000 * 60 * 60 * 24)
    );

    if (diffDays < 0) return "Expired";
    if (diffDays === 0) return "Deadline today";
    if (diffDays === 1) return "1 day left";
    if (diffDays < 30) return `${diffDays} days left`;
    return deadlineDate.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const expired =
    job.applicationDeadline &&
    new Date(job.applicationDeadline) < new Date();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
      <div className="mx-auto max-w-6xl px-6 py-10 lg:px-8">

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-green-500 transition mb-8"
          >
            <HiOutlineArrowLeft className="w-4 h-4" />
            Back to Jobs
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* ========== LEFT - Main Content ========== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Header Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100">
              <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                {/* Logo */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-100 flex items-center justify-center overflow-hidden flex-shrink-0">
                  <img
                    src={job.company_logo}
                    alt={job.company}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${job.company}&background=10b981&color=fff&size=80`;
                    }}
                  />
                </div>

                {/* Title & Company */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
                      {job.title}
                    </h1>
                    {job.status === "active" && !expired && (
                      <span className="px-2.5 py-0.5 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                        Active
                      </span>
                    )}
                    {expired && (
                      <span className="px-2.5 py-0.5 bg-red-100 text-red-600 text-xs font-semibold rounded-full">
                        Expired
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 mb-4">
                    <p className="text-base font-medium text-slate-600">
                      {job.company}
                    </p>
                    {job.status === "active" && (
                      <FaCheckCircle className="w-4 h-4 text-green-500" />
                    )}
                  </div>

                  {/* Quick Info Pills */}
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 text-slate-600 text-sm rounded-lg">
                      <HiOutlineLocationMarker className="w-4 h-4 text-slate-400" />
                      {job.location}
                    </span>

                    {job.jobType && (
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg font-medium ${
                          job.jobType === "Remote"
                            ? "bg-blue-50 text-blue-600"
                            : job.jobType === "Hybrid"
                            ? "bg-purple-50 text-purple-600"
                            : "bg-slate-50 text-slate-600"
                        }`}
                      >
                        <HiOutlineBriefcase className="w-4 h-4" />
                        {job.jobType}
                      </span>
                    )}

                    {job.category && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 text-slate-600 text-sm rounded-lg">
                        <HiOutlineOfficeBuilding className="w-4 h-4 text-slate-400" />
                        {job.category}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100">
              <h2 className="text-lg font-bold text-slate-900 mb-4">
                Job Description
              </h2>
              <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                {job.description}
              </p>
            </div>

            {/* Responsibilities */}
            {job.responsibilities?.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100">
                <h2 className="text-lg font-bold text-slate-900 mb-4">
                  Responsibilities
                </h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <HiOutlineCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Requirements */}
            {job.requirements?.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100">
                <h2 className="text-lg font-bold text-slate-900 mb-4">
                  Requirements
                </h2>
                <div className="flex flex-wrap gap-2">
                  {job.requirements.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-green-50 text-green-700 text-sm font-medium rounded-lg border border-green-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* ========== RIGHT - Sidebar ========== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-6"
          >
            {/* Apply Card */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 sticky top-24">
              <h3 className="text-lg font-bold text-slate-900 mb-5">
                Job Overview
              </h3>

              <div className="space-y-4 mb-6">
                {/* Salary */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                    <HiOutlineCurrencyDollar className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Salary</p>
                    <p className="text-sm font-semibold text-slate-800">
                      {formatSalary(job.salaryRange)}
                      <span className="text-slate-400 font-normal">
                        {" "}
                        / month
                      </span>
                    </p>
                  </div>
                </div>

                {/* Deadline */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0">
                    <HiOutlineCalendar className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">
                      Deadline
                    </p>
                    <p
                      className={`text-sm font-semibold ${
                        expired ? "text-red-500" : "text-slate-800"
                      }`}
                    >
                      {getDeadlineText(job.applicationDeadline)}
                    </p>
                    {job.applicationDeadline && (
                      <p className="text-xs text-slate-400 mt-0.5">
                        {new Date(
                          job.applicationDeadline
                        ).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                    )}
                  </div>
                </div>

                {/* Job Type */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <HiOutlineBriefcase className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">
                      Job Type
                    </p>
                    <p className="text-sm font-semibold text-slate-800">
                      {job.jobType || "Full Time"}
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0">
                    <HiOutlineLocationMarker className="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">
                      Location
                    </p>
                    <p className="text-sm font-semibold text-slate-800">
                      {job.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Apply Button */}
              {/* {expired ? (
                <button
                  disabled
                  className="w-full py-3.5 bg-slate-200 text-slate-500 font-semibold text-sm rounded-xl cursor-not-allowed"
                >
                  Application Closed
                </button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 bg-green-500 text-white font-semibold text-sm rounded-xl hover:bg-green-600 transition shadow-lg shadow-green-500/25 flex items-center justify-center gap-2"
                >
                  Apply Now
                  <HiArrowRight className="w-4 h-4" />
                </motion.button>
              )} */}
              <Link to={`/jobApply/${job._id}`}>
              <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 bg-green-500 text-white font-semibold text-sm rounded-xl hover:bg-green-600 transition shadow-lg shadow-green-500/25 flex items-center justify-center gap-2"
                >
                  Apply Now
                  <HiArrowRight className="w-4 h-4" />
                </motion.button></Link>

              <p className="text-xs text-slate-400 text-center mt-3">
                Easy apply · Takes less than 2 minutes
              </p>
            </div>

            {/* HR Contact Card */}
            {(job.hr_name || job.hr_email) && (
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Contact HR
                </h3>

                {job.hr_name && (
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <HiOutlineUser className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">HR Manager</p>
                      <p className="text-sm font-semibold text-slate-800">
                        {job.hr_name}
                      </p>
                    </div>
                  </div>
                )}

                {job.hr_email && (
                  <a
                    href={`mailto:${job.hr_email}`}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-green-50 transition group"
                  >
                    <HiOutlineMail className="w-5 h-5 text-slate-400 group-hover:text-green-500" />
                    <span className="text-sm text-slate-600 group-hover:text-green-600 break-all">
                      {job.hr_email}
                    </span>
                  </a>
                )}
              </div>
            )}

            {/* Company Card */}
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center overflow-hidden">
                  <img
                    src={job.company_logo}
                    alt={job.company}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </div>
                <div>
                  <p className="font-bold text-lg">{job.company}</p>
                  <p className="text-green-100 text-sm">Hiring Company</p>
                </div>
              </div>
              <p className="text-green-50 text-sm leading-relaxed">
                Explore more opportunities from {job.company} and grow your
                career with top employers in Bangladesh.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;