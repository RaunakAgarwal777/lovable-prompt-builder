const items = [
  "ZERO SUGAR",
  "PREBIOTIC POWER",
  "CRAFTED FOR INDIA",
  "ZERO CALORIES",
  "255ML PREMIUM CAN",
  "LAUNCHING 2026",
];

const MarqueeTicker = () => {
  const content = items.join("  •  ");
  return (
    <div className="w-full bg-turbo-spice py-3 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex">
        {[0, 1].map((i) => (
          <span
            key={i}
            className="font-body text-xs sm:text-sm font-bold text-primary-foreground uppercase tracking-[0.15em] mx-4"
          >
            {content}  •  {content}  •&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeTicker;
