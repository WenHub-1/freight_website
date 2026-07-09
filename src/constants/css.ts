export const FEATURE_CARD =
  "bg-navy-mid border border-primary/20 rounded-3xl p-10";

export const REVEAL_CARD =
  "reveal relative bg-navy-mid border border-white/7 rounded-3xl p-8 transition-all duration-350 hover:-translate-y-1.5 hover:border-primary/35 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3),0_0_0_1px_rgb(var(--primary-rgb) / 0.1)] overflow-hidden group cursor-default";

export const TESTIMONIAL_CARD =
  "reveal bg-background border border-white/6 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25";

export const SECTION_TAG =
  "inline-block bg-primary/12 border border-primary/25 text-primary text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4";

export const HEADING_CLAMP = "text-[clamp(1.8rem,4vw,2.8rem)]";

// Tailwind picks up these classes because they're literal strings in this
// file; index into this array (with % length) for staggered reveal delays.
export const STAGGER_DELAYS = [
  "delay-0",
  "delay-100",
  "delay-200",
  "delay-300",
  "delay-[400ms]",
  "delay-500",
  "delay-[600ms]",
  "delay-700",
];
