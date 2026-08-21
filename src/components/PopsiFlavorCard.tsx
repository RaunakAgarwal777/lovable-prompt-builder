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
    <div className="card-tilt flex-shrink-0 w-[270px] sm:w-[280px] rounded-[2rem] overflow-hidden bg-card shadow-soft border border-border">
      <div
        className="h-56 flex items-center justify-center relative"
        style={{ backgroundColor: flavor.bgColor }}
      >
        <img
          src={flavor.image}
          alt={`POPSI ${flavor.name} bottle`}
          className="h-48 w-auto object-contain drop-shadow-2xl"
        />
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-black text-foreground leading-tight">{flavor.name}</h3>
        <p className="font-body text-sm text-muted-foreground mt-1.5 leading-snug">{flavor.tagline}</p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex gap-2 text-lg">{flavor.icons.map((icon, i) => <span key={i}>{icon}</span>)}</div>
          <span className="inline-block px-3 py-1 rounded-full bg-popsi-brown text-cream font-body text-xs font-bold">
            {flavor.price}
          </span>
        </div>
        <a
          href="#waitlist"
          className="mt-5 block text-center px-4 py-3 rounded-full bg-popsi-brown text-cream font-body text-sm font-bold transition-transform hover:-translate-y-0.5"
        >
          Join Waitlist →
        </a>
      </div>
    </div>
  );
};

export default PopsiFlavorCard;
