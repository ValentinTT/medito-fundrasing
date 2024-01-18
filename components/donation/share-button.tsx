import { Icons } from "../icons";
import { Button } from "../ui/button";

const ShareButton = () => {
  return (
    <Button className="my-2 bg-gradient-to-r from-sky-500 to-cyan-400 hover:opacity-80 transition-all group shadow-sm">
      <Icons.share className="mr-2 h-4 w-4 group-hover:scale-110" /> Share
    </Button>
  );
};

export default ShareButton;
