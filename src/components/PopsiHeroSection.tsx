import { useScrollReveal } from "@/hooks/useScrollReveal";
import popsiLineup from "@/assets/popsi-lineup.png";

const PopsiHeroSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="popsi-naturals" className="py-20 sm:py-28 bg-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left text */}
          <div className="reveal">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-turbo-green/15 text-turbo-spice eyebrow mb-5">
              From the Fields of India 🌾
            </span>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-popsi-brown leading-[1] mb-6">
              Natural. Desi.<br />Delicious.
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-3">
              Real sugarcane. Real coconut. Real banana. Nothing fake.
            </p>
            <p className="font-body text-base text-muted-foreground/80 mb-8">POPSI Naturals is India's everyday natural beverage — ₹15–20, in cutie little bottles that feel like a hug.

            </p>
            <a
              href="#popsi-flavors"
              className="inline-flex px-8 py-3.5 rounded-full bg-popsi-brown text-cream font-body font-bold text-sm shadow-soft transition-transform hover:-translate-y-0.5">
              
              Meet POPSI Naturals →
            </a>
          </div>

          {/* Right — POPSI lineup image */}
          <div className="reveal flex justify-center items-center relative">
            <img
              src={popsiLineup}
              alt="POPSI Naturals lineup - all 6 flavors"
              className="w-full max-w-lg shadow-2xl opacity-100 border-8 rounded-none border-none" />
            
            <span className="absolute -top-4 left-4 text-2xl animate-float-1">🍌</span>
            <span className="absolute -top-2 right-6 text-xl animate-float-3">🍓</span>
            <span className="absolute top-10 right-0 text-lg animate-float-5">🥭</span>
          </div>
        </div>
      </div>
    </section>);

};

export default PopsiHeroSection;