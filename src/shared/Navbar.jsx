import React, { use, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";
import button from "daisyui/components/button";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {user, signOutUser} = use(AuthContext)

  const handleSignOut = (e) => {
    signOutUser()
    .then(() => {
      console.log('signed out user');
    })

  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Browse Jobs", path: "/jobs" },
    { name: "Companies", path: "/companies" },
    { name: "Career Advice", path: "/career-advice" },
    { name: "Contact", path: "/contact" },
    ...(user ? [{ name: "My Applications", path: "/myApplications" },] : []),
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-slate-800">
            Kormo<span className="text-green-500">BD</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium text-slate-600 hover:text-green-500 transition"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">

            <div>
              {
                user ? <Link onClick={handleSignOut}
            
              className="text-sm font-medium border border-slate-300 px-4 py-2 rounded-lg hover:border-black-500 hover:text-black transition bg-red-500 text-white"
            >
              Log Out
            </Link> :
                <>
                <Link
              to="/login"
              className="text-sm font-medium text-slate-700 border border-slate-300 px-4 py-2 rounded-lg hover:border-green-500 hover:text-green-500 transition"
            >
              Log In
            </Link>
            <Link
              to="/register"
              className="text-sm font-medium text-white bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition"
            >
              Register
            </Link>
                </>
              }
            </div>
            <Link
              to="/post-job"
              className="text-sm font-medium text-white bg-slate-800 px-4 py-2 rounded-lg hover:bg-slate-700 transition"
            >
              Post a Job
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-slate-100 transition"
          >
            <span
              className={`block h-0.5 w-6 bg-slate-700 transition-transform duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-slate-700 transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-slate-700 transition-transform duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-screen pb-6" : "max-h-0"
          }`}
        >
          {/* Mobile Nav Links */}
          <ul className="flex flex-col gap-1 mt-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-green-50 hover:text-green-500 transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="border-t border-slate-100 my-4" />

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-3 px-3">
            <Link
              to="/login"
              onClick={() => setIsMenuOpen(false)}
              className="text-center text-sm font-medium text-slate-700 border border-slate-300 px-4 py-2 rounded-lg hover:border-green-500 hover:text-green-500 transition"
            >
              Log In
            </Link>
            <Link
              to="/register"
              onClick={() => setIsMenuOpen(false)}
              className="text-center text-sm font-medium text-white bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition"
            >
              Register
            </Link>
            <Link
              to="/post-job"
              onClick={() => setIsMenuOpen(false)}
              className="text-center text-sm font-medium text-white bg-slate-800 px-4 py-2 rounded-lg hover:bg-slate-700 transition"
            >
              Post a Job
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;