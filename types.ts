import React from 'react';

export enum Section {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  PARTNER_SERVICES = 'PARTNER_SERVICES',
  SERVICES = 'SERVICES',
  PORTFOLIO = 'PORTFOLIO',
  TESTIMONIALS = 'TESTIMONIALS',
  QUOTE = 'QUOTE',
  FAQ = 'FAQ',
  BLOG = 'BLOG',
  CONTACT = 'CONTACT',
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}