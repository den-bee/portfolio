import {Link} from "react-scroll";

const Navbar = () => {
  const navLinkStyle =
    "w-40 p-1 text-white hover:text-white border-2 border-green-dark-secondary hover:border-white bg-green-light hover:bg-green-dark-secondary rounded-2xl cursor-pointer";

  return (
    <nav className="flex gap-3">
      <Link to="home" smooth={true} duration={500} className={navLinkStyle}>
        Home
      </Link>
      <Link to="projects" smooth={true} duration={500} className={navLinkStyle}>
        Projects
      </Link>
      <Link to="contact" smooth={true} duration={500} className={navLinkStyle}>
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
