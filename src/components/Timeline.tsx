import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Utensils, Play, Moon, Coffee, Footprints } from 'lucide-react';

const schedule = [
  {
    time: 'Morning',
    activity: 'Wake Up & Morning Walk',
    desc: 'Starting the day with fresh air and exercise in our secure outdoor space.',
    icon: <Sun className="text-orange-500" />,
  },
  {
    time: 'Breakfast',
    activity: 'Meal According to Routine',
    desc: 'Nutritious breakfast served exactly as per your specific instructions.',
    icon: <Utensils className="text-emerald-500" />,
  },
  {
    time: 'Playtime',
    activity: 'Exercise, Interaction & Fun',
    desc: 'Supervised group play or individual interaction to keep spirits high.',
    icon: <Play className="text-blue-500" />,
  },
  {
    time: 'Rest',
    activity: 'Comfortable Downtime',
    desc: 'A quiet mid-day break in a cool, relaxing environment.',
    icon: <Coffee className="text-purple-500" />,
  },
  {
    time: 'Evening',
    activity: 'Walks & More Play',
    desc: 'Ending the active part of the day with more movement and social time.',
    icon: <Footprints className="text-amber-600" />,
  },
  {
    time: 'Dinner & Bed',
    activity: 'Relax & Rest',
    desc: 'Final meal followed by a cozy night in their dedicated sleeping area.',
    icon: <Moon className="text-indigo-600" />,
  },
];

const Timeline = () => {
  return (
    <section className="py-24 bg-brand-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">A Day at DCR</h4>
          <h2 className="font-display text-4xl font-bold text-slate-900 mb-4">A Happy Day for Your Pet</h2>
          <p className="text-slate-600 max-w-lg mx-auto">
            From sunrise to sunset, we ensure every moment is filled with care, engagement, and comfort.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[29px] md:left-1/2 top-0 bottom-0 w-1 bg-brand-200 -translate-x-1/2 rounded-full" />
          
          <div className="space-y-12">
            {schedule.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center gap-8 md:gap-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Time Indicator */}
                <div className="flex-shrink-0 w-14 h-14 bg-white rounded-2xl shadow-lg border border-brand-100 flex items-center justify-center z-10 md:absolute md:left-1/2 md:-translate-x-1/2">
                  {item.icon}
                </div>
                
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 text-left'}`}>
                  <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <span className="inline-block px-3 py-1 bg-brand-100 text-brand-700 text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                      {item.time}
                    </span>
                    <h3 className="font-display text-xl font-bold text-slate-900 mb-2">{item.activity}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                
                {/* Empty spacer for md+ */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
