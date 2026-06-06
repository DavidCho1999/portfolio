import type { Project, ProjectImage } from './types.ts';

// Shape of the editable JSON content files in src/content/projects/*.json.
// These are what the CMS reads and writes; the app maps them to `Project`.
interface RawImage {
  src: string;
  alt: string;
  caption?: string;
  type?: 'image' | 'video' | 'slideshow';
  video?: string;
  slideshow?: string[];
  slideshowInterval?: number;
  slideshowTransition?: 'crossfade' | 'fade' | 'none';
  transitionDuration?: number;
}

interface RawProject {
  order: number;
  slug: string;
  client: string;
  title: string;
  tag: string;
  color: string;
  site?: string;
  mapUrl?: string;
  description: string;
  role: string;
  team: string;
  duration: string;
  tools: string[];
  thumbnail: string;
  images: RawImage[];
}

// Resolve a stored media path (e.g. "/projects/foo/bar.png") to a URL that
// works under the site's base path, encoding spaces and special characters.
const asset = (path: string): string => {
  if (!path) return '';
  if (/^https?:\/\//i.test(path)) return path;
  const clean = path.replace(/^\/+/, '');
  return import.meta.env.BASE_URL + encodeURI(clean);
};

const resolveImage = (img: RawImage): ProjectImage => ({
  ...img,
  src: asset(img.src),
  video: img.video ? asset(img.video) : undefined,
  slideshow: img.slideshow?.map(asset),
});

// Load every project content file at build time.
const modules = import.meta.glob<RawProject>('../content/projects/*.json', {
  eager: true,
  import: 'default',
});

export const projects: Project[] = Object.values(modules)
  .sort((a, b) => a.order - b.order)
  .map((raw) => ({
    id: raw.order,
    slug: raw.slug,
    client: raw.client,
    title: raw.title,
    tag: raw.tag,
    color: raw.color,
    site: raw.site || undefined,
    mapUrl: raw.mapUrl || undefined,
    description: raw.description,
    role: raw.role,
    team: raw.team,
    duration: raw.duration,
    tools: raw.tools,
    thumbnailImage: asset(raw.thumbnail),
    images: raw.images.map(resolveImage),
  }));

// Helper function to get project by slug
export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((project) => project.slug === slug);

// Helper function to get all projects
export const getAllProjects = (): Project[] => projects;
