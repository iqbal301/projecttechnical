import React from "react";
import image from "../src/images/img2.jpg";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home=()=>{
return(
  <>
   <Common name="Grow your business with" imgsrc={image} visite="/contact" btname="Get Started" />
    </>
);
};
export default Home;