
import { motion } from 'framer-motion';
import { MessageCircle, Shield, Heart, Camera, MapPin, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-24 pb-12 flex items-center overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-brand-100 rounded-full blur-3xl -z-10 opacity-60" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-secondary-light rounded-full blur-3xl -z-10 opacity-40" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-500"></span>
            </span>
            Jaipur's Most Loved Pet Hostel
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
            A <span className="text-primary italic">Second Home</span> <br />
            For Your Furry Family.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl leading-relaxed">
            Safe stays, loving care, and plenty of playtime — so you can travel knowing your pet is in good hands.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#booking"
              className="group bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2"
            >
              Book Your Pet's Stay
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/919999999999"
              className="bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-100 px-8 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="text-green-500" />
              Talk on WhatsApp
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Shield size={20} />, label: "Safe Stay" },
              { icon: <Heart size={20} />, label: "Personal Attention" },
              { icon: <Camera size={20} />, label: "Regular Updates" },
              { icon: <MapPin size={20} />, label: "Caring Environment" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2 text-center">
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-primary">
                  {item.icon}
                </div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
            <img 
              src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800&h=1000" 
              alt="Happy dog playing" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Decorative elements */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 z-20 bg-white p-4 rounded-3xl shadow-xl flex items-center gap-3 border border-brand-100"
          >
            <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center text-white">
              <Heart fill="currentColor" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-bold uppercase">Mood Today</div>
              <div className="text-sm font-bold text-slate-800">Extra Happy!</div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 -left-10 z-20 bg-white p-4 rounded-3xl shadow-xl flex items-center gap-3 border border-brand-100"
          >
            <img 
              src="https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=100" 
              alt="Pet update" 
              className="w-12 h-12 rounded-2xl object-cover"
            />
            <div>
              <div className="text-xs text-slate-400 font-bold uppercase">Video Update</div>
              <div className="text-sm font-bold text-slate-800">Sent to Bruno's Mom</div>
            </div>
          </motion.div>

          {/* Abstract blobs */}
          <div className="absolute -z-10 -bottom-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
