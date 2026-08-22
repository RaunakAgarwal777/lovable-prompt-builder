import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const WaitlistSection = () => {
  const ref = useScrollReveal();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section id="waitlist" className="py-24 sm:py-32 bg-primary relative overflow-hidden" ref={ref}>
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-secondary/30 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-turbo-crimson/30 blur-3xl" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="eyebrow text-primary-foreground/70 mb-4 reveal">Pre-launch access</p>
        <h2 className="font-display text-4xl sm:text-6xl font-black text-primary-foreground mb-5 reveal leading-[1.05]">
          Be First. Join the Turbo Tribe.
        </h2>
        <p className="font-body text-lg text-primary-foreground/80 mb-10 reveal">
          Get early access, launch discounts, and flavor drops straight to your inbox.
        </p>
        {submitted ? (
          <div className="reveal visible">
            <p className="font-body text-lg text-primary-foreground font-semibold">
              ⚡ You're in! Welcome to the Turbo Tribe.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto reveal">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-6 py-4 rounded-full font-body text-sm text-foreground bg-primary-foreground outline-none ring-offset-2 ring-offset-primary focus:ring-2 focus:ring-ink placeholder:text-muted-foreground shadow-soft"
            />
            <button
              type="submit"
              className="px-8 py-4 rounded-full bg-spice-deep text-cream font-body font-bold text-sm shadow-soft transition-transform hover:-translate-y-0.5"
            >
              Join Waitlist ⚡
            </button>
          </form>
        )}
        <p className="font-body text-xs text-primary-foreground/50 mt-6 reveal">
          No spam. No sugar. Just early access.
        </p>
      </div>
    </section>
  );
};

export default WaitlistSection;
