import { Mail, MapPin, Phone, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16 text-center">
          <span className="text-brand-red font-bold tracking-[0.4em] uppercase text-xs mb-4 block">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white uppercase tracking-widest">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-brand-red mx-auto mt-8"></div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-serif font-bold text-white mb-6 uppercase tracking-wider">Our Studio</h2>
              <p className="text-gray-400 max-w-md leading-relaxed">
                Visit our boutique studio in the heart of Ontario for custom fittings and consultations. 
                By appointment only.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white/5 p-3 rounded-sm text-brand-red">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-1">Address</h4>
                  <p className="text-gray-400 text-sm">123 Fashion District, Toronto, ON, Canada</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white/5 p-3 rounded-sm text-brand-red">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-1">Email</h4>
                  <p className="text-gray-400 text-sm">studio@ferozfashion.ca</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white/5 p-3 rounded-sm text-brand-red">
                  <Instagram size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-1">Instagram</h4>
                  <p className="text-gray-400 text-sm">@ferozfashion_official</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 p-10 border border-white/10 rounded-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-black/40 border border-white/10 p-4 text-sm text-white focus:outline-none focus:border-white transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-black/40 border border-white/10 p-4 text-sm text-white focus:outline-none focus:border-white transition-colors"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Subject</label>
                <select className="w-full bg-black/40 border border-white/10 p-4 text-sm text-white focus:outline-none focus:border-white transition-colors appearance-none">
                  <option className="bg-brand-black">General Inquiry</option>
                  <option className="bg-brand-black">Custom Fitting</option>
                  <option className="bg-brand-black">Order Status</option>
                  <option className="bg-brand-black">Wholesale</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Message</label>
                <textarea 
                  rows={5}
                  className="w-full bg-black/40 border border-white/10 p-4 text-sm text-white focus:outline-none focus:border-white transition-colors"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button className="w-full bg-white text-brand-black py-4 text-sm font-bold uppercase tracking-widest hover:bg-brand-red hover:text-white transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
