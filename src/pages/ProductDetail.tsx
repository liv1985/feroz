import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ChevronLeft, ShoppingBag, Check, ShieldCheck, Truck, RotateCcw, AlertTriangle } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<{ name: string; hex: string } | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  const product = products.find((p) => p.slug === slug);

  useEffect(() => {
    if (!product) {
      navigate('/products');
    } else if (product.colors.length > 0) {
      setSelectedColor(product.colors[0]);
    }
  }, [product, navigate]);

  if (!product) return null;

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) return;
    setIsAdding(true);
    addToCart(product, selectedSize, selectedColor);
    setTimeout(() => setIsAdding(false), 2000);
  };

  const isOutOfStock = (size: string) => product.inventory[size] === 0;
  const isLowStock = (size: string) => product.inventory[size] > 0 && product.inventory[size] < 3;

  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/products" 
          className="inline-flex items-center text-gray-500 hover:text-white transition-colors uppercase text-[10px] font-bold tracking-[0.2em] mb-12"
        >
          <ChevronLeft size={16} className="mr-2" />
          Back to Collection
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Image Gallery */}
          <div className="lg:col-span-7 space-y-4">
            <div className="aspect-[3/4] overflow-hidden bg-white/5 relative">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name} 
                className="w-full h-full object-cover transition-all duration-700"
              />
              {product.status !== 'standard' && (
                <span className="absolute top-6 left-6 bg-brand-red text-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest z-10">
                  {product.status === 'limited-edition' ? 'Limited Edition' : product.status}
                </span>
              )}
            </div>
            
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={cn(
                      "aspect-square overflow-hidden bg-white/5 border-2 transition-all",
                      selectedImage === idx ? "border-brand-red" : "border-transparent opacity-60 hover:opacity-100"
                    )}
                  >
                    <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <div className="flex justify-between items-start mb-4">
                <p className="text-brand-red font-bold uppercase tracking-[0.3em] text-[10px]">
                  {product.category}
                </p>
                <p className="text-gray-600 text-[9px] uppercase tracking-widest font-mono">
                  SKU: {product.sku}
                </p>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold uppercase tracking-wider mb-6">
                {product.name}
              </h1>
              <div className="flex items-baseline space-x-4">
                <p className="text-2xl font-bold tracking-widest text-brand-silver">
                  ${product.price.toFixed(2)}
                </p>
                {product.compareAtPrice && (
                  <p className="text-lg text-gray-600 line-through tracking-widest">
                    ${product.compareAtPrice.toFixed(2)}
                  </p>
                )}
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed text-sm">
              {product.description}
            </p>

            {/* Color Selection */}
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-white">Color: {selectedColor?.name}</h3>
              </div>
              <div className="flex space-x-4">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={cn(
                      "w-10 h-10 rounded-full border-2 transition-all p-1",
                      selectedColor?.name === color.name ? "border-brand-red" : "border-transparent"
                    )}
                    title={color.name}
                  >
                    <div 
                      className="w-full h-full rounded-full" 
                      style={{ backgroundColor: color.hex }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-white">Select Size</h3>
                <button className="text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors underline underline-offset-4">
                  Size Guide
                </button>
              </div>
              <div className="grid grid-cols-5 gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    disabled={isOutOfStock(size)}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "py-4 text-xs font-bold uppercase tracking-widest transition-all border",
                      isOutOfStock(size) 
                        ? "border-white/5 text-gray-700 cursor-not-allowed" 
                        : selectedSize === size
                          ? "border-white bg-white text-brand-black"
                          : "border-white/20 text-white hover:border-white"
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {selectedSize && isLowStock(selectedSize) && (
                <p className="flex items-center text-brand-red text-[10px] font-bold uppercase tracking-widest">
                  <AlertTriangle size={14} className="mr-2" />
                  Limited Availability: Only {product.inventory[selectedSize]} left in stock
                </p>
              )}
            </div>

            {/* Add to Bag */}
            <button
              onClick={handleAddToCart}
              disabled={!selectedSize || !selectedColor || isAdding}
              className={cn(
                "w-full py-5 text-sm font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center",
                (!selectedSize || !selectedColor)
                  ? "bg-gray-800 text-gray-500 cursor-not-allowed" 
                  : isAdding
                    ? "bg-green-600 text-white"
                    : "bg-white text-brand-black hover:bg-brand-red hover:text-white"
              )}
            >
              {isAdding ? (
                <>
                  <Check className="mr-2" size={18} />
                  Added to Bag
                </>
              ) : (
                <>
                  <ShoppingBag className="mr-2" size={18} />
                  {selectedSize ? 'Add to Bag' : 'Select a Size'}
                </>
              )}
            </button>

            {/* Product Details Accrodion (Simplified) */}
            <div className="pt-12 border-t border-white/10 space-y-10">
              <div className="space-y-4">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-white">Details & Craftsmanship</h4>
                <ul className="grid grid-cols-1 gap-3">
                  {product.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-xs text-gray-400">
                      <span className="w-1.5 h-1.5 bg-brand-red rounded-full mt-1.5 mr-3 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-white">Material & Care</h4>
                <p className="text-xs text-gray-400 leading-relaxed italic">
                  Material: {product.material}
                </p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {product.careInstructions}
                </p>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-1 gap-6 pt-6 border-t border-white/5">
                <div className="flex items-center space-x-4">
                  <ShieldCheck className="text-brand-silver" size={20} />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white">Secure Transaction</p>
                    <p className="text-[9px] text-gray-500 uppercase tracking-widest mt-1">PCI Compliant Payments</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Truck className="text-brand-silver" size={20} />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white">Express Shipping</p>
                    <p className="text-[9px] text-gray-500 uppercase tracking-widest mt-1">7-14 Business Days Delivery</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <RotateCcw className="text-brand-silver" size={20} />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white">Luxury Returns</p>
                    <p className="text-[9px] text-gray-500 uppercase tracking-widest mt-1">14 Day Return Policy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
