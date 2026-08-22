import turboLineup from "@/assets/turbo-lineup.jpeg";
import { Zap, Leaf, Sparkles, FlaskConical, CupSoda } from "lucide-react";

const features = [
  { icon: Zap, label: "Zero Sugar" },
  { icon: Leaf, label: "Prebiotic Blend" },
  { icon: Sparkles, label: "Crafted for India" },
  { icon: FlaskConical, label: "Indian Spice Formula" },
  { icon: CupSoda, label: "255ml Premium Can" },
];

const HeroSection = () => {
  return (
    <section className="relative flex items-center overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Warm gradient base */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-8 items-center">
          {/* Left */}
          <div className="lg:col-span-3 text-foreground">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card/70 border border-primary/20 text-primary eyebrow mb-6">
              <Zap className="w-3.5 h-3.5" />
              Made for India · Zero Sugar · Zero Guilt
            </span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-black leading-[0.95] mb-6">
              India's First<br />
              Culturally Rooted<br />
              <span className="text-primary">Energy Drink.</span>
            </h1>
            <p className="text-lg sm:text-xl font-body text-foreground/70 mb-8 max-w-xl">
              Zero Sugar · Zero Calorie · Sparkling Prebiotic Tonic · ₹49
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#turbo-squad"
                className="btn-pop px-8 py-3.5 rounded-full font-body font-bold text-sm text-primary-foreground bg-primary"
              >
                Shop TURBO →
              </a>
              <a
                href="#turbo-squad"
                className="px-8 py-3.5 rounded-full border-2 border-ink text-ink font-body font-bold text-sm hover:bg-ink hover:text-cream transition-colors"
              >
                Meet All Flavors
              </a>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-3">
              {features.map((f) => (
                <span key={f.label} className="flex items-center gap-1.5 eyebrow text-foreground/55">
                  <f.icon className="w-3.5 h-3.5 text-primary" />
                  {f.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right — 5-can lineup */}
          <div className="lg:col-span-2 flex justify-center items-center relative">
            <div className="absolute w-72 h-72 sm:w-[26rem] sm:h-[26rem] rounded-full bg-secondary/40 blur-3xl" />
            <img
              src={turboLineup}
              alt="TURBO energy drink lineup - all 5 flavors"
              className="relative w-full max-w-md sm:max-w-lg rounded-[2rem] shadow-pop rotate-[2deg]"
            />
            <span className="absolute top-8 right-4 text-3xl animate-float-1">🍃</span>
            <span className="absolute top-20 left-2 text-2xl animate-float-2">🍋</span>
            <span className="absolute bottom-16 right-8 text-xl animate-float-3">✨</span>
            <span className="absolute bottom-8 left-8 text-2xl animate-float-4">💧</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
