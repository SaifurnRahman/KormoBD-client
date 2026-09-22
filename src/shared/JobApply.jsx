import React from "react";
import { Link, useParams } from "react-router";
import { motion } from "framer-motion";
import {
  HiOutlineArrowLeft,
  HiOutlineDocumentText,
  HiOutlineLink,
  HiOutlineCurrencyDollar,
  HiOutlineCalendar,
  HiOutlineCloudUpload,
  HiOutlineCheckCircle,
  HiOutlineBriefcase,
  HiOutlineLocationMarker,
  HiArrowRight,
  HiOutlineUser,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id : jobId } = useParams();
  const {user} = useAuth();


  const handleApplyForSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedin.value;
    const github = form.github.value;
    const portfolio = form.portfolio.value;
    const expectedSalary = form.expectedSalary.value;
    const noticePeriod = form.noticePeriod.value;

    // console.log(linkedIn, github, portfolio, expectedSalary, noticePeriod);
    const application = {
        jobId,
        applicant: user.email,
        linkedIn,
        github,
        portfolio
    }

    console.log(application);

    axios.post('http://localhost:3000/applications', application)
    .then(res => {
      console.log(res.data)
      if(res.data.insertedId){
        Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your application submitted",
  showConfirmButton: false,
  timer: 1500
});
      }
    })
    .catch(error => {
      console.log(error);
    });
    
    

  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50 py-10">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to={`/jobs/${jobId || ""}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-green-500 transition mb-8"
          >
            <HiOutlineArrowLeft className="w-4 h-4" />
            Back to Job Details
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-slate-900">
            Apply for <span className="text-green-500">Software Engineer</span>
          </h1>
          <p className="mt-2 text-slate-600">
            Please fill out the form below to submit your application to{" "}
            <span className="font-semibold text-slate-800">Favorite IT</span>.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* ========== LEFT - Application Form ========== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleApplyForSubmit} className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-8">

              {/* Section 1: Applicant Profile Preview */}
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
                  <span className="w-7 h-7 bg-green-100 text-green-600 rounded-lg text-xs flex items-center justify-center font-semibold">
                    1
                  </span>
                  Personal Details
                </h2>
                <p className="text-xs text-slate-400 mb-4 ml-9">
                  Auto-filled from your logged in account profile.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 ml-0 sm:ml-9">
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <HiOutlineUser className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <input
                        type="text"
                        name="applicantName"
                        defaultValue={user?.displayName || " "}
                        readOnly
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 font-medium focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <HiOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <input
                        type="email"
                        name="applicantEmail"
                        defaultValue={user?.email || ""}
                        readOnly
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 font-medium focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100" />

              {/* Section 2: Portfolio & Social Links */}
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
                  <span className="w-7 h-7 bg-green-100 text-green-600 rounded-lg text-xs flex items-center justify-center font-semibold">
                    2
                  </span>
                  Professional Links
                </h2>
                <p className="text-xs text-slate-400 mb-4 ml-9">
                  Provide links to showcase your work and experience.
                </p>

                <div className="space-y-4 ml-0 sm:ml-9">
                  {/* LinkedIn */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      LinkedIn Profile <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <FaLinkedin className="absolute left-3 top-1/2 -translate-y-1/2 text-[#0A66C2] w-5 h-5" />
                      <input
                        type="url"
                        name="linkedin"
                        placeholder="https://linkedin.com/in/username"
                        required
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  {/* GitHub */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      GitHub Profile
                    </label>
                    <div className="relative">
                      <FaGithub className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-800 w-5 h-5" />
                      <input
                        type="url"
                        name="github"
                        placeholder="https://github.com/username"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  {/* Portfolio Web */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Portfolio / Personal Website
                    </label>
                    <div className="relative">
                      <FaGlobe className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-500 w-5 h-5" />
                      <input
                        type="url"
                        name="portfolio"
                        placeholder="https://yourportfolio.com"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100" />

              {/* Section 3: Expected Salary & Notice Period */}
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
                  <span className="w-7 h-7 bg-green-100 text-green-600 rounded-lg text-xs flex items-center justify-center font-semibold">
                    3
                  </span>
                  Salary & Availability
                </h2>
                <p className="text-xs text-slate-400 mb-4 ml-9">
                  Help the employer understand your expectations.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 ml-0 sm:ml-9">
                  {/* Expected Salary */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Expected Salary (BDT/month) <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <HiOutlineCurrencyDollar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <input
                        type="number"
                        name="expectedSalary"
                        placeholder="e.g. 50000"
                        required
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  {/* Availability / Notice Period */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Availability / Notice Period <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <HiOutlineCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <select
                        name="noticePeriod"
                        required
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition bg-white text-slate-700"
                      >
                        <option value="">Select notice period</option>
                        <option value="immediate">Immediately</option>
                        <option value="15days">15 Days</option>
                        <option value="1month">1 Month</option>
                        <option value="2months">2 Months</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100" />

              {/* Section 4: Resume / CV Upload */}
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
                  <span className="w-7 h-7 bg-green-100 text-green-600 rounded-lg text-xs flex items-center justify-center font-semibold">
                    4
                  </span>
                  Upload Resume / CV 
                </h2>
                <p className="text-xs text-slate-400 mb-4 ml-9">
                  Upload your updated resume in PDF or DOCX format (Max 5MB).
                </p>

                <div className="ml-0 sm:ml-9">
                  <div className="border-2 border-dashed border-slate-200 hover:border-green-500 rounded-2xl p-6 text-center bg-slate-50/50 transition cursor-pointer group">
                    <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-3 text-green-500 group-hover:scale-110 transition">
                      <HiOutlineCloudUpload className="w-6 h-6" />
                    </div>
                    <p className="text-sm font-semibold text-slate-700">
                      Click to upload or drag & drop
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      PDF, DOCX up to 5MB
                    </p>
                    <input
                      type="file"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                    />
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100" />

              {/* Section 5: Cover Letter */}
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
                  <span className="w-7 h-7 bg-green-100 text-green-600 rounded-lg text-xs flex items-center justify-center font-semibold">
                    5
                  </span>
                  Cover Letter / Pitch
                </h2>
                <p className="text-xs text-slate-400 mb-4 ml-9">
                  Briefly explain why you are the best fit for this role.
                </p>

                <div className="ml-0 sm:ml-9">
                  <textarea
                    name="coverLetter"
                    rows={5}
                    placeholder="Write a short cover letter highlighting your relevant experience, key skills, and passion for this job..."
                    className="w-full p-4 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 ml-0 sm:ml-9">
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 bg-green-500 text-white font-semibold text-base rounded-xl hover:bg-green-600 transition shadow-lg shadow-green-500/25 flex items-center justify-center gap-2"
                >
                  Submit Application
                  <HiArrowRight className="w-5 h-5" />
                </motion.button>
              </div>

            </form>
          </motion.div>

          {/* ========== RIGHT - Job Summary Sidebar ========== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Summary Card */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 sticky top-24">
              <h3 className="text-base font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100">
                Application Summary
              </h3>

              {/* Company Logo & Title */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center overflow-hidden flex-shrink-0">
                  <img
                    src="https://i.ibb.co/mXD5MNf/facebook.png"
                    alt="Company Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">
                    Software Engineer
                  </h4>
                  <p className="text-xs text-slate-500">Favorite IT</p>
                </div>
              </div>

              {/* Meta details */}
              <div className="space-y-2.5 text-xs text-slate-600 mb-6 bg-slate-50 p-4 rounded-xl">
                <div className="flex items-center gap-2">
                  <HiOutlineLocationMarker className="w-4 h-4 text-slate-400" />
                  <span>Halishohor, Chittagong</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiOutlineBriefcase className="w-4 h-4 text-slate-400" />
                  <span>Hybrid · Engineering</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiOutlineCurrencyDollar className="w-4 h-4 text-slate-400" />
                  <span className="font-semibold text-slate-800">
                    ৳40k - ৳60k / month
                  </span>
                </div>
              </div>

              {/* Checklist */}
              <div className="space-y-2.5">
                <p className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Application Tips
                </p>
                <div className="flex items-start gap-2 text-xs text-slate-500">
                  <HiOutlineCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Ensure your LinkedIn profile is up to date</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-500">
                  <HiOutlineCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Attach a PDF version of your resume</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-500">
                  <HiOutlineCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Double check your contact email & phone</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default JobApply;