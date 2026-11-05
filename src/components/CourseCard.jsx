import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, Users, ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';

export default function CourseCard({ course, onOpenEnrollModal }) {
  return (
    <div className="card-tech rounded-2xl p-6 flex flex-col justify-between group">
      <div>
        {/* Card Header & Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-cyan-400 border border-cyan-500/30">
            {course.category}
          </span>
          {course.badge && (
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 border border-amber-500/30">
              ★ {course.badge}
            </span>
          )}
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
          {course.title}
        </h3>
        <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
          {course.tagline}
        </p>

        {/* Meta Stats: Rating, Duration, Salary */}
        <div className="grid grid-cols-2 gap-2 my-4 p-3 bg-slate-900/60 rounded-xl border border-slate-800/80 text-xs">
          <div className="flex items-center gap-1.5 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1.5 text-amber-400 font-semibold">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>{course.rating} ({course.reviewsCount}+)</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-300">
            <Users className="w-3.5 h-3.5 text-blue-400" />
            <span>{course.learnersCount} Enrolled</span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>{course.avgSalary}</span>
          </div>
        </div>

        {/* Curriculum Highlights Preview */}
        <div className="space-y-1.5 my-3">
          {course.highlights.slice(0, 3).map((hl, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
              <span className="line-clamp-1">{hl}</span>
            </div>
          ))}
        </div>

        {/* Tools Learned tags */}
        <div className="pt-2">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
            Key Technologies:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {course.tools.slice(0, 5).map((tool, idx) => (
              <span key={idx} className="text-[11px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60">
                {tool.name}
              </span>
            ))}
            {course.tools.length > 5 && (
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800/50 text-slate-400">
                +{course.tools.length - 5} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-slate-800/80">
        <Link
          to={`/courses/${course.slug}`}
          className="w-full py-2.5 px-3 bg-slate-800 hover:bg-slate-700/80 text-slate-200 hover:text-white text-xs font-semibold rounded-xl text-center flex items-center justify-center gap-1.5 transition border border-slate-700/80"
        >
          <span>Curriculum</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <button
          onClick={() => onOpenEnrollModal(course.slug)}
          className="w-full py-2.5 px-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-bold rounded-xl text-center transition shadow-md shadow-cyan-500/20"
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
}
