import React from "react";
import centercouch from "../assets/img/centerchair.png";

const Crafts = () => {
  return (
    <div id="About" className="container">
      <div className="row">
        <div className="col-12 centerchair1 col-xl-6">
          <div className="img-wrapper">
            <img
              className="centerchair img-fluid"
              src={centercouch}
              alt="centercouch"
              style={{ maxWidth: "100%", height: "auto", marginTop: "20%" }}
            />
            <div className="black"></div>
          </div>
        </div>

        <div className="col-12 col-xl-6 d-flex justifly-content-center align-items-center">
          <div className="chairText text-white text-center text-xl-start mx-auto">
            At SitCity, we meticulously handcraft each piece using only the
            finest materials, from supple, full-grain leather to sustainably
            sourced exotic woods. Our designs are a harmonious blend of timeless
            elegance and modern innovation, ensuring that every chair not only
            looks stunning but also provides an unparalleled seating experience.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crafts;
