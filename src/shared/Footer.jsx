import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Kormo<span className="text-green-400">BD</span>
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              Bangladesh’s smart job portal connecting talented people with the
              right opportunities. Find jobs, hire talent, and build your future.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                className="rounded-full border border-slate-700 p-2 hover:border-green-400 hover:text-green-400 transition"
              >
                Facebook
              </a>
              <a
                href="#"
                className="rounded-full border border-slate-700 p-2 hover:border-green-400 hover:text-green-400 transition"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="rounded-full border border-slate-700 p-2 hover:border-green-400 hover:text-green-400 transition"
              >
                YouTube
              </a>
            </div>
          </div>

          {/* Job Seekers */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Job Seekers
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Browse Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Create Resume
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Job Alerts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Career Advice
                </a>
              </li>
            </ul>
          </div>

          {/* Employers */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Employers
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Post a Job
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Browse Candidates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Pricing Plans
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Employer Dashboard
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>Dhaka, Bangladesh</li>
              <li>
                <a
                  href="mailto:support@kormobd.com"
                  className="hover:text-green-400 transition"
                >
                  support@kormobd.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+8801700000000"
                  className="hover:text-green-400 transition"
                >
                  +880 1700-000000
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-slate-800 pt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} KormoBD. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-4 text-sm">
            <a href="#" className="hover:text-green-400 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-green-400 transition">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-green-400 transition">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;