import * as React from "react";

import { cn } from "@/lib/utils";

type TextProps = React.HTMLAttributes<HTMLParagraphElement>;

export function Text({
  className,
  ...props
}: TextProps) {
  return (
    <p
      className={cn(
        "text-lg leading-8 text-zinc-400",
        className
      )}
      {...props}
    />
  );
}