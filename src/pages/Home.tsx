import React from "react";
import { Layout } from "../components/Layout";
import SideProfil from "../components/SideProfil";
import Sidebar from "../components/Sidebar";
import Name from "../components/Name";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div className="w-full h-screen bg-black flex flex-col ">
      <div className="bg-[#323232] rounded-xl mx-8 ">
        <div className="flex flex-row text-white">
          <div className="basis-1/4">
            <SideProfil />
          </div>

          <div className="basis-3/4 bg-[#0D7377] h-screen rounded-lg">
            <Layout>
              <Name />
              <Skills />
            </Layout>
          </div>

          <div className="basis-1/6">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
