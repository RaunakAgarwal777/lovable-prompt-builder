interface PopsiFlavor {
  name: string;
  tagline: string;
  bgColor: string;
  icons: string[];
  price: string;
  image: string;
}

const PopsiFlavorCard = ({ flavor }: { flavor: PopsiFlavor }) => {
  return (
    <div className="card-tilt flex-shrink-0 w-[270px] sm:w-[280px] rounded-[2rem] overflow-hidden shadow-lg bg-card">
      <div
        className="h-56 flex items-center justify-center relative"
        style={{ backgroundColor: flavor.bgColor }}
      >
        <img
          src={flavor.image}
          alt={`POPSI ${flavor.name} bottle`}
          className="h-48 w-auto object-contain drop-shadow-xl"
        />
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-bold text-foreground">{flavor.name}</h3>
        <p className="font-body text-sm text-muted-foreground italic mt-1 leading-snug">{flavor.tagline}</p>
        <div className="flex gap-2 mt-3 text-lg">{flavor.icons.map((icon, i) => <span key={i}>{icon}</span>)}</div>
        <span className="inline-block mt-3 px-3 py-1 rounded-full bg-muted text-muted-foreground font-body text-xs font-bold">
          {flavor.price}
        </span>
        <a
          href="#waitlist"
          className="mt-4 block text-center px-4 py-2.5 rounded-full bg-popsi-brown text-primary-foreground font-body text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Join Waitlist →
        </a>
      </div>
    </div>
  );
};

export default PopsiFlavorCard;
