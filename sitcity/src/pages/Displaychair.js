import React, { useState } from "react";

const Displaychair = () => {
  const [grow, setGrow] = useState(false);
  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center mt-5">
        <div
          onClick={() => setGrow(!grow)}
          className="col-12 text-center mb-4 reviewSet"
          style={{
            height: grow ? "600px" : "113px",
            transition: "height 1s ease",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Displaychair;
