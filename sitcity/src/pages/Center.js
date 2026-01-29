import React from 'react'
import centerhero1 from "../assets/img/centerhero1.png";
import centerhero2 from "../assets/img/centerhero2.png";

const Centerchair = () => {
  return (
    <div className="container">
      <div
        className="mt-5"
        style={{
          marginBottom: "15%",
        }}
      >
        <div className="row d-flex justify-content-center align-items-center centerhero">
          <div className="col-12 col-xl-6 d-flex justify-content-end centerhero1">
            <img
              src={centerhero1}
              alt="centerhero1"
      className='centerImg2'
              style={{ maxWidth: "300px" }}
            />
          </div>
          <div className="col-12 col-xl-6 d-flex justify-content-start centerhero2">
            <img
              src={centerhero2}
              alt="centerhero2"
      className='centerImg1'
              style={{ maxWidth: "300px" }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Centerchair
