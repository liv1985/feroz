const Footer = () => {
  return (
    <footer className="bg-brand-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-serif font-bold tracking-widest text-white uppercase mb-4">Feroz Fashion</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Handcrafted boutique latex dresses designed for confidence and elegance. Based in Ontario, Canada.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold tracking-widest text-white uppercase mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/products" className="hover:text-white transition-colors">All Dresses</a></li>
              <li><a href="/products?category=new" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="/products?category=featured" className="hover:text-white transition-colors">Featured Collection</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold tracking-widest text-white uppercase mb-4">Info</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/care" className="hover:text-white transition-colors">Latex Care Guide</a></li>
              <li><a href="/shipping" className="hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-widest">
          <p>© 2026 Feroz Fashion. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <span>Made in Ontario, Canada</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
