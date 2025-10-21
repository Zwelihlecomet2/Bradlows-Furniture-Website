export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  description: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  colors?: string[];
  dimensions?: {
    width: number;
    height: number;
    depth: number;
  };
}
