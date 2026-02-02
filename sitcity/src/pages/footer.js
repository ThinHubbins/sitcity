import React from "react";
import halfcircle from "../assets/img/halfcircle.svg";
import footerChair from "../assets/img/footerChair.svg";

const Footer = () => {
  return (
    <div>
      <footer id="Contact"
        className="container mb-3 text-center text-white position-relative"
        style={{ marginTop: "20%" }}
      >
        <img
          src={halfcircle}
          alt="half-footer-circle"
          className="footerImg img-fluid position-absolute"
        />

        <div
          className="row gy-5"
          style={{
            marginTop: "10%",
          }}
        >
          <div className="col-12 col-md-6 col-xl-3 flex-column d-flex justify-content-center  text-start gap-4">
            <div className="footerLinks">Sit City</div>
            <a href="#Home" className="footerLink mt-3">
              Home
            </a>
            <a href="#Product" className="footerLink">
              Products
            </a>
            <a href="#About" className="footerLink">
              About
            </a>
            <a href="#Pricing" className="footerLink">
              Pricing
            </a>
            <a href="#Reviews" className="footerLink">
              Reviews
            </a>
          </div>

          <div className="col-12 col-md-6 col-xl-3 flex-column d-flex text-start gap-4">
            <div className="footerLinks">Legal</div>
            <a href="#Home" className="footerLink mt-3">
              Terms and condition
            </a>
            <a href="#Home" className="footerLink">
              License and Agreement
            </a>
            <a href="#Home" className="footerLink">
              Payment and install
            </a>
          </div>
          <div className="col-12 col-xl-3 flex-column d-flex text-start gap-4">
            <div className="footerLinks">Contact</div>
            <a href="/" className="footerLink mt-3">
              <i className="bi bi-telephone-fill icn"></i>+234 123 4567 890
            </a>
            <a href="https://www.whatsapp.com/" target="_blank" rel="noreferrer" className="footerLink">
              <i className="bi bi-whatsapp icn"></i>+234 123 6278 8289
            </a>
            <a href="https://mail.google.com" target="_blank" rel="noreferrer" className="footerLink">
              <i className="bi bi-envelope icn"></i>sitcity@gmail.com
            </a>
            <a href="/" className="footerLink">
              <i className="bi bi-clock icn"></i>
              <div className="me-2 d-inline-block">
                Open and Close
                <p>09:00 am - 10:00 pm</p>
              </div>
            </a>
          </div>
        </div>
      </footer>
      <div className="container">
        <div className="d-flex justify-content-center">
          <hr
            style={{
              border: "0",
              height: "1px",
              backgroundColor: "#ffffff",
              margin: "2rem 0",
              width: "100%",
            }}
          />
        </div>
        <div className="sitcity">
          <div className="row">
            <div className="col-2 d-flex justify-content-center align-items-center">
              <img src={footerChair} alt="footer Chair" className="img-fluid" />
            </div>
            <div className="col-10 text-start sitText">
              <h1>SITCITY</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
