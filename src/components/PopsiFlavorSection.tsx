import { useScrollReveal } from "@/hooks/useScrollReveal";
import PopsiFlavorCard from "./PopsiFlavorCard";

const flavors = [
  {
    name: "Sugarcane Punch",
    tagline: "Fresh-pressed sugarcane in every sip. Summer in a bottle.",
    bgColor: "#E8F5E9",
    bottleColor: "#81C784",
    icons: ["🎋", "🍋", "🧊"],
    price: "₹18",
  },
  {
    name: "Strawberry Plush",
    tagline: "Sweet-tart and gorgeous pink. One sip and you'll understand.",
    bgColor: "#FCE4EC",
    bottleColor: "#F48FB1",
    icons: ["🍓", "🌹", "✨"],
    price: "₹18",
  },
  {
    name: "Banana Bash",
    tagline: "Thick, creamy, and naturally sweet. The one kids steal from you.",
    bgColor: "#FFFDE7",
    bottleColor: "#FFD54F",
    icons: ["🍌", "🥛", "🍯"],
    price: "₹20",
  },
  {
    name: "Coconut Water",
    tagline: "Pure, refreshing coconut water straight from nature. Hydration at its best.",
    bgColor: "#E0F2F1",
    bottleColor: "#80CBC4",
    icons: ["🥥", "💧", "🌴"],
    price: "₹15",
  },
  {
    name: "Indian Jeera",
    tagline: "The OG desi digestive. Tangy jeera water, now in a bottle.",
    bgColor: "#FFF0CC",
    bottleColor: "#E6C84D",
    icons: ["🫘", "🍋", "🍃"],
    price: "₹15",
  },
  {
    name: "Mango Smoothie",
    tagline: "Pure Alphonso vibes. India's king of fruits, bottled with love.",
    bgColor: "#FFF3E0",
    bottleColor: "#FFB74D",
    icons: ["🥭", "🌸", "🍃"],
    price: "₹20",
  },
];

const PopsiFlavorSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="popsi-flavors" className="py-20 sm:py-28 bg-popsi-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-popsi-brown text-center mb-12 reveal">
          Six flavors of real India.
        </h2>
        <div className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 reveal">
          {flavors.map((f) => (
            <div key={f.name} className="snap-center">
              <PopsiFlavorCard flavor={f} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopsiFlavorSection;
