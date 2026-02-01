import React, { useEffect } from "react";
import chairemoji from "../assets/img/chairemoji.svg";
import time from "../assets/img/time-fill.svg";
import diamond from "../assets/img/diamond.svg";
import couchfill from "../assets/img/couch-fill.svg";
import box from "../assets/img/box-fill.svg";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Whyus = () => {
  useEffect(() => {
    gsap.to(".slideNow", {
      x: -5,
      duration: 3,
      scrollTrigger: {
        trigger: ".slideNow",
        start: "top 130%",
      },
    });
  }, []);
  return (
    <div className="container" style={{ overflow: "hidden" }}>
      <div className="slideNow">
        <div
          className="row"
          style={{
            marginTop: "80px",
          }}
        >
          <div className="col-12 text-center chooseSitCity">
            <h2>WHY CHOOSE SIT CITY</h2>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 text-center aboutUs">
            <h2>
              We have redefined the art of{" "}
              <span style={{ color: "#BBFF7F" }}>sit</span>ting.
              <img src={chairemoji} alt="chair emoji" className="ms-2" />
            </h2>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12 col-md-6 col-lg-3 featureCol">
            <div className="row">
              <div className="col-12 d-flex justify-content-center featureIcons">
                <div
                  className="time-bg  d-flex justify-content-center align-items-center"
                  style={{
                    width: "66.99px",
                    height: "57.75px",
                    backgroundColor: "#FFFFFF45",
                    borderRadius: "13.86px",
                  }}
                >
                  <img src={time} alt="time icon" />
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-12 text-center text-white feature1">
                <h3 className="features">The Legacy of Comfort</h3>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-12 text-white featureText">
                More than a chair, it’s an heirloom. Our pieces are meticulously
                crafted to stand the test of time, promising a legacy of comfort
                that can be enjoyed for generations to come.
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 featureCol">
            <div className="row">
              <div className="col-12 d-flex justify-content-center featureIcons">
                <div
                  className="time-bg  d-flex justify-content-center align-items-center"
                  style={{
                    width: "66.99px",
                    height: "57.75px",
                    backgroundColor: "#FFFFFF45",
                    borderRadius: "13.86px",
                  }}
                >
                  <img src={diamond} alt="time icon" />
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-12 text-center text-white feature1">
                <h3 className="features">A Statement, Not a Seat</h3>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-12 text-white featureText">
                Each SitCity chair is a singular work of art. We design beyond
                the trends, crafting pieces that are as individual as you are—a
                true reflection of your unique style.
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 featureCol">
            <div className="row">
              <div className="col-12 d-flex justify-content-center featureIcons">
                <div
                  className="time-bg  d-flex justify-content-center align-items-center"
                  style={{
                    width: "66.99px",
                    height: "57.75px",
                    backgroundColor: "#FFFFFF45",
                    borderRadius: "13.86px",
                  }}
                >
                  <img src={box} alt="time icon" />
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-12 text-center text-white feature1">
                <h3 className="features">The Foundation of Form</h3>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-12 text-white featureText">
                Beneath our elegant exteriors lies an unyielding core of
                strength. We select only the most resilient materials and employ
                master-level construction, ensuring your chair is built to
                withstand the test of time.
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 featureCol">
            <div className="row">
              <div className="col-12 d-flex justify-content-center featureIcons">
                <div
                  className="time-bg  d-flex justify-content-center align-items-center"
                  style={{
                    width: "66.99px",
                    height: "57.75px",
                    backgroundColor: "#FFFFFF45",
                    borderRadius: "13.86px",
                  }}
                >
                  <img src={couchfill} alt="time icon" />
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-12 text-center text-white feature1">
                <h3 className="features">The Pursuit of Perfection</h3>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-12 text-white featureText">
                Quality is the cornerstone of every SitCity creation. From the
                selection of full-grain leathers to the final stitch, we are
                relentlessly dedicated to perfection, ensuring an unparalleled
                level of excellence in every detail.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
