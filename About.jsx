import React from "react";
import image from "../src/images/hero-img.jpg";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const About=()=>{
return(
  <>
    <Common name="Welcome to About page" imgsrc={image} visite="/contact" btname="Contact Now" />
    </>
);
};
export default About;