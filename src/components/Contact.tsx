import { PhoneCall, Mail, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <section id="contact" className="py-20 bg-[var(--color-navy)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div {...fadeInUp} className="mb-12 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-2">
            Initiate Rescue Protocol
          </h2>
          <div className="w-20 h-1 bg-[var(--color-gold)] mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed">
            When your timeline is collapsing, every minute counts. Bypass the queue and connect directly with our crisis directors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                <PhoneCall className="w-5 h-5 text-[var(--color-gold)]" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Direct Hotline</h4>
                <a href="tel:+916353778543" className="text-sm text-gray-300 hover:text-[var(--color-gold)] transition-colors">+91 6353 778 543</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                <Mail className="w-5 h-5 text-[var(--color-gold)]" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Emergency Email</h4>
                <a href="mailto:sahildesai.in@gmail.com" className="text-sm text-gray-300 hover:text-[var(--color-gold)] transition-colors">sahildesai.in@gmail.com</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                <MapPin className="w-5 h-5 text-[var(--color-gold)]" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Headquarters</h4>
                <p className="text-sm text-gray-300">Ahmedabad, Gujarat, India</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
          >
            <h3 className="text-xl font-display font-bold text-[var(--color-navy)] mb-6">Secure Briefing Form</h3>
            
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-[var(--color-navy)] text-sm font-medium mb-1.5">Corporate Entity / Name</label>
                <input 
                  type="text" 
                  className="w-full bg-[var(--color-light-gray)] border border-transparent rounded-lg px-3 py-2 text-[var(--color-navy)] focus:outline-none focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)] transition-all text-sm"
                  placeholder="Enter your organization"
                />
              </div>
              
              <div>
                <label className="block text-[var(--color-navy)] text-sm font-medium mb-1.5">Secure Email</label>
                <input 
                  type="email" 
                  className="w-full bg-[var(--color-light-gray)] border border-transparent rounded-lg px-3 py-2 text-[var(--color-navy)] focus:outline-none focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)] transition-all text-sm"
                  placeholder="executive@company.com"
                />
              </div>

              <div>
                <label className="block text-[var(--color-navy)] text-sm font-medium mb-1.5">Expiring Deadline</label>
                <input 
                  type="text" 
                  className="w-full bg-[var(--color-light-gray)] border border-transparent rounded-lg px-3 py-2 text-[var(--color-navy)] focus:outline-none focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)] transition-all text-sm"
                  placeholder="e.g. Next Tuesday, 5 PM"
                />
              </div>

              <div>
                <label className="block text-[var(--color-navy)] text-sm font-medium mb-1.5">Nature of Crisis</label>
                <textarea 
                  rows={4}
                  className="w-full bg-[var(--color-light-gray)] border border-transparent rounded-lg px-3 py-2 text-[var(--color-navy)] focus:outline-none focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)] transition-all resize-none text-sm"
                  placeholder="Briefly describe the situation..."
                />
              </div>

              <button className="w-full bg-[var(--color-gold)] hover:bg-[#b08920] text-white px-4 py-3 rounded-lg font-bold transition-all shadow-sm">
                Transmit Secure SOS
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
