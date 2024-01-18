"use client";
import { Icons } from "@/components/icons";
import DonorItem from "./donor";
import { useDonors } from "./hook";
import { useState } from "react";
import { cn, shuffle } from "@/lib/utils";

const DonorsList = ({ className }: { className?: string }) => {
  const [donors] = useDonors();
  const [icons] = useState(
    shuffle([Icons.sun, Icons.rainbow, Icons.sparkles, Icons.zap, Icons.laugh])
  );

  return (
    <div className={cn("", className)}>
      <div className="flex flex-wrap">
        {donors
          ? donors.donors.slice(0, 5).map((donor, idx) => {
              return <DonorItem donor={donor} Icon={icons[idx]} key={idx} />;
            })
          : new Array(5).fill(undefined).map((_, idx) => {
              return (
                <DonorItem donor={undefined} Icon={icons[idx]} key={idx} />
              );
            })}
      </div>
    </div>
  );
};

export default DonorsList;
