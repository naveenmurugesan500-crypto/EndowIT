import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, CheckCircle2, Linkedin, Twitter, Youtube, Instagram, ShieldCheck, Heart } from 'lucide-react';
import { courses } from '../data/coursesData';

export default function Footer({ onOpenEnrollModal }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-[#070D1E] border-t border-slate-800 text-slate-400 text-sm">
      {/* Top CTA Banner */}
      <div className="border-b border-slate-800/80 bg-gradient-to-r from-blue-950/40 via-cyan-950/20 to-indigo-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">
              Ready to Upgrade Your Tech Career?
            </h3>
            <p className="text-slate-300 mt-1">
              Join 10,000+ graduates working in top product companies worldwide.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onOpenEnrollModal()}
              className="px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl shadow-lg shadow-cyan-500/25 hover:from-cyan-400 hover:to-blue-500 transition"
            >
              Book Free Career Counseling
            </button>
            <Link
              to="/courses"
              className="px-6 py-3.5 bg-slate-800/80 hover:bg-slate-700/80 text-white font-semibold rounded-xl border border-slate-700 transition"
            >
              View All Programs
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <div className="bg-white px-3.5 py-1.5 rounded-xl shadow-md inline-flex items-center justify-center">
                <img src="./logo.png" alt="EndowIT Academy" className="h-9 w-auto object-contain" />
              </div>
            </Link>
            
            <p className="text-slate-400 leading-relaxed pr-4">
              EndowIT Academy is a premier IT skill training institution dedicated to bridging the industry-academia divide. We deliver hands-on, production-grade programs in Backend Architecture, AI & ML, Data Science, and Growth Marketing.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-slate-800/80 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:bg-slate-700 transition" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-slate-800/80 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:bg-slate-700 transition" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-slate-800/80 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:bg-slate-700 transition" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-slate-800/80 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:bg-slate-700 transition" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Courses Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Specialized Programs
            </h4>
            <ul className="space-y-2 text-sm">
              {courses.map(course => (
                <li key={course.slug}>
                  <Link
                    to={`/courses/${course.slug}`}
                    className="hover:text-cyan-400 transition flex items-center gap-1.5"
                  >
                    <span>{course.shortTitle}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-cyan-400 transition">Home</Link></li>
              <li><Link to="/courses" className="hover:text-cyan-400 transition">All Courses</Link></li>
              <li><Link to="/about" className="hover:text-cyan-400 transition">About Academy</Link></li>
              <li><Link to="/blog" className="hover:text-cyan-400 transition">Tech Blog & Insights</Link></li>
              <li><Link to="/contact" className="hover:text-cyan-400 transition">Contact & Location</Link></li>
              <li><button onClick={() => onOpenEnrollModal()} className="hover:text-cyan-400 transition text-left">Enrollment Portal</button></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Connect With Us
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>Tech Innovation Hub, Block 4, Tidel Park, Chennai, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>+91 98765 43210 / +91 44 2819 0000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>admissions@endowit.academy</span>
              </li>
            </ul>

            <div className="pt-2">
              <div className="text-xs font-semibold text-slate-200 mb-2">
                Weekly Tech Career Newsletter
              </div>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg text-xs flex items-center justify-center transition"
                  aria-label="Subscribe"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
              {subscribed && (
                <div className="text-xs text-emerald-400 flex items-center gap-1 mt-1.5 animate-fadeIn">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Subscribed successfully!</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/80 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>ISO 9001:2015 Certified Educational Institution • NASSCOM FutureSkills Aligned</span>
          </div>
          <div>
            © {new Date().getFullYear()} EndowIT Academy. All Rights Reserved. Built with passion for tech talent.
          </div>
        </div>
      </div>
    </footer>
  );
}
