export interface Address {
  studio: string;
  line1: string;
  line2: string;
  state: string;
  country: string;
}

export interface WorkingHour {
  day: string;
  time: string;
}

export interface ContactCTA {
  title: string;
  description: string;
  button: string;
}

export interface ContactContent {
  eyebrow: string;
  title: string;
  description: string;

  phone: string;
  email: string;
  whatsapp: string;
  instagram: string;

  address: Address;

  workingHours: WorkingHour[];

  googleMap: string;

  cta: ContactCTA;
}
