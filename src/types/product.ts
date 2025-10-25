export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  /**
   * External AR viewing URL (e.g. USDZ/GLB viewer or hosted AR demo).
   * Example: 'https://cdn.example.com/models/chair.usdz' or 'https://ar.example.com/?model=1'
   */
  arUrl?: string;
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
