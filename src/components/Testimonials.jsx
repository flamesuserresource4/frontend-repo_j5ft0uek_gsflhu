import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sadia A.',
    text: 'Best Chinese in Homna! The Chicken Chili and Thai Soup are unmatched. Super fresh and quick delivery.',
    rating: 5,
  },
  {
    name: 'Rahim U.',
    text: 'Family favorite! Love the Hakka Noodles and the friendly service. Highly recommend.',
    rating: 5,
  },
  {
    name: 'Mehedi H.',
    text: 'Great taste and affordable pricing. Perfect for students and quick meals.',
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#2C3E50]">Loved by the Community</h2>
          <p className="text-[#2C3E50]/70">Real words from our happy customers</p>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <figure key={idx} className="rounded-2xl bg-[#FFF8DC] border border-[#C8102E]/10 p-6 shadow-sm">
              <div className="flex items-center gap-1 text-[#FFD700]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} className={i < t.rating ? 'fill-[#FFD700] text-[#FFD700]' : 'text-[#FFD700] opacity-40'} />
                ))}
              </div>
              <blockquote className="mt-3 text-[#2C3E50]">“{t.text}”</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-[#2C3E50]/80">— {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
