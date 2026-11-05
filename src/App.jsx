import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EnrollModal from './components/EnrollModal';

import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

export default function App() {
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  const [selectedCourseSlug, setSelectedCourseSlug] = useState('full-stack');

  const handleOpenEnrollModal = (courseSlug = 'full-stack') => {
    setSelectedCourseSlug(courseSlug);
    setEnrollModalOpen(true);
  };

  const handleCloseEnrollModal = () => {
    setEnrollModalOpen(false);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#0A1128] text-slate-100 font-sans selection:bg-cyan-500 selection:text-white">
        
        {/* Navigation Bar */}
        <Navbar onOpenEnrollModal={handleOpenEnrollModal} />

        {/* Dynamic Route Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onOpenEnrollModal={handleOpenEnrollModal} />} />
            <Route path="/courses" element={<Courses onOpenEnrollModal={handleOpenEnrollModal} />} />
            <Route path="/courses/:slug" element={<CourseDetail onOpenEnrollModal={handleOpenEnrollModal} />} />
            <Route path="/about" element={<About onOpenEnrollModal={handleOpenEnrollModal} />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenEnrollModal={handleOpenEnrollModal} />

        {/* Fast-Track Enrollment Lead Modal */}
        <EnrollModal
          isOpen={enrollModalOpen}
          onClose={handleCloseEnrollModal}
          selectedCourseSlug={selectedCourseSlug}
        />
      </div>
    </Router>
  );
}
