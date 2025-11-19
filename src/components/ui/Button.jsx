import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../lib/utils";

export function Button({ asChild, className = "", variant = "primary", size = "md", ...props }) {
  const Comp = asChild ? Slot : "button";
  const base = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-2xl disabled:opacity-50 disabled:pointer-events-none";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-500 shadow-sm shadow-blue-600/20 focus:ring-blue-500 focus:ring-offset-slate-900",
    secondary: "bg-slate-800 text-slate-100 hover:bg-slate-700 shadow-sm focus:ring-slate-500 focus:ring-offset-slate-900",
    ghost: "bg-transparent hover:bg-slate-800/60 text-slate-100",
    outline: "border border-slate-700 hover:bg-slate-800 text-slate-100",
  };
  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-5",
    lg: "h-12 px-6 text-lg",
  };
  return <Comp className={cn(base, variants[variant], sizes[size], className)} {...props} />;
}
