import React from "react";
import steve from "../image/steve.png";

const Aboutme = () => {
  return (
    <div className="w-screen h-auto flex flex-col md:flex-row justify-center items-center bg-green-600 text-white p-10">
      <div className="w-full md:w-1/2 flex justify-center lg:w-100">
        <img src={steve} className="w-[300px] md:w-full"></img>
      </div>

      <div className="font-bold ml-0 md:ml-15 text-center md:text-left">
        <p className="text-3xl ">About Me</p>
        <p className="text-2xl mb-2">This is Steve from Minecraft</p>
        <p className="text-2xl w-[90%] md:w-[600px] font-light mb-10">
          Why Steve? Because I like to play Minecraft. Minecraft is the first
          game that I played.
        </p>

        <button className="text-green-800 text-4xl bg-white pt-3 pb-3 rounded-3xl flex justify-center text-center shadow-2xl w-[300px] mx-auto ">
          Read more
        </button>
      </div>
    </div>
  );
};

export default Aboutme;
