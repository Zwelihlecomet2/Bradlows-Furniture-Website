import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Modern Velvet Sofa',
    price: 1299,
    originalPrice: 1699,
    category: 'Living Room',
    image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Luxurious velvet sofa with elegant curved design and solid wood legs.',
    rating: 4.8,
    reviews: 124,
    inStock: true,
    colors: ['Navy', 'Emerald', 'Blush'],
    dimensions: { width: 84, height: 33, depth: 38 }
  },
  {
    id: '2',
    name: 'Scandinavian Dining Table',
    price: 899,
    category: 'Dining Room',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Minimalist oak dining table with clean lines and natural finish.',
    rating: 4.9,
    reviews: 89,
    inStock: true,
    dimensions: { width: 72, height: 30, depth: 40 }
  },
  {
    id: '3',
    name: 'Leather Accent Chair',
    price: 599,
    originalPrice: 799,
    category: 'Living Room',
    image: 'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Genuine leather accent chair with mid-century modern design.',
    rating: 4.7,
    reviews: 156,
    inStock: true,
    colors: ['Cognac', 'Black', 'Dark Brown'],
    dimensions: { width: 28, height: 35, depth: 32 }
  },
  {
    id: '4',
    name: 'Industrial Bookshelf',
    price: 449,
    category: 'Storage',
    image: 'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Open shelving unit with metal frame and reclaimed wood shelves.',
    rating: 4.6,
    reviews: 78,
    inStock: true,
    dimensions: { width: 48, height: 72, depth: 16 }
  },
  {
    id: '5',
    name: 'Upholstered Platform Bed',
    price: 1099,
    category: 'Bedroom',
    image: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Elegant platform bed with tufted headboard and soft fabric.',
    rating: 4.8,
    reviews: 201,
    inStock: true,
    colors: ['Light Gray', 'Charcoal', 'Beige'],
    dimensions: { width: 64, height: 50, depth: 86 }
  },
  {
    id: '6',
    name: 'Marble Coffee Table',
    price: 749,
    originalPrice: 999,
    category: 'Living Room',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Contemporary coffee table with genuine marble top and brass base.',
    rating: 4.9,
    reviews: 143,
    inStock: true,
    dimensions: { width: 48, height: 18, depth: 30 }
  },
  {
    id: '7',
    name: 'Ergonomic Office Chair',
    price: 399,
    category: 'Office',
    image: 'https://images.pexels.com/photos/7640432/pexels-photo-7640432.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Premium office chair with lumbar support and adjustable features.',
    rating: 4.7,
    reviews: 267,
    inStock: true,
    colors: ['Black', 'Gray'],
    dimensions: { width: 26, height: 42, depth: 26 }
  },
  {
    id: '8',
    name: 'Rattan Lounge Chair',
    price: 529,
    category: 'Living Room',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Handwoven rattan chair with cushioned seat for ultimate comfort.',
    rating: 4.6,
    reviews: 92,
    inStock: true,
    dimensions: { width: 30, height: 34, depth: 32 }
  }
];
