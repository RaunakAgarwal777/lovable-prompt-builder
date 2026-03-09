import turboLineup from "@/assets/turbo-lineup.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#FDEBD3] pt-16">
      {/* Warm gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FDEBD3] via-[#FDE8CD] to-[#FAD9B0]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* Left */}
          <div className="lg:col-span-3 text-foreground">
            <span className="inline-block px-4 py-1.5 rounded-full bg-foreground/10 text-sm font-body font-medium mb-6">Made for India. Zero Sugar  Zero Guilt.

            </span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] mb-6">
              India's First<br />
              Culturally Rooted<br />
              Energy Drink.
            </h1>
            <p className="text-lg sm:text-xl font-body text-foreground/70 mb-8">
              Zero Sugar · Zero Calorie · Sparkling Prebiotic Tonic · ₹39
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#turbo-squad"
                className="px-7 py-3 rounded-full font-body font-semibold hover:opacity-90 transition-opacity text-sidebar-primary text-[sidebar-primary-foreground] bg-slate-950">
                
                Shop TURBO →
              </a>
              <a
                href="#turbo-squad"
                className="px-7 py-3 rounded-full border-2 border-foreground/40 text-foreground font-body font-semibold text-sm hover:bg-foreground/10 transition-colors">
                
                Meet All Flavors
              </a>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-body text-foreground/50 tracking-wide uppercase">
              <span>⚡ Zero Sugar</span>
              <span>🌿 Prebiotic Blend</span>
              <span>🇮🇳 Crafted for India</span>
              <span>🧪 Indian Spice Formula</span>
              <span>✨ 355ml Premium Can</span>
            </div>
          </div>

          {/* Right — 5-can lineup */}
          <div className="lg:col-span-2 flex justify-center items-center relative">
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-foreground/5 blur-3xl" />
            <img
              src={turboLineup}
              alt="TURBO energy drink lineup - all 5 flavors"
              className="relative w-full max-w-md sm:max-w-lg rounded-2xl shadow-2xl transform rotate-[2deg]" />
            
            <span className="absolute top-8 right-4 text-3xl animate-float-1">🍃</span>
            <span className="absolute top-20 left-2 text-2xl animate-float-2">🍋</span>
            <span className="absolute bottom-16 right-8 text-xl animate-float-3">✨</span>
            <span className="absolute bottom-8 left-8 text-2xl animate-float-4">💧</span>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;