import { cn } from "@/lib/utils";
import * as React from "react";

const ListItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn(`max-w-3xl py-2`, className)} {...props}>
    <div className="mb-4 grid grid-cols-[25px_1fr] items-center pb-4 last:mb-0 last:pb-0">
      <span className="flex h-2 w-2 rounded-full bg-sky-500" />
      <div>{children}</div>
    </div>
  </div>
));
ListItem.displayName = "ListItem";

export default ListItem;
