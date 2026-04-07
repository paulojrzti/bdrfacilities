import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/utils/cn";
import { Loader2 } from "lucide-react";
import Link from "next/link";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  href?: string;
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading,
      children,
      disabled,
      href,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-md font-medium font-heading transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary:
        "btn-gold-metallic text-white font-semibold active:scale-[0.97]",
      secondary:
        "bg-surface text-white hover:bg-surface/80 border border-border-dark",
      outline:
        "border border-gold/60 text-gold hover:border-gold hover:bg-gold/8 transition-colors duration-300",
    };

    const sizes = {
      sm: "h-9 px-4 text-xs",
      md: "h-12 px-8 text-sm",
      lg: "h-14 px-10 text-base",
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      return (
        <Link 
          href={href} 
          className={classes} 
          // @ts-ignore
          ref={ref as any}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        // @ts-ignore
        ref={ref}
        className={classes}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };

