export type Link = { label: string; href: string };

export const mainNav: Link[] = [
  { label: 'Product', href: '#features' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
];

export type FooterColumn = {
  title: string;
  links: (Link & { badge?: string })[];
};

export const footerColumns: FooterColumn[] = [
  {
    title: 'Landings',
    links: [
      { label: 'Home', href: '#' },
      { label: 'Products', href: '#features' },
      { label: 'Services', href: '#services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Home', href: '#' },
      { label: 'Careers', href: '#', badge: 'Hiring!' },
      { label: 'Services', href: '#services' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '#blog' },
      { label: 'Products', href: '#features' },
      { label: 'Services', href: '#services' },
    ],
  },
];
