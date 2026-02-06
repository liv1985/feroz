export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  sizes: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Nocturnal Elegance Dress',
    price: 349.0,
    category: 'Maxi Dresses',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=600&h=800',
    description: 'A floor-length masterpiece in high-gloss black latex. Featuring a sleek silhouette and reinforced seams for a perfect fit.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: '2',
    name: 'Crimson Vixen Mini',
    price: 289.0,
    category: 'Mini Dresses',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=600&h=800',
    description: 'Turn heads in this vibrant red mini dress. Made from premium 0.4mm latex with a hidden back zipper.',
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: '3',
    name: 'Midnight Mist Bodysuit',
    price: 199.0,
    category: 'Bodysuits',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600&h=800',
    description: 'Versatile and bold. This high-neck bodysuit offers a second-skin feel and incredible shine.',
    sizes: ['S', 'M', 'L'],
  },
  {
    id: '4',
    name: 'Onyx Shadow Midi',
    price: 319.0,
    category: 'Midi Dresses',
    image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&q=80&w=600&h=800',
    description: 'Sophistication meets edge. This knee-length midi dress features a classic pencil cut.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: '5',
    name: 'Platinum Peak Gown',
    price: 499.0,
    category: 'Gowns',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=600&h=800',
    description: 'A stunning silver latex gown with a plunging neckline. Designed for high-profile events.',
    sizes: ['S', 'M', 'L'],
  },
  {
    id: '6',
    name: 'Velvet Rose Corset Dress',
    price: 429.0,
    category: 'Corset Dresses',
    image: 'https://images.unsplash.com/photo-1518764667315-9988a368e9a3?auto=format&fit=crop&q=80&w=600&h=800',
    description: 'Sculpted to perfection. This dress features a built-in corset for an exaggerated hourglass figure.',
    sizes: ['XS', 'S', 'M', 'L'],
  }
];
