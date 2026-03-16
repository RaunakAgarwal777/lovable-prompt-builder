import { useScrollReveal } from "@/hooks/useScrollReveal";

const OurStorySection = () => {
  const ref = useScrollReveal();

  return (
    <section id="our-story" className="py-20 sm:py-28 bg-[#F0FAF4]" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="reveal">
          <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-turmeric mb-4">
            The RUSHMORE Story
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-turbo-spice mb-6 leading-snug">
            Energy drinks forgot about India. So we built our own.
          </h2>
          <div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            <p>
              RUSHMORE was born from a simple question: why do all energy drinks taste like they were made for someone else?
            </p>
            <p>
              We went back to Indian spices — cardamom, ginger, star anise — and built a zero-sugar prebiotic tonic that gives you real energy without the crash or the guilt.
            </p>
            <p>
              And POPSI Naturals? That's our love letter to every sugarcane stall, every fresh coconut, every cold jeera glass from childhood.
            </p>
          </div>
          <a
            href="#"
            className="inline-block mt-6 font-body text-sm font-semibold text-popsi-brown underline underline-offset-4 hover:opacity-70 transition-opacity"
          >
            Read Our Full Story →
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
