interface TurboFlavor {
  name: string;
  subtitle: string;
  tagline: string;
  bgColor: string;
  icons: string[];
  image: string;
  price: string;
}

const TurboFlavorCard = ({ flavor }: { flavor: TurboFlavor }) => {
  return (
    <div className="card-tilt flex-shrink-0 w-[270px] sm:w-[280px] rounded-[2rem] overflow-hidden bg-card shadow-soft border border-border">
      {/* Top colored area */}
      <div
        className="h-60 flex flex-col items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: flavor.bgColor }}
      >
        <div className="absolute inset-x-0 bottom-0 h-16 bg-card/10 blur-2xl" />
        <img
          src={flavor.image}
          alt={`${flavor.name} can`}
          className="relative h-56 w-auto object-contain drop-shadow-2xl"
        />
      </div>
      {/* Bottom info */}
      <div className="p-5">
        <h3 className="font-display text-xl font-black text-foreground leading-tight">{flavor.name}</h3>
        <p className="font-body text-sm text-muted-foreground mt-1.5 leading-snug">{flavor.tagline}</p>
        <div className="flex gap-2 mt-3 text-lg">{flavor.icons.map((icon, i) => <span key={i}>{icon}</span>)}</div>
        <div className="flex items-center gap-2 mt-4">
          <span className="inline-block px-3 py-1 rounded-full bg-muted text-muted-foreground font-body text-[11px] font-semibold">
            Zero Sugar · Zero Calorie
          </span>
          <span
            className="inline-block px-3 py-1 rounded-full font-body text-xs font-bold text-cream"
            style={{ backgroundColor: flavor.bgColor }}
          >
            {flavor.price}
          </span>
        </div>
        <a
          href="#waitlist"
          className="mt-5 block text-center px-4 py-3 rounded-full font-body text-sm font-bold text-cream transition-transform hover:-translate-y-0.5"
          style={{ backgroundColor: flavor.bgColor }}
        >
          Join Waitlist →
        </a>
      </div>
    </div>
  );
};

export default TurboFlavorCard;
