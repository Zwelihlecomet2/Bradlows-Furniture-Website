import { Star, Heart, View } from 'lucide-react';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
  onViewDetails?: (productId: string) => void;
}

export default function ProductCard({ product, onViewDetails }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {product.originalPrice && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            SALE
          </div>
        )}

        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <button className="bg-white p-2 rounded-full shadow-lg hover:bg-amber-600 hover:text-white transition-colors">
            <Heart size={18} />
          </button>
          {product.arUrl && (
            <a
              href={product.arUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-600 p-2 rounded-full shadow-lg hover:bg-amber-700 transition-colors relative group/ar"
              title="View in AR"
            >
              <View size={18} className="text-white" />
              <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/ar:opacity-100 transition-opacity pointer-events-none">
                AR View
              </span>
            </a>
          )}
        </div>

        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="bg-white px-6 py-2 rounded-full font-semibold">Out of Stock</span>
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <p className="text-sm text-amber-600 font-medium mb-1">{product.category}</p>
            <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
              {product.name}
            </h3>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={`${
                  i < Math.floor(product.rating)
                    ? 'fill-amber-400 text-amber-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">
            {product.rating} ({product.reviews})
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900">R{product.price}</span>
            {product.originalPrice && (
              <span className="text-lg text-gray-400 line-through">
                R{product.originalPrice}
              </span>
            )}
          </div>
          <button
            onClick={() => onViewDetails?.(product.id)}
            className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 rounded-full font-semibold transition-colors text-sm"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
