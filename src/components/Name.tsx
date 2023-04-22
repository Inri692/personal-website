import React from "react";

const Name = () => {
  return (
    <div className="h-screen mt-48">
      <div className="flex justify-around">
        <div className="flex flex-row gap-4 place-items-center">
          <span className="font-bold text-5xl text-[#00FFCA]">Hello...</span>
          <div className="animate-wiggle">
            <span className="text-5xl">👋🏻</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center place-items-center">
        <h1 className="font-bold text-8xl ">I'm Inri Veronika</h1>
        <p className="font-semibold text-6xl animate-flash text-[#00FFCA]">
          Front End Developer
        </p>
      </div>
    </div>
  );
};

export default Name;
