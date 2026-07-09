export interface FooterNavigation {
  label: string;
  href: string;
}

export interface FooterSocial {
  platform: string;
  url: string;
}

export interface FooterDeveloper {
  text: string;
  name: string;
  website: string;
}

export interface FooterContent {
  description: string;
  copyright: string;
  developer: FooterDeveloper;
  navigation: FooterNavigation[];
  social: FooterSocial[];
}
