// FIX: Add React import to resolve 'Cannot find namespace React' error.
import type * as React from "react";

export type Language = "id" | "en";

export interface SEO {
  title: string;
  description: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  details: string[];
}

export interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  readingTime: string;
  category: string;
  tags: string[];
  image: string;
  content: string;
}

export interface Testimonial {
  name: string;
  position: string;
  quote: string;
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface AboutPageContent {
  seo: SEO;
  section1: {
    title: string;
    p1: string;
    p2: string;
    listTitle: string;
    listItem1: string;
    listItem2: string;
    listItem3: string;
    image: string;
  };
  section2: {
    visionTitle: string;
    visionText: string;
    missionTitle: string;
    missions: { icon: string; title: string; text: string }[];
  };
  section3: {
    title: string;
    subtitle: string;
    pillars: { icon: string; title: string; text: string }[];
  };
  section4: {
    title: string;
    testimonials: Testimonial[];
  };
  section5: {
    title: string;
    team: TeamMember[];
  };
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactInfoItem {
  icon: string;
  title: string;
  text: string;
  subtext?: string;
  link: string;
}

export interface SocialMediaLink {
  platform: "instagram" | "tiktok" | "twitter" | "facebook";
  url: string;
}

export interface ContactPageContent {
  seo: SEO;
  title: string;
  intro: string;
  contactInfo: ContactInfoItem[];
  socialMediaTitle: string;
  socialMediaLinks: SocialMediaLink[];
  faqTitle: string;
  faqs: FAQItem[];
}

export interface BlogPageContent {
  seo: SEO;
  title: string;
  description: string;
  searchPlaceholder: string;
  filterCategoryAll: string;
  filterTagAll: string;
}

export interface FooterContent {
  socialMediaLinks: SocialMediaLink[];
}

export interface CtaButton {
  text: string;
  link: string;
  target?: string;
}

export type ModalContentType =
  | { type: "map"; title: string; embedUrl: string }
  | {
      type: "info";
      title: string;
      image?: string;
      icon?: string;
      text: React.ReactNode;
      cta?: CtaButton;
    };

export interface Content {
  nav: {
    home: string;
    about: string;
    products: string;
    blog: string;
    contact: string;
  };
  hero: {
    seo: SEO;
    title: string;
    subtitle: string;
    tagline: string;
    cta: string;
    ctaContact: string;
  };
  productsPage: {
    seo: SEO;
    title: string;
    description: string;
    searchPlaceholder: string;
    filterAll: string;
    viewDetails: string;
    contactUs: string;
  };
  blogPage: BlogPageContent;
  aboutPage: AboutPageContent;
  contactPage: ContactPageContent;
  footer: FooterContent;
  products: Product[];
  blogPosts: BlogPost[];
}
