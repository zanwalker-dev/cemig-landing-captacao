// src/components/ui/button.tsx
import { forwardRef, type ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

export const ButtonForm = forwardRef<HTMLButtonElement, Props>(function Button(
  { variant = "default", size = "md", className = "", ...props },
  ref
) {
  const base =
    "inline-flex items-center justify-center rounded-full font-medium transition-colors " +
    "focus-visible:outline-none bg-[#0F6C58] hover:brightness-110 cursor-pointer text-black focus-visible:ring-2 focus-visible:ring-primary " +
    "disabled:opacity-50 disabled:pointer-events-none";

  const v =
    variant === "outline"
      ? "border border-border bg-background text-foreground hover:bg-muted"
      : variant === "ghost"
      ? "bg-transparent hover:bg-muted/60"
      : "bg-primary text-primary-foreground hover:opacity-90"; // default

  const s =
    size === "sm"
      ? "h-9 px-4 text-sm"
      : size === "lg"
      ? "h-12 px-7 text-base"
      : "h-11 px-6 text-base"; // md

  return (
    <button ref={ref} className={`${base} ${s} ${className}`} {...props} />
  );
});
