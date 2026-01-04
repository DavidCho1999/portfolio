import type { Project } from './types.ts';

// Project 1 images
import climateImage2 from '../assets/projects/greenway/rendered.jpg';
import climateImage3 from '../assets/projects/greenway/SOUTH EAST 3D.png';
import climateVideo from '../assets/projects/greenway/transition_video.mp4';
import heat30 from '../assets/projects/greenway/heat30.png';
import heat40 from '../assets/projects/greenway/heat40.png';
import heat50 from '../assets/projects/greenway/heat50.png';
import heat60 from '../assets/projects/greenway/heat60.png';
import heat70 from '../assets/projects/greenway/heat70.png';
import grasshopper from '../assets/projects/greenway/grasshopper.png';
import analemna3 from '../assets/projects/greenway/analemna_3.jpg';
import ecotectArrow from '../assets/projects/greenway/ecotect arrow.jpg';

import arcadislogo from '../assets/projects/arcaids, ibi/logo.png';
import carbonThumbnail from '../assets/projects/carbon_calc/thumbnail.png';
import carbon1 from '../assets/projects/carbon_calc/1.png';
import carbon2 from '../assets/projects/carbon_calc/2.png';
import carbon3 from '../assets/projects/carbon_calc/3.png';
import carbon4 from '../assets/projects/carbon_calc/4.png';
import carbon5 from '../assets/projects/carbon_calc/5.png';
import carbon6 from '../assets/projects/carbon_calc/6.png';
import carbon7 from '../assets/projects/carbon_calc/7.png';
import thumbnail3b from '../assets/projects/3b/thumbnail.png';
import designLabThumbnail from '../assets/projects/desing_lab/thumbnail.png';
import uwaterlooLogo from '../assets/projects/University_of_Waterloo/logo.png';
import multistudioLogo from '../assets/projects/multistudio/logo.png';
import harrimanThumbnail from '../assets/projects/harriman/thumbnail.png';

