import React from "react";

import "./App.css";
import Home from "./Routes/Pages/Home";
import Center from "./Routes/Pages/Center";
import Carousel1 from "./Routes/Pages/Carousel1";
import Footer from "./Routes/Components/footer";
import Whyus from "./Routes/Components/Whyus";
import Displaychair from "./Routes/Pages/Displaychair";
import Testimonial from "./Routes/Components/Testimonial";
import Crafts from "./Routes/Pages/Crafts";
import { Routes, Route } from "react-router-dom";
import About from "./Routes/Pages/About";

function App() {
  return (
    <div> 
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
      }
       />
      <Route path="/about" element={<About />} />
      </Routes>
     
    </div>
  );
}

export default App;
