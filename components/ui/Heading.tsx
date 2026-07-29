import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const headingVariants = cva("font-bold tracking-tight text-zinc-50", {
  variants: {
    level: {
      1: "text-5xl md:text-6xl lg:text-7xl",
      2: "text-4xl md:text-5xl",
      3: "text-3xl md:text-4xl",
      4: "text-2xl",
    },
  },

  defaultVariants: {
    level: 2,
  },
});

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingVariants> & {
    as?: "h1" | "h2" | "h3" | "h4";
  };

export function Heading({
  as: Component = "h2",
  level,
  className,
  ...props
}: HeadingProps) {
  return (
    <Component
      className={cn(headingVariants({ level }), className)}
      {...props}
    />
  );
}