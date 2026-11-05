import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, CheckCircle2, Sparkles, Building2 } from 'lucide-react';
import SEO from '../components/SEO';
import { courses } from '../data/coursesData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'Full Stack (Backend Mastery)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: 'Full Stack (Backend Mastery)',
        message: ''
      });
      setTimeout(() => setSubmitted(false), 6000);
    }, 700);
  };

  return (
    <div className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <SEO 
        title="Contact Us & Campus Location | EndowIT Academy"
        description="Get in touch with EndowIT Academy. Schedule a 1-on-1 career consultation, visit our Chennai tech campus, or connect with admissions counselors via WhatsApp & phone."
        keywords="Contact EndowIT Academy, IT academy address, Admission phone number, Career counseling, Tech park campus"
      />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30">
          Get In Touch
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Let's Plan Your <span className="text-gradient-cyan">Tech Transformation</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Have questions about course eligibility, cohort timings, or our placement guarantee? Our academic advisors are here to help you every step of the way.
        </p>
      </div>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card-tech rounded-2xl p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30">
            <Phone className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white">Call Admissions</h3>
          <p className="text-xs text-slate-400">Direct phone line with counseling team:</p>
          <div className="text-sm font-semibold text-cyan-300">
            +91 98765 43210 <br />
            +91 44 2819 0000
          </div>
        </div>

        <div className="card-tech rounded-2xl p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
            <MessageSquare className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white">WhatsApp Chat</h3>
          <p className="text-xs text-slate-400">Quick answers & brochure on chat:</p>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
            className="inline-block text-xs font-bold text-emerald-400 hover:text-emerald-300 underline"
          >
            Chat on WhatsApp (+91 98765 43210) &rarr;
          </a>
        </div>

        <div className="card-tech rounded-2xl p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
            <Mail className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white">Email Us</h3>
          <p className="text-xs text-slate-400">For inquiries and corporate training:</p>
          <div className="text-xs font-semibold text-slate-200">
            admissions@endowit.academy <br />
            partnerships@endowit.academy
          </div>
        </div>

        <div className="card-tech rounded-2xl p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center border border-purple-500/30">
            <Clock className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white">Office Hours</h3>
          <p className="text-xs text-slate-400">In-person & virtual counseling:</p>
          <div className="text-xs font-semibold text-slate-200">
            Mon – Sat: 9:00 AM – 7:30 PM <br />
            Sunday: 10:00 AM – 4:00 PM
          </div>
        </div>
      </div>

      {/* Form & Campus Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Contact Form */}
        <div className="lg:col-span-7 card-tech rounded-3xl p-6 sm:p-8 md:p-10 border border-cyan-500/30 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-white">Send Us a Message</h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Fill out this form and a senior mentor will get back to you within 2 hours.
            </p>
          </div>

          {submitted && (
            <div className="p-4 bg-emerald-950/80 border border-emerald-500/50 rounded-2xl flex items-center gap-3 text-emerald-300 text-xs sm:text-sm animate-fadeIn">
              <CheckCircle2 className="w-6 h-6 flex-shrink-0 text-emerald-400" />
              <div>
                <strong>Inquiry Sent!</strong> Thank you for reaching out. We have logged your request and our academic team will connect with you shortly.
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Your Full Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Naveen Murugesan"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="you@email.com"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Course of Interest</label>
              <select
                value={formData.course}
                onChange={e => setFormData({ ...formData, course: e.target.value })}
                className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-cyan-400"
              >
                {courses.map(c => (
                  <option key={c.slug} value={c.title} className="bg-slate-900">
                    {c.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Your Message or Query</label>
              <textarea
                rows="4"
                placeholder="Ask about batches, syllabus, fees, or your career goals..."
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-xl text-sm shadow-xl shadow-cyan-500/20 transition flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? <span>Sending Message...</span> : (
                <>
                  <span>Send Inquiry</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Campus & Map Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="card-tech rounded-3xl p-6 sm:p-8 space-y-4 border border-slate-800">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-4 h-4" />
              <span>Campus Location</span>
            </div>

            <h3 className="text-xl font-bold text-white">
              EndowIT Learning & Innovation Hub
            </h3>

            <p className="text-xs text-slate-300 leading-relaxed">
              Located in the heart of the IT corridor with state-of-the-art computer labs, high-speed fiber internet, and collaborative breakout spaces for cohort hackathons.
            </p>

            <div className="p-4 bg-slate-900/90 border border-slate-800 rounded-2xl space-y-2 text-xs text-slate-300">
              <div className="font-bold text-white flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>EndowIT Academy Campus</span>
              </div>
              <p className="pl-6 text-slate-400">
                Module 402, 4th Floor, Tech Innovation Park, <br />
                Taramani OMR Road, Chennai, Tamil Nadu - 600113
              </p>
            </div>

            {/* Visual Simulated Map Display */}
            <div className="w-full h-48 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col items-center justify-center p-4 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 to-blue-950/30"></div>
              <MapPin className="w-10 h-10 text-cyan-400 animate-bounce mb-2 relative z-10" />
              <div className="text-sm font-bold text-white relative z-10">Tidel Tech Zone • Chennai</div>
              <div className="text-[11px] text-slate-400 relative z-10">Metro Station 5 mins walk</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
