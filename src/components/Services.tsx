import React from 'react';
import { motion } from 'framer-motion';
import { Home, Sun, Play, Utensils, Footprints, Bath } from 'lucide-react';

const services = [
  {
    title: 'Pet Boarding',
    description: 'A comfortable place for pets to stay while their family is travelling.',
    icon: <Home className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=600&h=400',
    color: 'bg-orange-50',
    iconColor: 'text-orange-500',
  },
  {
    title: 'Day Boarding',
    description: 'Safe daytime care while pet parents are at work or occupied.',
    icon: <Sun className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=600&h=400',
    color: 'bg-emerald-50',
    iconColor: 'text-emerald-500',
  },
  {
    title: 'Play & Social Time',
    description: 'Supervised activities and interaction designed to keep pets active.',
    icon: <Play className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?auto=format&fit=crop&q=80&w=600&h=400',
    color: 'bg-blue-50',
    iconColor: 'text-blue-500',
  },
  {
    title: 'Feeding & Routine',
    description: 'Meals and routines followed according to your instructions.',
    icon: <Utensils className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1589924691106-073b19f56582?auto=format&fit=crop&q=80&w=600&h=400',
    color: 'bg-purple-50',
    iconColor: 'text-purple-500',
  },
  {
    title: 'Daily Walks',
    description: 'Regular exercise and outdoor activity where appropriate.',
    icon: <Footprints className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80&w=600&h=400',
    color: 'bg-yellow-50',
    iconColor: 'text-yellow-600',
  },
  {
    title: 'Basic Grooming',
    description: 'Keep your pet fresh and clean with our basic hygiene care.',
    icon: <Bath className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=600&h=400',
    color: 'bg-pink-50',
    iconColor: 'text-pink-500',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-brand-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-widest text-sm mb-4"
          >
            Our Services
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-slate-900"
          >
            Everything Your Pet Needs <br className="hidden md:block" />
            While You're Away
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute top-6 right-6 ${service.color} ${service.iconColor} p-4 rounded-2xl shadow-lg`}>
                  {service.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <a href="#contact" className="text-primary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More
                  <Play size={14} className="fill-current" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
