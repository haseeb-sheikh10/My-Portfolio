import { useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CiSun } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { PiMoon } from "react-icons/pi";
import Sidebar from "../Theme/Sidebar";

const Navbar = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  const [isScrolled, setIsScrolled] = useState(false);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    const scrollThreshold = 80;

    setIsScrolled(scrollPosition > scrollThreshold);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`p-2 transition-colors ${
          isScrolled ? "bg-bgPrimary text-tPrimary" : "bg-transparent"
        } sticky top-0 z-50 w-full shadow-xl`}
      >
        <div className="container mx-auto grid grid-cols-3 place-content-center">
          <a href="/">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="text-[1.5rem] align-middle tracking-widest font-bold w-fit"
            >
              Portfolio.
            </motion.div>
          </a>
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="justify-end gap-5 col-span-2 hidden md:flex items-center"
          >
            <ul className="flex flex-1 gap-10 justify-end">
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
              <li
                onClick={toggleColorMode}
                className="cursor-pointer bg-bgSecondary p-2 text-black hover:opacity-50 rounded-md"
              >
                {colorMode === "dark" ? (
                  <CiSun className="text-2xl" />
                ) : (
                  <PiMoon className="text-2xl" />
                )}
              </li>
            </ul>
          </motion.nav>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="flex gap-5 col-span-2 md:hidden items-center justify-end"
          >
            <span
              onClick={toggleColorMode}
              className="cursor-pointer bg-bgSecondary p-2 text-black
            hover:opacity-50 rounded-md"
            >
              {colorMode === "dark" ? (
                <CiSun className="text-2xl" />
              ) : (
                <PiMoon className="text-2xl" />
              )}
            </span>
            <GiHamburgerMenu
              className="text-2xl"
              onClick={() => setIsSidebarOpen((prev) => !prev)}
            />
          </motion.div>
        </div>
      </div>
      {isSidebarOpen && (
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      )}
    </>
  );
};

export default Navbar;
