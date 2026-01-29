import React, {useState, useEffect} from "react";
import chair from "../assets/img/chairMain.png";
import arrow from "../assets/img/contactarr.svg";
import couch1 from "../assets/img/couch.png";
import couch2 from "../assets/img/couch2.png";
import couch3 from "../assets/img/couch3.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
    useEffect(() => {
    AOS.init({
      duration: 800,  
      once: true,      
    });
  }, []);
  const [open, setOpen] = useState(false)
  return (
    <div className="container-fluid mt-4 home">
      <div className="row hero">
        <div className="hero-section col-12 col-xl-6 ">
          <nav className="navbar navHome">
            <div className="w-100 d-flex justify-content-around">
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
          <div className="navBurger">
            <div 
            className={`burger ${open ? 'openNav' : ''}`}
            onClick={()=> setOpen(!open)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul className={`navOpen ${open ? 'showNav' : ''}`}>
              <li><a href="/" className="navlink">
                Home
              </a></li>
              <li><a href="/" className="navlink">
                Products
              </a></li>
              <li><a href="/" className="navlink">
                About
              </a></li>
              <li><a href="/" className="navlink">
                Pricing
              </a></li>
              <li><a href="/" className="navlink">
                Reviews
              </a></li>
            </ul>
          </div>
          <div className="heading text-white">
            <h1 data-aos="fade-right" className="mainHeading">
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
            <img src={chair} alt="Main chair" className="main-chair img-fluid" />

            <button className="contact-btn">
              <span>Contact Us</span>
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
      </div></div>
    </div>
  );
};

export default Home;
