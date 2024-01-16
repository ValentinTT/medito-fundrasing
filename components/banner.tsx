import { cn } from "@/lib/utils";

const Banner = () => {
  return (
    <div
      className={cn(
        "h-96 w-full",
        "bg-gradient-to-r from-rose-400 to-orange-300"
      )}
    ></div>
  );
};

export default Banner;
