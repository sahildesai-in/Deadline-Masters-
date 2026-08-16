import { Mail, Phone, MapPin } from 'lucide-react';
import { teamMembers } from '../data/team';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Team() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="mb-12 text-center">
          <h2 className="text-3xl font-display font-bold text-[var(--color-navy)] mb-2">
            Elite Leadership Team
          </h2>
          <div className="w-20 h-1 bg-[var(--color-gold)] mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm leading-relaxed">
            A cross-disciplinary syndicate of specialists executing flawlessly under impossible deadlines.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div 
              key={member.id} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link 
                to={`/profile/${member.id}`} 
                className="flex flex-col sm:flex-row items-start p-6 bg-[var(--color-light-gray)] rounded-xl border border-transparent shadow-[0_4px_20px_rgba(11,25,44,0.04)] hover:shadow-[0_8px_30px_rgba(197,155,39,0.15)] transition-all group h-full"
              >
                <div className="w-32 h-32 rounded-lg bg-white flex-shrink-0 flex items-center justify-center border border-gray-100 overflow-hidden mb-4 sm:mb-0">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                          parent.innerHTML = `<div class="text-4xl font-serif text-slate-300">${member.name.split(' ').map(n=>n[0]).join('').substring(0,2)}</div>`;
                      }
                    }}
                  />
                </div>
                
                <div className="sm:ml-6 flex-grow flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-xl font-bold text-[var(--color-navy)] uppercase group-hover:text-[var(--color-gold)] transition-colors">{member.name}</h3>
                    <p className="text-xs font-bold text-[var(--color-gold)] uppercase tracking-wider mb-2">{member.role}</p>
                    <p className="text-sm text-gray-600 leading-snug mb-4 line-clamp-3">
                      {member.bio}
                    </p>
                  </div>
                  
                  <div className="mt-auto">
                    <span className="inline-flex items-center gap-1 text-gray-400 font-medium text-xs uppercase tracking-widest group-hover:text-[var(--color-gold)] transition-colors">
                      View Full Profile →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
