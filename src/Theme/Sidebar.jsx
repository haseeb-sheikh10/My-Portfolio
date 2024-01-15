import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRef } from "react";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const initialRef = useRef(null);
  const bgColor = useColorModeValue("gray.100", "#14131a");
  const closeIcon = useColorModeValue("#14131a", "gray.100");
  return (
    <Drawer
      placement="right"
      isOpen={isOpen}
      initialFocusRef={initialRef}
      autoFocus={false}
      closeOnOverlayClick
      closeOnEsc
    >
      <DrawerOverlay />
      <DrawerContent bg={bgColor}>
        <DrawerCloseButton color={closeIcon} onClick={() => setIsOpen(false)} />
        <DrawerBody>
          <ul className="flex flex-col flex-1 gap-10 justify-end mt-14 text-xl">
            <li className="cursor-pointer p-2 hover:bg-bgSecondary hover:text-black rounded-md ">
              <a
                href="#projects"
                className="p-2 w-full focus-visible:bg-bgSecondary focus-visible:text-black focus-visible:outline-none rounded-md"
              >
                Projects
              </a>
            </li>
            <li
              className="cursor-pointer
              hover:bg-bgSecondary
              p-2 hover:text-black rounded-md focus:bg-bgSecondary focus:text-black"
            >
              <a
                href="#skills"
                className="p-2 w-full focus-visible:bg-bgSecondary focus-visible:text-black focus-visible:outline-none rounded-md"
              >
                Skills
              </a>
            </li>
            <li className="cursor-pointer hover:bg-bgSecondary p-2 hover:text-black rounded-md focus:bg-bgSecondary focus:text-black">
              <a
                href="#timeline"
                className="p-2 w-full focus-visible:bg-bgSecondary focus-visible:text-black focus-visible:outline-none rounded-md"
              >
                Timeline
              </a>
            </li>
            <li className="cursor-pointer hover:bg-bgSecondary p-2 hover:text-black rounded-md focus:bg-bgSecondary focus:text-black">
              <a
                href="#contact"
                className="p-2 w-full focus-visible:bg-bgSecondary focus-visible:text-black focus-visible:outline-none rounded-md"
              >
                Conatct
              </a>
            </li>
          </ul>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;
