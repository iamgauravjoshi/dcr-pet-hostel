import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Priya Sharma',
    pet: 'Bella (Golden Retriever)',
    text: "DCR Pet Hostel was a lifesaver for us. Bella was so happy and well-cared for. We loved receiving the daily photo updates while we were on vacation. Truly a second home!",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
  },
  {
    name: 'Rahul Verma',
    pet: 'Max (Beagle)',
    text: "I was nervous about leaving Max anywhere, but the team at DCR made him feel right at home. The facility is clean and the staff is genuinely passionate about pets. Highly recommended!",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
  },
  {
    name: 'Anjali Gupta',
    pet: 'Coco (Shih Tzu)',
    text: "Excellent service! They followed Coco's feeding routine perfectly. It's the only place in Jaipur I trust with my little one when I have to travel for work.",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150',
  },
  {
    name: 'Vikram Singh',
    pet: 'Rocky (German Shepherd)',
    text: "Great experience. Rocky had plenty of space to play and the caretakers were very professional. The regular updates kept our minds at ease.",
    rating: 4,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150',
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-brand-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Testimonials</h4>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">What Jaipur Pet Parents Say</h2>
          <div className="flex justify-center items-center gap-2 text-slate-500 font-medium">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <span>Based on 100+ Google Reviews</span>
          </div>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16"
        >
          {testimonials.map((review, index) => (
            <SwiperSlide key={index}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm relative"
              >
                <Quote className="absolute top-8 right-8 text-brand-100 w-12 h-12" />
                
                <div className="flex gap-4 items-center mb-6">
                  <img 
                    src={review.avatar} 
                    alt={review.name} 
                    className="w-14 h-14 rounded-2xl object-cover shadow-md"
                  />
                  <div>
                    <h3 className="font-bold text-slate-900">{review.name}</h3>
                    <p className="text-sm text-primary font-medium">{review.pet}</p>
                  </div>
                </div>

                <div className="flex text-yellow-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>

                <p className="text-slate-600 italic leading-relaxed">
                  "{review.text}"
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-8">
          <a 
            href="#" 
            className="bg-white border-2 border-slate-100 hover:border-primary text-slate-900 px-8 py-3 rounded-2xl font-bold transition-all inline-flex items-center gap-2"
          >
            View Google Reviews
            <Star className="text-yellow-400" size={18} fill="currentColor" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
