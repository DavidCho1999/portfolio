import { useParams, Link, Navigate } from 'react-router-dom';
import { X } from 'lucide-react';
import { getProjectBySlug } from '../data/projects.ts';
import Slideshow from './Slideshow.tsx';
import VideoPlayer from './VideoPlayer.tsx';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  // If project not found, redirect to home
  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="bg-white text-black font-inter min-h-screen">
      {/* Main Content */}
      <main className="max-w-2xl mx-auto p-6 md:p-">
        {/* Header with branding and close button */}
        <div className="flex items-center justify-between mb-1">
          <p className="text-m tracking-wide font-bold">
            Dongje Cho
          </p>
          <Link
            to="/"
            className="flex items-center justify-center w-10 h-10 hover:bg-gray-100 transition-colors rounded-full"
          >
            <X size={24} className="text-black" />
          </Link>
        </div>

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

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 gap-6 mb-16">
          <div>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
              ROLE
            </p>
            <p className="text-sm font-medium">{project.role}</p>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
              TOOLS
            </p>
            <p className="text-sm font-medium">{project.tools.join(' / ')}</p>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
              TEAM
            </p>
            <p className="text-sm font-medium">{project.team}</p>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
              DURATION
            </p>
            <p className="text-sm font-medium">{project.duration}</p>
          </div>
        </div>

        {/* Description */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-sm md:text-sm leading-relaxed text-black whitespace-pre-line">
            {project.description}
          </p>
        </div>

        {/* Image/Video/Slideshow Gallery (remaining images after hero) */}
        {project.images.length > 1 && (
          <div className="space-y-8">
            {project.images.slice(1).map((image, index) => (
              <div key={index} className="space-y-2">
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
                    className="w-full h-auto"
                    loading="lazy"
                  />
                )}
                {image.caption && (
                  <p className="text-sm text-black">
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
    </div>
  );
};

export default ProjectDetail;
