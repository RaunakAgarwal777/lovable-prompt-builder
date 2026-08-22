import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Zap, Leaf, Flag, FlaskConical } from "lucide-react";

const stats = [
  { icon: Zap, value: "0g", label: "Sugar per can", tint: "bg-primary/10 text-primary" },
  { icon: Leaf, value: "0", label: "Calories", tint: "bg-turbo-green/15 text-turbo-spice" },
  { icon: Flag, value: "100%", label: "Made in India", tint: "bg-secondary/20 text-secondary-foreground" },
  { icon: FlaskConical, value: "Indian Spice", label: "Prebiotic Blend", tint: "bg-accent/10 text-accent" },
];

const WhyTurboSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-16 sm:py-24 bg-cream border-y border-border" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="eyebrow text-primary mb-4 reveal">Why TURBO</p>
        <h2 className="font-display text-3xl sm:text-5xl font-black text-foreground mb-14 reveal leading-tight">
          Energy that doesn't cost your health.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 reveal">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-3">
              <span className={`w-16 h-16 rounded-full flex items-center justify-center ${s.tint}`}>
                <s.icon className="w-7 h-7" />
              </span>
              <span className="font-display text-2xl sm:text-3xl font-black text-foreground">{s.value}</span>
              <span className="font-body text-sm text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTurboSection;
