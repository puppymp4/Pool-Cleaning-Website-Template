import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Droplets, 
  Waves, 
  ShieldCheck, 
  Sparkles, 
  MessageSquare, 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook, 
  ChevronRight,
  Menu,
  X,
  CheckCircle2,
  Clock
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center">
            <Waves className="text-slate-950 size-6" />
          </div>
          <span className="text-2xl font-light tracking-tighter text-white">
            AZURE<span className="font-bold text-cyan-400">ELITE</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Services', 'Portfolio', 'Process', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors uppercase tracking-widest"
            >
              {item}
            </a>
          ))}
          <button className="px-6 py-2 bg-cyan-500 text-slate-950 rounded-full text-sm font-bold hover:bg-cyan-400 transition-all transform hover:scale-105">
            BOOK NOW
          </button>
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-slate-900 border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {['Services', 'Portfolio', 'Process', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-lg font-medium text-slate-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury Infinity Pool at Sunset"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 azure-gradient" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-8xl font-light tracking-tighter text-white leading-none mb-6">
            Pristine <br />
            <span className="text-cyan-400 italic">Perfection.</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-md mb-8 font-light leading-relaxed">
            Elevating Fresno's most exclusive backyards with cinematic water clarity and elite maintenance services.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-cyan-500 text-slate-950 rounded-full font-bold flex items-center gap-2 hover:bg-cyan-400 transition-all transform hover:scale-105">
              GET A QUOTE <ChevronRight size={20} />
            </button>
            <button className="px-8 py-4 glass text-white rounded-full font-bold flex items-center gap-2 hover:bg-white/10 transition-all">
              VIEW PORTFOLIO
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden md:block"
        >
          <div className="glass p-8 rounded-3xl max-w-sm ml-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                <Clock className="text-cyan-400" />
              </div>
              <div>
                <h3 className="text-white font-bold">Speed-to-Lead</h3>
                <p className="text-xs text-slate-400 uppercase tracking-widest">Response in &lt; 5 mins</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              Don't wait days for a callback. Our team is standing by to transform your pool today.
            </p>
            <button className="w-full py-4 bg-white text-slate-950 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-cyan-50 transition-all">
              <MessageSquare size={20} /> TEXT US NOW
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent mx-auto" />
      </motion.div>
    </section>
  );
};

