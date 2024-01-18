import { currencyFormatter, formatDateDifference } from "@/lib/utils";
import { Donor } from "@/types/donation";
import { LucideIcon } from "lucide-react";

const DonorItem = ({ donor, Icon }: { donor?: Donor; Icon: LucideIcon }) => {
  if (donor === undefined)
    return <span className="animate-pulse">skeleton</span>;

  return (
    <div className="max-w-[250px] w-full my-2 mx-4 flex items-center">
      <Icon className="w-5 h-5 mr-5" />
      <div className="grow">
        <h1 className="text-slate-800">{donor.name}</h1>
        <div className="flex justify-between">
          <p className="font-medium">
            {currencyFormatter(donor.amount, donor.currency).slice(0, -3)}
          </p>
          <p className="flex items-center text-slate-800">
            <span className="flex h-2 w-2 rounded-full bg-sky-300 mr-2" />{" "}
            {formatDateDifference(new Date(donor.time), new Date())}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonorItem;
