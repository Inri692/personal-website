import React from "react";
import { BiHome } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { BsCodeSlash } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

import { Layout } from "../components/Layout";
import SideProfil from "../components/SideProfil";
import { CardSkills } from "../components/Card";
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
              <div id="name">
                <Name />
              </div>
              <div id="about">
                <About />
              </div>
              <div id="skill">
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
              <div id="projects">
                <Projects />
              </div>
            </Layout>
          </div>

          <div className="basis-1/6">
            <div className="navbar w-20 h-3/6 bg-white m-16 mt-32  flex justify-center rounded-full border-2 border-[#00FFCA]">
              <div className="flex flex-col justify-around text-black m-3">
                <a href="#name">
                  <BiHome className=" w-12 h-12" />
                </a>
                <a href="#about">
                  <BsFillPersonFill className=" w-12 h-12" />
                </a>
                <a href="#skill">
                  <BsCodeSlash className=" w-12 h-12" />
                </a>
                <a href="#projects">
                  <CgWebsite className=" w-12 h-12" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
