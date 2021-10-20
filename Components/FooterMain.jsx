import React from "react";

function FooterMain() {
  return (
    <div className="bg-bluee  ">
      <div
        className=" 
       xl:max-w-6xl 2xl:max-w-7xl 2xl:mx-auto  md:mx-auto md:justify-between md:max-w-2xl 
       md:gap-x-44 xl:gap-x-196 xl:mx-auto
       grid grid-cols-1 grid-flow-row md:grid-cols-2 2xl:gap-x-1966 md:grid-flow-row
       xl:grid xl:grid-cols-2 xl:grid-flow-row py-20 flex xl:justify-between"
      >
        <div className="text-white">
          <h1 className="text-3xl headingone xl:text-left md:text-left lg:text-left 2xl:text-left text-center">
            HAXEL MONSTERS
          </h1>
          <h2 className=" headingtwo font-bold xl:text-left md:text-left lg:text-left 2xl:text-left text-center">
            Introduction
          </h2>
          <h2 className="text-gray-600 headingtwo font-bold text-base xl:text-left md:text-left lg:text-left 2xl:text-left text-center ">
            Introduction
          </h2>
          <h2 className="text-gray-600 headingtwo font-bold text-base xl:text-left md:text-left lg:text-left 2xl:text-left text-center">
            Introduction
          </h2>
          <h2 className="text-gray-600 headingtwo font-bold text-base xl:text-left md:text-left lg:text-left 2xl:text-left text-center">
            Introduction
          </h2>
          <h2 className="text-gray-600 headingtwo font-bold text-base xl:text-left md:text-left lg:text-left 2xl:text-left text-center">
            Introduction
          </h2>
        </div>
        <div className="flex pb-28 pt-10 xl:pt-2 md:pt-2 mx-auto justify-center  space-x-4">
          <img src="/images/game.png" alt="" />
          <img src="/images/mfooter.png" alt="" />
          <img src="/images/twiiter.png" alt="" />
          <img src="/images/arrow.png" alt="" />
        </div>
      </div>
      <div className="flex py-5 xl:space-x-44 space-x-10 2xl:space-x-0 justify-between">
        <div>
          <img src="/images/leftfooter.png" alt="" />
        </div>
        <div>
          <img src="/images/rightfooter.png" alt="" />
        </div>
      </div>

      <div className="xl:text-right md:text-right md:pr-28 text-right pr-10  lg:text-right lg:pr-36 2xl:max-w-full 2xl:pr-28  py-6">
        <h1 className="text-white headingone xl:text-xl 2xl:text-3xl">
          BACK TO TOP
        </h1>
      </div>
    </div>
  );
}

export default FooterMain;
