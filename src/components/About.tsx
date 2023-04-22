import React from "react";

const About = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="box-border h-auto w-4/5 p-4 border-2 rounded-xl border-2 border-[#00FFCA]">
        <h1 className="font-bold text-5xl text-[#00FFCA]">About me</h1>
        <p className="text-justify font-semibold">
          I'm very interested in learning about web development, in particular
          front-end engineering. As a front-end engineer, I create web page with
          UI/UX user interface. I participated in several project to build
          responsive websites using typescript, Javascript, Reactjs, Nextjs,
          Tailwindcss, Bootstrap, HTML, CSS, and a modern library.
        </p>
      </div>
    </div>
  );
};

export default About;
