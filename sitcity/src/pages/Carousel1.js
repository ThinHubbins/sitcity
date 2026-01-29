import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import left from "../assets/img/left.svg";
import forsale1 from "../assets/img/forsale1.jpg";
import forsale2 from "../assets/img/forsale2.jpg";
import forsale3 from "../assets/img/forsale3.jpg";

const Carousel1 = () => {
  const sliderRef = useRef(null);
    const [slidesToShow, setSlidesToShow] = useState(1);

useEffect(() => {
  const handleResize = () => {
    const width = window.innerWidth;

    if (width >= 1024) {
      setSlidesToShow(3.5);
    } else if (width >= 600) {
      setSlidesToShow(2);  
    } else {
      setSlidesToShow(1);  
    }
  };

  handleResize(); 
  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);

  const slides = [
    {
      image: forsale1,
      name: "Green Beyani Chair",
      address: "Montego Heights",
      price: "450 USD",
    },
    {
      image: forsale2,
      name: "Blue Beyani Chair",
      address: "Santa Anna",
      price: "750 USD",
    },
    {
      image: forsale3,
      name: "Bour Couple Chair",
      address: "Amani Crested",
      price: "700 USD",
    },
    {
      image: forsale1,
      name: "Green Beyani Chair",
      address: "Montego Heights",
      price: "450 USD",
    },
    {
      image: forsale2,
      name: "Blue Beyani Chair",
      address: "Santa Anna",
      price: "750 USD",
    },
    {
      image: forsale3,
      name: "Bour Couple Chair",
      address: "Amani Crested",
      price: "1,200 USD",
    },
  ];

  const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: slidesToShow, // 👈 controlled by React
  slidesToScroll: 1,
};

  return (
    <div className="container">
     
        <div className="container-fluid">
          <div className="row g-0">
            <div className="col-6 text-white d-flex justify-content-start carousel">
              <div className="carousel-header text-start">
                <span
                  style={{
                    fontWeight: "273",
                    fontSize: "24px",
                  }}
                >
                  DISCOVER SIT CITY
                </span>
                <p>
                  EXPLORE OUR <br /> LUXURY CHAIRS
                </p>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-end">
              <div
                className="text-center view"
                style={{
                  width: "146.33px",
                  height: "44.32px",
                  background: "#FFFFFF",
                  padding: "10px 20px",
                  borderRadius: "40px",
                }}
              >
                View More
              </div>
            </div>
          </div>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {slides.map((slide, i) => (
            <div
              className="container-fluid px-3 mt-4 d-flex justify-content-center position-relative"
              key={i}
              style={{ minHeight: "300px" }}
            >
              <img
                className="img-fluid rounded chairCarousel"
                src={slide.image}
                alt={`forsale${i}`}
              />

              <div
                className="position-absolute"
                style={{
                  bottom: "3%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "rgba(255, 255, 255, 0.55)",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  backdropFilter: "blur(4px)",
                  borderRadius: "12px",
                  padding: "0.5rem 1rem",
                  width: "82%",
                  height: "55px",
                }}
              >
                <div className="row">
                  <div className="col-7">
                    <div
                      className="carousel-name"
                      style={{
                        fontSize: "15px",
                        fontWeight: "600",
                        lineHeight: "100%",
                        whiteSpace: "nowrap",
                        color: "#000000",
                      }}
                    >
                      {slide.name}
                    </div>
                    <div
                      className="carousel-address mt-2"
                      style={{
                        fontSize: "11.63px",
                        fontWeight: "400",
                        lineHeight: "100%",
                        whiteSpace: "nowrap",
                        color: "#000000",
                      }}
                    >
                      <i
                        className="bi bi-geo-alt-fill"
                        style={{
                          fontSize: "12px",
                          lineHeight: "100%",
                          marginRight: "5px",
                          color: "#000000",
                        }}
                      ></i>
                      {slide.address}
                    </div>
                  </div>
                  <div className="col-4 d-flex align-items-center justify-content-end">
                    <div
                      className="carousel-price p-2"
                      style={{
                        width: "70px",
                        height: "30.79px",
                        background: "#ffffff",
                        borderRadius: "11.32px",
                        gap: "10px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "12px",
                        fontWeight: "300",
                        lineHeight: "100%",
                        color: "#000000",
                      }}
                    >
                      ${slide.price}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="container">
        <div className="arrow-row row my-4">
          <div className="col-6 d-flex justify-content-end">
            <div onClick={() => sliderRef.current.slickPrev()}>
              <div
                className="border rounded"
                style={{
                  width: "57px",
                  height: "46px",
                  background: "white",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={left} alt="left arrow" />
              </div>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-start">
            <div onClick={() => sliderRef.current.slickNext()}>
              <div
                className="border rounded"
                style={{
                  width: "57px",
                  height: "46px",
                  background: "white",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={left}
                  alt="right arrow"
                  style={{
                    rotate: "180deg",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel1;
