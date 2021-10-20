import React from "react";
import style from "./HeroSec.module.css";
function HeroSec() {
  return (
    <div className="bg-black">
      <div className=" classformaindiv bg-navigation-pattern-hero bg-center h-hehe 2xl:h-hehehe	 bg-cover">
        <div className="flex  flex-row bg-navigation-pattern-hero2 bg-center h-hehe 2xl:h-hehehe	  ">
          <div className="2xl:grid 2xl:grid-cols-2 2xl:grid-flow-row xl:grid xl:grid-cols-2 xl:grid-flow-row lg:grid lg:grid-cols-2 lg:grid-flow-row md:grid md:grid-cols-2 md:grid-flow-row xl:max-w-7xl 2xl:w-full  2xl:mx-auto xl:mx-32 xl:text-left ">
            <div className=" mx-5 mt-36 2xl:mt-64 2xl:mx-0">
              <img src="/images/headerlogod.png" alt="" />
              <p className="text-white lg:pl-5  md:pl-10  lg:text-base 2xl:text-4xl  text-sm  leading-2 lg:leading-7 font-medium">
                Phasellus lobortis augue odio, vel interdum mauris facilisis
                nec. Phasellus tempor fermentum mauris eu porta. Pellentesque
                vitae eleifend est. Nunc luctus nulla sed lacus porta
                condimentum. Vestibulum dignissim gravida egestas. Praesent non
                urna vitae arcu pulvinar bibendum. In hac habitasse platea
                dictumst. Vestibulum rhoncus augue ac eros ultricies
              </p>
            </div>
            <div className=" xl:mt-48 2xl:mt-96 2xl:pt-96 2xl:ml-36 lg:mt-32 md:mt-40 md:ml-8 xl:ml-8 hidden md:block lg:block xl:block 2xl:block">
              <img
                className="  xl:w-96 lg:w-80 md:w-72 2xl-w-full"
                src="/images/headerimdge.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSec;
