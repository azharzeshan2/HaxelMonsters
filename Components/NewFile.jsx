import React from "react";

function NewFile() {
  return (
    <div>
      <div className="container max-w-7xl pb-52  2xl:max-w-7xl mx-auto flex   md:flex-row flex-col ">
        <div className=" lg:w-6/12 xl:w-6/12 2xl:w-4/12 lg:flex-grow md:w-6/12  flex flex-col md:items-start md:text-left  md:mb-0 items-center ">
          <img
            className={style.imageclass}
            src="/images/lheaderimages.png"
            alt=""
          />
          <p className="text-white lg:-mt-24  -mt-20 lg:text-base 2xl:text-2xl  text-sm  leading-2 lg:leading-7 font-medium">
            Phasellus lobortis augue odio, vel interdum mauris facilisis nec.
            Phasellus tempor fermentum mauris eu porta. Pellentesque vitae
            eleifend est. Nunc luctus nulla sed lacus porta condimentum.
            Vestibulum dignissim gravida egestas. Praesent non urna vitae arcu
            pulvinar bibendum. In hac habitasse platea dictumst. Vestibulum
            rhoncus augue ac eros ultricies
          </p>
        </div>
        <div class="lg:w-6/12 xl:w-6/12 2xl:w-8/12 lg:w-full hidden md:block lg:block xl:block 2xl:block  pt-96 md:pt-64 md:w-6/12  md:mr-14 w-5/6">
          <img class={style.imagepig} alt="hero" src="/images/pigimage.png" />
        </div>
      </div>
    </div>
  );
}

export default NewFile;
