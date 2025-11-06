import { Flame, Leaf, Beef, Soup, Drumstick, Utensils } from 'lucide-react';

const items = [
  { id: 1, name: 'Chicken Chili (Dry/Gravy)', price: 380, tag: 'Popular', spice: 'hot', halal: true, img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1760&auto=format&fit=crop' },
  { id: 2, name: 'Special Fried Rice', price: 320, tag: "Chef's Special", spice: 'medium', halal: true, img: 'https://images.unsplash.com/photo-1604908554049-1c1b3c2de3bb?q=80&w=1740&auto=format&fit=crop' },
  { id: 3, name: 'Hakka Noodles', price: 300, spice: 'mild', halal: true, img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1770&auto=format&fit=crop' },
  { id: 4, name: 'Thai Soup', price: 260, tag: 'Popular', spice: 'medium', halal: true, img: 'https://images.unsplash.com/photo-1544025167-f7c0b2e7b6c0?q=80&w=1760&auto=format&fit=crop' },
];

function Badge({ children, color = 'bg-[#FFD700] text-[#2C3E50]' }) {
  return <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${color}`}>{children}</span>;
}

function Spice({ level }) {
  const map = {
    mild: '🌶️',
    medium: '🌶️🌶️',
    hot: '🌶️🌶️🌶️',
  };
  return <span aria-label={`Spice ${level}`}>{map[level] || '🌶️'}</span>;
}

export default function MenuPreview() {
  return (
    <section id="menu" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#2C3E50]">Popular Dishes</h2>
            <p className="text-[#2C3E50]/70">Best sellers loved by Homna</p>
          </div>
          <a href="#full-menu" className="inline-flex items-center gap-2 text-[#C8102E] font-semibold hover:underline">
            <Utensils size={18} /> View Full Menu
          </a>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <article key={item.id} className="group rounded-2xl overflow-hidden bg-[#FFF8DC] border border-[#C8102E]/10 shadow-sm hover:shadow-md transition">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                {item.tag && (
                  <div className="absolute top-3 left-3">
                    <Badge color="bg-[#C8102E] text-white">{item.tag}</Badge>
                  </div>
                )}
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-bold text-[#2C3E50]">{item.name}</h3>
                <div className="flex items-center gap-2 text-sm text-[#2C3E50]/70">
                  <Flame size={16} className="text-[#FF6B35]" /> <Spice level={item.spice} />
                  <span className="ml-auto font-semibold text-[#2C3E50]">৳{item.price}</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Badge><span className="mr-1">✅</span> 100% Halal</Badge>
                  {item.spice === 'mild' && <Badge color="bg-[#2ECC71]/15 text-[#2ECC71]">Vegetarian</Badge>}
                </div>
                <button className="mt-2 w-full rounded-full bg-[#FF6B35] text-white py-2 font-semibold hover:brightness-110">
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
