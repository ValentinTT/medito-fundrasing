import { cn } from "@/lib/utils";
import ProgressDonation from "./progress/progress";
import DonateButton from "./donate-button";
import ShareButton from "./share-button";
import DonorsList from "./donors/donors-list";

const DonationCard = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn("sm:w-96 h-fit bg-white mx-4 p-5 rounded-sm ", className)}
    >
      <ProgressDonation />

      <div className="flex">
        <DonateButton />
      </div>
      <div className="flex justify-end">
        <ShareButton />
      </div>
      <DonorsList />
    </div>
  );
};

export default DonationCard;
