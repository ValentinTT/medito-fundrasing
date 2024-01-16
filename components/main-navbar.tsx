import MeditoLogo from "./medito-logo";

export const MainNavbar = () => {
  return (
    <nav className="w-full flex justify-between items-center py-5 px-8 fixed top-0 left-0 bg-white h-20 z-50">
      <MeditoLogo />
      <h1 className="text-3xl flex items-center">Medito Fundraising</h1>
      <ul>contador</ul>
    </nav>
  );
};

export default MainNavbar;
