import Masonry from 'react-masonry-css';
import ProjectCard from './ProjectCard.tsx';
import { getAllProjects } from '../data/projects.ts';

const HomePage = () => {
  const projects = getAllProjects();

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

            {/* Title section - center column on desktop - plain text, no effects */}
            <div>
              <p className="text-[18px] md:text-[14px] text-black font-bold md:text-center">
                Computational designer / engineer
              </p>
            </div>

            {/* Links section - right column on desktop */}
            <nav className="flex items-center gap-3 pt-2 md:pt-0 md:justify-end relative">
              {/* LinkedIn - direct link */}
              <a
                href="https://www.linkedin.com/in/dongje-cho-573763194/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold hover:text-gray-600 transition-colors border-b border-transparent hover:border-gray-600"
              >
                LinkedIn
              </a>

              {/* Email - direct mailto link */}
              <a
                href="mailto:d29cho@uwaterloo.ca"
                className="text-sm font-bold hover:text-gray-600 transition-colors border-b border-transparent hover:border-gray-600"
              >
                Email
              </a>
            </nav>
          </div>

          {/* Info content - always visible below header */}
          <div className="mt-8 space-y-0.5 text-sm font-bold">
            <p>
              Based in Waterloo, ON.
            </p>
            <p>
              Currently interested in AEC Automation
            </p>
            <p>
              Previously at{' '}
              <a
                href="https://www.oftnarchitecture.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-yellow-200 transition-colors inline-flex items-center gap-0.5"
              >
                <span className="underline">OFTN</span>
                <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 1H11V9M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              ,{' '}
              <a
                href="https://www.arcadis.com/en-ca/news/global/2022/9/arcadis-completes-the-acquisition-of-ibi-group"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-yellow-200 transition-colors inline-flex items-center gap-0.5"
              >
                <span className="underline">Arcadis/IBI</span>
                <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 1H11V9M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              ,{' '}
              <a
                href="https://www.multi.studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-yellow-200 transition-colors inline-flex items-center gap-0.5"
              >
                <span className="underline">Multistudio</span>
                <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 1H11V9M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              ,{' '}
              <a
                href="https://uwaterloo.ca/engineering/undergraduate-students/degree-enhancement/research-opportunities/ura"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-yellow-200 transition-colors inline-flex items-center gap-0.5"
              >
                <span className="underline">University of Waterloo RA</span>
                <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 1H11V9M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              .
            </p>
            <p>
              Skilled in BIM Management, UI/UX, AI implementation, Modeling
            </p>
          </div>
        </div>
      </header>

      {/* project grid */}
      <main className="px-4 md:px-3 pt-16 pb-6 md:pb-12">
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
