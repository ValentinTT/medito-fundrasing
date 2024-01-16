import { AspectRatio } from "@/components/ui/aspect-ratio";

interface HeroProps {
  src: string;
}

const Hero = ({ src }: HeroProps) => {
  return (
    <div className="w-full lg:w-[700px] rounded-md overflow-hidden -translate-y-1/2">
      <AspectRatio ratio={16 / 9}>
        <img src={src} alt="Fundraising Hero" />
      </AspectRatio>
    </div>
  );
};

export default Hero;
