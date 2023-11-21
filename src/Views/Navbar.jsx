import React from "react";
import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";
import { FaStackOverflow } from "react-icons/fa";
import thumbnailPic from "../assets/mypic.jpeg";

const Navbar = () => {
  return (
    <div className="p-2 bg-primary">
      <div className="container mx-auto grid grid-cols-3 place-content-center">
        <div className="flex items-center gap-3 font-heading text-[2rem] tracking-widest font-bold">
          <div className="rounded-full w-16">
            <img
              className="rounded-full"
              src={thumbnailPic}
              alt="Haseeb Irfan"
            />
          </div>
          <h2>Haseeb Irfan</h2>
        </div>
        <div></div>
        <div className="flex justify-end gap-7 items-center">
          <span className="rounded-md hover:bg-slate-300 hover:text-black hover:opacity-80 transition p-2">
            <FaGithubAlt className="text-2xl" />
          </span>
          <span className="rounded-md hover:bg-slate-300 hover:text-black hover:opacity-80 transition p-2">
            <FaLinkedinIn className="text-2xl" />
          </span>
          <span className="rounded-md hover:bg-slate-300 hover:text-black hover:opacity-80 transition p-2">
            <TbBrandFiverr className="text-2xl" />
          </span>
          <span className="rounded-md hover:bg-slate-300 hover:text-black hover:opacity-80 transition p-2">
            <FaStackOverflow className="text-2xl" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