const ServiceCard = ({ icon: Icon, title, description, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="glass p-10 rounded-[2rem] group hover:bg-white/5 transition-all duration-500"
  >
    <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
      <Icon className="text-cyan-400 size-8" />
    </div>
    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{title}</h3>
    <p className="text-slate-400 leading-relaxed font-light">{description}</p>
  </motion.div>
);

const Services = () => {
  const services = [
    {
      icon: Droplets,
      title: "Elite Chemistry",
      description: "Scientific-grade water balancing for crystal-clear results that are gentle on skin and eyes."
    },
    {
      icon: Sparkles,
      title: "Detail Scrubbing",
      description: "Hand-scrubbed tiles and meticulous debris removal to maintain that 'just-built' aesthetic."
    },
    {
      icon: ShieldCheck,
      title: "System Guard",
      description: "Proactive equipment monitoring and preventative maintenance to avoid costly repairs."
    }
  ];

  return (
    <section id="services" className="py-32 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-[0.3em] mb-4">Our Services</h2>
            <h3 className="text-4xl md:text-6xl font-light text-white tracking-tighter">
              Beyond the <span className="italic text-cyan-400">Surface.</span>
            </h3>
          </div>
          <p className="text-slate-400 max-w-sm font-light">
            We provide a comprehensive suite of maintenance solutions designed for the discerning Fresno homeowner.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} delay={i * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const images = [
    "https://images.unsplash.com/photo-1562184552-997c461abbe6?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1534430480872-3498386e7a56?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1560067174-c5a3a8f37060?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=2070&auto=format&fit=crop"
  ];

  return (
    <section id="portfolio" className="py-32 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-[0.3em] mb-4">The Gallery</h2>
          <h3 className="text-4xl md:text-6xl font-light text-white tracking-tighter">Fresno's Finest Waters.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] group"
            >
              <img 
                src={img} 
                alt={`Luxury Pool ${i + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                <div>
                  <p className="text-cyan-400 font-bold text-sm uppercase tracking-widest mb-2">Private Estate</p>
                  <h4 className="text-2xl text-white font-light">Copper River, Fresno</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-950 pt-32 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-16 mb-32">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center">
                <Waves className="text-slate-950 size-6" />
              </div>
              <span className="text-2xl font-light tracking-tighter text-white">
                AZURE<span className="font-bold text-cyan-400">ELITE</span>
              </span>
            </div>
            <h4 className="text-4xl font-light text-white tracking-tighter mb-8 leading-tight">
              Ready to experience <br />
              <span className="text-cyan-400 italic">Azure Perfection?</span>
            </h4>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:bg-cyan-500 hover:text-slate-950 transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:bg-cyan-500 hover:text-slate-950 transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Contact</h5>
            <ul className="space-y-4 text-slate-400 font-light">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-cyan-400" /> (559) 555-0123
              </li>
              <li className="flex items-center gap-3">
                <MessageSquare size={16} className="text-cyan-400" /> Text: (559) 555-0124
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-cyan-400" /> Fresno, California
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Quick Links</h5>
            <ul className="space-y-4 text-slate-400 font-light">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Maintenance Plans</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Equipment Repair</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm font-light">
          <p>© 2026 Azure Elite Pool Services. All rights reserved.</p>
          <p>Designed for the Fresno Lifestyle.</p>
        </div>
      </div>
    </footer>
  );
};

import { generatePoolAdvice } from './services/geminiService';

const AIExpert = () => {
  const [query, setQuery] = useState('');
  const [advice, setAdvice] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!query) return;
    setLoading(true);
    try {
      const result = await generatePoolAdvice(query);
      setAdvice(result);
    } catch (error) {
      setAdvice("Our experts are currently balancing water elsewhere. Please try again shortly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-32 px-6 bg-slate-900/30">
      <div className="max-w-4xl mx-auto">
        <div className="glass p-12 rounded-[3rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Sparkles size={120} className="text-cyan-400" />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-[0.3em] mb-4">AI Concierge</h2>
            <h3 className="text-4xl font-light text-white tracking-tighter mb-8">Instant Expert Advice.</h3>
            
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask about algae, pH balance, or equipment..."
                className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
              />
              <button 
                onClick={handleAsk}
                disabled={loading}
                className="px-8 py-4 bg-white text-slate-950 rounded-2xl font-bold hover:bg-cyan-50 transition-all disabled:opacity-50"
              >
                {loading ? 'ANALYZING...' : 'ASK EXPERT'}
              </button>
            </div>

            <AnimatePresence mode="wait">
              {advice && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-6 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl text-slate-200 font-light leading-relaxed"
                >
                  <p className="italic">"{advice}"</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const SMSSticky = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed bottom-8 right-8 z-50 md:hidden"
    >
      <button className="w-16 h-16 bg-cyan-500 text-slate-950 rounded-full shadow-2xl shadow-cyan-500/20 flex items-center justify-center hover:bg-cyan-400 transition-all active:scale-95">
        <MessageSquare size={28} />
      </button>
    </motion.div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <AIExpert />
        
        {/* Call to Action Section */}
        <section className="py-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-cyan-500/5" />
          <div className="max-w-4xl mx-auto relative z-10 glass p-12 md:p-24 rounded-[3rem] text-center">
            <h2 className="text-4xl md:text-7xl font-light text-white tracking-tighter mb-8">
              Your pool is an <span className="text-cyan-400 italic">investment.</span> <br />
              Treat it like one.
            </h2>
            <p className="text-xl text-slate-400 mb-12 font-light max-w-2xl mx-auto">
              Join Fresno's most exclusive pool maintenance program. Limited spots available for the upcoming season.
            </p>
            <button className="px-12 py-6 bg-cyan-500 text-slate-950 rounded-full text-xl font-bold hover:bg-cyan-400 transition-all transform hover:scale-105 shadow-xl shadow-cyan-500/20">
              START YOUR TRANSFORMATION
            </button>
          </div>
        </section>
      </main>
      <Footer />
      <SMSSticky />
    </div>
  );
}
