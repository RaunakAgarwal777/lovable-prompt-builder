import { useScrollReveal } from "@/hooks/useScrollReveal";
import TurboFlavorCard from "./TurboFlavorCard";
import turboCyanBlue from "@/assets/turbo-cyan-blue.jpg";
import turboMangoBlaze from "@/assets/turbo-mango-blaze.jpg";
import turboGreenLemon from "@/assets/turbo-green-lemon.jpg";
import turboSpiceRush from "@/assets/turbo-spice-rush-single.jpeg";
import turboCrimson from "@/assets/turbo-crimson.jpg";

const flavors = [
{
  name: "TURBO Cyan Blue",
  subtitle: "Cyan Blue",
  tagline: "Cool. Crisp. Electrifying. India's new favorite energy hit.",
  bgColor: "#00B4D8",
  icons: ["🍃", "🍋", "⚡"],
  image: turboCyanBlue
},
{
  name: "TURBO Mango Blaze",
  subtitle: "Mango Blaze",
  tagline: "India's most-loved fruit, now sparkling with attitude.",
  bgColor: "#F4A020",
  icons: ["🥭", "🌶️", "✨"],
  image: turboMangoBlaze
},
{
  name: "TURBO Green Lemon",
  subtitle: "Green Lemon",
  tagline: "Tangy. Refreshing. The one you crack open at noon.",
  bgColor: "#8DC63F",
  icons: ["🍋", "🍈", "🍃"],
  image: turboGreenLemon
},
{
  name: "TURBO Spice Rush",
  subtitle: "Spice Rush",
  tagline: "Indian spice blend meets zero-sugar energy. This one bites back.",
  bgColor: "#2D5A3D",
  icons: ["⭐", "🫚", "🌿"],
  image: turboSpiceRush
},
{
  name: "TURBO Crimson",
  subtitle: "Crimson",
  tagline: "Deep, bold, unapologetically desi. The night shift flavor.",
  bgColor: "#C0392B",
  icons: ["🌺", "🫐", "🍂"],
  image: turboCrimson
}];


const TurboSquadSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="turbo-squad" className="py-20 sm:py-28 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">Meet the Turbo Squad.</h2>
          <p className="font-body text-lg text-muted-foreground mt-3">Five flavors. All zero sugar. All very Indian.</p>
        </div>
        <div className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 reveal">
          {flavors.map((f) =>
          <div key={f.name} className="snap-center">
              <TurboFlavorCard flavor={f} />
            </div>
          )}
        </div>
        <p className="text-center font-body text-sm text-muted-foreground mt-8 reveal">All cans: ₹39 · 225ml · Zero Sugar · Zero Calorie · Indian Spice Prebiotic Blend

        </p>
      </div>
    </section>);

};

export default TurboSquadSection;