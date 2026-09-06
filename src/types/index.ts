export type ToolCategory =
  | 'utilities'
  | 'design';

export type Language = 'en' | 'bn' | 'ar';

export type Theme = 'light' | 'dark' | 'system';

export interface ToolDefinition {
  id: string;
  name: string;
  nameKey: string;
  description: string;
  descKey: string;
  category: ToolCategory;
  iconName: string;
  aliases: string[];
  keywords: string[];
  isPopular?: boolean;
  requiresCamera?: boolean;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface FaqItem {
  question: string;
  answer: string;
}
