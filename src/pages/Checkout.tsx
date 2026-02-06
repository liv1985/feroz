import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useCart } from '../context/CartContext';
import StripePaymentForm from '../components/StripePaymentForm';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_placeholder');

const Checkout = () => {
  const { cart, subtotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="pt-32 pb-20 px-4 text-center min-h-screen bg-brand-black">
        <h1 className="text-2xl font-serif text-white mb-8">Your bag is empty</h1>
        <Link to="/products" className="text-brand-red uppercase tracking-widest text-sm font-bold">
          Go back to collection
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto min-h-screen bg-brand-black">
      <div className="mb-12">
        <Link to="/cart" className="text-gray-500 hover:text-white flex items-center text-[10px] uppercase tracking-widest transition-colors mb-8">
          <ChevronLeft size={14} className="mr-1" />
          Back to Bag
        </Link>
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-white uppercase tracking-widest">
          Checkout
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Payment and Billing */}
        <div className="lg:col-span-7">
          <div className="bg-white/5 p-8 border border-white/10 rounded-sm">
            <h2 className="text-lg font-bold uppercase tracking-widest text-white mb-8 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-red text-white flex items-center justify-center text-xs mr-3">1</span>
              Payment Information
            </h2>
            
            <Elements stripe={stripePromise}>
              <StripePaymentForm />
            </Elements>
          </div>
        </div>

        {/* Order Review */}
        <div className="lg:col-span-5">
          <div className="bg-white/5 p-8 border border-white/10 rounded-sm sticky top-32">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white mb-8 border-b border-white/10 pb-4">
              Review Your Order
            </h2>
            
            <div className="space-y-6 mb-8 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-16 bg-white/5 flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-white text-xs font-bold uppercase tracking-wider">{item.name}</h4>
                      <p className="text-gray-500 text-[10px]">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="text-white text-xs">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>

            <div className="space-y-3 pt-6 border-t border-white/10">
              <div className="flex justify-between text-gray-400 text-xs uppercase tracking-widest">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-400 text-xs uppercase tracking-widest">
                <span>Shipping (Ontario)</span>
                <span className="text-white">Free</span>
              </div>
              <div className="flex justify-between text-gray-400 text-xs uppercase tracking-widest">
                <span>HST (13%)</span>
                <span>${(subtotal * 0.13).toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-white font-bold text-lg pt-4">
                <span className="uppercase tracking-widest text-sm">Total</span>
                <span className="font-serif">${(subtotal * 1.13).toFixed(2)}</span>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/5">
              <p className="text-[10px] text-gray-500 uppercase tracking-widest leading-relaxed">
                Handcrafted in Ontario. Ships within 7-14 business days.
                Your payment is secure and encrypted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
