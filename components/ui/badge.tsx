import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 font-medium transition-colors select-none",
  {
    variants: {
      variant: {
        default:
          "bg-secondary text-foreground border border-border",
        navy:
          "bg-brand-navy text-white border border-brand-navy-muted",
        accent:
          "bg-brand-blue-subtle text-brand-blue border border-brand-blue/20",
        teal:
          "bg-brand-teal-subtle text-brand-teal border border-brand-teal/20",
        outline:
          "bg-transparent text-foreground-muted border border-border hover:border-foreground-muted/40",
      },
      size: {
        sm: "text-[0.7rem] px-2 py-0.5 rounded-full tracking-wide uppercase font-semibold",
        default: "text-xs px-2.5 py-1 rounded-full font-medium",
        lg: "text-sm px-3.5 py-1.5 rounded-full font-medium",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  indicator?: boolean;
}

export function Badge({
  className,
  variant,
  size,
  indicator,
  children,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, size, className }))}
      {...props}
    >
      {indicator && (
        <span
          className={cn(
            "size-1.5 rounded-full",
            variant === "accent" && "bg-brand-blue",
            variant === "teal" && "bg-brand-teal",
            variant === "navy" && "bg-brand-blue",
            (!variant || variant === "default" || variant === "outline") &&
              "bg-foreground-muted"
          )}
          aria-hidden="true"
        />
      )}
      {children}
    </div>
  );
}

export { badgeVariants };
