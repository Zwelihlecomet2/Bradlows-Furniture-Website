import { useState } from 'react';
import { SlidersHorizontal, Grid3x3, LayoutGrid } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

interface ShopProps {
  onNavigate: (page: string, productId?: string) => void;
}

export default function Shop({ onNavigate }: ShopProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [gridCols, setGridCols] = useState(3);

  const categories = ['All', 'Living Room', 'Bedroom', 'Dining Room', 'Office', 'Storage'];

  const filteredProducts = products.filter(
    (product) => selectedCategory === 'All' || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-amber-600 to-amber-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Shop All Furniture</h1>
          <p className="text-xl text-amber-100">
            Browse our complete collection of premium furniture
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 shrink-0">
            <div className="bg-white rounded-2xl p-6 shadow-md sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <SlidersHorizontal size={20} className="text-amber-600" />
                <h2 className="font-bold text-lg">Filters</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                          selectedCategory === category
                            ? 'bg-amber-600 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Price Range</h3>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded text-amber-600" />
                      <span className="text-gray-700">Under R500</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded text-amber-600" />
                      <span className="text-gray-700">R500 - R1000</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded text-amber-600" />
                      <span className="text-gray-700">R1000+</span>
                    </label>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Availability</h3>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded text-amber-600" defaultChecked />
                    <span className="text-gray-700">In Stock Only</span>
                  </label>
                </div>

                <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                  Apply Filters
                </button>
              </div>
            </div>
          </aside>

          <div className="flex-1">
            <div className="bg-white rounded-2xl p-6 shadow-md mb-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-gray-600">
                    Showing <span className="font-semibold">{sortedProducts.length}</span> products
                  </p>
                </div>

                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex items-center gap-2">
                    <label className="text-gray-700 font-medium">Sort by:</label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    >
                      <option value="featured">Featured</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="rating">Highest Rated</option>
                    </select>
                  </div>

                  <div className="flex items-center gap-2 border-l pl-4">
                    <button
                      onClick={() => setGridCols(2)}
                      className={`p-2 rounded-lg transition-colors ${
                        gridCols === 2 ? 'bg-amber-600 text-white' : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <LayoutGrid size={20} />
                    </button>
                    <button
                      onClick={() => setGridCols(3)}
                      className={`p-2 rounded-lg transition-colors ${
                        gridCols === 3 ? 'bg-amber-600 text-white' : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <Grid3x3 size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`grid gap-6 ${
                gridCols === 2
                  ? 'grid-cols-1 md:grid-cols-2'
                  : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              }`}
            >
              {sortedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onViewDetails={(id) => onNavigate('product', id)}
                />
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-600 text-lg">No products found in this category.</p>
                <button
                  onClick={() => setSelectedCategory('All')}
                  className="mt-4 text-amber-600 font-semibold hover:underline"
                >
                  View all products
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
