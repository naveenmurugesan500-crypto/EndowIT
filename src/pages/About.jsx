import React from 'react';
import { Award, Target, Users, BookOpen, ShieldCheck, Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

export default function About({ onOpenEnrollModal }) {
  const leadership = [
    {
      name: "Karthik Subramanian",
      role: "Founder & Head of Curriculum",
      bio: "Ex-Staff Architect at Amazon & Microsoft. Over 15 years building high-throughput distributed backends and leading engineering teams across India & Silicon Valley.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80"
    },
    {
      name: "Dr. Ananya Sen",
      role: "Chief AI & Data Scientist",
      bio: "PhD in Computational Intelligence. Published researcher with 12+ years experience deploying deep learning models, enterprise RAG, and AI pipelines in production.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80"
    },
    {
      name: "Vikram Malhotra",
      role: "Head of Growth & Digital Strategy",
      bio: "Performance Marketing veteran with $20M+ in managed ad spend across Meta & Google. Has scaled 4 high-growth consumer tech startups from Seed to Series B.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80"
    },
    {
      name: "Meera Krishnan",
      role: "Director of Career Services & Placement",
      bio: "Former Talent Acquisition Lead at tier-1 IT firms. Oversees EndowIT's network of 450+ corporate hiring partners and personalized student placement drives.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      <SEO 
        title="About Us | EndowIT Academy - Redefining IT Education"
        description="Learn about EndowIT Academy's mission, leadership team, industry-aligned training methodology, and our commitment to launching world-class tech careers."
        keywords="About EndowIT Academy, IT mentors, Tech training institute, Placement assistance, Founders"
      />

      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30">
          Our Story & Purpose
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Empowering The Next Generation of <span className="text-gradient-cyan">Global Tech Leaders</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          EndowIT Academy was founded with a singular conviction: traditional college curriculums move too slowly for the fast-paced software industry. We exist to bridge that gap with production-grade training led directly by active tech industry leaders.
        </p>
      </section>

      {/* Mission & Vision Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card-tech rounded-3xl p-8 space-y-4 border border-cyan-500/20">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30">
            <Target className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-white">Our Mission</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            To democratize high-end technical education by providing rigorous, project-driven, and mentor-guided programs in Backend Systems, Artificial Intelligence, Data Science, and Modern Marketing—ensuring every committed student secures an impactful career.
          </p>
        </div>

        <div className="card-tech rounded-3xl p-8 space-y-4 border border-blue-500/20">
          <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
            <Sparkles className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-white">Our Vision</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            To become India's most trusted tech finishing school and career incubator, recognized internationally by leading product engineering teams for producing battle-tested, day-one productive software talent.
          </p>
        </div>
      </section>

      {/* Core Educational Pillars */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">The 4 Pillars of EndowIT</h2>
          <p className="text-xs sm:text-sm text-slate-400">
            How we deliver a 95.4% placement rate year after year.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Zero Fluff, 100% Code",
              desc: "No boring PowerPoint slides. You write code, test microservices, debug live SQL bottlenecks, and tune neural networks from day one."
            },
            {
              title: "Active Tech Lead Mentors",
              desc: "Learn only from practitioners who build production software every day at companies like Amazon, Swiggy, and Microsoft."
            },
            {
              title: "Real Production Capstones",
              desc: "Graduate with a verified GitHub portfolio demonstrating distributed systems, docker containers, and real client ad campaigns."
            },
            {
              title: "End-to-End Career Support",
              desc: "From resume revamping and mock tech interviews to salary negotiations and guaranteed interview slots across 450+ partners."
            }
          ].map((pillar, idx) => (
            <div key={idx} className="card-tech rounded-2xl p-6 space-y-3">
              <div className="text-cyan-400 font-bold text-lg">0{idx + 1}.</div>
              <h3 className="text-base font-bold text-white">{pillar.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership & Faculty */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
            Expert Faculty
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Meet the Mentors Behind EndowIT
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Seasoned leaders with deep domain expertise committed to your growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadership.map((member, idx) => (
            <div key={idx} className="card-tech rounded-2xl overflow-hidden p-5 flex flex-col justify-between">
              <div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover rounded-xl mb-4 border border-slate-700/80"
                />
                <h3 className="text-base font-bold text-white">{member.name}</h3>
                <div className="text-xs font-semibold text-cyan-400 mb-2">{member.role}</div>
                <p className="text-xs text-slate-400 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications & Quality Assurance */}
      <section className="card-tech rounded-3xl p-8 md:p-12 border border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-5 h-5" />
              <span>Accreditation & Standards</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              Recognized and Certified Excellence
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              EndowIT Academy is ISO 9001:2015 certified for educational quality management and our curriculum is mapped strictly against NASSCOM FutureSkills prime competencies. Our alumni certifications are verifiable globally on LinkedIn and credential registries.
            </p>
          </div>
          <div className="text-center md:text-right">
            <button
              onClick={() => onOpenEnrollModal()}
              className="px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/20 hover:from-cyan-400 hover:to-blue-500 transition"
            >
              Join Our Next Batch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
