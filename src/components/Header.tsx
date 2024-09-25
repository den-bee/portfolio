import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  return (
    <header className="w-full h-auto fixed p-5 flex justify-end">
      <HamburgerMenu />
    </header>
  );
};

export default Header;
