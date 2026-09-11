import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, CalendarCheck } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Tell Us About Your Pet',
    desc: 'Share breed, age, dates and any special requirements your pet may have.',
  },
  {
    number: '02',
    title: 'Confirm Availability',
    desc: 'Contact DCR and confirm the required boarding dates for your stay.',
  },
  {
    number: '03',
    title: 'Drop Off Your Pet',
    desc: 'Bring their food, medications or comfort items to make them feel at home.',
  },
  {
    number: '04',
    title: 'Enjoy Your Trip',
    desc: 'Receive regular updates while your pet enjoys their mini-vacation.',
  },
];

const Booking = () => {
  return (
    <section id="booking" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-brand-900 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-primary rounded-full blur-[120px]" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">How It Works</h4>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Booking Their Stay <br />
                <span className="italic text-brand-300">Is Simple.</span>
              </h2>
              
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center font-display text-xl font-bold text-brand-300 border border-white/10">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-brand-100/70 leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
              <h3 className="font-display text-3xl font-bold text-slate-900 mb-6 text-center">Plan a Stay</h3>
              <p className="text-slate-600 mb-8 text-center">Choose your preferred way to contact us and check availability.</p>
              
              <div className="space-y-4">
                <a 
                  href="https://wa.me/919999999999"
                  className="w-full flex items-center justify-between p-6 bg-brand-50 border border-brand-100 rounded-3xl group hover:bg-brand-100 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-green-500 shadow-sm">
                      <MessageCircle />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">WhatsApp Us</div>
                      <div className="text-sm text-slate-500 italic">Quickest response</div>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <CalendarCheck className="text-primary" size={20} />
                  </div>
                </a>

                <a 
                  href="tel:+919999999999"
                  className="w-full flex items-center justify-between p-6 bg-slate-50 border border-slate-100 rounded-3xl group hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-500 shadow-sm">
                      <Phone />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Call Directly</div>
                      <div className="text-sm text-slate-500 italic">Speak with a caretaker</div>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <CalendarCheck className="text-primary" size={20} />
                  </div>
                </a>
              </div>

              <div className="mt-8 p-6 bg-brand-50 rounded-3xl border border-dashed border-brand-200">
                <div className="text-sm text-brand-700 font-bold mb-2">💡 Quick Tip:</div>
                <p className="text-xs text-brand-900/70 leading-relaxed">
                  During peak seasons and holidays, we recommend booking at least 2 weeks in advance to ensure availability for your furry friend.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
