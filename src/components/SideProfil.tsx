import gambar from "../assets/inri.jpg";

import { BsLinkedin } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { BsGithub } from "react-icons/bs";

const SideProfil = () => {
  return (
    <div className="flex flex-col ">
      <img src={gambar} alt="" className="rounded-full m-10" />
      <div className="flex flex-col place-items-center">
        <h1 className="text-3xl uppercase font-bold text-[#00FFCA] underline decoration-sky-500/30">
          Inri Veronika
        </h1>
        <h2 className="text-xl font-bold">Front End Developer</h2>
        <div className="flex flex-row gap-3 mt-10 ">
          <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
            <a
              href="https://github.com/Inri692"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub className="w-12 h-6" />
            </a>
          </button>
          <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
            <a
              href="https://www.linkedin.com/in/inri-veronika-togatorop-b6b9b5222/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin className="w-12 h-6" />
            </a>
          </button>
          <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
            <a
              href="mailto:inritogatorop369@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TfiEmail className="w-12 h-6" />
            </a>
          </button>
        </div>

        <button className="transition ease-in-out delay-150 bg-[#B2FCFF] hover:-translate-y-1 hover:scale-110  hover:bg-[#14FFEC] duration-300 w-32 h-10 rounded-full text-black font-bold mt-5 ">
          <a
            href="https://drive.google.com/file/d/1CenVpHz-eJ4CKDft58bH0KMz8D-V1GSK/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            MY CV
          </a>
        </button>
      </div>
    </div>
  );
};

export default SideProfil;
