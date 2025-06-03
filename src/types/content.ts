// Types for content fetched from Bolt CMS

export interface PageContent {
  id: number;
  slug: string;
  title: string;
  description: string;
  content: string;
  meta_title: string;
  meta_description: string;
  hero_image: ImageAsset;
  sections: Section[];
  created_at: string;
  updated_at: string;
}

export interface ServiceContent {
  id: number;
  slug: string;
  title: string;
  description: string;
  icon: string;
  content: string;
  image: ImageAsset;
  features: Feature[];
  created_at: string;
  updated_at: string;
}

export interface ProjectContent {
  id: number;
  slug: string;
  title: string;
  description: string;
  location: string;
  client: string;
  completion_date: string;
  images: ImageAsset[];
  testimonial?: TestimonialContent;
  created_at: string;
  updated_at: string;
}

export interface TestimonialContent {
  id: number;
  client_name: string;
  client_company?: string;
  client_photo?: ImageAsset;
  content: string;
  rating: number;
  created_at: string;
  updated_at: string;
}

export interface Section {
  id: number;
  type: 'text' | 'image' | 'gallery' | 'cta' | 'services' | 'projects' | 'testimonials';
  title?: string;
  content?: string;
  image?: ImageAsset;
  cta_text?: string;
  cta_link?: string;
  background_color?: string;
  items?: any[];
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon?: string;
}

export interface ImageAsset {
  id: number;
  url: string;
  alt: string;
  width: number;
  height: number;
  mime_type: string;
}

export interface ApiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      total: number;
      count: number;
      per_page: number;
      current_page: number;
      total_pages: number;
    };
  };
}