import { BsFillPersonFill } from "react-icons/bs";
import { BsCodeSlash } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { BiHome } from "react-icons/bi";

import SideProfil from "../components/SideProfil";
import { CardProjects } from "../components/Card";
import { CardSkills } from "../components/Card";
import { Layout } from "../components/Layout";
import About from "../components/About";
import Name from "../components/Name";

import projects from "../utils/DataProject";
import skills from "../utils/DataSkill";

const Home = () => {
  return (
    <div className="w-full h-screen bg-black flex flex-col ">
      <div className="bg-[#323232] rounded-xl mx-8 ">
        <div className="flex flex-row text-white">
          <div className="basis-1/4">
            <div className="h-screen flex justify-center items-center">
              <SideProfil />
            </div>
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
                <div className="md:grid grid-cols-3 gap-4 mx-10">
                  {skills.map((skill) => (
                    <CardSkills
                      key={skill.id}
                      image={skill.image}
                      name={skill.name}
                    />
                  ))}
                </div>
              </div>

              <div id="projects">
                <h1 className="font-bold text-5xl text-[#00FFCA] mt-40 mx-10">
                  My Projects
                </h1>
                <div className="max-h-screen flex flex-cols gap-4">
                  <div className="flex flex-col">
                    {projects.map((project) => (
                      <CardProjects
                        key={project.id}
                        image={project.image}
                        name={project.name}
                        description={project.description}
                        link={project.link}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Layout>
          </div>

          <div className="basis-1/6 max-h-screen flex justify-center items-center">
            <div className="w-20 h-3/6 bg-white m-16 mt-32  flex justify-center rounded-full border-2 border-[#00FFCA]">
              <div className="md:flex flex-col justify-around text-black m-3">
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
