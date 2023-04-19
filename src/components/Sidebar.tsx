import React from "react";
import { BiHome } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { BsCodeSlash } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

const Sidebar = () => {
  return (
    <div className="navbar w-20 h-3/6 bg-white m-16 mt-32  flex justify-center rounded-full border-2 border-sky-500">
      <div className="flex flex-col justify-around text-black m-3">
        <BiHome className=" w-12 h-12" />
        <BsFillPersonFill className=" w-12 h-12" />
        <BsCodeSlash className=" w-12 h-12" />
        <CgWebsite className=" w-12 h-12" />
      </div>
    </div>
  );
};

export default Sidebar;
