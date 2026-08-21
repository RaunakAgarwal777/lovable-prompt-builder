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
    <section id="waitlist" className="py-20 sm:py-28 bg-primary" ref={ref}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-4 reveal">
          Be First. Join the Rushmore Tribe.
        </h2>
        <p className="font-body text-lg text-primary-foreground/80 mb-10 reveal">
          Get early access, launch discounts, and flavor drops straight to your inbox.
        </p>
        {submitted ? (
          <div className="reveal visible">
            <p className="font-body text-lg text-primary-foreground font-semibold">
              ⚡ You're in! Welcome to the Rushmore Tribe.
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
              className="flex-1 px-6 py-3 rounded-full font-body text-sm text-foreground bg-primary-foreground outline-none placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              className="px-7 py-3 rounded-full bg-turbo-spice text-primary-foreground font-body font-semibold text-sm hover:opacity-90 transition-opacity"
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
