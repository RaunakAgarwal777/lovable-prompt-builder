import { useScrollReveal } from "@/hooks/useScrollReveal";

const ExpansionSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-20 sm:py-28 bg-dark-navy" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary font-body text-sm font-medium mb-6 reveal">
          Coming Soon to Southeast Asia
        </span>
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-6 reveal">
          From India to the World.
        </h2>
        <p className="font-body text-base sm:text-lg text-primary-foreground/70 mb-8 max-w-2xl mx-auto reveal">
          TURBO and POPSI Naturals are expanding across Southeast Asia — Philippines, Indonesia, Thailand, Vietnam. Coconut water and sugarcane punch are already familiar flavors there. Now they'll carry an Indian soul. — Philippines, Indonesia, Thailand, Vietnam. Coconut water and sugarcane punch are already familiar flavors there. Now they'll carry an Indian soul.
        </p>
        <div className="flex justify-center gap-4 text-4xl mb-8 reveal">
          <span>🇮🇳</span><span>🇵🇭</span><span>🇮🇩</span><span>🇹🇭</span><span>🇻🇳</span>
        </div>
        <a
          href="#"
          className="inline-flex px-7 py-3 rounded-full border-2 border-primary-foreground/50 text-primary-foreground font-body font-semibold text-sm hover:bg-primary-foreground/10 transition-colors reveal"
        >
          Partner With Us →
        </a>
      </div>
    </section>
  );
};

export default ExpansionSection;
