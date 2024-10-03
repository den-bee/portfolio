import HamburgerMenu from "./HamburgerMenu";
import Navbar from "./Navbar";
import githubIcon from "../assets/icons/github.svg";

const Header = () => {
  return (
    <header className="w-full h-auto fixed p-5 flex justify-between">
      <a
        href="https://github.com/den-bee"
        target="_blank"
        className="self-center"
      >
        <img className="w-6 h-6 sm:w-8 sm:h-8" src={githubIcon} />
      </a>
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
