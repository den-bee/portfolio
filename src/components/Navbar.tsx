import {Link} from "react-scroll";

const Navbar = () => {
  const navLinkStyle =
    "w-40 p-1 text-white hover:text-white border-2 border-green-dark-secondary hover:border-white bg-green-light hover:bg-green-dark-secondary rounded-2xl cursor-pointer";
  const activeNavLinkStyle = "bg-green-dark-secondary border-white";

  return (
    <nav>
      <div className="flex gap-3">
        <Link
          to="home"
          smooth={true}
          duration={500}
          spy={true}
          className={navLinkStyle}
          activeClass={activeNavLinkStyle}
        >
          Home
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          spy={true}
          offset={0.5}
          className={navLinkStyle}
          activeClass={activeNavLinkStyle}
        >
          Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          spy={true}
          className={navLinkStyle}
          activeClass={activeNavLinkStyle}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
