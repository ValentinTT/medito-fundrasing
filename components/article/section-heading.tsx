import { cn } from "@/lib/utils";
import * as React from "react";

const SectionHeading = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLProps<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      `text-lg md:text-xl tracking-tight font-medium pt-4 pb-2`,
      className
    )}
    {...props}
  />
));
SectionHeading.displayName = "SectionHeading";

export default SectionHeading;
