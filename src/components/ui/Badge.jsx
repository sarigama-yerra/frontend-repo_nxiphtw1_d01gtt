import { cn } from "../../lib/utils";

export function Badge({ className = "", children }) {
  return (
    <span className={cn("inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-xs font-medium text-white/90 ring-1 ring-inset ring-white/15 shadow-sm", className)}>
      {children}
    </span>
  );
}
