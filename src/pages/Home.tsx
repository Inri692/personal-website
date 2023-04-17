import React from "react";
import Layout from "../components/Layout";
import SideProfil from "../components/SideProfil";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <Layout>
      <div className="h-screen bg-[#323232] my-12 rounded-xl mx-3 overflow-auto">
        <div className="flex flex-row text-white">
          <div className="basis-1/4">
            <SideProfil />
          </div>
          <div className="basis-3/4 bg-[#0D7377] h-screen rounded-lg">02</div>
          <div className="basis-1/6">
            <Sidebar />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
