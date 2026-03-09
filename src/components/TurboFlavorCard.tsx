interface TurboFlavor {
  name: string;
  subtitle: string;
  tagline: string;
  bgColor: string;
  icons: string[];
  image: string;
}

const TurboFlavorCard = ({ flavor }: { flavor: TurboFlavor }) => {
  return (
    <div className="card-tilt flex-shrink-0 w-[270px] sm:w-[280px] rounded-3xl overflow-hidden shadow-lg bg-card">
      {/* Top colored area */}
      <div
        className="h-60 flex flex-col items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: flavor.bgColor }}
      >
        <img
          src={flavor.image}
          alt={`${flavor.name} can`}
          className="h-56 w-auto object-contain drop-shadow-xl"
        />
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
