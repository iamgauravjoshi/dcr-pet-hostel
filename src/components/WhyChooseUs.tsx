import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, UserCheck, Camera, Activity, Utensils, Moon, HeartPulse } from 'lucide-react';

const benefits = [
  {
    title: 'Safe & Secure Stay',
    desc: 'A monitored and pet-friendly environment for your peace of mind.',
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    title: 'Clean & Hygienic',
    desc: 'Comfortable spaces maintained with cleanliness as a top priority.',
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    title: 'Personal Attention',
    desc: "Care adapted to each pet's unique personality and daily routine.",
    icon: <UserCheck className="w-6 h-6" />,
  },
  {
    title: 'Photo & Video Updates',
    desc: 'Stay connected with regular media updates of your pet’s stay.',
    icon: <Camera className="w-6 h-6" />,
  },
  {
    title: 'Daily Activity',
    desc: 'Interactive playtime, outdoor exercise, and social engagement.',
    icon: <Activity className="w-6 h-6" />,
  },
  {
    title: 'Routine Feeding',
    desc: 'Following your specific instructions for meals and nutrition.',
    icon: <Utensils className="w-6 h-6" />,
  },
  {
    title: 'Comfortable Rest',
    desc: 'Quiet areas for pets to relax and recharge after a busy day.',
    icon: <Moon className="w-6 h-6" />,
  },
  {
    title: 'Loving Care',
    desc: 'A dedicated team that treats your pets like their own family.',
    icon: <HeartPulse className="w-6 h-6" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-dcr" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-end mb-16">
          <div className="lg:w-2/3">
            <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Why Pet Parents Choose DCR</h4>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Their Comfort. <br />
              <span className="text-primary italic">Your Peace of Mind.</span>
            </h2>
          </div>
          <div className="lg:w-1/3 text-slate-600 lg:text-right pb-2">
            We focus on the small details that make a big difference in your pet's happiness.
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-8 rounded-[2rem] border border-slate-100 bg-brand-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm mb-6">
                {benefit.icon}
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
