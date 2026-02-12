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

import About from "./Routes/Pages/About";

function App() {
  return (
    <div> 
      
      <Home />
      <Crafts />
      <Center />
      <Carousel1 />
      <Whyus />
      <Displaychair />
      <Testimonial />
      <Footer />
     
      <About />
      
     
    </div>
  );
}

export default App;
