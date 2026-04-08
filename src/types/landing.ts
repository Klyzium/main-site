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

export interface Plan {
  name: string;
  price: string;
  period: string;
  highlight?: boolean;
  badge?: string;
  features: string[];
  cta: string;
}

export interface FaqItemData {
  question: string;
  answer: string;
}

export interface Stat {
  value: string;
  label: string;
}
