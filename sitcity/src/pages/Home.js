import React from "react";
import chair from "../assets/img/chairMain.png";
import arrow from "../assets/img/contactarr.svg";
import couch1 from "../assets/img/couch.png";
import couch2 from "../assets/img/couch2.png";
import couch3 from "../assets/img/couch3.png";
import centercouch from "../assets/img/centerchair.png";

const Home = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-6">
          <nav className="navbar">
            <div className="container-fluid d-flex justify-content-around">
              <a href="/" className="navlink">
                Home
              </a>
              <a href="/" className="navlink">
                Products
              </a>
              <a href="/" className="navlink">
                About
              </a>
              <a href="/" className="navlink">
                Pricing
              </a>
              <a href="/" className="navlink">
                Reviews
              </a>
            </div>
          </nav>
          <div className="heading text-white">
            <h1 className="mainHeading">
              LUXURY DESIGN
              <br />
              UNIQUE, DURABLE
              <br />
              COMFORTABLE CHAIRS.
            </h1>

            <div className="subtext text-white">
              Our chairs are well crafted to suit any space, crafted and{" "}
              <span style={{ color: "#BBFF7F" }}>sculpted</span> to your desired
              taste that will effortlessly fit your space.
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-6">
          <div className="contactUs mt-4">
            <img
              className="contact"
              src={chair}
              alt="mainchair"
              style={{
                width: "692px",
                height: "874px",
              }}
            />

            <nav
              className="navbar contact d-flex align-items-center"
              style={{
                width: "211px",
                height: "47px",
                background: "#fff",
                padding: "0 8px",
              }}
            >
              <div className="flex-grow-1 text-center">
                <span className="text-nav">Contact Us</span>
              </div>

              <div
                className="d-flex justify-content-center align-items-center"
                style={{
                  background: "black",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                }}
              >
                <img src={arrow} alt="contactArrow" />
              </div>
            </nav>
            <div className="couch">
              <img className="couche" src={couch1} alt="couch" />
              <img className="couche" src={couch2} alt="couch" />
              <img className="couche" src={couch3} alt="couch" />
            </div>
          </div>
        </div>
      </div>

      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="container">
            <img className="centerchair" src={centercouch} alt="centercouch" style={{ maxWidth: "100%", height: "auto" }} />
          </div>
        </div>
        <div className="col-md-6 text-white d-flex align-items-center">
          At SitCity, we meticulously handcraft each piece using only the finest
          materials, from supple, full-grain leather to sustainably sourced
          exotic woods. Our designs are a harmonious blend of timeless elegance
          and modern innovation, ensuring that every chair not only looks
          stunning but also provides an unparalleled seating experience.
        </div>
      </div>
    </div>
  );
};

export default Home;
