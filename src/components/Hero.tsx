import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--color-navy)] pt-20">
      
      <motion.div 
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        
        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
          When time <span className="text-[var(--color-gold)]">collapses</span>,<br />
          we step in.
        </motion.h1>
        
        <motion.div variants={fadeInUp} className="w-20 h-1 bg-[var(--color-gold)] mx-auto mb-6"></motion.div>

        <motion.p variants={fadeInUp} className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed mb-10">
          An elite, rapid-response B2B unit specializing in high-stakes corporate execution. We resolve critical accounting, web, and legal crises before the deadline expires.
        </motion.p>
        
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-[var(--color-gold)] hover:bg-white text-[var(--color-navy)] px-8 py-4 rounded-lg font-bold tracking-wide transition-all shadow-sm">
            Deploy Task Force
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

        <motion.div variants={fadeInUp} className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-10">
          <div>
            <div className="text-4xl font-display font-bold text-[var(--color-gold)] mb-2">&lt; 1h</div>
            <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Deployment Time</div>
          </div>
          <div>
            <div className="text-4xl font-display font-bold text-[var(--color-gold)] mb-2">100%</div>
            <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">NDA Confidentiality</div>
          </div>
          <div>
            <div className="text-4xl font-display font-bold text-[var(--color-gold)] mb-2">24/7</div>
            <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Crisis Availability</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
