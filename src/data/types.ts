import type { ReactNode } from "react";

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
  type?: 'image' | 'video' | 'slideshow';
  slideshow?: string[];
  slideshowInterval?: number; // in milliseconds, default 3000
  slideshowTransition?: 'crossfade' | 'fade' | 'none'; // transition type
  transitionDuration?: number; // in milliseconds, default 1000
}

export interface Project {
  site?: ReactNode;
  mapUrl?: string;
  id: number;
  slug: string;
  client: string;
  title: string;
  tag: string;
  color: string;
  description: string;
  role: string;
  team: string;
  duration: string;
  tools: string[];
  images: ProjectImage[];
  thumbnailImage: string;
}
