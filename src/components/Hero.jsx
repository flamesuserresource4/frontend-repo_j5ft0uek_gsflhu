import { ChevronRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FFF8DC]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(200,16,46,0.08),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(255,215,0,0.15),transparent_35%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#C8102E]/10 text-[#C8102E] px-3 py-1 text-sm font-semibold">
            <Star size={16} className="fill-[#C8102E] text-[#C8102E]" /> 100% Halal • Hygienic Kitchen • Fast Delivery in Homna
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#2C3E50] leading-tight">
            Where Bengali Taste Meets Chinese Flavor
          </h1>
          <p className="mt-4 text-[#2C3E50]/80 text-lg">
            Fresh. Flavorful. Fast. Enjoy authentic Bangladeshi-Chinese fusion favorites right here in Homna, Cumilla.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#order" className="inline-flex items-center gap-2 rounded-full bg-[#FF6B35] px-6 py-3 text-white font-semibold shadow hover:brightness-110">
              অর্ডার করুন এখনই <ChevronRight size={18} />
            </a>
            <a href="#menu" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[#2C3E50] font-semibold border border-[#C8102E]/20 hover:bg-[#FFD700]/20">
              View Menu
            </a>
            <a href="#reserve" className="inline-flex items-center gap-2 rounded-full bg-[#FFD700] px-6 py-3 text-[#2C3E50] font-semibold hover:brightness-95">
              Book Table
            </a>
          </div>

          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-[#2C3E50]/80">
            <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#2ECC71]"></span> Fresh Ingredients Daily</li>
            <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#C8102E]"></span> 5000+ happy customers</li>
            <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#FFD700]"></span> Family-friendly ambiance</li>
            <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#FF6B35]"></span> Fast delivery in Homna</li>
          </ul>
        </div>

        <div className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white">
            <img
              src="https://images.unsplash.com/photo-1604908177453-c7c946d71e54?q=80&w=1760&auto=format&fit=crop"
              alt="Sizzling Bangladeshi-Chinese fusion dishes"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow p-4 border border-[#C8102E]/10">
            <p className="text-sm font-semibold text-[#2C3E50]">Today’s Popular</p>
            <p className="text-xs text-[#2C3E50]/70">Chicken Chili, Hakka Noodles, Thai Soup</p>
          </div>
        </div>
      </div>
    </section>
  );
}
