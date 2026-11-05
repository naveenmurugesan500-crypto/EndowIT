import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, CheckCircle2, Star, Award, Users, TrendingUp, ShieldCheck, Play, HelpCircle, ChevronDown } from 'lucide-react';
import SEO from '../components/SEO';
import CourseCard from '../components/CourseCard';
import { courses, academyStats, hiringPartners, studentTestimonials, academyHighlights } from '../data/coursesData';

export default function Home({ onOpenEnrollModal }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      q: "Who are the instructors at EndowIT Academy?",
      a: "All our mentors and curriculum directors are active senior professionals—Staff Backend Engineers, Principal Data Scientists, AI Researchers, and Growth Marketing Directors from top tech firms and unicorns."
    },
    {
      q: "Does EndowIT Academy offer placement support?",
      a: "Yes! Every student receives dedicated 1-on-1 career assistance: resume revamping, GitHub/portfolio reviews, system design mock interviews, behavioral coaching, and direct interview opportunities through our 450+ hiring partner network."
    },
    {
      q: "Can I attend if I am working full-time or studying in college?",
      a: "Absolutely. Our programs offer flexible weekend cohorts and evening interactive live classes, complete with lifetime access to session recordings, lab materials, and 24/7 mentor doubt clearance."
    },
    {
      q: "Are there EMI or scholarship options available?",
      a: "Yes, we provide 0% interest EMI options up to 12 months, along with merit-based scholarships based on our entrance aptitude assessment."
    }
  ];

  return (
    <div>
      <SEO 
        title="EndowIT Academy | Premier IT Courses in AI, Full Stack Backend, Data Science"
        description="Master Full Stack (Backend), Data Science, AI & ML, Data Analytics, and Digital Marketing with EndowIT Academy. Hands-on capstones, 1-on-1 mentorship, and 100% placement support."
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/15 blur-[140px] pointer-events-none rounded-full" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-blue-600/15 blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            
            {/* Admissions Banner Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs md:text-sm font-semibold shadow-inner">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span>Admissions Open for 2026 Live Cohorts • Up to 30% Merit Scholarships</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Master In-Demand Tech Skills. <br />
              <span className="text-gradient-cyan">Get Hired by Top Tech Firms.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Industry-led, production-grade training in <span className="text-cyan-300 font-semibold">Full Stack (Backend)</span>, <span className="text-cyan-300 font-semibold">AI & ML</span>, <span className="text-cyan-300 font-semibold">Data Science</span>, <span className="text-cyan-300 font-semibold">Data Analytics</span>, and <span className="text-cyan-300 font-semibold">Digital Marketing</span> with 1-on-1 mentorship and 100% placement support.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => onOpenEnrollModal()}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-bold rounded-xl text-base shadow-xl shadow-cyan-500/25 hover:from-cyan-400 hover:to-blue-500 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                <span>Enroll in a Course</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <Link
                to="/courses"
                className="w-full sm:w-auto px-8 py-4 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold rounded-xl text-base border border-slate-700/80 transition-all flex items-center justify-center gap-2"
              >
                <span>Browse All 5 Courses</span>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>95.4% Placement Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>1-on-1 Tech Lead Mentors</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Real Production Capstones</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>0% Interest EMI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Academy Stats Strip */}
      <section className="border-y border-slate-800/80 bg-slate-900/40 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {academyStats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-gradient-cyan">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base font-bold text-white">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400">
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">
              Industry-Aligned Programs
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Explore Our Specialized Courses
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl">
              Curated and constantly updated with high-growth tech industry requirements. Includes capstone projects, portfolio building, and mock interviews.
            </p>
          </div>
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition"
          >
            <span>View All Programs with Syllabi</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map(course => (
            <CourseCard
              key={course.slug}
              course={course}
              onOpenEnrollModal={onOpenEnrollModal}
            />
          ))}
        </div>
      </section>

      {/* Why Choose EndowIT Academy */}
      <section className="py-20 bg-slate-900/30 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
              The EndowIT Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Why Learn With EndowIT Academy?
            </h2>
            <p className="text-slate-400 text-sm">
              We eliminate traditional textbook learning. Everything you learn is directly applicable to high-scale tech company engineering sprints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {academyHighlights.map((hl, idx) => (
              <div key={idx} className="card-tech rounded-2xl p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  {hl.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {hl.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Career Transformation Roadmap */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
            Structured Pathway
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Your 4-Stage Pathway to Tech Mastery
          </h2>
          <p className="text-slate-400 text-sm">
            From zero to placement-ready with a battle-tested structured framework.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {[
            {
              step: "01",
              title: "Foundations & Deep Concepts",
              desc: "Master system internals, data flow, architecture principles, and core syntax through daily live interactive sessions."
            },
            {
              step: "02",
              title: "Production Capstones",
              desc: "Build 5+ industry-grade projects mimicking real software teams (PR reviews, CI/CD pipelines, live server deployments)."
            },
            {
              step: "03",
              title: "Mock Interviews & Mentorship",
              desc: "Undergo rigorous technical mock interviews with Staff Engineers and Data Science leads until you consistently clear hiring bars."
            },
            {
              step: "04",
              title: "Guaranteed Placement Drives",
              desc: "Get connected with our 450+ hiring network partners with exclusive referral slots and personalized negotiation coaching."
            }
          ].map((item, idx) => (
            <div key={idx} className="card-tech rounded-2xl p-6 relative group">
              <div className="text-4xl font-black text-slate-800 group-hover:text-cyan-500/20 transition mb-3">
                {item.step}
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 bg-slate-900/40 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
              Alumni Success Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Hear From EndowIT Graduates
            </h2>
            <p className="text-slate-400 text-sm">
              Discover how our learners transitioned from non-tech and junior roles to high-paying careers in top tech companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studentTestimonials.map((t, idx) => (
              <div key={idx} className="card-tech rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-300 italic leading-relaxed mb-6">
                    "{t.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-cyan-400/40"
                  />
                  <div>
                    <div className="text-sm font-bold text-white">{t.name}</div>
                    <div className="text-[11px] text-cyan-400 font-semibold">{t.role}</div>
                    <div className="text-[10px] text-slate-400">Placed at {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Partners Marquee */}
      <section className="py-16 border-t border-slate-800/80 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Our Alumni Work at Leading Tech Giants & Unicorns
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
            {hiringPartners.map((partner, i) => (
              <span key={i} className="text-lg md:text-xl font-black text-slate-300 hover:text-cyan-400 transition cursor-default">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
            Got Questions?
          </span>
          <h2 className="text-3xl font-extrabold text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="card-tech rounded-xl overflow-hidden border border-slate-800 cursor-pointer"
              onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
            >
              <div className="p-5 flex items-center justify-between text-left">
                <span className="text-sm font-semibold text-white flex items-center gap-3">
                  <HelpCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  {faq.q}
                </span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${activeFaq === idx ? 'rotate-180 text-cyan-400' : ''}`} />
              </div>
              {activeFaq === idx && (
                <div className="px-5 pb-5 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Final Call To Action */}
      <section className="py-16 bg-gradient-to-r from-blue-950/60 via-cyan-950/40 to-slate-900 border-t border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Transform Your Career with EndowIT Academy
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Get personalized guidance on choosing the right program for your career goals. Speak with an expert mentor today.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenEnrollModal()}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl text-base shadow-xl shadow-cyan-500/30 hover:from-cyan-400 hover:to-blue-500 transition"
            >
              Apply for Next Cohort
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
