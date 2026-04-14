export type BenefitIconKey =
  | "mousePointerClick"
  | "zap"
  | "target"
  | "barChart3"
  | "shield"
  | "rocket";

export interface NavLink {
  label: string;
  href: string;
}

export interface Benefit {
  icon: BenefitIconKey;
  title: string;
  description: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  stars: number;
  text: string;
  avatar: string;
}

export interface ClientLogo {
  name: string;
  logo: string;
  url: string;
}

export interface DemoProject {
  title: string;
  niche: string;
  images: string[];
  accentFrom: string;
  accentTo: string;
}

export interface Plan {
  name: string;
  price: string;
  oldPrice?: string;
  period: string;
  highlight?: boolean;
  badge?: string;
  idealFor?: string;
  features: string[];
  cta: string;
}

export interface MaintenancePlan {
  name: string;
  badge?: string;
  highlight?: boolean;
  features: string[];
  price: string;
}

export interface FaqItemData {
  question: string;
  answer: string;
}

export interface Stat {
  value: string;
  label: string;
}
