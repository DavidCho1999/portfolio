import { useState } from 'react';
import ProjectCard from './ProjectCard.tsx';
import { getAllProjects } from '../data/projects.ts';

const HomePage = () => {
  const projects = getAllProjects();
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isLinkedInModalOpen, setIsLinkedInModalOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    const email = 'd29cho@uwaterloo.ca';

    // Try modern clipboard API first
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(() => {
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
      });
    } else {
      // Fallback for mobile/older browsers
      const textArea = document.createElement('textarea');
      textArea.value = email;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        document.execCommand('copy');
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }

      document.body.removeChild(textArea);
    }
  };

  return (
    <div className="bg-white text-black font-inter">
      {/* header area */}
      <header className="flex items-start pt-5 md:pt-16">
        <div className="max-w-2xl mx-auto w-full px-4 md:px-12">
          <div className="flex flex-col items-start gap-2">

            {/* intro texts */}
            <div className="space-y-1">
              <h1 className="text-[18px] md:text-[22px] font-bold leading-tight tracking-tight">
                Dongje Cho,
              </h1>
              <p className="text-[18px] md:text-[22px] text-black font-bold">
                <span className="cursor-pointer md:hover:bg-gradient-to-r md:hover:from-blue-600 md:hover:to-cyan-500 md:hover:bg-clip-text md:hover:text-transparent md:transition-all md:duration-[800ms]">
                  architectural
                </span>
                {' and '}
                <span className="cursor-pointer md:hover:bg-gradient-to-r md:hover:from-purple-600 md:hover:to-pink-500 md:hover:bg-clip-text md:hover:text-transparent md:transition-all md:duration-[800ms]">
                  computational designer
                </span>
              </p>
            </div>

            {/* links */}
            <nav className="flex items-center gap-3 pt-2">
              <div className="relative inline-block">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsInfoModalOpen(true);
                  }}
                  className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors border-b border-transparent hover:border-blue-600 cursor-pointer"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors">Info</p>
                  </div>
                </a>

                {/* Info Popup */}
                {isInfoModalOpen && (
                  <>
                    {/* Backdrop */}
                    <div className="fixed inset-0 z-40" onClick={() => setIsInfoModalOpen(false)} />

                    {/* Popup content */}
                    <div className="absolute top-full mt-2 left-0 bg-white rounded-lg shadow-lg w-80 p-6 z-50">
                      {/* Popup content */}
                      <div className="space-y-2 text-sm">
                        <p>
                          Based in Waterloo, ON.
                        </p>
                        <p>
                          Currently interested in...
                        </p>
                        <p>
                          Previously at OFTN, Arcadis/IBI, Multistudio, University of Waterloo RA.
                        </p>
                        <p>
                          Skilled in AEC Automation, BIM Management, UI/UX, AI implementation, Modeling
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="relative inline-block">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsLinkedInModalOpen(true);
                  }}
                  className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors border-b border-transparent hover:border-blue-600 cursor-pointer"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors">LinkedIn</p>
                  </div>
                </a>

                {/* LinkedIn Popup */}
                {isLinkedInModalOpen && (
                  <>
                    {/* Backdrop */}
                    <div className="fixed inset-0 z-40" onClick={() => setIsLinkedInModalOpen(false)} />

                    {/* Popup content */}
                    <div className="absolute top-full mt-2 left-0 bg-white rounded-lg shadow-lg w-fit p-6 z-50">
                      {/* Popup content */}
                      <div className="space-y-2 text-sm whitespace-nowrap">
                        <a
                          href="https://www.linkedin.com/in/dongje-cho-573763194/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cursor-pointer hover:text-blue-600 transition-colors block"
                        >
                          linkedin.com/in/dongje-cho-573763194
                        </a>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="relative inline-block">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsEmailModalOpen(true);
                  }}
                  className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors border-b border-transparent hover:border-blue-600 cursor-pointer"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors">Email</p>
                  </div>
                </a>

                {/* Email Popup */}
                {isEmailModalOpen && (
                  <>
                    {/* Backdrop */}
                    <div className="fixed inset-0 z-40" onClick={() => setIsEmailModalOpen(false)} />

                    {/* Popup content */}
                    <div className="absolute top-full mt-2 left-0 bg-white rounded-lg shadow-lg w-fit p-6 z-50">
                      {/* Popup content */}
                      <div className="space-y-2 text-sm whitespace-nowrap">
                        <p
                          onClick={handleCopyEmail}
                          className="cursor-pointer hover:text-blue-600 transition-colors"
                        >
                          d29cho@uwaterloo.ca
                        </p>
                        {emailCopied && (
                          <p className="text-green-600 text-xs">Copied to clipboard!</p>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* project grid */}
      <main className="max-w-2xl md:max-w-7xl mx-auto px-4 md:px-12 pt-16 pb-6 md:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>

      {/* footer for spacing */}
      <footer className="h-10"></footer>
    </div>
  );
};

export default HomePage;
