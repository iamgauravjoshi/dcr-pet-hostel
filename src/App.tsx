import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Services from './components/Services';
import Stats from './components/Stats';
import WhyChooseUs from './components/WhyChooseUs';
import Timeline from './components/Timeline';
import Booking from './components/Booking';
import Gallery from './components/Gallery';
import PeaceOfMind from './components/PeaceOfMind';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const handleClick = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute('href');
      if (!href || !href.startsWith('#') || href === '#') return;
      
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleClick as unknown as EventListener);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleClick as unknown as EventListener);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-brand-50 font-sans selection:bg-primary/30 selection:text-primary-dark">
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Services />
        <Stats />
        <WhyChooseUs />
        <Timeline />
        <Booking />
        <Gallery />
        <PeaceOfMind />
        <Reviews />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
      
      {/* Floating WhatsApp for Mobile */}
      <a 
        href="https://wa.me/919999999999"
        className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all lg:hidden"
        aria-label="Chat on WhatsApp"
      >
        <svg 
          viewBox="0 0 24 24" 
          width="24" 
          height="24" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-6 h-6"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      </a>
    </div>
  );
}

export default App;
