import React from 'react';
import { motion } from 'framer-motion';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=800&h=600',
    title: 'Playful Moments',
    size: 'col-span-1 row-span-1',
  },
  {
    url: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&q=80&w=800&h=1200',
    title: 'Happy Outdoor Walks',
    size: 'col-span-1 row-span-2',
  },
  {
    url: 'https://images.unsplash.com/photo-1541591044564-37f3ef9c978a?auto=format&fit=crop&q=80&w=800&h=600',
    title: 'Personalized Care',
    size: 'col-span-1 row-span-1',
  },
  {
    url: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800&h=600',
    title: 'Rest & Relaxation',
    size: 'col-span-1 row-span-1',
  },
  {
    url: 'https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=800&h=600',
    title: 'Social Interaction',
    size: 'col-span-1 row-span-1',
  },
  {
    url: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800&h=1200',
    title: 'Joyful Faces',
    size: 'col-span-1 row-span-2',
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-brand-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Life at DCR</h4>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">Happy Faces & Tail Wags</h2>
          <p className="text-slate-600 max-w-lg mx-auto">
            A glimpse into the daily joy and comfort your pet experiences with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-[2.5rem] shadow-sm ${image.size}`}
            >
              <img 
                src={image.url} 
                alt={image.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <h3 className="text-white font-display text-xl font-bold">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-slate-600 font-bold hover:text-primary transition-colors"
          >
            Follow us on Instagram for daily updates
            <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
