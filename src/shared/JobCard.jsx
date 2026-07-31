import React from 'react';
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router";

import {
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiOutlineCurrencyDollar,
  HiOutlineBriefcase,
  HiOutlineBookmark,
  HiArrowRight,
  HiFire,
} from "react-icons/hi";



const JobCard = ({job}) => {

      const formatSalary = (salaryRange) => {
    const { min, max, currency } = salaryRange;
    const symbol = currency === "bdt" ? "৳" : "$";
    return `${symbol}${(min / 1000).toFixed(0)}k - ${symbol}${(
      max / 1000
    ).toFixed(0)}k`;
  };

   const getDeadlineText = (deadline) => {
    const deadlineDate = new Date(deadline);
    const today = new Date();
    const diffDays = Math.ceil((deadlineDate - today) / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return "Expired";
    if (diffDays === 0) return "Deadline today";
    if (diffDays === 1) return "1 day left";
    if (diffDays < 30) return `${diffDays} days left`;
    return deadlineDate.toLocaleDateString();
  };
      const isUrgent = (deadline) => {
    const deadlineDate = new Date(deadline);
    const today = new Date();
    const diffDays = Math.ceil((deadlineDate - today) / (1000 * 60 * 60 * 24));
    return diffDays > 0 && diffDays <= 7;
  };

  

    const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

    return (
        
        <motion.div
              key={job._id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 relative overflow-hidden"
            >
              {/* Urgent Badge */}
              {isUrgent(job.applicationDeadline) && (
                <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 bg-red-100 text-red-600 rounded-full text-xs font-semibold">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                  Urgent
                </div>
              )}

              {/* Company Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center overflow-hidden flex-shrink-0">
                  <img
                    src={job.company_logo}
                    alt={job.company}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${job.company}&background=10b981&color=fff`;
                    }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className="text-sm font-medium text-slate-500 truncate">
                      {job.company}
                    </p>
                    {job.status === "active" && (
                      <FaCheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-green-500 transition line-clamp-2">
                    {job.title}
                  </h3>
                </div>
              </div>

              {/* Job Info */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <HiOutlineLocationMarker className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  <span className="truncate">{job.location}</span>
                  {job.jobType === "Remote" && (
                    <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-xs rounded-full font-medium">
                      Remote
                    </span>
                  )}
                  {job.jobType === "Hybrid" && (
                    <span className="px-2 py-0.5 bg-purple-50 text-purple-600 text-xs rounded-full font-medium">
                      Hybrid
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <HiOutlineBriefcase className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  <span>{job.category}</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <HiOutlineCurrencyDollar className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  <span className="font-semibold text-slate-800">
                    {formatSalary(job.salaryRange)}
                  </span>
                  <span className="text-slate-400">/ month</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {job.requirements?.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs rounded-md font-medium"
                  >
                    {tag}
                  </span>
                ))}
                {job.requirements?.length > 4 && (
                  <span className="px-2.5 py-1 bg-green-50 text-green-600 text-xs rounded-md font-medium">
                    +{job.requirements.length - 4} more
                  </span>
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex items-center gap-1 text-xs text-slate-500">
                  <HiOutlineClock className="w-3.5 h-3.5" />
                  <span>{getDeadlineText(job.applicationDeadline)}</span>
                </div>

                <div className="flex items-center gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-green-500 transition"
                  >
                    <HiOutlineBookmark className="w-5 h-5" />
                  </motion.button>

                  <Link to={`/jobs/${job._id}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-lg hover:bg-green-600 transition flex items-center gap-1"
                    >
                      Apply
                      <HiArrowRight className="w-3.5 h-3.5" />
                    </motion.button>
                  </Link>
                </div>
              </div>

              {/* Green Hover Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
    );
};

export default JobCard;