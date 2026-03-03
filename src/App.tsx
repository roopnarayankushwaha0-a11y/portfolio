import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Film, Play, ArrowDown, 
  Mail, Phone, MapPin, Send, 
  Instagram, Twitter, Youtube, Linkedin,
  ArrowUp
} from 'lucide-react';
import { useState, useEffect } from 'react';

// --- Navbar Component ---
const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Contact', href: '#contact' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-bg-dark/80 backdrop-blur-xl py-4 border-bottom border-white/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.a 
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 bg-accent-purple rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
            <Film className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-display font-bold tracking-tighter">ARUN<span className="text-accent-purple">DESIGN</span></span>
        </motion.a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-text-muted hover:text-white transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-purple transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="btn-primary py-2 px-6 text-sm"
          >
            Hire Me
          </motion.a>
        </div>

        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg-card border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-text-muted hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="btn-primary text-center mt-2"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// --- Hero Component ---
function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/40 via-bg-dark/60 to-bg-dark z-10" />
        <img 
          src="/Hero.png" 
          alt="Cinematic Background"
          className="w-full h-full object-cover scale-105"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-accent-blue text-xs font-bold tracking-widest uppercase mb-6">
            Expert Thumbnail Designer & Visual Artist
          </span>
          <h1 className="text-5xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-8 max-w-4xl mx-auto">
            ARUN <span className="text-gradient">THUMBNAIL</span> DESIGNER
          </h1>
          <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Creating high-click-through-rate thumbnails that drive growth. Specializing in YouTube, gaming, and professional business visuals.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a 
              href="#work"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center gap-2 group"
            >
              <Play className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
              View Work
            </motion.a>
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              Let's Talk
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-text-muted">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="w-4 h-4 text-accent-purple" />
        </motion.div>
      </motion.div>

      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-accent-purple/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-accent-blue/10 blur-[120px] rounded-full" />
    </section>
  );
}

// --- About Component ---
const skills = ['Photoshop', 'AI Generation', 'Color Theory', 'Typography', '3D Rendering', 'CTR Optimization'];

function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative z-10">
              <img 
                src="/About.png" 
                alt="Arun - Thumbnail Designer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent" />
            </div>
            <div className="absolute -top-4 -left-4 w-full h-full border border-accent-purple/30 rounded-2xl -z-0" />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-accent-purple/20 blur-[80px] rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent-purple font-bold tracking-widest uppercase text-xs mb-4 block">My Story</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              I DESIGN THE <span className="text-accent-blue">FIRST</span> IMPRESSION
            </h2>
            <p className="text-text-muted text-lg mb-8 leading-relaxed">
              I'm Arun, a visual strategist specializing in high-impact YouTube thumbnails. I combine psychological triggers with premium design to ensure your content gets the attention it deserves in a crowded feed.
            </p>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- Projects Component ---
const projects = Array.from({ length: 12 }, (_, i) => ({
  title: `Project ${i + 1}`,
  category: 'YouTube Design',
  image: `/thumbnail${i + 1}.png`,
}));

function Projects() {
  return (
    <section id="work" className="py-24 bg-bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-accent-blue font-bold tracking-widest uppercase text-xs mb-4 block">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold">SELECTED <span className="text-gradient">WORKS</span></h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-lg shadow-xl shadow-black/40 bg-bg-card overflow-visible">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-auto display-block rounded-lg transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="mt-4 px-2">
                  <span className="text-accent-blue text-[10px] font-bold tracking-widest uppercase block mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-display font-bold text-white group-hover:text-accent-blue transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Contact Component ---
function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent-blue font-bold tracking-widest uppercase text-xs mb-4 block">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">LET'S CREATE SOMETHING <span className="text-gradient">ICONIC</span></h2>
            <p className="text-text-muted text-lg mb-12 max-w-md">
              Have a project in mind? I'm always open to discussing new creative opportunities and visual collaborations.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-text-muted uppercase tracking-wider mb-1">Email Me</div>
                  <div className="text-lg font-medium">roopnarayankushwaha0@gmail.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-accent-purple group-hover:bg-accent-purple group-hover:text-white transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-text-muted uppercase tracking-wider mb-1">Call Me</div>
                  <div className="text-lg font-medium">+91 8959936792</div>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-all">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-text-muted uppercase tracking-wider mb-1">Location</div>
                  <div className="text-lg font-medium">India (MP)</div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              {[Instagram, Twitter, Youtube, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 rounded-3xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-muted ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-accent-purple transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-muted ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-accent-purple transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-muted ml-1">Subject</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-purple transition-colors appearance-none">
                  <option className="bg-bg-dark">Thumbnail Design</option>
                  <option className="bg-bg-dark">Channel Branding</option>
                  <option className="bg-bg-dark">Visual Strategy</option>
                  <option className="bg-bg-dark">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-muted ml-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-accent-purple transition-colors resize-none"
                />
              </div>
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- Footer Component ---
function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent-purple rounded flex items-center justify-center">
              <Film className="text-white w-5 h-5" />
            </div>
            <span className="text-lg font-display font-bold tracking-tighter">ARUN<span className="text-accent-purple">DESIGN</span></span>
          </div>

          <div className="text-text-muted text-sm">
            © {new Date().getFullYear()} Arun Design Portfolio. All rights reserved.
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

// --- Main App Component ---
export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
