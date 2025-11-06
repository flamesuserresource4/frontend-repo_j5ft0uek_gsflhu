import { useState } from 'react';
import { Phone, Menu as MenuIcon, X, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLink = "text-[#2C3E50] hover:text-[#C8102E] transition-colors";

  return (
    <header className="sticky top-0 z-50 bg-[#FFF8DC]/80 backdrop-blur border-b border-[#C8102E]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-3" aria-label="Hungry Bird's Home">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#C8102E] text-white font-bold">HB</span>
            <div className="leading-tight">
              <p className="font-extrabold text-[#2C3E50] text-lg">Hungry Bird's</p>
              <p className="text-xs text-[#C8102E]">বাঙালি স্বাদে চাইনিজ জাদু</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Primary Navigation">
            <a href="#menu" className={navLink}>Menu</a>
            <a href="#order" className={navLink}>Order</a>
            <a href="#about" className={navLink}>About</a>
            <a href="#contact" className={navLink}>Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+8801700000000" className="inline-flex items-center gap-2 rounded-full bg-[#FFD700] px-4 py-2 text-[#2C3E50] font-semibold hover:brightness-95 transition">
              <Phone size={18} /> Call Now
            </a>
            <a href="#order" className="inline-flex items-center gap-2 rounded-full bg-[#FF6B35] px-4 py-2 text-white font-semibold hover:brightness-110 transition">
              <ShoppingCart size={18} /> অর্ডার করুন এখনই
            </a>
          </div>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            {open ? <X /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#C8102E]/10 bg-[#FFF8DC]">
          <div className="px-4 py-3 space-y-3">
            <a href="#menu" className="block" onClick={() => setOpen(false)}>Menu</a>
            <a href="#order" className="block" onClick={() => setOpen(false)}>Order</a>
            <a href="#about" className="block" onClick={() => setOpen(false)}>About</a>
            <a href="#contact" className="block" onClick={() => setOpen(false)}>Contact</a>
            <div className="flex gap-2 pt-2">
              <a href="tel:+8801700000000" className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#FFD700] px-4 py-2 text-[#2C3E50] font-semibold">
                <Phone size={18} /> Call
              </a>
              <a href="#order" className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#FF6B35] px-4 py-2 text-white font-semibold">
                <ShoppingCart size={18} /> Order
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
