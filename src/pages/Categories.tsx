import { ArrowRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

interface CategoriesProps {
  onNavigate: (page: string, productId?: string) => void;
}

export default function Categories({ onNavigate }: CategoriesProps) {
  const categories = [
    {
      name: 'Living Room',
      description: 'Comfortable and stylish furniture for your living space',
      image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1200',
      products: products.filter((p) => p.category === 'Living Room'),
    },
    {
      name: 'Bedroom',
      description: 'Create your perfect sanctuary with our bedroom collection',
      image: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1200',
      products: products.filter((p) => p.category === 'Bedroom'),
    },
    {
      name: 'Dining Room',
      description: 'Elegant dining furniture for memorable gatherings',
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1200',
      products: products.filter((p) => p.category === 'Dining Room'),
    },
    {
      name: 'Office',
      description: 'Productive and comfortable workspace solutions',
      image: 'https://images.pexels.com/photos/7640432/pexels-photo-7640432.jpeg?auto=compress&cs=tinysrgb&w=1200',
      products: products.filter((p) => p.category === 'Office'),
    },
    {
      name: 'Storage',
      description: 'Organize in style with our storage solutions',
      image: 'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=1200',
      products: products.filter((p) => p.category === 'Storage'),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-amber-600 to-amber-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Browse by Category</h1>
          <p className="text-xl text-amber-100">
            Find exactly what you need for every room in your home
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-24">
          {categories.map((category, index) => (
            <div key={category.name}>
              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 right-8">
                      <h2 className="text-4xl font-bold text-white mb-2">{category.name}</h2>
                      <p className="text-amber-100 text-lg">{category.description}</p>
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      Explore {category.name}
                    </h3>
                    <p className="text-gray-600 text-lg mb-6">
                      Discover our carefully curated selection of {category.name.toLowerCase()} furniture.
                      Each piece is designed to combine functionality with timeless style.
                    </p>
                    <button
                      onClick={() => onNavigate('shop')}
                      className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full font-semibold transition-colors group"
                    >
                      View All {category.name}
                      <ArrowRight
                        size={20}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </button>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold text-gray-900 text-lg">
                        Featured Products
                      </h4>
                      <span className="text-amber-600 font-semibold">
                        {category.products.length} items
                      </span>
                    </div>

                    <div className="space-y-4">
                      {category.products.slice(0, 3).map((product) => (
                        <button
                          key={product.id}
                          onClick={() => onNavigate('product', product.id)}
                          className="flex items-center gap-4 w-full p-3 rounded-xl hover:bg-gray-50 transition-colors text-left"
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h5 className="font-semibold text-gray-900 mb-1">{product.name}</h5>
                            <div className="flex items-center gap-2">
                              <span className="text-amber-600 font-bold">R{product.price}</span>
                              {product.originalPrice && (
                                <span className="text-gray-400 line-through text-sm">
                                  R{product.originalPrice}
                                </span>
                              )}
                            </div>
                          </div>
                          <ArrowRight className="text-gray-400" size={20} />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {index < categories.length - 1 && (
                <div className="mt-16 border-t border-gray-300"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-24 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Need Help Finding the Perfect Piece?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our design experts are here to help you create your dream space
          </p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
