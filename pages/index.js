import Head from "next/head";
import { Fragment, useState, useEffect } from "react";
import Dropdown from "../Components/DropDown";
import FooterMain from "../Components/FooterMain";
import HeroSec from "../Components/HeroSec";
import NavBar from "../Components/NavBar";
import SecondSec from "../Components/SecondSec";
import SectionFifth from "../Components/SectionFifth";
import SectionFourth from "../Components/SectionFourth";
import SectionTHird from "../Components/SectionTHird";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log("i resized");
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });
  return (
    <Fragment>
      <NavBar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <HeroSec />
      <SecondSec />
      <SectionTHird />
      <SectionFourth />
      <SectionFifth />
      <FooterMain />
    </Fragment>
  );
}
