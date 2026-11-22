export type Post = {
  category: string;
  date: string; // ISO 8601
  title: string;
  image: string;
  author: { name: string; avatar: string };
};

export const posts: Post[] = [
  {
    category: 'Category',
    date: '2021-11-22',
    title: 'Pitch termsheet backing validation focus release.',
    image: '/images/post-1.jpg',
    author: { name: 'Chandler Bing', avatar: '/images/post-author-1.jpg' },
  },
  {
    category: 'Category',
    date: '2021-11-22',
    title: 'Seed round direct mailing non-disclosure agreement graphical user interface rockstar.',
    image: '/images/post-2.jpg',
    author: { name: 'Rachel Green', avatar: '/images/post-author-2.jpg' },
  },
  {
    category: 'Category',
    date: '2021-11-22',
    title: 'Beta prototype sales iPad gen-z marketing network effects value proposition',
    image: '/images/post-3.jpg',
    author: { name: 'Monica Geller', avatar: '/images/post-author-3.jpg' },
  },
  {
    category: 'Category',
    date: '2021-11-15',
    title: 'Freemium crowdfunding angel investor customer equity launch party.',
    image: '/images/service-1.jpg',
    author: { name: 'Ross Geller', avatar: '/images/post-author-1.jpg' },
  },
  {
    category: 'Category',
    date: '2021-11-08',
    title: 'Termsheet partner network business-to-business early adopters iteration.',
    image: '/images/feature-2.jpg',
    author: { name: 'Joey Tribbiani', avatar: '/images/post-author-2.jpg' },
  },
  {
    category: 'Category',
    date: '2021-11-01',
    title: 'Hackathon backing creative ramen paradigm shift growth hacking.',
    image: '/images/banner.jpg',
    author: { name: 'Phoebe Buffay', avatar: '/images/post-author-3.jpg' },
  },
];

export const POSTS_PER_PAGE = 3;
