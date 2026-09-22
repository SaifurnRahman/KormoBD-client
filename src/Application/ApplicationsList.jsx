import React, { use } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  HiOutlineBriefcase,
  HiOutlineTrash,
  HiOutlineExternalLink,
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiOutlineXCircle,
  HiArrowRight,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";

const ApplicationList = ({myApplicationsPromise}) => {

    const applications = use(myApplicationsPromise);


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50 py-10">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* ========== Header Section ========== */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              My <span className="text-green-500">Applications</span>
            </h1>
            <p className="mt-1 text-slate-600 text-sm">
              Track and manage all the job applications you have submitted.
            </p>
          </div>

          <Link to="/jobs">
            <button className="px-5 py-2.5 bg-green-500 text-white font-medium text-sm rounded-xl hover:bg-green-600 transition flex items-center gap-2 shadow-md shadow-green-500/20">
              Browse More Jobs
              <HiArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>

        {/* ========== Stats Cards ========== */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-500">
              <HiOutlineBriefcase className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">
                {applications.length}
              </p>
              <p className="text-xs text-slate-400 font-medium">Total Applied</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-500">
              <HiOutlineClock className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">1</p>
              <p className="text-xs text-slate-400 font-medium">Under Review</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 col-span-2 sm:col-span-1">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500">
              <HiOutlineCheckCircle className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">1</p>
              <p className="text-xs text-slate-400 font-medium">Shortlisted</p>
            </div>
          </div>
        </div>

        {/* ========== Applications Table ========== */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  <th className="py-4 px-6">Job Info</th>
                  <th className="py-4 px-6">Applied Date</th>
                  <th className="py-4 px-6">Links Submitted</th>
                  <th className="py-4 px-6">Status</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
                {applications.map((app) => (
                  <tr
                    key={app._id}
                    className="hover:bg-slate-50/50 transition-colors group"
                    
                  >
                    {/* Job Info */}
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center overflow-hidden flex-shrink-0 border border-slate-200">
                          <img
                            src={app.company_logo}
                            alt={app.company}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.src = `https://ui-avatars.com/api/?name=${app.company}&background=10b981&color=fff`;
                            }}
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-800 group-hover:text-green-600 transition">
                            {app.title}
                          </h4>
                          <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                            <span className="font-medium text-slate-600">
                              {app.company}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <HiOutlineLocationMarker className="w-3.5 h-3.5 text-slate-400" />
                              {app.location}
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Applied Date */}
                    <td className="py-4 px-6 text-slate-600 text-xs font-medium">
                      {app.appliedDate}
                    </td>

                    {/* Links Submitted */}
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        {app.linkedIn && (
                          <a
                            href={app.linkedIn}
                            target="_blank"
                            rel="noreferrer"
                            title="LinkedIn"
                            className="p-2 rounded-lg bg-blue-50 text-[#0A66C2] hover:scale-110 transition"
                          >
                            <FaLinkedin className="w-4 h-4" />
                          </a>
                        )}
                        {app.github && (
                          <a
                            href={app.github}
                            target="_blank"
                            rel="noreferrer"
                            title="GitHub"
                            className="p-2 rounded-lg bg-slate-100 text-slate-800 hover:scale-110 transition"
                          >
                            <FaGithub className="w-4 h-4" />
                          </a>
                        )}
                        {app.portfolio && (
                          <a
                            href={app.portfolio}
                            target="_blank"
                            rel="noreferrer"
                            title="Portfolio"
                            className="p-2 rounded-lg bg-emerald-50 text-emerald-600 hover:scale-110 transition"
                          >
                            <FaGlobe className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </td>

                    {/* Status Badge */}
                    <td className="py-4 px-6">
                      {app.status === "Pending" && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-600 rounded-full text-xs font-semibold border border-amber-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                          Pending Review
                        </span>
                      )}
                      {app.status === "Shortlisted" && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-semibold border border-green-200">
                          <HiOutlineCheckCircle className="w-3.5 h-3.5" />
                          Shortlisted
                        </span>
                      )}
                      {app.status === "Rejected" && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 text-red-600 rounded-full text-xs font-semibold border border-red-200">
                          <HiOutlineXCircle className="w-3.5 h-3.5" />
                          Rejected
                        </span>
                      )}
                    </td>

                    {/* Actions */}
                    <td className="py-4 px-6 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {/* View Details Link */}
                        <Link to={`/jobs/${app.jobId}`}>
                          <button
                            title="View Job Details"
                            className="p-2 rounded-xl text-slate-400 hover:text-green-500 hover:bg-green-50 transition"
                          >
                            <HiOutlineExternalLink className="w-5 h-5" />
                          </button>
                        </Link>

                        {/* Withdraw / Delete Button */}
                        <button
                          title="Withdraw Application"
                          className="p-2 rounded-xl text-slate-400 hover:text-red-500 hover:bg-red-50 transition"
                        >
                          <HiOutlineTrash className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ApplicationList;