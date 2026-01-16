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
import carbon7 from '../assets/projects/carbon_calc/7.png';
import thumbnail3b from '../assets/projects/3b/thumbnail.png';
import plan1_3b from '../assets/projects/3b/plan1.png';
import plan2_3b from '../assets/projects/3b/plan2.png';
import plan3_3b from '../assets/projects/3b/plan3.png';
import plan4_3b from '../assets/projects/3b/plan4.png';
import indesign1_3b from '../assets/projects/3b/indesign_images1.png';
import indesign2_3b from '../assets/projects/3b/indesign_images2.png';
import indesign3_3b from '../assets/projects/3b/indesign_images3.png';
import indesign4_3b from '../assets/projects/3b/indesign_images4.png';
import indesign5_3b from '../assets/projects/3b/indesign_images5.png';
import designLabThumbnail from '../assets/projects/desing_lab/thumbnail_photoshop.png';
import designLab1 from '../assets/projects/desing_lab/1.png';
import designLab2 from '../assets/projects/desing_lab/2.png';
import designLab3 from '../assets/projects/desing_lab/3.png';
import designLab4 from '../assets/projects/desing_lab/4.png';
import designLab5 from '../assets/projects/desing_lab/5.png';
import uwaterlooLogo from '../assets/projects/University_of_Waterloo/logo.png';
import multistudioLogo from '../assets/projects/multistudio/logo.png';
import capstoneThumbnail from '../assets/projects/capstone/Isometric SW.png';
import harrimanThumbnail from '../assets/projects/harriman/thumbnail_1.png';
import harriman2Way1 from '../assets/projects/harriman/2WAY_IMAGES.png';
import harriman2Way2 from '../assets/projects/harriman/2WAY_IMAGES2.png';
import harriman2Way3 from '../assets/projects/harriman/2WAY_IMAGES3.png';

