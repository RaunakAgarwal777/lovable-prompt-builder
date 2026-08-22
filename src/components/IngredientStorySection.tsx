import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Flame, Sprout, Zap } from "lucide-react";

const tiles = [
  {
    icon: Flame,
    title: "Indian Spice Blend",
    desc: "Cardamom, star anise, and ginger — the same spices your dadi used, now powering your day.",
  },
  {
    icon: Sprout,
    title: "Prebiotic Fiber",
    desc: "Feeds your gut's good bacteria. Every sip is a favor to your microbiome.",
  },
  {
    icon: Zap,
    title: "Zero Sugar Formula",
    desc: "Sweetened naturally. Carbonated fully. No compromise on taste.",
  },
];

const IngredientStorySection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-20 sm:py-28 bg-turbo-spice" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 reveal">
          We didn't copy a formula. We built one for India.
        </h2>
        <p className="font-body text-lg text-primary-foreground/70 mb-14 reveal">
          Real ingredients. Indian roots. Backed by function.
        </p>
        <div className="grid md:grid-cols-3 gap-6 reveal">
          {tiles.map((t) => (
            <div
              key={t.title}
              className="rounded-3xl border border-primary-foreground/20 p-8 text-left"
            >
              <span className="text-4xl block mb-4">{t.icon}</span>
              <h3 className="font-display text-xl font-bold text-primary-foreground mb-2">{t.title}</h3>
              <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
        <p className="font-body text-xs text-primary-foreground/50 mt-12 reveal">
          RUSHMORE contains no artificial sweeteners, no added sugar, and is crafted for the Indian palate.
        </p>
      </div>
    </section>
  );
};

export default IngredientStorySection;
