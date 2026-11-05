import React, { useState } from 'react';
import { Search, Clock, Calendar, ArrowRight, Tag, X, User, Share2, BookOpen } from 'lucide-react';
import SEO from '../components/SEO';
import { blogs, blogCategories } from '../data/blogsData';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [readingArticle, setReadingArticle] = useState(null);

  const filteredBlogs = blogs.filter(b => {
    const matchesCategory = selectedCategory === "All" || b.category === selectedCategory;
    const matchesSearch = b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          b.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          b.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <SEO 
        title="Tech Blog & Engineering Insights | EndowIT Academy"
        description="Read in-depth technical articles, career blueprints, system design breakdowns, and tutorials on AI, Backend Engineering, Data Science, and Growth Marketing."
        keywords="Tech blog, Backend engineering tutorials, AI guide, Data science roadmap, Digital marketing trends, EndowIT blog"
      />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30">
          Knowledge Base & Insights
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Tech Insights, Architecture & Career Guides
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Deep-dive technical perspectives penned by our mentors, tech architects, and AI researchers to help you stay ahead of the curve.
        </p>
      </div>

      {/* Search & Filter */}
      <div className="card-tech rounded-2xl p-4 md:p-6 space-y-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search articles, topics or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400"
            />
          </div>

          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {blogCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition ${
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
      </div>

      {/* Blog Cards Grid */}
      {filteredBlogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredBlogs.map((post) => (
            <article
              key={post.id}
              className="card-tech rounded-2xl overflow-hidden flex flex-col justify-between group cursor-pointer"
              onClick={() => setReadingArticle(post)}
            >
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-900/90 text-cyan-400 border border-cyan-500/30 backdrop-blur-md">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-white group-hover:text-cyan-400 transition leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {post.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Author & Read More */}
              <div className="p-6 pt-0 border-t border-slate-800/80 mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-8 h-8 rounded-full object-cover border border-cyan-400/30"
                  />
                  <div>
                    <div className="text-xs font-bold text-white">{post.author.name}</div>
                    <div className="text-[10px] text-slate-400">{post.author.role}</div>
                  </div>
                </div>

                <span className="text-xs font-semibold text-cyan-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 card-tech rounded-2xl space-y-3">
          <BookOpen className="w-12 h-12 text-slate-500 mx-auto" />
          <h3 className="text-lg font-bold text-white">No articles found</h3>
          <p className="text-xs text-slate-400">Try another search keyword or category.</p>
        </div>
      )}

      {/* Reader Modal */}
      {readingArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-[#0F1D3E] border border-cyan-500/30 rounded-3xl p-6 md:p-10 shadow-2xl max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setReadingArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                {readingArticle.category}
              </span>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {readingArticle.title}
              </h1>

              <div className="flex items-center gap-4 text-xs text-slate-400 border-b border-slate-800 pb-4">
                <span>By {readingArticle.author.name}</span>
                <span>•</span>
                <span>{readingArticle.date}</span>
                <span>•</span>
                <span>{readingArticle.readTime}</span>
              </div>

              <img
                src={readingArticle.image}
                alt={readingArticle.title}
                className="w-full h-64 sm:h-80 object-cover rounded-2xl border border-slate-800"
              />

              <div className="prose prose-invert max-w-none text-slate-300 text-sm leading-relaxed space-y-4 pt-4 whitespace-pre-line">
                {readingArticle.content}
              </div>

              <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                <div className="text-xs text-slate-400">
                  Shared from <strong className="text-cyan-400">EndowIT Academy Blog</strong>
                </div>
                <button
                  onClick={() => setReadingArticle(null)}
                  className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-xl"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
