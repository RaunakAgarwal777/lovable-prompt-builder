interface TurboFlavor {
  name: string;
  subtitle: string;
  tagline: string;
  bgColor: string;
  icons: string[];
}

const TurboFlavorCard = ({ flavor }: { flavor: TurboFlavor }) => {
  return (
    <div className="card-tilt flex-shrink-0 w-[270px] sm:w-[280px] rounded-3xl overflow-hidden shadow-lg bg-card">
      {/* Top colored area */}
      <div
        className="h-60 flex flex-col items-center justify-center relative"
        style={{ backgroundColor: flavor.bgColor }}
      >
        {/* Can placeholder */}
        <div className="w-28 h-44 rounded-2xl bg-gradient-to-b from-white/20 to-black/10 flex items-center justify-center shadow-xl">
          <div className="text-center text-primary-foreground">
            <p className="font-display text-xl font-bold">TURBO</p>
            <p className="font-body text-[10px] tracking-widest uppercase mt-0.5">{flavor.subtitle}</p>
          </div>
        </div>
      </div>
      {/* Bottom info */}
      <div className="p-5">
        <h3 className="font-display text-xl font-bold text-foreground">{flavor.name}</h3>
        <p className="font-body text-sm text-muted-foreground italic mt-1 leading-snug">{flavor.tagline}</p>
        <div className="flex gap-2 mt-3 text-lg">{flavor.icons.map((icon, i) => <span key={i}>{icon}</span>)}</div>
        <span className="inline-block mt-3 px-3 py-1 rounded-full bg-muted text-muted-foreground font-body text-xs font-medium">
          Zero Sugar · Zero Calorie
        </span>
        <a
          href="#waitlist"
          className="mt-4 block text-center px-4 py-2.5 rounded-full font-body text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          style={{ backgroundColor: flavor.bgColor }}
        >
          Join Waitlist →
        </a>
      </div>
    </div>
  );
};

export default TurboFlavorCard;
