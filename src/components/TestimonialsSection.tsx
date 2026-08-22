import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    bg: "#E3F2FD",
    quote: "Finally — an energy drink that doesn't taste like a lab experiment. TURBO is what India needed.",
    author: "Aarav M., Mumbai",
  },
  {
    bg: "#E8F5E9",
    quote: "The POPSI Naturals jeera bottle is literally what my mom used to make. Respect.",
    author: "Priya S., Delhi",
  },
  {
    bg: "#FFF3E0",
    quote: "Sugarcane Punch takes me straight to a roadside stall in Agra. But in a bottle. Mind blown.",
    author: "Rahul K., Bengaluru",
  },
];

const TestimonialsSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-20 sm:py-28 bg-card" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-3 reveal">India is waiting.</h2>
        <p className="font-body text-lg text-muted-foreground mb-14 reveal">
          We're pre-launch. But the hype is already real.
        </p>
        <div className="grid md:grid-cols-3 gap-6 reveal">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="rounded-3xl p-8 text-left shadow-sm"
              style={{ backgroundColor: t.bg }}
            >
              <p className="text-lg mb-4">⭐⭐⭐⭐⭐</p>
              <p className="font-body text-sm text-foreground italic leading-relaxed mb-6">"{t.quote}"</p>
              <p className="font-body text-sm font-semibold text-foreground">— {t.author}</p>
            </div>
          ))}
        </div>
        <p className="font-display text-2xl sm:text-3xl font-bold text-foreground mt-14 reveal">
          10,000+ people already on the waitlist. 🚀
        </p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
