import { ShoppingCart, Search, User, Menu } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function Header({ onNavigate, currentPage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full py-4 px-6 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Bradlows</span>
          </button>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onNavigate('home')}
              className={`font-medium transition-colors ${
                currentPage === 'home'
                  ? 'text-amber-600'
                  : 'text-gray-700 hover:text-amber-600'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('shop')}
              className={`font-medium transition-colors ${
                currentPage === 'shop'
                  ? 'text-amber-600'
                  : 'text-gray-700 hover:text-amber-600'
              }`}
            >
              Shop
            </button>
            <button
              onClick={() => onNavigate('categories')}
              className={`font-medium transition-colors ${
                currentPage === 'categories'
                  ? 'text-amber-600'
                  : 'text-gray-700 hover:text-amber-600'
              }`}
            >
              Categories
            </button>
            <button className="font-medium text-gray-700 hover:text-amber-600 transition-colors">
              About
            </button>
            <button className="font-medium text-gray-700 hover:text-amber-600 transition-colors">
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-amber-600 transition-colors">
              <Search size={22} />
            </button>
            <button className="p-2 text-gray-700 hover:text-amber-600 transition-colors">
              <User size={22} />
            </button>
            <button className="p-2 text-gray-700 hover:text-amber-600 transition-colors relative">
              <ShoppingCart size={22} />
              <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>
            <button
              className="md:hidden p-2 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>

        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">Bradlows</h1>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => {
                  onNavigate('home');
                  setMobileMenuOpen(false);
                }}
                className={`font-medium text-left ${
                  currentPage === 'home' ? 'text-amber-600' : 'text-gray-700'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => {
                  onNavigate('shop');
                  setMobileMenuOpen(false);
                }}
                className={`font-medium text-left ${
                  currentPage === 'shop' ? 'text-amber-600' : 'text-gray-700'
                }`}
              >
                Shop
              </button>
              <button
                onClick={() => {
                  onNavigate('categories');
                  setMobileMenuOpen(false);
                }}
                className={`font-medium text-left ${
                  currentPage === 'categories' ? 'text-amber-600' : 'text-gray-700'
                }`}
              >
                Categories
              </button>
              <button className="font-medium text-gray-700 text-left">About</button>
              <button className="font-medium text-gray-700 text-left">Contact</button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
