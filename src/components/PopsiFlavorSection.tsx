import { useScrollReveal } from "@/hooks/useScrollReveal";
import PopsiFlavorCard from "./PopsiFlavorCard";
import popsiSugarcane from "@/assets/popsi-sugarcane.png";
import popsiStrawberry from "@/assets/popsi-strawberry.png";
import popsiBanana from "@/assets/popsi-banana.png";
import popsiCoconut from "@/assets/popsi-coconut.png";
import popsiJeera from "@/assets/popsi-jeera.png";
import popsiMango from "@/assets/popsi-mango.png";

const flavors = [
  {
    name: "Sugarcane Punch",
    tagline: "Fresh-pressed sugarcane in every sip. Summer in a bottle.",
    bgColor: "#E8F5E9",
    icons: ["🎋", "🍋", "🧊"],
    price: "₹18",
    image: popsiSugarcane,
  },
  {
    name: "Strawberry Splash",
    tagline: "Sweet-tart and gorgeous pink. One sip and you'll understand.",
    bgColor: "#FCE4EC",
    icons: ["🍓", "🌹", "✨"],
    price: "₹18",
    image: popsiStrawberry,
  },
  {
    name: "Banana Bash",
    tagline: "Thick, creamy, and naturally sweet. The one kids steal from you.",
    bgColor: "#FFFDE7",
    icons: ["🍌", "🥛", "🍯"],
    price: "₹20",
    image: popsiBanana,
  },
  {
    name: "Coconut Water",
    tagline: "Pure, refreshing coconut water straight from nature. Hydration at its best.",
    bgColor: "#E0F2F1",
    icons: ["🥥", "💧", "🌴"],
    price: "₹15",
    image: popsiCoconut,
  },
  {
    name: "Indian Jeera",
    tagline: "The OG desi digestive. Tangy jeera water, now in a bottle.",
    bgColor: "#FFF0CC",
    icons: ["🫘", "🍋", "🍃"],
    price: "₹15",
    image: popsiJeera,
  },
  {
    name: "Mango Smoothie",
    tagline: "Pure Alphonso vibes. India's king of fruits, bottled with love.",
    bgColor: "#FFF3E0",
    icons: ["🥭", "🌸", "🍃"],
    price: "₹20",
    image: popsiMango,
  },
];

const PopsiFlavorSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="popsi-flavors" className="py-20 sm:py-28 bg-mint-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="eyebrow text-turbo-spice text-center mb-3 reveal">POPSI Naturals</p>
        <h2 className="font-display text-4xl sm:text-6xl font-black text-popsi-brown text-center mb-12 reveal leading-[1.05]">
          Six flavors of real India.
        </h2>
        <div className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 reveal">
          {flavors.map((f) => (
            <div key={f.name} className="snap-center">
              <PopsiFlavorCard flavor={f} />
            </div>
          ))}
        </div>
        <p className="text-center font-body text-xs text-muted-foreground mt-3 animate-pulse">← Swipe for more flavors →</p>
      </div>
    </section>
  );
};

export default PopsiFlavorSection;
