import { PieChart, Code, Scale, Network } from 'lucide-react';
import { motion } from 'motion/react';

export default function Services() {
  const services = [
    {
      icon: <PieChart className="w-8 h-8 text-[var(--color-gold)]" />,
      title: "Financial & Accounting",
      desc: "Urgent bookkeeping, rapid clearing of financial backlogs for sudden audits, expedited tax preparation, and high-speed compilation of balance sheets.",
      time: "24-48 Hours",
      span: "md:col-span-2"
    },
    {
      icon: <Code className="w-8 h-8 text-[var(--color-gold)]" />,
      title: "Digital Rescue",
      desc: "Immediate resolution of server crashes, database errors, and ultra-fast turnaround for emergency e-commerce deployments.",
      time: "12-24 Hours",
      span: "md:col-span-1"
    },
    {
      icon: <Scale className="w-8 h-8 text-[var(--color-gold)]" />,
      title: "Legal Compliance",
      desc: "Urgent ROC & MCA compliances, event-based statutory filings, and immediate integration of recent legislative updates.",
      time: "Same-Day",
      span: "md:col-span-1"
    },
    {
      icon: <Network className="w-8 h-8 text-[var(--color-gold)]" />,
      title: "Cross-Disciplinary Synergy",
      desc: "Legal, financial, and digital crises often overlap. Our in-house experts collaborate in a unified task force to solve multi-faceted corporate emergencies simultaneously.",
      time: "Immediate Integration",
      span: "md:col-span-2"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <section id="services" className="py-20 bg-[var(--color-light-gray)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          {...fadeInUp}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-display font-bold text-[var(--color-navy)] mb-2">
            Specialized Response Protocols
          </h2>
          <div className="w-20 h-1 bg-[var(--color-gold)] mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm leading-relaxed">
            Enterprise Divisions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`bg-white border border-transparent p-8 rounded-xl shadow-[0_4px_20px_rgba(11,25,44,0.06)] hover:shadow-[0_8px_30px_rgba(197,155,39,0.2)] transition-shadow duration-300 group flex flex-col ${service.span}`}
            >
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[var(--color-navy)] mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                {service.desc}
              </p>
              <div className="inline-flex items-center text-[var(--color-gold)] text-xs font-bold tracking-wider uppercase self-start">
                Turnaround: {service.time}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
