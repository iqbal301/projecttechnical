import React, { useEffect } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Route, Routes,redirect } from "react-router-dom";

const App=()=>{
return(
  <>
  <Navbar/>
  <Routes>
       <Route  path="/" element={<Home />} />
       <Route  path="/about" element={<About />} />
       <Route  path="/service" element={<Service />} />
       <Route  path="/contact" element={<Contact />} />
       <Route path="*" element={<Home/>}/>
   </Routes>
   <br />
   <Footer/>
    </>
);
};
export default App;