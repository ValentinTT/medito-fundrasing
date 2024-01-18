"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { Icons } from "../icons";
import { useDonors } from "../donation/donors/hook";
import { useState } from "react";
import { cn, shuffle } from "@/lib/utils";
import DonorItem from "../donation/donors/donor";

const Counter = () => {
  const [donors] = useDonors();
  const [icons] = useState(
    shuffle([Icons.sun, Icons.rainbow, Icons.sparkles, Icons.zap, Icons.laugh])
  );
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border border-slate-800 rounded-sm relative">
        <Icons.bell
          className={cn("h-4 w-4 m-2", {
            "animate-wiggle animate-thrice animate-duration-300": true,
          })}
        />{" "}
        <span className="absolute flex h-2 w-2 -top-1 -right-1">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-5">
        {donors &&
          donors.donors.slice(0, 5).map((donor, idx) => {
            return (
              <DropdownMenuItem key={idx}>
                <DonorItem donor={donor} Icon={icons[idx]} />
              </DropdownMenuItem>
            );
          })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Counter;
