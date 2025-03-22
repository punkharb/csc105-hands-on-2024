import React from "react";

const Navbar = () => {
  return (
    <div className="mx-7 flex justify-around mt-5 ">
      <button className="text-left font-bold lg:text-2xl">Punnatorn</button>

      <div className="flex text-xs mx-7 lg:text-xl">
        <button className="mr-3 ">Home</button>
        <button className="mr-3 ">About me</button>
        <button className=" ">Gallery</button>
      </div>

      <div className="text-right text-white h-6 w-30 text-xs bg-green-800 rounded-3xl flex justify-around font-bold shadow-2xl lg:text-xl lg:h-10">
        <button>Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
