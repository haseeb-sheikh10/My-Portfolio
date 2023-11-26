import React from "react";
import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";
import { FaStackOverflow } from "react-icons/fa";
import thumbnailPic from "../assets/mypic.jpeg";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="p-2 bg-bgPrimary sticky top-0 z-50">
      <div className="container mx-auto grid grid-cols-3 place-content-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="font-heading text-tPrimary text-[2rem] tracking-widest font-bold w-fit"
        >
          Portfolio.
        </motion.div>
        <div></div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="flex justify-end gap-7 items-center"
        >
          <span className="rounded-md text-tPrimary hover:bg-bgSecondary hover:text-black hover:opacity-80 transition p-2">
            <FaGithubAlt className="text-2xl" />
          </span>
          <span className="rounded-md text-tPrimary hover:bg-bgSecondary hover:text-black hover:opacity-80 transition p-2">
            <FaLinkedinIn className="text-2xl" />
          </span>
          <span className="rounded-md text-tPrimary hover:bg-bgSecondary hover:text-black hover:opacity-80 transition p-2">
            <TbBrandFiverr className="text-2xl" />
          </span>
          <span className="rounded-md text-tPrimary hover:bg-bgSecondary hover:text-black hover:opacity-80 transition p-2">
            <FaStackOverflow className="text-2xl" />
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
