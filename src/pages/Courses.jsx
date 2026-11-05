import React, { useState } from 'react';
import { Search, Filter, BookOpen, Clock, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import CourseCard from '../components/CourseCard';
import { courses, courseCategories } from '../data/coursesData';

export default function Courses({ onOpenEnrollModal }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.tools.some(t => t.name.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEO 
        title="All IT Courses & Programs | EndowIT Academy"
        description="Explore EndowIT Academy's career programs: Digital Marketing, Data Science, Full Stack (All Backend), Data Analytics, and AI & ML with hands-on curriculum and placement assistance."
        keywords="IT courses, Full Stack Backend course, Data Science course, AI ML bootcamp, Data Analytics course, Digital Marketing training"
      />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
        <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30">
          Career Specializations
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Industry-Standard IT Training Programs
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Master the exact technologies and methodologies used by top software engineering and analytics teams globally. Every program includes live mentorship, code reviews, and guaranteed placement drives.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="card-tech rounded-2xl p-4 md:p-6 mb-12 space-y-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Search Box */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search by course name or tool (e.g. Kafka, Python, AI, SEO)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {courseCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Status Count */}
        <div className="text-xs text-slate-400 flex items-center justify-between border-t border-slate-800/80 pt-3">
          <span>Showing <strong className="text-cyan-400">{filteredCourses.length}</strong> programs</span>
          {searchQuery && (
            <button
              onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
              className="text-xs text-cyan-400 hover:underline"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>

      {/* Courses Cards Grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredCourses.map(course => (
            <CourseCard
              key={course.slug}
              course={course}
              onOpenEnrollModal={onOpenEnrollModal}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 card-tech rounded-2xl mb-20 space-y-3">
          <BookOpen className="w-12 h-12 text-slate-500 mx-auto" />
          <h3 className="text-lg font-bold text-white">No courses match your search</h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            Try searching for "Full Stack", "Data", "AI", or reset your filters.
          </p>
          <button
            onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
            className="px-4 py-2 bg-slate-800 text-cyan-400 rounded-lg text-xs font-semibold hover:bg-slate-700"
          >
            Reset All Filters
          </button>
        </div>
      )}

      {/* Course Comparison Matrix */}
      <section className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Program Comparison Overview
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Compare duration, target salaries, and core domains to find the best fit for your career trajectory.
          </p>
        </div>

        <div className="overflow-x-auto card-tech rounded-2xl border border-slate-800">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-900/90 text-cyan-400 uppercase tracking-wider text-[11px] border-b border-slate-800">
              <tr>
                <th className="py-4 px-6 font-bold">Course Title</th>
                <th className="py-4 px-4 font-bold">Domain</th>
                <th className="py-4 px-4 font-bold">Duration</th>
                <th className="py-4 px-4 font-bold">Key Focus</th>
                <th className="py-4 px-4 font-bold">Target Salary</th>
                <th className="py-4 px-6 font-bold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {courses.map((c) => (
                <tr key={c.slug} className="hover:bg-slate-800/40 transition">
                  <td className="py-4 px-6 font-bold text-white flex items-center gap-2">
                    <span>{c.shortTitle}</span>
                    {c.featured && (
                      <span className="text-[9px] bg-cyan-500/20 text-cyan-300 px-1.5 py-0.5 rounded font-bold">
                        Top
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-slate-300">{c.category}</td>
                  <td className="py-4 px-4 text-slate-300">{c.duration}</td>
                  <td className="py-4 px-4 text-slate-300 max-w-xs truncate">{c.highlights[0]}</td>
                  <td className="py-4 px-4 font-semibold text-emerald-400">{c.avgSalary}</td>
                  <td className="py-4 px-6 text-right">
                    <button
                      onClick={() => onOpenEnrollModal(c.slug)}
                      className="px-3 py-1.5 bg-cyan-500/20 hover:bg-cyan-500 text-cyan-300 hover:text-slate-950 font-bold rounded-lg text-xs transition"
                    >
                      Enroll
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Counseling Banner */}
      <div className="card-tech rounded-2xl p-8 bg-gradient-to-r from-blue-950/60 via-cyan-950/30 to-slate-900 border border-cyan-500/20 text-center space-y-4">
        <h3 className="text-2xl font-bold text-white">Unsure Which Course is Right for You?</h3>
        <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
          Our senior counselors evaluate your educational background, current coding skills, and career aspirations to recommend the ideal learning roadmap.
        </p>
        <button
          onClick={() => onOpenEnrollModal()}
          className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl text-sm shadow-lg shadow-cyan-500/20 hover:from-cyan-400 hover:to-blue-500 transition"
        >
          Book Free 1-on-1 Counseling Call
        </button>
      </div>
    </div>
  );
}
