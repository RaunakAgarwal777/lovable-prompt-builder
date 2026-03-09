import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { icon: "⚡", value: "0g", label: "Sugar per can" },
  { icon: "🌿", value: "0", label: "Calories" },
  { icon: "🇮🇳", value: "100%", label: "Made in India" },
  { icon: "🧪", value: "Indian Spice", label: "Prebiotic Blend" },
];

const WhyTurboSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-16 sm:py-20 bg-[#FFF3E0]" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-12 reveal">
          Energy that doesn't cost your health.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 reveal">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2">
              <span className="text-5xl">{s.icon}</span>
              <span className="font-display text-3xl font-bold text-foreground">{s.value}</span>
              <span className="font-body text-sm text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTurboSection;
