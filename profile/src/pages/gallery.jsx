import React from "react";
import block from "../image/block.png";
import map1 from "../image/map1.png";
import map2 from "../image/map2.png";
import map3 from "../image/map3.png";
import map4 from "../image/map4.png";
import map5 from "../image/map5.png";

const Gallery = () => {
  return (
    <div className="bg-amber-800 w-screen h-screen pb-10 flex flex-col items-center overflow-y-auto lg:h-screen">
      <p className="text-white font-bold text-4xl mt-8 lg:m-15 lg:text-6xl">
        Gallery
      </p>
      <div className="grid grid-cols-1 gap-4 mt-8  lg:grid-cols-3 lg:mx-5 md:grid-cols-2">
        <div className="w-48 h-48 lg:w-100 lg:h-100">
          <img
            src={map1}
            className="w-full h-full object-cover rounded-xl lg:w-75 lg:h-75"
          />
        </div>
        <div className="w-48 h-48 lg:w-100 lg:h-100">
          <img
            src={block}
            className="w-full h-full object-cover rounded-xl lg:w-75 lg:h-75"
          />
        </div>
        <div className="w-48 h-48 lg:w-100 lg:h-100">
          <img
            src={map2}
            className="w-full h-full object-cover rounded-xl lg:w-75 lg:h-75"
          />
        </div>
        <div className="w-48 h-48 lg:w-100 lg:h-100">
          <img
            src={map3}
            className="w-full h-full object-cover rounded-xl lg:w-75 lg:h-75"
          />
        </div>
        <div className="w-48 h-48 lg:w-100 lg:h-100">
          <img
            src={map4}
            className="w-full h-full object-cover rounded-xl lg:w-75 lg:h-75"
          />
        </div>
        <div className="w-48 h-48 lg:w-100 lg:h-100">
          <img
            src={map5}
            className="w-full h-full object-cover rounded-xl lg:w-75 lg:h-75"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
