export interface ServiceCategory {
  title: string;
  icon: string;
  services: string[];
}

export interface ServicesContent {
  eyebrow: string;
  title: string;
  description: string;
  categories: ServiceCategory[];
}
