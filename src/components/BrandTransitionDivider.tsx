import { ChevronDown } from "lucide-react";

const BrandTransitionDivider = () => (
  <div className="w-full py-7 bg-gradient-to-r from-turmeric via-secondary to-primary text-center">
    <p className="inline-flex items-center gap-2 font-body text-sm font-bold text-primary-foreground uppercase tracking-[0.2em]">
      And now, meet the family.
      <ChevronDown className="w-4 h-4 animate-bounce" />
    </p>
  </div>
);

export default BrandTransitionDivider;
