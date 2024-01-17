import MeditoLogo from "./medito-logo/medito-log";
import MeditoLogoAndText from "./medito-logo/medito-logo-text";

export const MainNavbar = () => {
  return (
    <nav className="w-full flex justify-between items-center py-5 px-8 fixed top-0 left-0 bg-white h-20 z-50">
      <div className="hidden md:block">
        <MeditoLogoAndText />
      </div>
      <div className="md:hidden">
        <MeditoLogo />
      </div>
      <h1 className="text-xl sm:text-2xl md:text-3xl flex items-center">
        Medito Fundraising
      </h1>
      <ul>count</ul>
    </nav>
  );
};

export default MainNavbar;
