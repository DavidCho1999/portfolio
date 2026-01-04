import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect, useLayoutEffect, useRef } from 'react';
import HomePage from './components/HomePage.tsx';
import ProjectDetail from './components/ProjectDetail.tsx';

function ScrollManager() {
  const { pathname } = useLocation();
  const previousPath = useRef<string>('');

  // Disable browser's automatic scroll restoration
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // Handle scroll restoration/reset
  useLayoutEffect(() => {
    const isReturningToHome = pathname === '/' && previousPath.current.startsWith('/project/');

    if (pathname === '/') {
      if (isReturningToHome) {
        // Restore scroll position when returning from project
        const savedPosition = sessionStorage.getItem('homepageScrollPosition');
        if (savedPosition) {
          const position = parseInt(savedPosition);
          // Use requestAnimationFrame for better timing
          requestAnimationFrame(() => {
            window.scrollTo(0, position);
          });
        }
      }
    } else if (pathname.startsWith('/project/')) {
      // Scroll to top for project pages
      window.scrollTo(0, 0);
    }

    previousPath.current = pathname;
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
