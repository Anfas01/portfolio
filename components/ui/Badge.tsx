import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  [
    "inline-flex items-center justify-center",
    "rounded-full",
    "border",
    "px-3 py-1",
    "text-sm",
    "font-medium",
    "transition-colors",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "border-zinc-800 bg-zinc-900 text-zinc-100",

        outline:
          "border-zinc-700 bg-transparent text-zinc-300",
      },
    },

    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({
  className,
  variant,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        badgeVariants({ variant }),
        className
      )}
      {...props}
    />
  );
}