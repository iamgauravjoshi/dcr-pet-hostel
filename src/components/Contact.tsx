import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-brand-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Find Us</h4>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Ready to Visit <br />
              <span className="text-primary italic">Our Second Home?</span>
            </h2>

            <div className="space-y-6">
              <div className="flex gap-6 p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-brand-100 rounded-2xl flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Our Location</h3>
                  <p className="text-slate-600 mb-3">
                    Mahima Florenza Internal Road, <br />
                    Near Patrakar Colony, Jaipur, Rajasthan
                  </p>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline"
                  >
                    Get Directions
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              <div className="flex gap-6 p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-secondary-light rounded-2xl flex items-center justify-center text-secondary flex-shrink-0">
                  <Phone />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Contact Details</h3>
                  <div className="space-y-1">
                    <p className="text-slate-600">Call: +91 99999 99999</p>
                    <p className="text-slate-600">WhatsApp: +91 99999 99999</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-6 p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 flex-shrink-0">
                  <Clock />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Operating Hours</h3>
                  <div className="space-y-1">
                    <p className="text-slate-600">Drop-off/Pick-up: 8:00 AM - 8:00 PM</p>
                    <p className="text-slate-600">Open All Days of the Week</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[500px] lg:h-auto rounded-[3rem] overflow-hidden shadow-xl border-4 border-white grayscale hover:grayscale-0 transition-all duration-700"
          >
            {/* Embedded map placeholder */}
            <div className="w-full h-full bg-slate-200 relative flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800&h=800" 
                alt="Map area" 
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
              <div className="relative z-10 text-center p-8">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <MapPin size={32} />
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-800 mb-2">DCR Pet Hostel</h3>
                <p className="text-slate-600 font-medium mb-6">Patrakar Colony, Jaipur</p>
                <a 
                  href="#" 
                  className="bg-white text-slate-900 px-6 py-3 rounded-2xl font-bold shadow-lg inline-block"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
