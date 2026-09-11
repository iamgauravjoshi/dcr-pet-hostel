import React from 'react';
import { motion } from 'framer-motion';

const Intro = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1541591044564-37f3ef9c978a?auto=format&fit=crop&q=80&w=800&h=800" 
                alt="Caretaker with dog" 
                className="rounded-[2.5rem] shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-secondary/10 rounded-full -z-0" />
              <div className="absolute -top-8 -left-8 w-48 h-48 bg-brand-100 rounded-full -z-0" />
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">More Than Just Boarding</h4>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Because Leaving Your Pet Behind <span className="text-secondary italic">Shouldn't Feel Difficult.</span>
              </h2>
              
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  We know that leaving your furry family member behind can be stressful. You worry if they'll eat, if they'll be lonely, or if they'll get the attention they deserve.
                </p>
                <p>
                  At DCR Pet Hostel, we've created a caring environment designed to make their stay as comfortable and stress-free as possible. It's not just a kennel — it's a second home where every tail wag matters.
                </p>
                <p className="font-semibold text-slate-900">
                  Our team treats every guest with the same love and care we give our own pets.
                </p>
              </div>

              <div className="mt-10 flex gap-8">
                <div>
                  <div className="text-3xl font-display font-bold text-primary mb-1">24/7</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider font-bold">Supervision</div>
                </div>
                <div className="w-px h-12 bg-slate-200" />
                <div>
                  <div className="text-3xl font-display font-bold text-secondary mb-1">100%</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider font-bold">Personalized Care</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
