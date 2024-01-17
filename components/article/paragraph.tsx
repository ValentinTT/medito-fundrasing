import { cn } from "@/lib/utils";
import * as React from "react";

const Paragraph = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLProps<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn(`max-w-3xl py-2`, className)} {...props} />
));
Paragraph.displayName = "Paragraph";

export default Paragraph;
