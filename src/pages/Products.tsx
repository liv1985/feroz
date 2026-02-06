import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Products = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16 text-center">
          <span className="text-brand-red font-bold tracking-[0.4em] uppercase text-xs mb-4 block">
            The 2026 Collection
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white uppercase tracking-widest">
            The Catalog
          </h1>
          <div className="w-24 h-1 bg-brand-red mx-auto mt-8"></div>
        </header>

        {/* Filters Placeholder */}
        <div className="flex flex-wrap items-center justify-between mb-12 py-4 border-y border-white/10">
          <div className="flex space-x-8 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
            <button className="text-white">All Items</button>
            <button className="hover:text-white transition-colors">Dresses</button>
            <button className="hover:text-white transition-colors">Bodysuits</button>
            <button className="hover:text-white transition-colors">Gowns</button>
          </div>
          <div className="mt-4 md:mt-0">
            <select className="bg-transparent text-[10px] font-bold uppercase tracking-[0.2em] text-white border-none focus:ring-0 cursor-pointer">
              <option className="bg-brand-black">Sort: Featured</option>
              <option className="bg-brand-black">Price: Low to High</option>
              <option className="bg-brand-black">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* Empty state if needed */}
        {products.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 uppercase tracking-widest">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
