import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Sparkles, Send, Phone, Mail, User, BookOpen, Clock } from 'lucide-react';
import { courses } from '../data/coursesData';

export default function EnrollModal({ isOpen, onClose, selectedCourseSlug }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    courseSlug: selectedCourseSlug || 'full-stack',
    mode: 'Online Live Interactive',
    experience: 'Fresher / Student'
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedCourseSlug) {
      setFormData(prev => ({ ...prev, courseSlug: selectedCourseSlug }));
    }
  }, [selectedCourseSlug]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API enrollment lead capture
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#0F1D3E] border border-cyan-500/30 rounded-2xl p-6 md:p-8 shadow-2xl shadow-cyan-500/10 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button 
          onClick={handleReset}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-800/60 rounded-full hover:bg-slate-700 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-cyan-500/20 text-cyan-400 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-white">Application Received!</h3>
            <p className="text-slate-300 text-sm max-w-sm mx-auto">
              Thank you, <span className="text-cyan-400 font-semibold">{formData.name}</span>. An EndowIT Academic Counselor will contact you within 2 business hours via call/WhatsApp to discuss the syllabus, cohort schedule, and fee options.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-500 transition shadow-lg shadow-cyan-500/25"
              >
                Close & Continue Browsing
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Fast-Track Admission</span>
            </div>
            <h3 className="text-2xl font-extrabold text-white">
              Enroll at EndowIT Academy
            </h3>
            <p className="text-slate-400 text-sm mt-1 mb-6">
              Reserve your seat for the upcoming cohort. Scholarship tests and flexible EMI options available.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Full Name *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Naveen Murugesan"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-900/80 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-cyan-400 transition"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Email Address *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                    <input
                      type="email"
                      required
                      placeholder="you@email.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-900/80 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-cyan-400 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Phone / WhatsApp *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-900/80 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-cyan-400 transition"
                    />
                  </div>
                </div>
              </div>

              {/* Course Selection */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Select Program *</label>
                <div className="relative">
                  <BookOpen className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <select
                    value={formData.courseSlug}
                    onChange={e => setFormData({ ...formData, courseSlug: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-900/80 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-cyan-400 transition"
                  >
                    {courses.map(course => (
                      <option key={course.slug} value={course.slug} className="bg-slate-900">
                        {course.title} ({course.duration})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Learning Mode & Background */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Preferred Mode</label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                    <select
                      value={formData.mode}
                      onChange={e => setFormData({ ...formData, mode: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-900/80 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-cyan-400 transition"
                    >
                      <option className="bg-slate-900">Online Live Interactive</option>
                      <option className="bg-slate-900">Weekend Fast-Track</option>
                      <option className="bg-slate-900">Self-Paced Mentored</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Current Background</label>
                  <select
                    value={formData.experience}
                    onChange={e => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-900/80 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-cyan-400 transition"
                  >
                    <option className="bg-slate-900">Fresher / College Student</option>
                    <option className="bg-slate-900">Working IT Professional</option>
                    <option className="bg-slate-900">Non-IT Career Switcher</option>
                    <option className="bg-slate-900">Freelancer / Entrepreneur</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition shadow-lg shadow-cyan-500/25 disabled:opacity-50"
                >
                  {loading ? (
                    <span>Submitting Application...</span>
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-400 mt-2">
                🔒 We respect your privacy. No spam. You will only be contacted by an academic counselor.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
