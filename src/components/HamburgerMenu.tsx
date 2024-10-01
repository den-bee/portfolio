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

const HamburgerMenu = () => {
  const closeDrawer = () => {};
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <img className="w-6 h-6" src="./src/assets/icons/burger.svg" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Navigation</DrawerTitle>
          <DrawerDescription />
          <DrawerClose asChild>
            <img className="w-6 h-6" src="./src/assets/icons/cancel.svg" />
          </DrawerClose>
        </DrawerHeader>
        <nav className="pr-5">
          <div className="flex flex-col gap-3">
            <DrawerClose asChild>
              <Link
                onClick={closeDrawer}
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
          </div>
        </nav>
      </DrawerContent>
    </Drawer>
  );
};

export default HamburgerMenu;
