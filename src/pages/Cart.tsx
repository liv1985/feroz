import { Link } from 'react-router-dom';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, subtotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="pt-32 pb-20 px-4 max-w-3xl mx-auto min-h-screen">
        <h1 className="text-3xl font-serif font-bold text-white mb-12 uppercase tracking-widest text-center">
          Your Shopping Bag
        </h1>
        
        <div className="bg-white/5 p-12 text-center border border-white/10 rounded-sm">
          <ShoppingBag className="mx-auto text-gray-600 mb-6" size={48} />
          <p className="text-gray-300 text-lg mb-8">Your bag is currently empty.</p>
          <Link 
            to="/products" 
            className="inline-block bg-white text-brand-black px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-brand-red hover:text-white transition-all"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto min-h-screen bg-brand-black">
      <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-16 uppercase tracking-widest text-center">
        Shopping Bag
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Cart Items */}
        <div className="lg:col-span-8 space-y-8">
          {cart.map((item) => (
            <div key={item.cartItemId} className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 pb-8 border-b border-white/10">
              <div className="w-32 aspect-[3/4] bg-white/5 overflow-hidden flex-shrink-0 relative group">
                <Link to={`/product/${item.slug}`}>
                  <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </Link>
              </div>
              
              <div className="flex-grow text-center sm:text-left">
                <div className="flex flex-col sm:flex-row justify-between mb-2">
                  <Link to={`/product/${item.slug}`}>
                    <h3 className="text-xl font-serif font-bold text-white hover:text-brand-red transition-colors">{item.name}</h3>
                  </Link>
                  <p className="text-brand-silver font-bold mt-2 sm:mt-0">${item.price.toFixed(2)}</p>
                </div>
                
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-2 mb-6 text-[10px] uppercase tracking-widest">
                  <p className="text-gray-500">{item.category}</p>
                  <span className="text-gray-700">|</span>
                  <p className="text-white">Size: <span className="font-bold">{item.selectedSize}</span></p>
                  <span className="text-gray-700">|</span>
                  <div className="flex items-center">
                    <span className="text-white mr-2">Color:</span>
                    <div 
                      className="w-3 h-3 rounded-full mr-1.5" 
                      style={{ backgroundColor: item.selectedColor.hex }}
                    />
                    <span className="text-white font-bold">{item.selectedColor.name}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-center sm:justify-between">
                  <div className="flex items-center border border-white/20 px-3 py-1 bg-white/5">
                    <button 
                      onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                      className="text-gray-400 hover:text-white p-1 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="mx-4 text-sm font-bold w-4 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                      className="text-gray-400 hover:text-white p-1 transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  
                  <button 
                    onClick={() => removeFromCart(item.cartItemId)}
                    className="text-gray-500 hover:text-brand-red flex items-center text-[10px] uppercase tracking-widest ml-8 transition-colors"
                  >
                    <Trash2 size={14} className="mr-1" />
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-4">
          <div className="bg-white/5 p-8 border border-white/10 sticky top-32">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white mb-8 border-b border-white/10 pb-4">
              Order Summary
            </h4>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-gray-400 text-sm">
                <span>Subtotal</span>
                <span className="text-white">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-400 text-sm">
                <span>Shipping</span>
                <span className="text-brand-red font-bold uppercase text-[10px]">Calculated at checkout</span>
              </div>
              <div className="flex justify-between text-gray-400 text-sm">
                <span>Taxes (HST/GST)</span>
                <span className="text-brand-red font-bold uppercase text-[10px]">Calculated at checkout</span>
              </div>
              <div className="border-t border-white/10 pt-4 flex justify-between text-white font-bold">
                <span className="uppercase tracking-widest text-sm">Total</span>
                <span className="text-xl font-serif">${subtotal.toFixed(2)}</span>
              </div>
            </div>

            <Link 
              to="/checkout" 
              className="w-full bg-white text-brand-black py-4 text-sm font-bold uppercase tracking-widest flex items-center justify-center hover:bg-brand-red hover:text-white transition-all group"
            >
              Checkout Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
            
            <p className="mt-6 text-[10px] text-gray-500 text-center uppercase tracking-widest leading-relaxed">
              Taxes and shipping calculated based on your Ontario, Canada address during checkout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
