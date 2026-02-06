import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[85vh] flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-brand-black/40 z-10" />
        {/* Placeholder image for hero */}
        <div className="w-full h-full bg-[url('/images/hero-image.jpg')] bg-cover bg-center" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <span className="inline-block text-brand-red font-bold tracking-[0.3em] uppercase text-xs mb-4">
            New Collection 2026
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Elegance <br />
            <span className="text-brand-silver">Defined in Latex</span>
          </h1>
          <p className="text-gray-300 text-lg mb-10 max-w-md leading-relaxed">
            Discover our curated selection of handcrafted latex pieces, designed for the bold and the beautiful.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/products" 
              className="bg-white text-brand-black px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-brand-red hover:text-white transition-all flex items-center justify-center group"
            >
              Shop Collection
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
            <Link 
              to="/about" 
              className="border border-white/20 text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition-colors flex items-center justify-center"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative side text */}
      <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 rotate-90 hidden lg:block">
        <span className="text-[120px] font-serif font-bold text-white/5 select-none uppercase tracking-[0.2em] whitespace-nowrap">
          FEROZ FASHION
        </span>
      </div>
    </section>
  );
};

export default Hero;
