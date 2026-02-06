export interface Product {
  id: string;
  slug: string;
  sku: string;
  name: string;
  price: number;
  compareAtPrice?: number;
  category: string;
  images: string[];
  colors: {
    name: string;
    hex: string;
  }[];
  description: string;
  details: string[];
  material: string;
  careInstructions: string;
  sizes: string[];
  inventory: { [key: string]: number };
  status: 'new' | 'limited-edition' | 'out-of-stock' | 'standard';
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'midnight-noir-dress',
    sku: 'FZ-D-001',
    name: 'Midnight Noir Dress',
    price: 349.0,
    compareAtPrice: 420.0,
    category: 'Dresses',
    images: [
      '/images/products/black-dress-a.jpg',
      '/images/products/black-dress-b.jpg'
    ],
    colors: [
      { name: 'Midnight Black', hex: '#000000' }
    ],
    description: 'An elegant and sleek black dress designed for high-end events. Crafted from premium materials for a perfect fit.',
    details: [
      'Contoured silhouette',
      'High-gloss finish',
      'Reinforced seams',
      'Hidden back closure'
    ],
    material: 'Premium Synthetic Blend',
    careInstructions: 'Professional clean only. Store in a cool, dry place.',
    sizes: ['XS', 'S', 'M', 'L'],
    inventory: { 'XS': 5, 'S': 8, 'M': 4, 'L': 2 },
    status: 'new',
  },
  {
    id: '2',
    slug: 'crimson-contrast-set',
    sku: 'FZ-S-002',
    name: 'Crimson Contrast Set',
    price: 289.0,
    category: 'Sets',
    images: [
      '/images/products/black-sleeve-red-skirt-a.jpg',
      '/images/products/black-sleeve-red-skirt-b.jpg',
      '/images/products/black-sleeve-red-skirt-c.jpg',
      '/images/products/black-sleeve-red-skirt-d.jpg',
      '/images/products/black-sleeve-red-skirt-e.jpg',
      '/images/products/black-sleeve-red-skirt-f.jpg'
    ],
    colors: [
      { name: 'Black & Red', hex: '#8B0000' }
    ],
    description: 'A bold combination of a black long-sleeve top and a striking red skirt. Perfect for making a statement.',
    details: [
      'Two-piece ensemble',
      'Contrast color blocking',
      'Flexible fit',
      'Statement piece'
    ],
    material: 'High-Performance Latex',
    careInstructions: 'Hand wash only. Use specialized polish for shine.',
    sizes: ['S', 'M', 'L'],
    inventory: { 'S': 10, 'M': 15, 'L': 7 },
    status: 'standard',
  },
  {
    id: '3',
    slug: 'striped-monochrome-mini',
    sku: 'FZ-D-003',
    name: 'Striped Monochrome Mini',
    price: 199.0,
    category: 'Mini Dresses',
    images: [
      '/images/products/black-white-stripes.jpg'
    ],
    colors: [
      { name: 'Black & White', hex: '#FFFFFF' }
    ],
    description: 'A playful yet sophisticated mini dress featuring bold black and white stripes.',
    details: [
      'Horizontal stripe pattern',
      'Body-con fit',
      'Lightweight material',
      'Versatile styling'
    ],
    material: 'Stretch Fabric',
    careInstructions: 'Machine wash cold, hang to dry.',
    sizes: ['XS', 'S', 'M'],
    inventory: { 'XS': 3, 'S': 6, 'M': 4 },
    status: 'limited-edition',
  },
  {
    id: '4',
    slug: 'blush-serenity-gown',
    sku: 'FZ-G-004',
    name: 'Blush Serenity Gown',
    price: 499.0,
    compareAtPrice: 550.0,
    category: 'Gowns',
    images: [
      '/images/products/pink-dress-a.jpg',
      '/images/products/pink-dress-b.jpg'
    ],
    colors: [
      { name: 'Blush Pink', hex: '#FFB6C1' }
    ],
    description: 'A breathtaking pink gown that exudes grace and sophistication. Ideal for galas and red-carpet events.',
    details: [
      'Floor-length design',
      'Soft pink hue',
      'Delicate tailoring',
      'Premium feel'
    ],
    material: 'Silk-Touch Poly-Blend',
    careInstructions: 'Dry clean only.',
    sizes: ['S', 'M', 'L', 'XL'],
    inventory: { 'S': 2, 'M': 4, 'L': 3, 'XL': 1 },
    status: 'new',
  },
  {
    id: '5',
    slug: 'magenta-radiance-slit-dress',
    sku: 'FZ-D-005',
    name: 'Magenta Radiance Slit Dress',
    price: 329.0,
    category: 'Dresses',
    images: [
      '/images/products/sleeveless-magenta-red.jpg'
    ],
    colors: [
      { name: 'Magenta Red', hex: '#C71585' }
    ],
    description: 'A vibrant magenta-red sleeveless dress featuring a daring side slit for a modern look.',
    details: [
      'Sleeveless silhouette',
      'High-thigh slit',
      'Vibrant color palette',
      'Form-fitting'
    ],
    material: 'Natural Latex',
    careInstructions: 'Clean with lukewarm water. Apply silicone shine for finish.',
    sizes: ['XS', 'S', 'M', 'L'],
    inventory: { 'XS': 4, 'S': 5, 'M': 5, 'L': 3 },
    status: 'standard',
  }
];
