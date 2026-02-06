import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Hero />
      
      {/* Featured Section */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Featured Collection</h2>
              <div className="h-1 w-20 bg-brand-red"></div>
            </div>
            <Link to="/products" className="text-gray-400 hover:text-white transition-colors uppercase text-sm tracking-widest mt-6 md:mt-0">
              View All Products
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mock Products for Home */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-900 mb-6">
                  <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-brand-black/0 transition-colors z-10" />
                  <img 
                    src={`https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=600&h=800&sig=${i}`} 
                    alt="Latex Dress" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-white text-brand-black px-4 py-2 text-xs font-bold uppercase tracking-widest">
                      Quick View
                    </button>
                  </div>
                </div>
                <h3 className="text-lg font-serif font-bold text-white mb-1 group-hover:text-brand-red transition-colors">Nocturnal Elegance Dress</h3>
                <p className="text-gray-400 text-sm mb-2 uppercase tracking-widest">Classic Black</p>
                <p className="text-brand-silver font-bold">$349.00</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-4">Handcrafted</h4>
              <p className="text-gray-400 text-sm">Every piece is made by hand with precision in Ontario.</p>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-4">Premium Material</h4>
              <p className="text-gray-400 text-sm">We use only the highest grade natural latex.</p>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-4">Custom Fit</h4>
              <p className="text-gray-400 text-sm">Available in standard sizes or made-to-measure.</p>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-4">Secure Checkout</h4>
              <p className="text-gray-400 text-sm">Powered by Stripe for safe and easy payments.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
