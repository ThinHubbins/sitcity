import React from "react";
import Home from "./Home";
import Center from "./Center";
import Carousel1 from "./Carousel1";
import Footer from "../Components/footer";
import Whyus from "../Components/Whyus";
import Displaychair from "./Displaychair";
import Testimonial from "../Components/Testimonial";
import Crafts from "./Crafts";
import About from "./About";
import { Routes, Route } from "react-router-dom";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Home />
          <Crafts />
          <Center />
          <Carousel1 />
          <Whyus />
          <Displaychair />
          <Testimonial />
          <Footer />
        </>
      } />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Routing;
