import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Sparkles, Code, Database, Brain, BarChart2, Megaphone, ArrowRight } from 'lucide-react';
import { courses } from '../data/coursesData';

export default function Navbar({ onOpenEnrollModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const location = useLocation();

  const getCourseIcon = (slug) => {
    switch (slug) {
      case 'full-stack': return <Code className="w-5 h-5 text-cyan-400" />;
      case 'data-science': return <Database className="w-5 h-5 text-emerald-400" />;
      case 'ai-ml': return <Brain className="w-5 h-5 text-purple-400" />;
      case 'data-analytics': return <BarChart2 className="w-5 h-5 text-amber-400" />;
      case 'digital-marketing': return <Megaphone className="w-5 h-5 text-rose-400" />;
      default: return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0A1128]/90 backdrop-blur-md border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center p-0.5 shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition">
              <div className="w-full h-full bg-[#0F1D3E] rounded-[10px] flex items-center justify-center">
                <Brain className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-white flex items-center">
                Endow<span className="text-cyan-400">IT</span>
              </span>
              <span className="text-[10px] font-bold text-cyan-300 tracking-widest uppercase -mt-1">
                ACADEMY
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <Link
              to="/"
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition ${
                isActive('/') && location.pathname === '/'
                  ? 'text-cyan-400 bg-cyan-950/40' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              Home
            </Link>

            {/* Courses Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setCoursesDropdownOpen(true)}
              onMouseLeave={() => setCoursesDropdownOpen(false)}
            >
              <Link
                to="/courses"
                className={`px-3 py-2 text-sm font-semibold rounded-lg flex items-center gap-1 transition ${
                  isActive('/courses') 
                    ? 'text-cyan-400 bg-cyan-950/40' 
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                }`}
              >
                <span>Courses</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${coursesDropdownOpen ? 'rotate-180 text-cyan-400' : ''}`} />
              </Link>

              {coursesDropdownOpen && (
                <div className="absolute left-0 mt-1 w-80 bg-[#0F1D3E] border border-cyan-500/20 rounded-2xl p-3 shadow-2xl shadow-cyan-950/50 animate-fadeIn">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1 mb-1">
                    Specialized Programs
                  </div>
                  <div className="space-y-1">
                    {courses.map(course => (
                      <Link
                        key={course.slug}
                        to={`/courses/${course.slug}`}
                        onClick={() => setCoursesDropdownOpen(false)}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-800/70 transition group"
                      >
                        <div className="p-2 bg-slate-900/80 rounded-lg group-hover:scale-105 transition">
                          {getCourseIcon(course.slug)}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white group-hover:text-cyan-400 transition flex items-center gap-1">
                            {course.shortTitle}
                            {course.featured && (
                              <span className="text-[9px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold">
                                Hot
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-400 line-clamp-1">
                            {course.duration} • {course.avgSalary}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="border-t border-slate-800/80 mt-2 pt-2 px-3">
                    <Link
                      to="/courses"
                      onClick={() => setCoursesDropdownOpen(false)}
                      className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center justify-between"
                    >
                      <span>Explore all programs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition ${
                isActive('/about') 
                  ? 'text-cyan-400 bg-cyan-950/40' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              About Us
            </Link>

            <Link
              to="/blog"
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition ${
                isActive('/blog') 
                  ? 'text-cyan-400 bg-cyan-950/40' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              Blog
            </Link>

            <Link
              to="/contact"
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition ${
                isActive('/contact') 
                  ? 'text-cyan-400 bg-cyan-950/40' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={() => onOpenEnrollModal()}
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 rounded-xl hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition group"
            >
              <Sparkles className="w-4 h-4 mr-2 text-cyan-200 group-hover:rotate-12 transition-transform" />
              <span>Enroll Now</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-xl transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F1D3E] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-200 hover:bg-slate-800/60"
          >
            Home
          </Link>
          
          <div className="space-y-1 pl-2">
            <div className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-400">
              Courses
            </div>
            {courses.map(c => (
              <Link
                key={c.slug}
                to={`/courses/${c.slug}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-cyan-400 hover:bg-slate-800/40"
              >
                {c.title}
              </Link>
            ))}
          </div>

          <Link
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-200 hover:bg-slate-800/60"
          >
            About Us
          </Link>

          <Link
            to="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-200 hover:bg-slate-800/60"
          >
            Blog
          </Link>

          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-200 hover:bg-slate-800/60"
          >
            Contact Us
          </Link>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnrollModal();
              }}
              className="w-full py-3 text-center font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl shadow-lg shadow-cyan-500/25"
            >
              Enroll Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
