import React from "react";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <div className="basic">
      <h1 style={{ color: "white" }}>I am a UI Developer</h1>
      <img
        src="img/me.png"
        alt="azeem"
        style={{ width: "300px", height: "300px" }}
      />
      <p className="para1">
        As a developer I am aware of the responsibility to deal with the
        complexity of the code and how to fulfill the needs of the clients. When
        I am not coding you wil see me playing cricker. I also love eating
        delicious food.
      </p>
      <button className="btn btn-success mr-1">Downloas Resume</button>
      <Link to="/about">
        <button className="btn btn-danger">Know More</button>
      </Link>
    </div>
  );
};

export default Landing;
