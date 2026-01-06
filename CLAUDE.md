# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a portfolio website built with React 19, TypeScript, and Vite. It showcases architectural and design projects in a masonry grid layout on the homepage, with detailed project pages accessible via client-side routing.

**Tech Stack:**
- React 19.2.0 + TypeScript 5.9.3
- Vite 7.2.4 for build tooling
- Tailwind CSS 4.1.18 for styling
- React Router DOM 7.11.0 for routing
- react-masonry-css for homepage grid layout
- yet-another-react-lightbox for image viewing on project pages

## Common Commands

```bash
# Install dependencies
npm install

# Start dev server (runs on Vite's default port, typically http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint code
npm run lint
```

## Project Structure

```
my-portfolio/
├── src/
│   ├── components/       # React components
│   │   ├── HomePage.tsx       # Homepage with masonry grid
│   │   ├── ProjectCard.tsx    # Card component for masonry grid
│   │   ├── ProjectDetail.tsx  # Individual project page
│   │   ├── Slideshow.tsx      # Slideshow component for project images
│   │   └── VideoPlayer.tsx    # Video player for project videos
│   ├── data/             # Data layer
│   │   ├── types.ts          # TypeScript interfaces (Project, ProjectImage)
│   │   └── projects.ts       # Project data array with image imports
│   ├── assets/           # Static assets (images, videos)
│   ├── App.tsx          # Router setup and scroll management
│   ├── main.tsx         # App entry point
│   └── index.css        # Global styles
├── public/              # Public static files
└── dist/                # Build output (git-ignored)
```

## Architecture & Key Patterns

### Routing Configuration
- Base path: `/portfolio/` (configured in vite.config.ts and App.tsx)
- Routes:
  - `/` - HomePage (masonry grid)
  - `/project/:slug` - ProjectDetail (individual project)
  - `*` - Redirects to homepage

### Scroll Position Management
The app uses a custom `ScrollManager` component (App.tsx:6-42) to manage scroll behavior:
- Disables browser's automatic scroll restoration
- Saves homepage scroll position to sessionStorage when navigating to a project
- Restores scroll position when returning to homepage from a project detail page
- Always scrolls to top when navigating to a project detail page

This pattern ensures users return to their browsing position on the homepage after viewing a project.

### Data Structure
Projects are defined in `src/data/projects.ts` as a TypeScript array. Each project follows the `Project` interface (types.ts:12-26):

**Key fields:**
- `slug`: Used for URL routing (`/project/:slug`)
- `images`: Array of `ProjectImage` objects (types.ts:1-10)
  - Supports three types: `image` (default), `video`, `slideshow`
  - First image is always the thumbnail used in ProjectCard
  - Remaining images displayed in ProjectDetail

**Image type behavior:**
- `type: 'image'`: Regular image, supports lightbox zoom on desktop (>=1024px)
- `type: 'video'`: Renders with VideoPlayer component
- `type: 'slideshow'`: Renders with Slideshow component (crossfade transitions)

### Component Responsibilities

**HomePage.tsx:**
- Renders masonry grid using react-masonry-css
- Contains modal logic for info, email, and LinkedIn
- Saves scroll position to sessionStorage before navigation

**ProjectDetail.tsx:**
- Fetches project by slug using `getProjectBySlug()`
- Redirects to homepage if project not found
- Desktop detection (>=1024px) for lightbox behavior
- Filters images for lightbox (excludes videos, slideshows, and thumbnail)
- Renders different media types: images, videos (VideoPlayer), slideshows (Slideshow)

**ProjectCard.tsx:**
- Displays thumbnail, client, title, and tag
- Uses project color for tag background
- Links to `/project/:slug`

### Styling Approach
- Tailwind CSS utility classes used throughout
- Custom CSS limited to ProjectDetail.css for specific styling needs
- Responsive design with mobile-first breakpoints

## Development Notes

### Adding New Projects
1. Import image/video assets at top of `src/data/projects.ts`
2. Add new project object to `projects` array
3. Ensure `slug` is unique (used for routing)
4. First image in `images` array is the thumbnail

### TypeScript Configuration
- Strict mode enabled
- Uses `verbatimModuleSyntax` and `allowImportingTsExtensions`
- Import TypeScript files with `.ts`/`.tsx` extensions (e.g., `import X from './X.tsx'`)

### Build Output
- Build target: `base: '/portfolio/'` in vite.config.ts
- Output directory: `my-portfolio/dist/`
- The build compiles TypeScript first (`tsc -b`) then bundles with Vite
