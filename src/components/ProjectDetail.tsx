import { useParams, Link, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { getProjectBySlug } from '../data/projects.ts';
import Slideshow from './Slideshow.tsx';
import VideoPlayer from './VideoPlayer.tsx';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect desktop vs mobile/tablet
  useEffect(() => {
    const checkIfDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024); // 1024px = desktop only, excludes tablets/iPads
    };

    checkIfDesktop();
    window.addEventListener('resize', checkIfDesktop);

    return () => window.removeEventListener('resize', checkIfDesktop);
  }, []);

  // If project not found, redirect to home
  if (!project) {
    return <Navigate to="/" replace />;
  }

  // Create slides array for lightbox (only regular images, excluding thumbnail, not videos or slideshows)
  const slides = project.images
    .slice(1) // Skip the first image (thumbnail)
    .filter(img => img.type !== 'video' && img.type !== 'slideshow')
    .map(img => ({ src: img.src, alt: img.alt }));

  return (
    <div className="bg-white text-black font-inter min-h-screen">
      {/* Sticky Header */}
      <div className="sticky top-0 bg-white z-10">
        <div className="max-w-2xl mx-auto px-4 md:px-12 py-0">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-m tracking-wide font-bold hover:opacity-70 transition-opacity cursor-pointer">
              Dongje Cho
            </Link>
            <Link
              to="/"
              className="flex items-center justify-center w-6 h-10 hover:bg-gray-100 transition-colors rounded-full"
            >
              <X size={24} className="text-black" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto pt-0 px-4 md:pt-1 md:px-12">
        {/* Hero Image/Video/Slideshow (first image) */}
        {project.images.length > 0 && project.images[0] && (
          <div className="mb-3">
            {project.images[0].type === 'video' ? (
              <VideoPlayer src={project.images[0].src} />
            ) : project.images[0].type === 'slideshow' && project.images[0].slideshow ? (
              <Slideshow
                images={project.images[0].slideshow}
                alt={project.images[0].alt}
                interval={project.images[0].slideshowInterval}
                transition={project.images[0].slideshowTransition}
                transitionDuration={project.images[0].transitionDuration}
              />
            ) : (
              <img
                src={project.images[0].src}
                alt={project.images[0].alt}
                className="w-full h-auto"
              />
            )}
          </div>
        )}

        {/* Project Title (large) */}
        <h1 className="text-3xl md:text-3xl font-bold leading-tight mb-8 whitespace-pre-line">
          {project.title}
        </h1>

        {/* Description */}
        <div className="prose prose-lg max-w-none mb-6">
          <p className="text-[13px] leading-relaxed text-black whitespace-pre-line">
            {project.description}
          </p>
        </div>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
              ROLE
            </p>
            <p className="text-[13px] font-medium">{project.role}</p>
          </div>

          <div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
              TOOLS
            </p>
            <p className="text-[13px] font-medium">{project.tools.join(' / ')}</p>
          </div>

          <div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
              TEAM
            </p>
            <p className="text-[13px] font-medium">{project.team}</p>
          </div>

          <div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
              DURATION
            </p>
            <p className="text-[13px] font-medium">{project.duration}</p>
          </div>
        </div>

        {/* Image/Video/Slideshow Gallery (remaining images after hero) */}
        {project.images.length > 1 && (
          <div className="space-y-2">
            {project.images.slice(1).map((image, index) => (
              <div key={index} className="space-y-0">
                {image.type === 'video' ? (
                  <VideoPlayer src={image.src} />
                ) : image.type === 'slideshow' && image.slideshow ? (
                  <Slideshow
                    images={image.slideshow}
                    alt={image.alt}
                    interval={image.slideshowInterval}
                    transition={image.slideshowTransition}
                    transitionDuration={image.transitionDuration}
                  />
                ) : (
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`w-full h-auto ${isDesktop ? 'cursor-pointer' : ''}`}
                    loading="lazy"
                    onClick={isDesktop ? () => {
                      // Find the correct index in slides array by matching the image src
                      const slideIndex = slides.findIndex(slide => slide.src === image.src);
                      setLightboxIndex(slideIndex >= 0 ? slideIndex : 0);
                      setLightboxOpen(true);
                    } : undefined}
                  />
                )}
                {image.caption && (
                  <p className="text-[13px] text-black">
                    {image.caption}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Placeholder when no images */}
        {project.images.length === 0 && (
          <div className="space-y-8">
            <div className="w-full aspect-video bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400 font-medium">
                Project images coming soon
              </span>
            </div>
          </div>
        )}

        {/* Bottom spacing */}
        <div className="h-32"></div>
      </main>

      {/* Lightbox for image zoom - Desktop only */}
      {isDesktop && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          slides={slides}
          plugins={[Zoom]}
          zoom={{
            maxZoomPixelRatio: 3,
            scrollToZoom: true
          }}
          toolbar={{ buttons: ['close'] }}
          render={{
            buttonPrev: () => null,
            buttonNext: () => null,
          }}
          controller={{ closeOnBackdropClick: true }}
        />
      )}
    </div>
  );
};

export default ProjectDetail;
