import { Facebook, Instagram, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#2C3E50] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-extrabold">Hungry Bird's</h3>
          <p className="mt-2 text-white/80">Bangladeshi-Chinese fusion restaurant serving Homna, Cumilla with love.</p>
          <div className="mt-4 flex items-center gap-3 text-sm text-white/90">
            <MapPin size={18} /> Homna, Cumilla, Bangladesh
          </div>
          <div className="mt-2 flex items-center gap-3 text-sm text-white/90">
            <Phone size={18} /> <a href="tel:+8801700000000" className="hover:underline">+880 1700-000000</a>
          </div>
          <div className="mt-2 flex items-center gap-3 text-sm text-white/90">
            <Mail size={18} /> <a href="mailto:info@hungrybirds.com" className="hover:underline">info@hungrybirds.com</a>
          </div>
        </div>

        <div>
          <h4 className="font-bold">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-white/90">
            <li><a href="#menu" className="hover:underline">Menu</a></li>
            <li><a href="#order" className="hover:underline">Order</a></li>
            <li><a href="#reserve" className="hover:underline">Book Table</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold">Business Hours</h4>
          <ul className="mt-3 space-y-1 text-white/90 text-sm">
            <li>Sat–Thu: 11:00 AM – 10:30 PM</li>
            <li>Friday: 3:00 PM – 11:00 PM</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold">Follow Us</h4>
          <div className="mt-3 flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="p-2 rounded-full bg-white/10 hover:bg-white/20"><Facebook size={18} /></a>
            <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-white/10 hover:bg-white/20"><Instagram size={18} /></a>
            <a href="https://wa.me/8801700000000" aria-label="WhatsApp" className="p-2 rounded-full bg-white/10 hover:bg-white/20"><MessageCircle size={18} /></a>
          </div>
          <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input type="email" required placeholder="Enter email for 10% off" className="flex-1 rounded-full px-4 py-2 text-[#2C3E50]" />
            <button className="rounded-full bg-[#FFD700] text-[#2C3E50] font-semibold px-4">Join</button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between text-sm text-white/70">
          <p>© {new Date().getFullYear()} Hungry Bird's. All rights reserved.</p>
          <a href="#top" className="hover:underline">Back to top</a>
        </div>
      </div>

      <a href="https://wa.me/8801700000000" className="fixed bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-4 py-2 shadow-lg">
        <MessageCircle size={18} /> WhatsApp
      </a>
    </footer>
  );
}
