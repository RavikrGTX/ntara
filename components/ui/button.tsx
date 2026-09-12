import * as React from "react";
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-lg text-sm font-medium whitespace-nowrap transition-colors duration-150 motion-reduce:transition-none outline-none select-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.99] [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-brand-navy text-white hover:bg-brand-navy-surface shadow-[0_1px_2px_0_rgb(11_19_43/0.08)]",
        accent:
          "bg-brand-blue text-white hover:bg-brand-blue-hover shadow-[0_1px_3px_0_rgb(29_99_255/0.2)] focus-visible:ring-brand-blue",
        teal:
          "bg-brand-teal text-white hover:bg-brand-teal-hover shadow-[0_1px_3px_0_rgb(13_148_136/0.2)] focus-visible:ring-brand-teal",
        outline:
          "border border-border bg-background text-foreground hover:bg-secondary hover:text-foreground",
        secondary:
          "bg-secondary text-foreground hover:bg-neutral-200/70 border border-border/60",
        ghost:
          "text-foreground-muted hover:bg-secondary hover:text-foreground",
        link:
          "text-brand-blue underline-offset-4 hover:underline focus-visible:ring-0 p-0 h-auto",
      },
      size: {
        default: "h-10 px-4 py-2 gap-2 text-sm",
        sm: "h-8 px-3 gap-1.5 text-xs rounded-md",
        lg: "h-12 px-6 gap-2.5 text-base font-semibold rounded-lg",
        icon: "size-10",
        "icon-sm": "size-8",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonPrimitive.Props,
    VariantProps<typeof buttonVariants> {
  className?: string;
}

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
