import { useScrollReveal } from "@/hooks/useScrollReveal";

const bottles = [
  { name: "Jeera", color: "#E6C84D" },
  { name: "Sugarcane", color: "#81C784" },
  { name: "Banana", color: "#FFD54F" },
  { name: "Strawberry", color: "#F48FB1" },
  { name: "Mango", color: "#FFB74D" },
];

const PopsiHeroSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="popsi-naturals" className="py-20 sm:py-28 bg-popsi-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left text */}
          <div className="reveal">
            <span className="font-body text-sm italic text-muted-foreground mb-4 block">
              From the Fields of India 🌾
            </span>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-popsi-brown leading-[1.1] mb-6">
              Natural. Desi.<br />Delicious.
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-3">
              Real sugarcane. Real coconut. Real banana. Nothing fake.
            </p>
            <p className="font-body text-base text-muted-foreground/80 mb-8">
              POPSI Naturals is India's everyday natural beverage — ₹15–20, in cute little bottles that feel like a hug.
            </p>
            <a
              href="#popsi-flavors"
              className="inline-flex px-7 py-3 rounded-full bg-popsi-brown text-primary-foreground font-body font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Meet POPSI Naturals →
            </a>
          </div>

          {/* Right — bottles */}
          <div className="reveal flex justify-center items-end gap-3 relative">
            {bottles.map((b, i) => (
              <div
                key={b.name}
                className={`animate-float-${(i % 5) + 1} flex flex-col items-center`}
                style={{ marginTop: i % 2 === 0 ? "0" : "20px" }}
              >
                <div
                  className="w-16 sm:w-20 h-28 sm:h-36 rounded-t-[2rem] rounded-b-xl shadow-lg flex items-center justify-center"
                  style={{ backgroundColor: b.color }}
                >
                  <span className="font-body text-[9px] sm:text-[10px] font-bold text-primary-foreground/90 text-center leading-tight">
                    {b.name}
                  </span>
                </div>
                {/* Cap */}
                <div className="w-6 sm:w-8 h-3 rounded-b-lg" style={{ backgroundColor: b.color, opacity: 0.7 }} />
              </div>
            ))}
            {/* Floating fruits */}
            <span className="absolute -top-4 left-4 text-2xl animate-float-1">🍌</span>
            <span className="absolute -top-2 right-6 text-xl animate-float-3">🍓</span>
            <span className="absolute top-10 right-0 text-lg animate-float-5">🥭</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopsiHeroSection;
