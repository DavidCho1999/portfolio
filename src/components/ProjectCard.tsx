import { Link } from 'react-router-dom';
import type { Project } from '../data/types.ts';
import Slideshow from './Slideshow.tsx';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const handleClick = () => {
    // Save current scroll position before navigating
    sessionStorage.setItem('homepageScrollPosition', String(window.scrollY));
  };

  // Check if first image is a slideshow
  const firstImage = project.images[0];
  const isSlideshow = firstImage?.type === 'slideshow' && firstImage.slideshow;

  return (
    <Link
      to={`/project/${project.slug}`}
      onClick={handleClick}
      className="group cursor-pointer block"
    >
      {/* Thumbnail Image or Slideshow */}
      <div className="w-full mb-0 relative overflow-hidden bg-gray-200">
        {isSlideshow ? (
          <>
            <Slideshow
              images={firstImage.slideshow!}
              alt={firstImage.alt}
              interval={firstImage.slideshowInterval}
              transition={firstImage.slideshowTransition}
              transitionDuration={firstImage.transitionDuration}
            />
            {/* Hover effect */}
            <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 pointer-events-none" />
          </>
        ) : project.thumbnailImage ? (
          <>
            <img
              src={project.thumbnailImage}
              alt={project.title}
              className="w-full h-auto"
            />
            {/* Hover effect */}
            <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100" />
          </>
        ) : (
          <div className={`w-full aspect-[4/3] ${project.color} flex items-center justify-center`}>
            <span className="text-gray-400 font-medium text-sm">Image Placeholder</span>
          </div>
        )}
      </div>

      {/* Project Text */}
      <div className="space-y-0">
        <div className="flex justify-between items-start">
          <p className="text-sm font-bold text-black">
            {project.client}
          </p>
        </div>

        <div>
          <h3 className="text-xs font-medium text-gray-500">
            {project.title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
