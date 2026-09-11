import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What should I bring for my pet\'s stay?',
    answer: 'We recommend bringing their regular food, any necessary medications, and a favorite toy or blanket to help them feel more at home. We provide comfortable bedding, but having something with a familiar scent can be very reassuring.',
  },
  {
    question: 'Can I bring my pet\'s regular food?',
    answer: 'Yes, absolutely! In fact, we encourage it. Maintaining their regular diet is important for their digestive health and overall comfort during the stay.',
  },
  {
    question: 'Will I receive photos or videos during the stay?',
    answer: 'Yes! We send regular photo and video updates via WhatsApp so you can see how your furry friend is doing and enjoy your trip with peace of mind.',
  },
  {
    question: 'Do you accept both dogs and cats?',
    answer: 'DCR Pet Hostel primarily focuses on dog boarding. For cat boarding or other pets, please contact us directly to discuss specific requirements and availability.',
  },
  {
    question: 'Can you take care of pets that require medication?',
    answer: 'Yes, our caretakers are experienced in administering routine oral medications. Please provide clear instructions and the required dosage during drop-off.',
  },
  {
    question: 'Are pets kept together or separately?',
    answer: 'Pets are provided with their own dedicated sleeping areas. Playtime can be social (supervised group play) or individual, depending on your pet\'s temperament and your preference.',
  },
  {
    question: 'What vaccinations are required before boarding?',
    answer: 'For the safety of all our guests, we require pets to be up-to-date with their core vaccinations (DHPP, Rabies, and Bordetella). Please bring a copy of their vaccination record.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faqs" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Common Questions</h4>
          <h2 className="font-display text-4xl font-bold text-slate-900 mb-4">Questions Pet Parents Ask</h2>
          <p className="text-slate-600">
            Everything you need to know about your pet's stay at DCR Pet Hostel.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`border rounded-3xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'border-primary bg-brand-50 shadow-sm' : 'border-slate-100 hover:border-slate-200'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={`font-bold text-lg transition-colors ${openIndex === index ? 'text-primary' : 'text-slate-900'}`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  openIndex === index ? 'bg-primary text-white rotate-0' : 'bg-slate-50 text-slate-400'
                }`}>
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-brand-100/50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-8 bg-brand-50 rounded-[2.5rem] border border-brand-100">
          <p className="text-slate-700 font-medium mb-4">Still have questions?</p>
          <a 
            href="https://wa.me/919999999999"
            className="text-primary font-bold flex items-center justify-center gap-2 hover:gap-3 transition-all"
          >
            Ask us on WhatsApp
            <Plus size={18} className="rotate-45" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
