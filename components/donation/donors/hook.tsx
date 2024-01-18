"use client";
import { getDonors } from "@/services/getDonors";
import { Donor } from "@/types/donation";
import { useEffect, useState } from "react";

export function useDonors() {
  const [donors, setDonors] = useState<{ donors: Donor[] }>();

  useEffect(() => {
    getDonors().then(async (res) => {
      if (res.status !== 200) return;
      const data = await res.json();
      setDonors(data as { donors: Donor[] });
    });
  }, []);

  return [donors];
}
