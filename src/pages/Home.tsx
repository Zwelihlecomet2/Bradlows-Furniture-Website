import { ArrowRight, Truck, Shield, Award, Headphones } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

interface HomeProps {
  onNavigate: (page: string, productId?: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold">
                  New Collection 2024
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Transform Your Space With
                <span className="text-amber-600"> Premium Furniture</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover our curated collection of modern, elegant furniture designed to elevate your home. Experience pieces in AR before you buy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('shop')}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors flex items-center justify-center gap-2 group"
                >
                  Shop Now
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
                <button className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors">
                  View Catalog
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-10 -left-10 w-72 h-72 bg-amber-200 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-amber-300 rounded-full blur-3xl opacity-30"></div>
              <img
                src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Modern Furniture"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="text-amber-600" size={28} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Free Shipping</h3>
              <p className="text-gray-600 text-sm">On orders over $500</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-amber-600" size={28} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">2 Year Warranty</h3>
              <p className="text-gray-600 text-sm">On all products</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-amber-600" size={28} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600 text-sm">Handcrafted excellence</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="text-amber-600" size={28} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Always here to help</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600">
              Explore our handpicked selection of premium furniture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={(id) => onNavigate('product', id)}
              />
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('shop')}
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors inline-flex items-center gap-2"
            >
              View All Products
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-amber-600 to-amber-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="AR Experience"
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="text-white space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold">
                See It In Your Space Before You Buy
              </h2>
              <p className="text-xl text-amber-100">
                Use our AR technology to visualize how furniture will look in your home. Simply click the AR icon on any product card to get started.
              </p>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <div className="bg-white bg-opacity-20 rounded-full p-1 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  True-to-scale 3D models
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-white bg-opacity-20 rounded-full p-1 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Works on any smartphone or tablet
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-white bg-opacity-20 rounded-full p-1 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Make confident purchase decisions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Shop By Category
            </h2>
            <p className="text-xl text-gray-600">Find exactly what you need</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Living Room', 'Bedroom', 'Dining Room', 'Office'].map((category) => (
              <button
                key={category}
                onClick={() => onNavigate('categories')}
                className="group relative overflow-hidden rounded-2xl aspect-square"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                <img
                  src={`https://images.pexels.com/photos/${
                    category === 'Living Room'
                      ? '1866149'
                      : category === 'Bedroom'
                      ? '1454806'
                      : category === 'Dining Room'
                      ? '1350789'
                      : '7640432'
                  }/pexels-photo-${
                    category === 'Living Room'
                      ? '1866149'
                      : category === 'Bedroom'
                      ? '1454806'
                      : category === 'Dining Room'
                      ? '1350789'
                      : '7640432'
                  }.jpeg?auto=compress&cs=tinysrgb&w=600`}
                  alt={category}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 z-20 flex items-end p-6">
                  <h3 className="text-white text-2xl font-bold">{category}</h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
