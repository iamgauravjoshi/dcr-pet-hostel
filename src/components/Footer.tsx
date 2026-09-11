import React from 'react';
import { Globe, Mail, Phone, MessageCircle, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
                <span className="font-display text-2xl font-bold">D</span>
              </div>
              <span className="font-display text-xl font-bold text-slate-900">
                DCR <span className="text-primary">Pet Hostel</span>
              </span>
            </a>
            <p className="text-slate-600 mb-8 leading-relaxed">
              A comfortable second home for your furry family in Jaipur. We provide safe stays, loving care, and plenty of playtime.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 hover:text-primary hover:bg-brand-50 transition-all">
                <Globe size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 hover:text-primary hover:bg-brand-50 transition-all">
                <Mail size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 hover:text-primary hover:bg-brand-50 transition-all">
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Why DCR', 'Gallery', 'Reviews', 'FAQs'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-slate-500 hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Our Services</h3>
            <ul className="space-y-4">
              {['Pet Boarding', 'Day Boarding', 'Play & Social Time', 'Feeding & Routine', 'Daily Walks', 'Basic Grooming'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-slate-500 hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Contact Us</h3>
            <ul className="space-y-4 text-slate-500">
              <li className="flex items-start gap-3">
                <span className="font-bold text-slate-900">Address:</span>
                <span>Mahima Florenza Road, Patrakar Colony, Jaipur</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-slate-900">Phone:</span>
                <span>+91 99999 99999</span>
              </li>
              <li>
                <a 
                  href="https://wa.me/919999999999"
                  className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-2xl font-bold w-full justify-center hover:bg-green-600 transition-colors shadow-lg shadow-green-500/20"
                >
                  <MessageCircle size={18} />
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} DCR Pet Hostel Jaipur. All rights reserved.</p>
          <div className="flex items-center gap-1">
            Made with <Heart size={14} className="text-red-400 fill-current" /> in Jaipur
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
