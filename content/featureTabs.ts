export type FeatureTab = {
  label: string;
  icon: 'feather' | 'eye' | 'sun';
  image: { src: string; alt: string };
  /** Three shares that add up to 100. The first two are drawn on the donut chart. */
  breakdown: [Share, Share, Share];
};

type Share = { label: string; percent: number };

export const featureTabs: FeatureTab[] = [
  {
    label: 'We connect our customers with the best.',
    icon: 'feather',
    image: { src: '/images/feature-2.jpg', alt: 'Smiling woman on a phone call in an office' },
    breakdown: [
      { label: 'Agile Development', percent: 35 },
      { label: 'Investor bandwidth', percent: 30 },
      { label: 'A/B testing', percent: 35 },
    ],
  },
  {
    label: 'Advisor success customer launch party.',
    icon: 'eye',
    image: { src: '/images/feature-tab-2.jpg', alt: 'Man in a blue suit standing on city steps' },
    breakdown: [
      { label: 'Customer success', percent: 45 },
      { label: 'Launch events', percent: 25 },
      { label: 'Partnerships', percent: 30 },
    ],
  },
  {
    label: 'Business-to-consumer long tail.',
    icon: 'sun',
    image: { src: '/images/feature-tab-3.jpg', alt: 'Man in a denim jacket sitting on a bus' },
    breakdown: [
      { label: 'Long-tail sales', percent: 50 },
      { label: 'Direct to consumer', percent: 30 },
      { label: 'Marketplaces', percent: 20 },
    ],
  },
];
