import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Clock, Star, Users, TrendingUp, CheckCircle2, ChevronDown, Download, Sparkles, ArrowRight, ShieldCheck, Briefcase, Award } from 'lucide-react';
import SEO from '../components/SEO';
import { courses } from '../data/coursesData';

export default function CourseDetail({ onOpenEnrollModal }) {
  const { slug } = useParams();
  const [activeModule, setActiveModule] = useState(0);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const course = courses.find(c => c.slug === slug);

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  const handleDownloadSyllabus = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <div className="py-12 md:py-16">
      <SEO 
        title={`${course.title} | Curriculum & Certification | EndowIT Academy`}
        description={course.overview}
        keywords={`${course.title}, ${course.tools.map(t => t.name).join(', ')}, ${course.careerRoles.join(', ')}, syllabus, IT training`}
      />

      {/* Hero Header */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="card-tech rounded-3xl p-6 sm:p-10 md:p-12 relative overflow-hidden border border-cyan-500/20">
          
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Link to="/courses" className="text-xs text-slate-400 hover:text-cyan-400 transition">
              Courses
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-xs text-cyan-400 font-semibold">{course.category}</span>
            {course.badge && (
              <span className="ml-2 text-[11px] font-bold px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 border border-amber-500/30">
                ★ {course.badge}
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {course.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {course.tagline}
              </p>

              {/* Quick Meta Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 text-xs">
                <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                  <div className="text-slate-400 mb-1 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Duration</span>
                  </div>
                  <div className="font-bold text-white text-sm">{course.duration}</div>
                  <div className="text-[10px] text-slate-400">{course.hoursPerWeek}</div>
                </div>

                <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                  <div className="text-slate-400 mb-1 flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-current" />
                    <span>Rating</span>
                  </div>
                  <div className="font-bold text-amber-400 text-sm">{course.rating} / 5.0</div>
                  <div className="text-[10px] text-slate-400">{course.reviewsCount}+ verified reviews</div>
                </div>

                <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                  <div className="text-slate-400 mb-1 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Avg Package</span>
                  </div>
                  <div className="font-bold text-emerald-400 text-sm">{course.avgSalary}</div>
                  <div className="text-[10px] text-slate-400">Post-completion CTC</div>
                </div>

                <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                  <div className="text-slate-400 mb-1 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-blue-400" />
                    <span>Learners</span>
                  </div>
                  <div className="font-bold text-white text-sm">{course.learnersCount}</div>
                  <div className="text-[10px] text-slate-400">Alumni in Top Tier Firms</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => onOpenEnrollModal(course.slug)}
                  className="px-8 py-3.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-xl text-sm shadow-xl shadow-cyan-500/25 transition flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Enroll in Next Live Cohort</span>
                </button>

                <button
                  onClick={handleDownloadSyllabus}
                  className="px-6 py-3.5 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-semibold rounded-xl text-sm border border-slate-700/80 transition flex items-center gap-2"
                >
                  <Download className="w-4 h-4 text-cyan-400" />
                  <span>Download Full Syllabus PDF</span>
                </button>
              </div>

              {downloadSuccess && (
                <div className="p-3 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-xs text-emerald-300 flex items-center gap-2 animate-fadeIn">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Syllabus brochure downloaded! An academic counselor will share the detailed curriculum breakdown with you.</span>
                </div>
              )}
            </div>

            {/* Quick Cohort Summary Box */}
            <div className="bg-slate-900/90 border border-cyan-500/30 rounded-2xl p-6 space-y-4 shadow-xl">
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                Cohort Details
              </div>
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Batch Type:</span>
                  <span className="font-semibold text-white">Live Online Interactive</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Commitment:</span>
                  <span className="font-semibold text-white">{course.hoursPerWeek}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Prerequisites:</span>
                  <span className="font-semibold text-white text-right max-w-[180px]">{course.level}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Career Assistance:</span>
                  <span className="font-semibold text-emerald-400">100% Placement Drives</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Certification:</span>
                  <span className="font-semibold text-cyan-400">ISO & NASSCOM Aligned</span>
                </div>
              </div>

              <button
                onClick={() => onOpenEnrollModal(course.slug)}
                className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider transition"
              >
                Apply for Admission
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Highlights & Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="card-tech rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="text-2xl font-bold text-white">Program Overview</h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {course.overview}
              </p>
              
              <div className="pt-4 border-t border-slate-800">
                <h3 className="text-sm font-bold text-white mb-3">Key Learning Outcomes</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {course.highlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Curriculum Accordion */}
            <div className="card-tech rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white">Comprehensive Curriculum</h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Structured into progressive modules with hands-on labs and capstone submissions.
                  </p>
                </div>
                <span className="text-xs font-bold text-cyan-400 px-3 py-1 bg-cyan-950/60 rounded-full border border-cyan-500/30">
                  {course.curriculum.length} Modules
                </span>
              </div>

              <div className="space-y-3">
                {course.curriculum.map((mod, idx) => (
                  <div
                    key={idx}
                    className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900/60 transition"
                  >
                    <button
                      onClick={() => setActiveModule(activeModule === idx ? null : idx)}
                      className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
                    >
                      <div className="flex items-center gap-3">
                        <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[11px] font-bold">
                          {mod.module}
                        </span>
                        <span className="text-sm font-bold text-white">
                          {mod.title}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[11px] text-slate-400 hidden sm:inline">{mod.duration}</span>
                        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${activeModule === idx ? 'rotate-180 text-cyan-400' : ''}`} />
                      </div>
                    </button>

                    {activeModule === idx && (
                      <div className="p-4 bg-slate-950/80 border-t border-slate-800/80 space-y-2">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                          Key Topics Covered:
                        </div>
                        {mod.topics.map((topic, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                            <span className="text-cyan-400 font-bold">•</span>
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tools & Tech Learned */}
            <div className="card-tech rounded-2xl p-6 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-cyan-400" />
                <span>Technologies Mastered</span>
              </h3>
              <p className="text-xs text-slate-400">
                You will build projects with modern tools utilized in high-scale production systems:
              </p>
              <div className="flex flex-wrap gap-2">
                {course.tools.map((tool, idx) => (
                  <div key={idx} className="px-2.5 py-1 bg-slate-900 border border-slate-700/80 rounded-lg text-xs text-slate-200">
                    <span className="font-semibold">{tool.name}</span>
                    <span className="text-[10px] text-slate-500 ml-1.5">({tool.category})</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Job Roles */}
            <div className="card-tech rounded-2xl p-6 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-emerald-400" />
                <span>Target Job Roles</span>
              </h3>
              <div className="space-y-2">
                {course.careerRoles.map((role, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 p-2 bg-slate-900/60 rounded-lg border border-slate-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span className="font-medium text-white">{role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Prerequisites */}
            <div className="card-tech rounded-2xl p-6 space-y-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Prerequisites</span>
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {course.prerequisites}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Enrollment CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card-tech rounded-3xl p-8 md:p-12 text-center bg-gradient-to-r from-blue-950/60 via-cyan-950/40 to-slate-900 border border-cyan-500/30 space-y-6">
          <h2 className="text-3xl font-extrabold text-white">
            Ready to Master {course.shortTitle}?
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Upcoming cohort seats are limited to 25 learners to ensure direct 1-on-1 code reviews and mentorship. Reserve your slot now.
          </p>
          <button
            onClick={() => onOpenEnrollModal(course.slug)}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-xl text-sm shadow-xl shadow-cyan-500/25 transition"
          >
            Apply for {course.shortTitle}
          </button>
        </div>
      </section>
    </div>
  );
}
