import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline" | "ghost";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", fullWidth = false, children, ...props }, ref) => {
    const variants: Record<ButtonVariant, string> = {
      primary:
        "bg-red-600 text-white border border-transparent hover:bg-red-500",
      outline:
        "bg-transparent text-zinc-100 border border-zinc-800 hover:border-zinc-700",
      ghost:
        "bg-transparent text-zinc-200 hover:text-white",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-2xl px-4 py-3 font-semibold transition disabled:cursor-not-allowed disabled:opacity-60",
          fullWidth && "w-full",
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
