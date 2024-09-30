import {Link} from "react-scroll";

const Navbar = () => {
  const navLinkStyle =
    "w-40 p-1 text-white hover:text-green-dark border-2 border-white hover:border-green-dark bg-transparent rounded-2xl cursor-pointer";

  return (
    <nav>
      <ul className="flex gap-3">
        <Link
          to="home"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
        >
          <li className={navLinkStyle}>Home</li>
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
        >
          <li className={navLinkStyle}>Projects</li>
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
        >
          <li className={navLinkStyle}>Projects</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
