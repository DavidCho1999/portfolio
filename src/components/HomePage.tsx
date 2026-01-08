import { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import ProjectCard from './ProjectCard.tsx';
import { getAllProjects } from '../data/projects.ts';

const HomePage = () => {
  const projects = getAllProjects();
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  // Preload all thumbnail images
  useEffect(() => {
    const thumbnails = projects
      .map(project => project.thumbnailImage)
      .filter(Boolean);

    if (thumbnails.length === 0) {
      setImagesLoaded(true);
      return;
    }

    // Only show loader if images take longer than 150ms to load
    // This means cached images won't trigger the loader
    const loaderTimer = setTimeout(() => {
      if (!imagesLoaded) {
        setShowLoader(true);
      }
    }, 150);

    let loadedCount = 0;
    const imagePromises = thumbnails.map((src) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => {
          loadedCount++;
          if (loadedCount === thumbnails.length) {
            clearTimeout(loaderTimer);
            setImagesLoaded(true);
          }
          resolve();
        };
        img.onerror = () => {
          loadedCount++;
          if (loadedCount === thumbnails.length) {
            clearTimeout(loaderTimer);
            setImagesLoaded(true);
          }
          resolve();
        };
        img.src = src;
      });
    });

    Promise.all(imagePromises);

    return () => clearTimeout(loaderTimer);
  }, [projects, imagesLoaded]);

  // Show loader only if images are taking a while to load
  if (showLoader && !imagesLoaded) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center">
        <div className="w-12 h-12 border-3 border-gray-200 border-t-black rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="bg-white text-black font-inter">
      {/* header area */}
      <header className="flex items-start pt-5 md:pt-2">
        <div className="w-full px-4 md:px-3">
          {/* Mobile: vertical stack | Desktop: 3-column grid */}
          <div className="flex flex-col md:grid md:grid-cols-[auto_1fr_auto] md:items-start md:gap-8">

            {/* Name section - left column on desktop */}
            <div className="space-y-1">
              <h1 className="text-[18px] md:text-[14px] font-bold leading-tight tracking-tight">
                Dongje Cho
              </h1>
            </div>

            {/* Title section - center column on desktop */}
            <div>
              <p className="text-[12px] md:text-[14px] text-black font-bold md:text-center">
                Computational Designer / Architectural Engineer
              </p>
            </div>

            {/* Links section - right column on desktop */}
            <nav className="flex items-baseline gap-3 pt-6 md:pt-0 md:justify-end relative">

              {/* --- NEW STRUCTURE START --- */}
              {/* Wrapped Info Button & Modal in a relative div to anchor the popup */}
              <div className="relative z-50 text-left">

                {/* Info button */}
                <button
                  onClick={() => setIsInfoModalOpen(!isInfoModalOpen)}
                  className="text-sm font-bold hover:text-gray-600 transition-colors border-b border-transparent hover:border-gray-600 bg-transparent p-0 cursor-pointer"
                >
                  Info
                </button>

                {/* Info Modal - Now positioned absolutely relative to this wrapper */}
                {isInfoModalOpen && (
                  <>
                    {/* Fixed Backdrop: Covers screen to allow clicking outside to close */}
                    <div
                      className="fixed inset-0 bg-black/30  cursor-default"
                      onClick={() => setIsInfoModalOpen(false)}
                    />

                    {/* Modal Content: Absolute position */}
                    <div className="absolute top-full mt-1 bg-white p-3 rounded-md shadow-md max-h-[80vh] overflow-y-auto z-50 /* Mobile*/ left-0 -translate-x-1 w-[90vw] max-w-s /* desktop */ md:left-auto md:right-0 md:translate-x-0 md:w-96 md:mx-0">

                      {/* Close button
                      <button
                        className="absolute top-2 right-2 text-xl font-bold text-gray-400 hover:text-gray-600 bg-transparent border-0 cursor-pointer"
                        onClick={() => setIsInfoModalOpen(false)}
                      >
                        ×
                      </button> */}

                      {/* Modal content */}
                      <div className="space-y-1 text-sm">
                        <p>Based in Waterloo, ON.</p>
                        <p>Currently interested in Ai implementation design.</p>
                        <p>
                          Previously at{' '}
                          <a
                            href="https://www.oftnarchitecture.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            // [변경 1] items-center -> items-baseline 으로 변경하여 텍스트 밑줄 기준으로 정렬
                            className="hover:bg-yellow-200 transition-colors inline-flex items-baseline gap-0.5"
                          >
                            <span className="underline decoration-dotted underline-offset-2 decoration-black/30">OFTN</span>
                            <svg
                              // [변경 2] w-3 h-3 -> w-2 h-2 (크기를 작게)
                              // [변경 3] relative -top-0.5 추가 (원래 위치보다 살짝 위로 올림)
                              className="w-1.5 h-1.5 relative -top-1"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M3 1H11V9M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </a>
                          ,{' '}
                          <a
                            href="https://www.arcadis.com/en-ca/news/global/2022/9/arcadis-completes-the-acquisition-of-ibi-group"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:bg-yellow-200 transition-colors inline-flex items-baseline gap-0.5"
                          >
                            <span className="underline decoration-dotted underline-offset-2 decoration-black/30">Arcadis/IBI</span>
                            <svg className="w-1.5 h-1.5 relative -top-1" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3 1H11V9M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </a>
                          ,{' '}
                          <a
                            href="https://www.multi.studio/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:bg-yellow-200 transition-colors inline-flex items-baseline gap-0.5"
                          >
                            <span className="underline decoration-dotted underline-offset-2 decoration-black/30">Multistudio</span>
                            <svg className="w-1.5 h-1.5 relative -top-1" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3 1H11V9M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </a>
                          ,{' '}
                          <a
                            href="https://uwaterloo.ca/engineering/undergraduate-students/degree-enhancement/research-opportunities/ura"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:bg-yellow-200 transition-colors inline-flex items-baseline gap-0.5"
                          >
                            <span className="underline decoration-dotted underline-offset-2 decoration-black/30">University of Waterloo RA</span>
                            <svg className="w-1.5 h-1.5 relative -top-1" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3 1H11V9M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </a>
                          .
                        </p>
                        <p>
                          Skilled in BIM Management, AEC Automation, Modeling, Climate Analysis. 
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
              {/* --- NEW STRUCTURE END --- */}

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/dongje-cho-573763194/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold hover:text-gray-600 transition-colors border-b border-transparent hover:border-gray-600"
              >
                LinkedIn
              </a>

              {/* Email */}
              <a
                href="mailto:d29cho@uwaterloo.ca"
                className="text-sm font-bold hover:text-gray-600 transition-colors border-b border-transparent hover:border-gray-600"
              >
                Email
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* project grid */}
      <main className="px-4 md:px-3 pt-2 pb-6 md:pb-12">
        <Masonry
          breakpointCols={{
            default: 3,
            1024: 2,
            768: 2,
            640: 1
          }}
          className="flex w-auto gap-3"
          columnClassName="bg-clip-padding"
        >
          {projects.map((project) => (
            <div key={project.id} className="mb-4">
              <ProjectCard project={project} />
            </div>
          ))}
        </Masonry>
      </main>

      {/* footer for spacing */}
      <footer className="h-10"></footer>
    </div>
  );
};

export default HomePage;