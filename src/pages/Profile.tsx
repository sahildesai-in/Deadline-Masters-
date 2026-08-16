import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { teamMembers } from '../data/team';
import { ArrowLeft, Mail, Phone, MapPin, Briefcase, GraduationCap } from 'lucide-react';

export default function Profile() {
  const { id } = useParams();
  const member = teamMembers.find(m => m.id === id);

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">
        <div className="text-center">
          <h2 className="text-2xl font-display font-bold text-[var(--color-navy)] mb-4">Profile not found</h2>
          <Link to="/" className="text-[var(--color-gold)] hover:underline flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

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
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-[var(--color-light-gray)]"
    >
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 lg:py-32">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-[var(--color-gold)] transition-colors mb-12 text-sm font-medium tracking-wide uppercase">
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column - Sticky Image */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="w-full aspect-[4/5] bg-slate-100 rounded-2xl overflow-hidden shadow-sm border border-slate-200"
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                        parent.innerHTML = `<div class="text-8xl font-serif text-slate-300 flex items-center justify-center h-full w-full">${member.name.split(' ').map(n=>n[0]).join('').substring(0,2)}</div>`;
                    }
                  }}
                />
              </motion.div>
              
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="mt-8 space-y-4"
              >
                <motion.a variants={fadeInUp} href={`mailto:${member.email}`} className="flex items-center gap-3 text-gray-600 hover:text-[var(--color-gold)] transition-colors p-4 rounded-xl bg-white border border-transparent hover:shadow-sm">
                  <Mail className="w-5 h-5 text-[var(--color-gold)]" />
                  <span className="font-medium text-sm">{member.email}</span>
                </motion.a>
                <motion.a variants={fadeInUp} href={`tel:${member.phone.replace(/\s+/g, '')}`} className="flex items-center gap-3 text-gray-600 hover:text-[var(--color-gold)] transition-colors p-4 rounded-xl bg-white border border-transparent hover:shadow-sm">
                  <Phone className="w-5 h-5 text-[var(--color-gold)]" />
                  <span className="font-medium text-sm">{member.phone}</span>
                </motion.a>
                <motion.div variants={fadeInUp} className="flex items-center gap-3 text-gray-600 p-4 rounded-xl bg-white border border-transparent">
                  <MapPin className="w-5 h-5 text-[var(--color-gold)]" />
                  <span className="font-medium text-sm">{member.location}</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
          
          {/* Right Column - Details */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="lg:col-span-7"
          >
            <motion.div variants={fadeInUp}>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-[var(--color-navy)] mb-4 tracking-tight uppercase">
                {member.name}
              </h1>
              <p className="text-[var(--color-gold)] text-sm md:text-base font-bold uppercase tracking-widest mb-10">
                {member.role}
              </p>
              
              <div className="w-20 h-1 bg-[var(--color-gold)] mb-10"></div>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-sans mb-16">
                {member.fullBio}
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="mb-16">
              <h3 className="text-xl font-display font-bold text-[var(--color-navy)] mb-6 flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-[var(--color-gold)]" /> Core Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {member.expertise?.map((skill, index) => (
                  <span key={index} className="px-4 py-2 bg-white border border-transparent shadow-[0_2px_10px_rgba(11,25,44,0.04)] text-[var(--color-navy)] rounded-lg text-sm font-bold">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="mb-16">
              <h3 className="text-xl font-display font-bold text-[var(--color-navy)] mb-8 flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-[var(--color-gold)]" /> Professional Experience
              </h3>
              <div className="space-y-10 border-l border-[var(--color-gold)] ml-3 pl-8 relative">
                {member.experience?.map((exp, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-[37px] top-1 w-3 h-3 bg-white border-2 border-[var(--color-gold)] rounded-full"></div>
                    <h4 className="text-lg font-bold text-[var(--color-navy)]">{exp.title}</h4>
                    <p className="text-[var(--color-gold)] text-xs font-bold uppercase tracking-widest mt-1 mb-3">{exp.company}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <h3 className="text-xl font-display font-bold text-[var(--color-navy)] mb-6 flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-[var(--color-gold)]" /> Education
              </h3>
              <p className="text-gray-600 bg-white shadow-[0_2px_10px_rgba(11,25,44,0.04)] p-6 rounded-xl text-sm leading-relaxed">
                {member.education}
              </p>
            </motion.div>
            
          </motion.div>
          
        </div>
      </div>
    </motion.div>
  );
}
