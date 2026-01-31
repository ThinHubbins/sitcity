import React from "react";

import "./App.css";
import Home from "./pages/Home";
import Center from "./pages/Center";
import Carousel1 from "./pages/Carousel1";
import Footer from "./pages/footer";
import Whyus from "./pages/Whyus";
import Displaychair from "./pages/Displaychair";
import Testimonial from "./pages/Testimonial";
import Crafts from "./pages/Crafts";

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
    </div>
  );
}

export default App;
