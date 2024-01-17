import { cn } from "@/lib/utils";
import * as React from "react";

const SubHeading = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLProps<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      `text-xl md:text-2xl tracking-tight font-medium pt-5 pb-3`,
      className
    )}
    {...props}
  />
));
SubHeading.displayName = "SubHeading";

export default SubHeading;
