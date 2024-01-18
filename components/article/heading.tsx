import { cn } from "@/lib/utils";
import * as React from "react";

const Heading = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLProps<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    className={cn(
      `text-xl sm:text-2xl md:text-4xl tracking-tight font-semibold py-4`,
      className
    )}
    {...props}
  />
));
Heading.displayName = "Heading";

export default Heading;
