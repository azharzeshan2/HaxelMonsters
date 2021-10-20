import React from "react";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-4 text-center text-white items-center bg-navigation-pattern"
          : "hidden"
      }
      onClick={toggle}
    >
      <a className="py-7">Home</a>
      <a className="py-7">About</a>
      <a className="py-7">Services</a>
    </div>
  );
};

export default Dropdown;
