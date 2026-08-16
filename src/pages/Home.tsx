import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#f8fafc] text-[#1e293b] font-sans overflow-x-hidden"
    >
      <Navbar />
      <Hero />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </motion.div>
  );
}
