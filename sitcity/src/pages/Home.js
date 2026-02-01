import React, { useState } from "react";
import chair from "../assets/img/chairMain.png";
import arrow from "../assets/img/contactarr.svg";
import couch1 from "../assets/img/couch.png";
import couch2 from "../assets/img/couch2.png";
import couch3 from "../assets/img/couch3.png";
const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <div id="Home" className="container-fluid mt-4 home">
      <div className="row hero">
        <div className="hero-section col-12 col-xl-6 ">
          <nav className="navbar navHome">
            <div className="w-100 d-flex justify-content-around">
              <a href="#Home" className="navlink">
                Home
              </a>
              <a href="#Product" className="navlink">
                Products
              </a>
              <a href="#About" className="navlink">
                About
              </a>
              <a href="#Pricing" className="navlink">
                Pricing
              </a>
              <a href="#Reviews" className="navlink">
                Reviews
              </a>
            </div>
          </nav>
          <div className="navBurger">
            <div
              className={`burger ${open ? "openNav" : ""}`}
              onClick={() => setOpen(!open)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul className={`navOpen ${open ? "showNav" : ""}`}>
              <li>
                <a href="/" className="navlink">
                  Home
                </a>
              </li>
              <li>
                <a href="/" className="navlink">
                  Products
                </a>
              </li>
              <li>
                <a href="/" className="navlink">
                  About
                </a>
              </li>
              <li>
                <a href="/" className="navlink">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/" className="navlink">
                  Reviews
                </a>
              </li>
              <li>
                <div className="row w-100 d-flex justify-content-center align-items-center text-center">
                  <a href="/" className="navlink ">
                    <h1 className="sitnav">SITCITY</h1>
                  </a>
                </div>
              </li>
            </ul>
          </div>
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
          <div className="contact-section">
            <div className="mainImg">
              <img
                src={chair}
                alt="Main chair"
                className="main-chair img-fluid"
              />

              <button className="contact-btn">
                <a
                  href="#Contact"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <span>Contact Us</span>
                </a>
                <span className="arrow">
                  <img src={arrow} alt="contact Us arr" />
                </span>
              </button>

              <div className="couch-thumbnails">
                <img src={couch1} className="couch" alt="couch" />
                <img src={couch2} className="couch" alt="couch" />
                <img src={couch3} className="couch" alt="couch" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
