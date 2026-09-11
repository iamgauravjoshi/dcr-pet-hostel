import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const PeaceOfMind = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-secondary-light rounded-[4rem] p-8 md:p-20 relative overflow-hidden flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 z-10">
            <h2 className="font-display text-4xl md:text-6xl font-bold text-secondary-dark mb-8 leading-[1.1]">
              You Enjoy Your Trip. <br />
              <span className="text-secondary italic">We'll Take Care of the Tail Wags.</span>
            </h2>
            
            <div className="space-y-4 mb-10">
              {[
                'Regular Photo & Video Updates',
                '24/7 Caring Supervision',
                'Clean & Comfortable Environment',
                'Routine-Based Feeding & Care',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-secondary-dark font-semibold">
                  <CheckCircle2 className="text-secondary" />
                  {item}
                </div>
              ))}
            </div>
            
            <a 
              href="#booking"
              className="bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-secondary/20 inline-flex items-center gap-2"
            >
              Plan Your Pet's Stay
              <ArrowRight size={20} />
            </a>
          </div>
          
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?auto=format&fit=crop&q=80&w=800&h=800" 
                alt="Happy pet" 
                className="w-full h-auto"
              />
            </motion.div>
            
            {/* Decorative blobs */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeaceOfMind;
