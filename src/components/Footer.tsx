import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-near-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1 */}
          <div>
            <div className="flex items-center gap-1.5 font-display text-xl font-bold text-primary-foreground mb-3">
              <Zap className="w-5 h-5 text-primary" />
              RUSHMORE Beverages
            </div>
            <p className="font-body text-sm text-primary-foreground/50 italic">
              Energy for India. Naturals for Everyone.
            </p>
          </div>
          {/* Col 2 */}
          <div>
            <h4 className="font-body text-sm font-bold text-primary-foreground mb-4 uppercase tracking-wider">TURBO</h4>
            <ul className="space-y-2">
              {["Cyan Blue", "Mango Blaze", "Green Lemon", "Spice Rush", "Crimson"].map((f) => (
                <li key={f}>
                  <a href="#turbo-squad" className="font-body text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                    {f}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Col 3 */}
          <div>
            <h4 className="font-body text-sm font-bold text-primary-foreground mb-4 uppercase tracking-wider">POPSI Naturals</h4>
            <ul className="space-y-2">
              {["Indian Jeera", "Sugarcane Punch", "Banana Bash", "Strawberry Plush", "Mango Smoothie"].map((f) => (
                <li key={f}>
                  <a href="#popsi-flavors" className="font-body text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                    {f}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Col 4 */}
          <div>
            <h4 className="font-body text-sm font-bold text-primary-foreground mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              {["Our Story", "Careers", "Press", "Contact", "Pitch & Pact 2026"].map((l) => (
                <li key={l}>
                  <a href="#" className="font-body text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-primary-foreground/40">
            © 2026 TURBO Beverages Pvt. Ltd. · Made with 🌿 in India
          </p>
          <div className="flex gap-4">
            {["Instagram", "TikTok", "YouTube"].map((s) => (
              <a
                key={s}
                href="#"
                className="font-body text-xs text-primary-foreground/40 hover:text-primary-foreground transition-colors px-3 py-1.5 rounded-lg hover:bg-primary-foreground/10"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
