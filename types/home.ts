export interface HeroContent {
  eyebrow: string;
  title: string;
  description: string;

  badge: {
    icon: string;
    text: string;
  };

  primaryButton: {
    label: string;
    href: string;
  };

  secondaryButton: {
    label: string;
    href: string;
  };

  images: {
    main: string;
    circle1: string;
    circle2: string;
    circle3: string;
  };
}
