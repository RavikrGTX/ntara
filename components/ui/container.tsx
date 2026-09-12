import * as React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  size?: "default" | "narrow" | "wide" | "full";
  noPadding?: boolean;
}

const sizeClasses = {
  narrow: "max-w-4xl",   // 896px - Focused text, forms, single column reading
  default: "max-w-7xl",  // 1280px - Standard institutional page width
  wide: "max-w-[90rem]", // 1440px - Wide dashboards, dense matrices
  full: "max-w-full",
};

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      as: Component = "div",
      size = "default",
      noPadding = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "w-full mx-auto",
          sizeClasses[size],
          !noPadding && "px-5 sm:px-8 lg:px-12",
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Container.displayName = "Container";
