import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-[4rem] overflow-hidden bg-slate-900 aspect-[21/9] min-h-[400px] flex items-center">
          <img 
            src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=1600&h=800" 
            alt="Happy pet" 
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
          
          <div className="relative z-10 p-8 md:p-16 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Going Away? <br />
                <span className="text-primary italic">Give Them a Stay They'll Love.</span>
              </h2>
              <p className="text-white/80 text-lg mb-10 leading-relaxed">
                Tell us about your pet and we'll help you plan their perfect stay in Jaipur. Peace of mind for you, a vacation for them.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#booking"
                  className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2"
                >
                  Book a Stay
                  <ArrowRight size={20} />
                </a>
                <a
                  href="https://wa.me/919999999999"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="text-green-400" />
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
