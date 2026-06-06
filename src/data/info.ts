import infoData from '../content/site/info.json';

export interface InfoLink {
  label: string;
  url: string;
}

export interface SiteInfo {
  intro: string;
  interest: string;
  previouslyLabel: string;
  links: InfoLink[];
  skills: string;
}

export const info: SiteInfo = infoData;
