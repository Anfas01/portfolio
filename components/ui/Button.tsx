import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer whitespace-nowrap",
  {
    variants: {
      variant: {
        primary:
          "bg-white text-black hover:bg-zinc-200 active:scale-[0.98]",

        secondary:
          "border border-zinc-800 bg-zinc-900 text-white hover:bg-zinc-800 active:scale-[0.98]",

        outline:
          "border border-zinc-700 text-white hover:border-zinc-600 hover:bg-zinc-900 active:scale-[0.98]",

        ghost:
          "text-white hover:bg-zinc-900 active:scale-[0.98]",
      },

      size: {
        sm: "h-9 px-4 text-sm",

        md: "h-11 px-6",

        lg: "h-12 px-8 text-base",

        icon: "h-11 w-11 p-0",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}