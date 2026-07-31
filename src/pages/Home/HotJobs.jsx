import React, { use } from 'react';
import { motion } from "framer-motion";
import {
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiOutlineCurrencyDollar,
  HiOutlineBriefcase,
  HiOutlineBookmark,
  HiArrowRight,
  HiFire,
} from "react-icons/hi";
import { Link } from 'react-router';
import JobCard from '../../shared/JobCard';

const HotJobs = ({jobsPromise}) => {
    const jobs = use(jobsPromise);

    const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
 
    return (
        <div className='20 bg-slate-50'>
              <div className='mx-auto max-w-7xl px-6'>

                //section header 

                <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">
              <HiFire className="w-4 h-4" />
              Hot Jobs This Week
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
              Featured{" "}
              <span className="relative">
                <span className="relative z-10 text-green-500">
                  Job Openings
                </span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-green-200 z-0" />
              </span>
            </h2>
            <p className="mt-3 text-slate-600 max-w-2xl">
              Discover the most in-demand positions from top companies in
              Bangladesh. Apply now before they're gone!
            </p>
          </div>

          <Link to="/jobs">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition flex items-center gap-2 whitespace-nowrap"
            >
              View All Jobs
              <HiArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>
        
        <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
         className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
            }
        </motion.div>
              </div>
            <h1>length : {jobs.length}</h1>
        </div>
    );
};

export default HotJobs;