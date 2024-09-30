import HamburgerMenu from "./HamburgerMenu";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="w-full h-auto fixed p-5 flex justify-end">
      <div className="block md:hidden">
        <HamburgerMenu />
      </div>
      <div className="md:block hidden">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
