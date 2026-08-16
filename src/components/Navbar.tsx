import { Menu, X, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[var(--color-navy)] flex items-center justify-center rounded-lg">
              <div className="w-5 h-5 border-2 border-white rounded-sm transform rotate-45"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-display font-bold text-[var(--color-navy)] tracking-tight uppercase leading-none">Deadline</span>
              <span className="text-sm font-sans font-semibold text-[var(--color-gold)] tracking-widest uppercase leading-none">Masters</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-widest text-[var(--color-navy)]">
            <a href="#services" className="hover:text-[var(--color-gold)] transition-colors">Services</a>
            <a href="#team" className="hover:text-[var(--color-gold)] transition-colors">Our Team</a>
            <a href="#contact" className="bg-[var(--color-gold)] hover:bg-[#b08920] text-white px-6 py-2.5 rounded-full font-bold uppercase tracking-wider transition-all transform hover:scale-105 shadow-md">SOS Rescue</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[var(--color-navy)] hover:text-[var(--color-gold)]">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-sm font-medium uppercase tracking-widest text-[var(--color-navy)]">
            <a href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-2 hover:text-[var(--color-gold)]">Services</a>
            <a href="#team" onClick={() => setIsOpen(false)} className="block px-3 py-2 hover:text-[var(--color-gold)]">Our Team</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 hover:text-[var(--color-gold)] font-bold">SOS Rescue</a>
          </div>
        </div>
      )}
    </nav>
  );
}
