import { BsFillPersonFill } from "react-icons/bs";
import { BsCodeSlash } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { BiHome } from "react-icons/bi";

import SideProfil from "../components/SideProfil";
import { CardProjects } from "../components/Card";
import { CardSkills } from "../components/Card";
import { Layout } from "../components/Layout";
import Projects from "../components/Projects";
import About from "../components/About";
import Name from "../components/Name";

import skills from "../utils/DataSkill";

const Home = () => {
  return (
    <div className="w-full h-screen bg-black flex flex-col ">
      <div className="bg-[#323232] rounded-xl mx-8 ">
        <div className="flex flex-row text-white">
          <div className="basis-1/4">
            <SideProfil />
          </div>

          <div className="basis-3/4 bg-black h-screen rounded-lg">
            <Layout>
              <div
                id="name"
                className="h-screen flex justify-center items-center"
              >
                <Name />
              </div>
              <div id="about">
                <About />
              </div>
              <div id="skill">
                <h1 className="font-bold text-5xl text-[#00FFCA] mx-10">
                  Skills
                </h1>
                <div className="grid grid-cols-3 gap-4 mx-10">
                  {skills.map((skill) => (
                    <CardSkills
                      key={skill.id}
                      image={skill.image}
                      name={skill.name}
                    />
                  ))}
                </div>
              </div>
              <div
                id="projects"
                className="max-h-screen flex flex-cols gap-4 mt-40"
              >
                <CardProjects
                  image="image"
                  name="name"
                  description="description"
                  link="link"
                />
              </div>
            </Layout>
          </div>

          <div className="basis-1/6">
            <div className="navbar w-20 h-3/6 bg-white m-16 mt-32  flex justify-center rounded-full border-2 border-[#00FFCA]">
              <div className="flex flex-col justify-around text-black m-3">
                <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-[#14FFEC] duration-300 ">
                  <a href="#name">
                    <BiHome className=" w-12 h-12" />
                  </a>
                </button>
                <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-[#14FFEC] duration-300 ">
                  <a href="#about">
                    <BsFillPersonFill className=" w-12 h-12" />
                  </a>
                </button>

                <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-[#14FFEC] duration-300 ">
                  <a href="#skill">
                    <BsCodeSlash className=" w-12 h-12" />
                  </a>
                </button>

                <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-[#14FFEC] duration-300 ">
                  <a href="#projects">
                    <CgWebsite className=" w-12 h-12" />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
