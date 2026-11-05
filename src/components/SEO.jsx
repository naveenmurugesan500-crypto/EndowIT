import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function SEO({ title, description, keywords }) {
  const location = useLocation();

  useEffect(() => {
    // Update title
    const fullTitle = title 
      ? `${title} | EndowIT Academy` 
      : 'EndowIT Academy | Premier IT Training & Career Transformation';
    document.title = fullTitle;

    // Update or create meta description
    const descContent = description || 
      'Master in-demand IT courses in Digital Marketing, Data Science, Full Stack (Backend Mastery), Data Analytics, and AI & ML with 100% placement support at EndowIT Academy.';
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', descContent);

    // Update or create meta keywords
    if (keywords) {
      let metaKw = document.querySelector('meta[name="keywords"]');
      if (!metaKw) {
        metaKw = document.createElement('meta');
        metaKw.name = 'keywords';
        document.head.appendChild(metaKw);
      }
      metaKw.setAttribute('content', keywords);
    }

    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [title, description, keywords, location]);

  return null;
}
