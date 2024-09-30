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
          <ul className="flex flex-col gap-3">
            <li>Home</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
      </DrawerContent>
    </Drawer>
  );
};

export default HamburgerMenu;
