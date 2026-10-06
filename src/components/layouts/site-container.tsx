import type { ComponentProps } from "react";
import { cn } from "cn";

type SiteContainerProps = ComponentProps<"div">;

export function SiteContainer({
  className,
  ...props
}: SiteContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-5xl px-5 sm:px-8", className)}
      {...props}
    />
  );
}
