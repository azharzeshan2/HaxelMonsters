import React from "react";

function SecondSec() {
  return (
    <div className="z-0  bg-navigation-pattern-sectiontwott h-screen bg-cover bg-center  ">
      <div className="bg-navigation-pattern-sectiontwo h-screen  relative">
        <div>
          <img
            src="/images/questionmark.png"
            className="align-center mx-auto pt-10"
            alt=""
          />
        </div>
        <div className="absolute bottom-0 w-full ">
          <div className="   inline-block align-bottom bottom-0  w-3/12">
            <img src="/images/Frame.png" alt="" />
          </div>
          <div className="  inline-block align-top xl:pt-28 lg:pt-16 md:pt-10   w-6/12">
            <h1 className=" text-center   font-extrabold text-transparent xl:text-3xl lg:text-2xl 2xl:text-7xl md:text-xl text-xs bg-clip-text bg-gradient-to-r from-greenn to-secnd">
              INTRODUCING HAXEL MONSTERS
            </h1>
          </div>
          <div className="inline-block align-bottom  2xl:pl-72  bottom-0 w-3/12 ">
            <img src="/images/Group.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondSec;
