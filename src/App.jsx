import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuPreview from './components/MenuPreview';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div id="top" className="font-sans bg-[#FFF8DC]">
      <Navbar />
      <main>
        <Hero />
        <MenuPreview />
        <section id="about" className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#2C3E50]">Our Story</h2>
              <p className="mt-4 text-[#2C3E50]/80">
                Welcome to Hungry Bird's — Homna’s favorite destination for Bangladeshi-Chinese fusion. We blend authentic spices with fresh, local ingredients to create flavors you’ll crave again and again.
              </p>
              <ul className="mt-4 space-y-2 text-[#2C3E50]">
                <li>• 100% Halal</li>
                <li>• Fresh Ingredients Daily</li>
                <li>• Hygienic Kitchen</li>
                <li>• Fast Delivery in Homna</li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1759418929469-d3f9b37f0861?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBhbmQlMjBhbWJpYW5jZXxlbnwwfDB8fHwxNzYyNDUxNjU3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Restaurant interior and ambiance" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>
        <Testimonials />
        <section id="order" className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#2C3E50]">Order Online</h2>
              <p className="text-[#2C3E50]/70">Simple, fast and convenient ordering. Cash on Delivery, bKash, Nagad supported.</p>
            </div>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl bg-[#FFF8DC] border border-[#C8102E]/10 p-6">
                <h3 className="font-bold text-[#2C3E50]">1. Choose Dishes</h3>
                <p className="text-[#2C3E50]/80 text-sm">Browse the menu and add your favorites to cart.</p>
              </div>
              <div className="rounded-2xl bg-[#FFF8DC] border border-[#C8102E]/10 p-6">
                <h3 className="font-bold text-[#2C3E50]">2. Select Payment</h3>
                <p className="text-[#2C3E50]/80 text-sm">Pay with Cash on Delivery, bKash, Nagad or Rocket.</p>
              </div>
              <div className="rounded-2xl bg-[#FFF8DC] border border-[#C8102E]/10 p-6">
                <h3 className="font-bold text-[#2C3E50]">3. Track & Enjoy</h3>
                <p className="text-[#2C3E50]/80 text-sm">We deliver fast within Homna and keep you updated.</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <a href="#menu" className="inline-flex items-center gap-2 rounded-full bg-[#FF6B35] px-6 py-3 text-white font-semibold shadow hover:brightness-110">Start Order</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
