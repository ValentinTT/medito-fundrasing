"use client";
import { Progress } from "@/components/ui/progress";
import { useProgressDonation } from "./hook";
import { cn, currencyFormatter, formatSocialMediaNumber } from "@/lib/utils";

const ProgressDonation = ({ className }: { className?: string }) => {
  const [progressData] = useProgressDonation();

  return (
    <section className={cn("max-w-3xl", className)}>
      <h3 className="text-gray-600 text-sm">
        <span className="text-lg text-gray-950">
          {currencyFormatter(progressData.currentAmount, progressData.currency)}
        </span>{" "}
        {progressData.currency} raised of{" "}
        {currencyFormatter(progressData.goalAmount, progressData.currency)}
      </h3>
      <Progress value={progressData.progress} />
      <h4 className="text-right mt-1 text-gray-600 text-sm">
        {formatSocialMediaNumber(progressData.donationsCount)} donations!
      </h4>
    </section>
  );
};

export default ProgressDonation;
