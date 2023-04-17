import React from "react";
import gambar from "../assets/inri.jpg";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";

const SideProfil = () => {
  return (
    <div className="flex flex-col ">
      <img src={gambar} alt="" className="rounded-full m-16" />
      <div className="flex flex-col place-items-center gap-3">
        <h1 className="text-3xl uppercase font-bold text-[#5EDFFF] underline decoration-sky-500/30">
          Inri Veronika
        </h1>
        <h2 className="text-xl font-bold">Front End Developer</h2>
        <div className="flex flex-row gap-10 mt-10 ">
          <BsGithub />
          <BsLinkedin />
          <TfiEmail />
        </div>
        <button className="bg-[#B2FCFF] w-32 h-10 rounded-full text-black font-bold mt-3 hover:bg-[#14FFEC]">
          MY CV
        </button>
      </div>
    </div>
  );
};

export default SideProfil;