export const projects: Project[] = [
  {
    id: 1,
    slug: 'climate-analysis',
    client: 'Office for the next environment',
    title: `East Side Greenway
Climate Analysis.`,
    tag: 'EXISTING CONDITION',
    color: 'bg-gray-200',
    description: `I was in charge of....
    
    1. Daylight analysis to spot intense area
    2. Sun shadow analysis to spot most shading spots
    3. Organized scripts for everyone’s use`,
    role: 'Climate Study',
    team: 'Office for the Next Environment',
    duration: '2025 OCT', 
    tools: ['Grasshopper', 'Rhino'],
    thumbnailImage: climateImage2,
    images: [
      { src: climateImage2, alt: 'Rendered view of the climate study' },
      { src: climateVideo, alt: 'Climate transition video', caption: 'timelapse', type: 'video' },
      { src: climateImage3, alt: 'South East 3D visualization', caption: 'Winter shadow (3 hours)' },
      { src: grasshopper, alt: 'Grasshopper script', caption: 'Grasshopper script for analysis' },
            {
        src: heat30,
        alt: 'Heat analysis slideshow',
        caption: 'Sideshow (multiple images will show)',
        type: 'slideshow',
        slideshow: [heat30, heat40, heat50, heat60, heat70],
        slideshowInterval: 2000
      },
      {
        src: analemna3,
        alt: 'Sun path analysis',
        type: 'slideshow',
        slideshow: [analemna3, ecotectArrow],
        slideshowInterval: 3000,
        slideshowTransition: 'crossfade',
        transitionDuration: 500
      },
    ]
  },
  {
    id: 2,
    slug: 'carbon-analysis',
    client: 'Office for the next environment',
    title: 'Chinatown Connection Carbon Analysis.',
    tag: 'DESIGN BASELINE',
    color: 'bg-gray-300',
    description: 'Comprehensive carbon analysis for the Chinatown Connection project. Developed Python and Grasshopper scripts to calculate embodied carbon across different building materials and design scenarios.',
    role: 'Carbon Study',
    team: 'Office for the Next Environment',
    duration: '2025',
    tools: ['Grasshopper', 'Excel', 'Python'],
    thumbnailImage: carbonThumbnail,
    images: [

      { src: carbonThumbnail, alt: 'Carbon analysis thumbnail' },
      { src: carbon1, alt: 'Carbon analysis image 1' },
      { src: carbon2, alt: 'Carbon analysis image 2' },
      { src: carbon3, alt: 'Carbon analysis image 3' },
      { src: carbon4, alt: 'Carbon analysis image 4' },
      { src: carbon5, alt: 'Carbon analysis image 5' },
      { src: carbon7, alt: 'Carbon analysis image 7' }
    ]
  },
  {
    id: 3,
    slug: 'carbon-analysis-bim-landscape',
    client: 'Office for the next environment',
    title: 'Carbon Analysis / BIM Landscape',
    tag: '',
    color: 'bg-gray-200',
    description: 'BIM-based landscape carbon analysis combining 3D modeling with environmental impact calculations.',
    role: 'BIM Analyst',
    team: 'Office for the Next Environment',
    duration: '2025',
    tools: ['Rhino', 'Grasshopper', 'Excel'],
    thumbnailImage: harrimanThumbnail,
    images: [
      { src: harrimanThumbnail, alt: 'BIM Landscape thumbnail' }
    ]
  },
  {
    id: 4,
    slug: 'pattern-design',
    client: 'Computational Design Lab',
    title: 'Pattern Design',
    tag: '',
    color: 'bg-gray-300',
    description: 'Parametric pattern design exploration using computational design methodologies.',
    role: 'Computational Designer',
    team: 'Computational Design Lab',
    duration: '2024',
    tools: ['Grasshopper', 'Rhino'],
    thumbnailImage: designLabThumbnail,
    images: [
      { src: designLabThumbnail, alt: 'Design Lab thumbnail' }
    ]
  },
  {
    id: 8,
    slug: 'project-8',
    client: 'Harriman',
    title: 'Project Title 8',
    tag: '',
    color: 'bg-gray-300',
    description: 'Project description goes here.',
    role: 'Role',
    team: 'Harriman',
    duration: '2024',
    tools: ['Tool1', 'Tool2'],
    thumbnailImage: thumbnail3b,
    images: [
      { src: thumbnail3b, alt: 'Harriman thumbnail' }
    ]
  },
  {
    id: 5,
    slug: 'bim-managing-1',
    client: 'University of Waterloo',
    title: 'BIM Managing',
    tag: '',
    color: 'bg-gray-200',
    description: 'Building Information Modeling management for University of Waterloo campus projects.',
    role: 'BIM Manager',
    team: 'University of Waterloo',
    duration: '2024',
    tools: ['Revit', 'Navisworks'],
    thumbnailImage: uwaterlooLogo,
    images: [
      { src: uwaterlooLogo, alt: 'University of Waterloo logo' }
    ]
  },
  {
    id: 6,
    slug: 'arcadis-internship',
    client: 'Arcadis/IBI Group',
    title: 'High-Rise Residential Intern',
    tag: '',
    color: 'bg-gray-300',
    description: 'Advanced BIM coordination and management for university infrastructure projects.',
    role: 'BIM Coordinator',
    team: 'University of Waterloo',
    duration: '2024',
    tools: ['Revit', 'BIM 360'],
    thumbnailImage: arcadislogo,
    images: [{ src: arcadislogo, alt: 'Arcadis/IBI Group logo' }]
  },
  {
    id: 7,
    slug: 'project-7',
    client: 'Multistudio',
    title: 'Project Title 7',
    tag: '',
    color: 'bg-gray-200',
    description: 'Project description goes here.',
    role: 'Role',
    team: 'Multistudio',
    duration: '2024',
    tools: ['Tool1', 'Tool2'],
    thumbnailImage: multistudioLogo,
    images: [
      { src: multistudioLogo, alt: 'Multistudio logo' }
    ]
  },
  {
    id: 9,
    slug: 'project-9',
    client: 'Client Name',
    title: 'Project Title 9',
    tag: '',
    color: 'bg-gray-200',
    description: 'Project description goes here.',
    role: 'Role',
    team: 'Team Name',
    duration: '2024',
    tools: ['Tool1', 'Tool2'],
    thumbnailImage: '',
    images: []
  }
];

// Helper function to get project by slug
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

// Helper function to get all projects
export const getAllProjects = (): Project[] => {
  return projects;
};
