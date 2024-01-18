import { Icons } from "../icons";
import { Button } from "../ui/button";

const DonateButton = () => {
  return (
    <Button className="my-3 grow p-6 bg-gradient-to-r from-rose-700 to-pink-600 hover:opacity-90 transition-all group shadow-sm">
      <Icons.donate className="mr-2 h-4 w-4 group-hover:scale-110" /> Donate
    </Button>
  );
};

export default DonateButton;
