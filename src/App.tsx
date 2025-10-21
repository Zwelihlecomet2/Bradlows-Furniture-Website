import { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Categories from './pages/Categories';
import ProductDetail from './pages/ProductDetail';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  const handleNavigate = (page: string, productId?: string) => {
    setCurrentPage(page);
    if (productId) {
      setSelectedProductId(productId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={handleNavigate} currentPage={currentPage} />

      {currentPage === 'home' && <Home onNavigate={handleNavigate} />}
      {currentPage === 'shop' && <Shop onNavigate={handleNavigate} />}
      {currentPage === 'categories' && <Categories onNavigate={handleNavigate} />}
      {currentPage === 'product' && selectedProductId && (
        <ProductDetail productId={selectedProductId} onNavigate={handleNavigate} />
      )}
    </div>
  );
}

export default App;
