import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';

const StripePaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { clearCart, subtotal } = useCart();
  const navigate = useNavigate();
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    setErrorMessage(null);

    // In a real application, you would create a PaymentIntent on your server
    // and then confirm it here. For this demo, we'll simulate success.
    
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      // Redirect to a success page (or home for now)
      alert('Payment Successful! Thank you for your order with Feroz Fashion.');
      navigate('/');
    }, 2000);
  };

  const cardElementOptions = {
    style: {
      base: {
        color: '#ffffff',
        fontFamily: 'Inter, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#6b7280',
        },
      },
      invalid: {
        color: '#ef4444',
        iconColor: '#ef4444',
      },
    },
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-6">
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">
            Card Details
          </label>
          <div className="p-4 border border-white/10 bg-black/20 rounded-sm">
            <CardElement options={cardElementOptions} />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">
              Full Name
            </label>
            <input 
              type="text" 
              required
              className="w-full bg-black/20 border border-white/10 p-4 text-sm text-white focus:outline-none focus:border-white transition-colors"
              placeholder="As it appears on card"
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">
              Email Address
            </label>
            <input 
              type="email" 
              required
              className="w-full bg-black/20 border border-white/10 p-4 text-sm text-white focus:outline-none focus:border-white transition-colors"
              placeholder="for order confirmation"
            />
          </div>
        </div>

        <div>
          <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">
            Shipping Address (Ontario Only)
          </label>
          <textarea 
            required
            rows={3}
            className="w-full bg-black/20 border border-white/10 p-4 text-sm text-white focus:outline-none focus:border-white transition-colors"
            placeholder="Enter your full shipping address in Ontario"
          ></textarea>
        </div>
      </div>

      {errorMessage && (
        <div className="text-brand-red text-xs uppercase tracking-widest font-bold">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full bg-white text-brand-black py-4 text-sm font-bold uppercase tracking-widest flex items-center justify-center hover:bg-brand-red hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
      >
        {isProcessing ? (
          <span className="flex items-center italic">
            Processing Transaction...
          </span>
        ) : (
          <span className="flex items-center">
            <Lock className="mr-2" size={16} />
            Pay ${(subtotal * 1.13).toFixed(2)} CAD
          </span>
        )}
      </button>

      <div className="flex items-center justify-center text-[10px] text-gray-500 uppercase tracking-widest space-x-4">
        <span>Secure Payment</span>
        <span>•</span>
        <span>Powered by Stripe</span>
      </div>
    </form>
  );
};

export default StripePaymentForm;
