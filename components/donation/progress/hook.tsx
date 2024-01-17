import { getProgress } from "@/services/getProgress";
import { ProgressDonation } from "@/types/donation";
import { useEffect, useState } from "react";

export function useProgressDonation() {
  const [donationInfo, setDonationInfo] = useState<ProgressDonation>({
    currentAmount: 0,
    donationsCount: 0,
    goalAmount: 0,
    currency: "USD",
  });

  useEffect(() => {
    getProgress().then(async (res) => {
      if (res.status !== 200) return;
      const data = await res.json();
      setDonationInfo(data as ProgressDonation);
    });
  }, []);

  return [
    {
      ...donationInfo,
      progress: Math.min(
        100,
        Math.floor((donationInfo.currentAmount / donationInfo.goalAmount) * 100)
      ),
    },
  ];
}
