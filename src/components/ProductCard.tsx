import { Link } from 'react-router-dom';
import { Product } from '../data/products';
import { Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group">
      <div className="relative aspect-[3/4] overflow-hidden bg-white/5 mb-6">
        <Link to={`/product/${product.slug}`}>
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </Link>
        
        {/* Quick View Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
          <Link 
            to={`/product/${product.slug}`}
            className="w-full bg-white text-brand-black py-3 text-xs font-bold uppercase tracking-widest flex items-center justify-center hover:bg-brand-red hover:text-white transition-colors"
          >
            <Eye className="mr-2" size={16} />
            View Details
          </Link>
        </div>
        
        <div className="absolute top-4 right-4 z-20 flex flex-col space-y-2 items-end">
          {product.compareAtPrice && (
            <span className="bg-brand-red text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
              Sale
            </span>
          )}
          <span className="bg-brand-black/80 backdrop-blur-sm text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
            {product.status === 'limited-edition' ? 'Limited Edition' : 'Handcrafted'}
          </span>
        </div>
      </div>
      
      <div className="flex justify-between items-start">
        <div>
          <Link to={`/product/${product.slug}`}>
            <h3 className="text-lg font-serif font-bold text-white mb-1 hover:text-brand-red transition-colors">
              {product.name}
            </h3>
          </Link>
          <p className="text-gray-500 text-xs uppercase tracking-[0.2em] mb-2">{product.category}</p>
        </div>
        <div className="text-right">
          <p className="text-brand-silver font-bold text-sm tracking-widest">${product.price.toFixed(2)}</p>
          {product.compareAtPrice && (
            <p className="text-gray-600 text-[10px] line-through tracking-widest mt-1">${product.compareAtPrice.toFixed(2)}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
