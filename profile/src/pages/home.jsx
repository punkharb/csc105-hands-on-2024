import React from "react";
import yim from "../image/yim.png";
import faceb from "../icons/faceb.png";
import instab from "../icons/instab.png";

const Home = () => {
  return (
    <div className="w-screen h-auto flex flex-col-reverse md:flex-row items-center justify-center font-bold pb-10 px-5 lg:px-10">
      <div className="text-center md:text-left mb-8 md:mb-0">
        <p className="mb-2 lg:text-2xl">Hello, It’s A-Me </p>
        <p className="text-3xl mb-3 lg:text-4xl">
          Not Mario, It’s A-Me Punnatorn
        </p>
        <p className="text-2xl mb-3 lg:text-3xl">I like green 😆</p>
        <p className="font-light text-lg mb-8 lg:text-3xl">
          I'm the guy that wears a green shirt.
        </p>

        <div className="flex mb-8">
          <a href="https://www.facebook.com/profile.php?id=100011825437452">
            <img src={faceb} className="h-[50px] w-[50px]"></img>
          </a>
          <a href="https://www.instagram.com/punnakharb/">
            <img src={instab} className="h-[50px] w-[50px]"></img>
          </a>
        </div>

        <button className="text-white text-xl bg-green-800 py-3 px-6 rounded-full shadow-lg">
          My Portfolio
        </button>
      </div>

      <img src={yim} className="h-[200px] w-auto lg:h-full mb-2"></img>
    </div>
  );
};

export default Home;
