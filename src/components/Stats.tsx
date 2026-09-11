import React from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, MapPin, Users } from 'lucide-react';

const stats = [
  {
    value: '4.8',
    suffix: '★',
    label: 'Google Rating',
    icon: <Star className="text-yellow-400 fill-current" />,
  },
  {
    value: '1000+',
    suffix: '',
    label: 'Happy Pets',
    subLabel: 'Cared For With Love',
    icon: <Heart className="text-primary fill-current" />,
  },
  {
    value: 'Jaipur',
    suffix: '',
    label: 'Local Pet Care',
    subLabel: 'Heart of the City',
    icon: <MapPin className="text-secondary fill-current" />,
  },
  {
    value: '24/7',
    suffix: '',
    label: 'Supervision',
    subLabel: 'Always Watching',
    icon: <Users className="text-blue-500 fill-current" />,
  },
];

const Stats = () => {
  return (
    <section className="py-20 bg-secondary text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full" />
        <div className="absolute bottom-10 right-20 w-48 h-48 border-4 border-white rounded-[3rem] rotate-12" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-3xl mb-6 backdrop-blur-sm">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-display font-bold mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-lg font-bold text-emerald-100">{stat.label}</div>
              {stat.subLabel && <div className="text-sm text-emerald-200/60 font-medium uppercase tracking-wider">{stat.subLabel}</div>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