export const projects: Project[] = [
  {
    id: 1,
    slug: 'climate-analysis',
    client: 'Office for the next environment',
    title: `East Side Greenway Climate Analysis.`,
    tag: 'EXISTING CONDITION',
    site: 'East River Greenway, NY',
    mapUrl : 'https://maps.app.goo.gl/5oCkK6B28TZdSCef7',
    color: 'bg-gray-200',
    description: `Our team managed the early design phase for a park located along a roadway in eastern Manhattan, with a focus on climate resilience.
    
    My service:
    1. Daylighting analysis to identify which areas received the most sun exposure.
    2. Sun shading analysis to determine which zones were most affected by shadows.
    3. Grasshopper scripts for the entire team to use, easy streamlining the workflow.`,
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
    ],
    
  },
  {
    id: 2,
    slug: 'carbon-analysis',
    client: 'Office for the next environment',
    title: 'Chinatown Connection Carbon Analysis.',
    tag: 'DESIGN BASELINE',
    color: 'bg-gray-300',
    description: `Chinatown Connection project is an 85,000 sqft landscape project focused on climate resilience and simplifying complex urban structures. My primary role was conducting an Embodied Carbon Analysis (Stage A1-A3).
    
    My service:
    1. EC3 Data Integration: Built a pipeline to import EC3 material data directly into Excel.
    2. Grasshopper Scripting: Made script to extract geometry metrics (length/area) and automatically export them to Excel.
    3. Automated Calculation: Within Excel, to calculate the total carbon footprint based on the imported data.
    4. AI Integration: Integrated an AI tool to read the calculated data and provide performance assessments.`,
    role: 'Carbon Study',
    team: 'Office for the Next Environment',
    duration: '2025',
    site: 'Chinatown, NY',
    mapUrl : 'https://maps.app.goo.gl/AHTVzKhPnmjkknCs7',
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
    ],
  },
  {
    id: 3,
    slug: 'carbon-analysis-bim-landscape',
    client: 'Office for the next environment',
    title: 'Harriman Campus Landscape/Climate Analysis',
    tag: '',
    color: 'bg-gray-200',
    site : 'Harriman Campus, NY',
    mapUrl : 'https://maps.app.goo.gl/BnEUk2y7KrPZar2K6',
    description: `The Harriman project is a security facility developed in collaboration with firms like Marvel and Thornton Tomasetti. My team was responsible for the landscape design and climate studies.
    
    My service:
    1. Managed the Revit pipeline to ensure smooth coordination and file sharing between our team and the external firms.
    2. Modeled landscape elements in Revit, including mechanical pipelines, retaining walls, toposolid, referenced by mechanical/structural drawings.
    3. Created custom Revit families for site components like fences, doors, and stairs, and communicated directly with them to verify the layout.
    4. Analyzed multiple facade options for solar performance and LEED compliance.
    
    `,
    role: 'BIM Analyst',
    team: 'Office for the Next Environment',
    duration: '2025',
    tools: ['Rhino', 'Grasshopper', 'Excel'],
    thumbnailImage: harrimanThumbnail,
    images: [
      { src: harrimanThumbnail, alt: 'Harriman Campus thumbnail' },
      { src: harriman2Way1, alt: 'Harriman 2-way view 1' },
      { src: harriman2Way2, alt: 'Harriman 2-way view 2' },
      { src: harriman2Way3, alt: 'Harriman 2-way view 3' }
    ]
  },
  {
    id: 4,
    slug: 'pattern-design',
    client: 'Play',
    title: 'Computational Design Lab',
    tag: '',
    color: 'bg-gray-300',
    description: 'Showcasing approx. 30 facade and structural concepts coded in Rhino Grasshopper. This collection blends reference studies with original designs, focusing on parametric optimization for both performance and aesthetics. The goal is to translate these computational methods into real-world architectural projects. (Instagram: https://www.instagram.com/arch_ghs)',
    role: 'Computational Designer',
    team: 'Self-Initiated',
    duration: '2024 - sometimes',

    tools: ['Grasshopper', 'Rhino'],
    thumbnailImage: designLabThumbnail,
    images: [
      { src: designLabThumbnail, alt: 'Design Lab thumbnail' },
      { src: designLab1, alt: 'Design Lab pattern 1' },
      { src: designLab2, alt: 'Design Lab pattern 2' },
      { src: designLab3, alt: 'Design Lab pattern 3' },
      { src: designLab4, alt: 'Design Lab pattern 4' },
      { src: designLab5, alt: 'Design Lab pattern 5' }
    ],
  },
  {
    id: 8,
    slug: 'project-8',
    client: 'University of Waterloo Studio',
    title: 'BIM Coordination',
    tag: '',
    color: 'bg-gray-300',
    description: `This project was developed during a 4-month academic studio. Our team designed a high-rise residential building entirely from scratch, integrating architectural, structural, and mechanical systems. The primary goals of the design were sustainability and climate resiliency.
    
    My service:
    1. Managed BIM coordination for architectural, structural, and mechanical systems to resolve conflicts.
2. Reviewed zoning laws and building codes to ensure the design followed all regulations.
3. Collaborated with a teammate to analyze structural loads and determine the framework requirements.`,
    role: 'BIM Coordination',
    team: 'Ahmed Rosli, Jingyu Lu, Gabriel Codina',
    duration: '2024',
    tools: ['Revit / Rhino inside Revit / D5'],
    thumbnailImage: thumbnail3b,
    images: [
      {
        src: thumbnail3b,
        alt: 'BIM Coordination',
      },
      {
        src: plan1_3b,
        alt: 'BIM Coordination plans slideshow',
        type: 'slideshow',
        slideshow: [plan1_3b, plan2_3b, plan3_3b, plan4_3b],
        slideshowInterval: 3500,
        slideshowTransition: 'crossfade',
        transitionDuration: 800
      },
      {
        src: indesign1_3b,
        alt: 'InDesign image 1'
      },
      {
        src: indesign2_3b,
        alt: 'InDesign image 2'
      },
      {
        src: indesign3_3b,
        alt: 'InDesign image 3'
      },
      {
        src: indesign4_3b,
        alt: 'InDesign slideshow',
        type: 'slideshow',
        slideshow: [indesign4_3b, indesign5_3b],
        slideshowInterval: 5500,
        slideshowTransition: 'crossfade',
        transitionDuration: 800
      }
    ],
    site: 'Victoria Park'
  },
  {
    id: 5,
    slug: 'uwaterloo-ra',
    client: 'University of Waterloo',
    title: 'Intern - Research Assistant',
    tag: '',
    color: 'bg-gray-200',
    description: 'Building Information Modeling management for University of Waterloo campus projects.',
    role: 'BIM Manager',
    team: 'University of Waterloo',
    duration: '2024 May-Aug / 2025 May-Aug',
    tools: ['Grasshopper'],
    thumbnailImage: uwaterlooLogo,
    images: [
      { src: uwaterlooLogo, alt: 'University of Waterloo logo' }
    ],
    site: 'Waterloo, ON'
  },
  {
    id: 6,
    slug: 'arcadis',
    client: 'Arcadis/IBI Group',
    title: 'Intern - High rise Residential',
    tag: '',
    color: 'bg-gray-300',
    description: 'Advanced BIM coordination and management for university infrastructure projects.',
    role: 'BIM, computational design',
    team: 'Arcadis/IBI Group',
    duration: '2024 Jan-Apr',
    tools: ['Revit, Grasshopper, Python, Rhino'],
    thumbnailImage: arcadislogo,
    images: [{ src: arcadislogo, alt: 'Arcadis/IBI Group logo' }],
    site: 'Vancouver, BC'
  },
  {
    id: 7,
    slug: 'multistudio',
    client: 'Multistudio',
    title: 'Intern - Commercial Architecture',
    tag: '',
    color: 'bg-gray-200',
    description: 'Project description goes here.',
    role: 'Model making, plan drafting',
    team: 'Multistudio',
    duration: '2019 Sep-Dec',
    tools: ['Revit, Rhino, Bluebeam, AutoCAD'],
    thumbnailImage: multistudioLogo,
    images: [
      { src: multistudioLogo, alt: 'Multistudio logo' }
    ],
    site: 'San Francisco, CA'
  },
  {
    id: 9,
    slug: 'capstone',
    client: 'Capstone Project',
    title: 'BIM Coordination',
    tag: '',
    color: 'bg-gray-200',
    description: 'Currently working on it.',
    role: 'Architectural Lead',
    team: 'Paul Yang, Druthi Padamati, Mithuna Kandasamy',
    duration: '8 Months',
    tools: ['Revit, Rhino, Grasshopper'],
    thumbnailImage: capstoneThumbnail,
    images: [
      { src: capstoneThumbnail, alt: 'Capstone Isometric View' }
    ],
    site: 'City of Gary'
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
