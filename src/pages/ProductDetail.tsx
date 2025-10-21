import { useState } from 'react';
import { Star, Heart, Share2, Truck, RotateCcw, Shield, View, ChevronLeft, Check } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

interface ProductDetailProps {
  productId: string;
  onNavigate: (page: string, productId?: string) => void;
}

export default function ProductDetail({ productId, onNavigate }: ProductDetailProps) {
  const product = products.find((p) => p.id === productId);
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
          <button
            onClick={() => onNavigate('shop')}
            className="text-amber-600 font-semibold hover:underline"
          >
            Return to Shop
          </button>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => onNavigate('shop')}
          className="flex items-center gap-2 text-gray-600 hover:text-amber-600 transition-colors mb-8"
        >
          <ChevronLeft size={20} />
          <span className="font-medium">Back to Shop</span>
        </button>

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-12">
          <div className="grid lg:grid-cols-2 gap-12 p-8 lg:p-12">
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.originalPrice && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full font-semibold">
                    SALE
                  </div>
                )}
                <a href='https://cuttingedgetech-chair-3.netlify.app/' target='_blank' className="absolute top-4 right-4 bg-amber-600 text-white p-3 rounded-full shadow-lg hover:bg-amber-700 transition-colors group">
                  <View size={24} />
                  <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    View in AR
                  </span>
                </a>
              </div>

              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <button
                    key={i}
                    className="aspect-square rounded-lg overflow-hidden border-2 border-transparent hover:border-amber-600 transition-colors"
                  >
                    <img
                      src={product.image}
                      alt={`${product.name} view ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-amber-600 font-semibold mb-2">{product.category}</p>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={`${
                          i < Math.floor(product.rating)
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                <div className="flex items-baseline gap-4 mb-6">
                  <span className="text-4xl font-bold text-gray-900">R{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-2xl text-gray-400 line-through">
                      R{product.originalPrice}
                    </span>
                  )}
                  {product.originalPrice && (
                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full font-semibold">
                      Save R{product.originalPrice - product.price}
                    </span>
                  )}
                </div>

                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {product.description}
                </p>

                {product.inStock ? (
                  <div className="flex items-center gap-2 text-green-600 mb-6">
                    <Check size={20} />
                    <span className="font-semibold">In Stock - Ships in 2-3 days</span>
                  </div>
                ) : (
                  <div className="text-red-600 font-semibold mb-6">Out of Stock</div>
                )}
              </div>

              {product.colors && product.colors.length > 0 && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Color: <span className="text-amber-600">{selectedColor}</span>
                  </h3>
                  <div className="flex gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-4 py-2 rounded-lg border-2 transition-colors ${
                          selectedColor === color
                            ? 'border-amber-600 bg-amber-50'
                            : 'border-gray-300 hover:border-amber-600'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {product.dimensions && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Dimensions</h3>
                  <p className="text-gray-600">
                    {product.dimensions.width}" W × {product.dimensions.height}" H ×{' '}
                    {product.dimensions.depth}" D
                  </p>
                </div>
              )}

              <div className="flex items-center gap-4">
                <div className="flex items-center border-2 border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-3 hover:bg-gray-100 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-6 py-3 font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-3 hover:bg-gray-100 transition-colors"
                  >
                    +
                  </button>
                </div>

                <button
                  disabled={!product.inStock}
                  className="flex-1 bg-amber-600 hover:bg-amber-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  Add to Cart
                </button>

                <button className="p-4 border-2 border-gray-300 rounded-lg hover:border-amber-600 hover:text-amber-600 transition-colors">
                  <Heart size={24} />
                </button>

                <button className="p-4 border-2 border-gray-300 rounded-lg hover:border-amber-600 hover:text-amber-600 transition-colors">
                  <Share2 size={24} />
                </button>
              </div>

              <div className="border-t pt-6 space-y-4">
                <div className="flex items-center gap-4 text-gray-700">
                  <Truck className="text-amber-600" size={24} />
                  <div>
                    <p className="font-semibold">Free Shipping</p>
                    <p className="text-sm text-gray-600">On orders over R500</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-gray-700">
                  <RotateCcw className="text-amber-600" size={24} />
                  <div>
                    <p className="font-semibold">30 Day Returns</p>
                    <p className="text-sm text-gray-600">Hassle-free returns</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-gray-700">
                  <Shield className="text-amber-600" size={24} />
                  <div>
                    <p className="font-semibold">2 Year Warranty</p>
                    <p className="text-sm text-gray-600">Quality guaranteed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t">
            <div className="flex border-b">
              {['description', 'specifications', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 px-6 py-4 font-semibold capitalize transition-colors ${
                    activeTab === tab
                      ? 'text-amber-600 border-b-2 border-amber-600'
                      : 'text-gray-600 hover:text-amber-600'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="p-8 lg:p-12">
              {activeTab === 'description' && (
                <div className="prose max-w-none">
                  <h3 className="text-2xl font-bold mb-4">Product Description</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Our furniture is crafted with meticulous attention to detail, using only the finest
                    materials and time-honored techniques. Each piece is designed to provide both
                    exceptional comfort and timeless style that will enhance your home for years to come.
                  </p>
                </div>
              )}

              {activeTab === 'specifications' && (
                <div>
                  <h3 className="text-2xl font-bold mb-6">Specifications</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-600 mb-2">
                        <span className="font-semibold text-gray-900">Category:</span> {product.category}
                      </p>
                      <p className="text-gray-600 mb-2">
                        <span className="font-semibold text-gray-900">SKU:</span> FRN-{product.id}
                      </p>
                      {product.dimensions && (
                        <p className="text-gray-600 mb-2">
                          <span className="font-semibold text-gray-900">Dimensions:</span>{' '}
                          {product.dimensions.width}" × {product.dimensions.height}" ×{' '}
                          {product.dimensions.depth}"
                        </p>
                      )}
                    </div>
                    <div>
                      <p className="text-gray-600 mb-2">
                        <span className="font-semibold text-gray-900">Material:</span> Premium Quality
                      </p>
                      <p className="text-gray-600 mb-2">
                        <span className="font-semibold text-gray-900">Warranty:</span> 2 Years
                      </p>
                      <p className="text-gray-600 mb-2">
                        <span className="font-semibold text-gray-900">Assembly:</span> Required
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div>
                  <h3 className="text-2xl font-bold mb-6">Customer Reviews</h3>
                  <div className="space-y-6">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="border-b pb-6">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="flex">
                            {[...Array(5)].map((_, j) => (
                              <Star key={j} size={16} className="fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                          <span className="font-semibold">Verified Purchase</span>
                        </div>
                        <p className="font-semibold text-gray-900 mb-2">Amazing quality!</p>
                        <p className="text-gray-600">
                          This furniture exceeded my expectations. The quality is outstanding and it looks
                          even better in person. Highly recommend!
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  product={relatedProduct}
                  onViewDetails={(id) => onNavigate('product', id)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
