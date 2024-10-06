import {Link} from "react-scroll";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
  DrawerTitle,
  DrawerDescription,
} from "./Drawer";
import hamburger from "../assets/icons/burger.svg";
import cancel from "../assets/icons/cancel.svg";

const HamburgerMenu = () => {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <img className="w-6 h-6" src={hamburger} />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Navigation</DrawerTitle>
          <DrawerDescription />
          <DrawerClose asChild>
            <img className="w-6 h-6" src={cancel} />
          </DrawerClose>
        </DrawerHeader>
        <nav className="pr-5 flex flex-col gap-3">
          <DrawerClose asChild>
            <Link
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              className="text-white hover:text-white"
            >
              Home
            </Link>
          </DrawerClose>
          <DrawerClose asChild>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              className="text-white hover:text-white"
            >
              Projects
            </Link>
          </DrawerClose>
          <DrawerClose asChild>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              className="text-white hover:text-white"
            >
              Contact
            </Link>
          </DrawerClose>
        </nav>
      </DrawerContent>
    </Drawer>
  );
};

export default HamburgerMenu;
