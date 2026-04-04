import { Mail } from 'lucide-react';
import React, { useState } from 'react';

const ComingSoon = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <main className="min-h-screen bg-brand-black flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Decorative background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-0">
        <span className="text-[120px] md:text-[200px] font-serif font-bold text-white/2 select-none uppercase tracking-[0.2em] whitespace-nowrap">
          FEROZ FASHION
        </span>
      </div>

      <div className="relative z-10 max-w-4xl w-full text-center space-y-12">
        <div className="space-y-4">
          <span className="inline-block text-brand-red font-bold tracking-[0.5em] uppercase text-sm mb-2 animate-pulse">
            Boutique Latex • Coming Soon
          </span>
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-white leading-tight">
            Elegance <br />
            <span className="text-brand-silver">Is Coming</span>
          </h1>
          <div className="h-1 w-24 bg-brand-red mx-auto mt-6" />
        </div>

        <p className="text-gray-300 text-lg md:text-xl max-w-xl mx-auto leading-relaxed font-sans">
          We are currently crafting an exclusive collection of high-fashion latex pieces. 
          Be the first to experience the fusion of luxury and edge.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto w-full group">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-brand-silver transition-colors" size={18} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email for early access"
                  required
                  className="w-full bg-white/5 border border-white/10 text-white pl-12 pr-4 py-4 focus:outline-none focus:border-brand-red/50 transition-all font-sans"
                />
              </div>
              <button
                type="submit"
                className="bg-white text-brand-black px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-brand-red hover:text-white transition-all whitespace-nowrap"
              >
                Notify Me
              </button>
            </div>
          </form>
        ) : (
          <div className="bg-white/5 border border-brand-red/30 p-8 max-w-md mx-auto animate-in fade-in zoom-in duration-500">
            <h3 className="text-brand-silver font-serif text-2xl font-bold mb-2 uppercase tracking-widest">Thank You</h3>
            <p className="text-gray-400 font-sans">We'll invite you to our exclusive preview soon.</p>
          </div>
        )}

        <div className="flex justify-center space-x-8 pt-8">
          <span className="text-white/30 text-xs font-bold uppercase tracking-[0.3em] font-sans">London</span>
          <span className="text-white/30 text-xs font-bold uppercase tracking-[0.3em] font-sans">Paris</span>
          <span className="text-white/30 text-xs font-bold uppercase tracking-[0.3em] font-sans">New York</span>
        </div>
      </div>

      {/* Footer-like credit */}
      <div className="absolute bottom-8 left-0 right-0 text-center z-10">
        <p className="text-white/20 text-[10px] uppercase tracking-[0.5em] font-sans">
          &copy; 2026 Feroz Fashion. All Rights Reserved.
        </p>
      </div>
    </main>
  );
};

export default ComingSoon;
