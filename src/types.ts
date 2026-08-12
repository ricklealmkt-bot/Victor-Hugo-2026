export interface FaqItem {
  question: string;
  answer: string;
}

export interface MetricStep {
  number: string;
  title: string;
  description: string;
  details: string[];
}

export interface ComparisonCard {
  title: string;
  subtitle: string;
  badge: string;
  items: {
    title: string;
    description: string;
  }[];
}
