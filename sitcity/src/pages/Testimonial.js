import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import left from "../assets/img/left.svg";
import review1 from "../assets/img/reviews/review1.png";
import review1pfp from "../assets/img/reviews/review1pfp.png";
import review2 from "../assets/img/reviews/review2.png";
import review2pfp from "../assets/img/reviews/review2pfp.png";
import review3 from "../assets/img/reviews/review3.png";
import review3pfp from "../assets/img/reviews/review3pfp.png";

const Testimonial = () => {
  const sliderRef2 = useRef(null);
  const reviews = [
    {
      productImage: review1,
      reviewText:
        "I've always believed a great chair can transform a room, and the chair I received from SitCity proves it. The leather is incredibly soft, and the chair itself is like a personal retreat. It’s more than just furniture; it's a piece of art that makes a statement. Worth every single penny.",
      reviewerImage: review1pfp,
      reviewerName: "Sarah M",
      reviewerJob: "Interior designer",
    },
    {
      productImage: review2,
      reviewText:
        "My SitCity chair has been a game-changer for my home office. After months of use, it still looks and feels brand new. The craftsmanship is truly next-level, with a rock-solid feel that tells you it's built to last. This isn't just a purchase; it's an investment in enduring quality.",
      reviewerImage: review2pfp,
      reviewerName: "David R",
      reviewerJob: "Financial Analyst",
    },
    {
      productImage: review3,
      reviewText:
        "Finding a chair that was both beautiful and comfortable felt impossible until I found SitCity. The design is so unique—it immediately became the focal point of my living room. I get compliments on it from everyone who visits. This chair is a perfect blend of high-end design and luxurious comfort.",
      reviewerImage: review3pfp,
      reviewerName: "Olivia B",
      reviewerJob: "Architect",
    },
  ];

  var settings2 = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id="Reviews" className="container">
      <Slider ref={sliderRef2} {...settings2}>
        {reviews.map((reviewed, index) => (
          <div
            className="container-fluid mt-5 d-flex justify-content-center reviews"
            key={index}
          >
            <div className="col-12 col-lg-5 testimonials">
              <img
                src={reviewed.productImage}
                alt={`reviwes ${index}`}
                className="img-fluid"
                style={{
                  width: "622px",
                  height: "388px",
                  objectFit: "contain",
                  borderRadius: "12px",
                }}
              />
            </div>
            <div className="col-12 col-lg-7 ms-4 testText">
              <div className="row">
                <div className="col-12 d-flex align-items-center mb-3 ">
                  <h3 className="reviews text-white">
                    "{reviewed.reviewText}"
                  </h3>
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <img
                    src={reviewed.reviewerImage}
                    alt="review1pfp"
                    className="img-fluid"
                  />
                </div>
                <div className="col-9 d-flex flex-column justify-content-start">
                  <h4 className="text-white reviewName">
                    {reviewed.reviewerName}
                  </h4>
                  <p className="text-white reviewJob">{reviewed.reviewerJob}</p>
                </div>
              </div>
              <div
                className="container"
                style={{
                  marginTop: "2em",
                }}
              >
                <div className="row">
                  <div className="col-1 righty d-flex justify-content-end">
                    <div onClick={() => sliderRef2.current.slickPrev()}>
                      <div
                        style={{
                          width: "42.72px",
                          height: "34.48px",
                          background: "white",
                          cursor: "pointer",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "8.99px",
                        }}
                      >
                        <img src={left} alt="left arrow" />
                      </div>
                    </div>
                  </div>
                  <div className="col-10 lefty d-flex justify-content-start">
                    <div onClick={() => sliderRef2.current.slickNext()}>
                      <div
                        style={{
                          width: "42.72px",
                          height: "34.48px",
                          background: "white",
                          cursor: "pointer",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "8.99px",
                        }}
                      >
                        <img
                          src={left}
                          alt="left arrow"
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
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
