import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className="bg-brand-black border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-serif font-bold tracking-widest text-white uppercase">
              Feroz Fashion
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-10">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors uppercase text-sm tracking-widest">Home</Link>
            <Link to="/products" className="text-gray-300 hover:text-white transition-colors uppercase text-sm tracking-widest">Collection</Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors uppercase text-sm tracking-widest">Contact</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/cart" className="text-gray-300 hover:text-white p-2 relative">
              <ShoppingCart size={24} />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-brand-red text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
            <button 
              className="md:hidden text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-brand-black border-t border-white/10 px-4 pt-2 pb-6 space-y-4">
          <Link to="/" className="block text-gray-300 hover:text-white uppercase text-sm tracking-widest py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/products" className="block text-gray-300 hover:text-white uppercase text-sm tracking-widest py-2" onClick={() => setIsMenuOpen(false)}>Collection</Link>
          <Link to="/contact" className="block text-gray-300 hover:text-white uppercase text-sm tracking-widest py-2" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
