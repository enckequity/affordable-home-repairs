import type { ReactNode, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "ghost" | "accent";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  className?: string;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  type?: "button" | "submit" | "reset";
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] rounded-lg font-semibold transition-all duration-200",
  accent:
    "bg-accent text-white hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] rounded-lg font-semibold transition-all duration-200",
  ghost:
    "border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg font-semibold transition-all duration-200",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
