import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "default" | "outline" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const baseClasses =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-transparent px-4 py-2 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/80 disabled:cursor-not-allowed disabled:opacity-50";

const variantClasses: Record<ButtonVariant, string> = {
  default:
    "bg-amber-600 text-slate-950 shadow-lg shadow-amber-950/20 hover:bg-amber-500",
  outline:
    "border-amber-700/50 bg-transparent text-amber-100 hover:bg-amber-900/20 hover:border-amber-500/70",
  ghost:
    "bg-transparent text-amber-100 hover:bg-amber-900/20",
};

export default function Button({
  variant = "default",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  const classes = [baseClasses, variantClasses[variant], className]
    .filter(Boolean)
    .join(" ");

  return <button type={type} className={classes} {...props} />;
}
