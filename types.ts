
export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureSpace {
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface EventType {
  title: string;
  description: string;
  image: string;
}

export type GalleryCategory = 'empty' | 'setup' | 'aerial' | 'sunset' | 'video';

export interface GalleryItem {
  type: 'image' | 'video';
  url: string;
  poster?: string;
  category: GalleryCategory;
  alt: string;
}
