import React from "react";
const ExperienceDetails = () => {
  return (
    <div>
      <h1 className="font-italic text-center">
        {" "}
        <i className="fa fa-award" style={{ color: "purple" }}></i>
        Experience
      </h1>
      <h3>Internship at Indian Mistry</h3>
      <p className="text-muted">
        {" "}
        <i
          className="fa fa-calendar"
          aria-hidden="true"
          style={{ color: "purple" }}
        />
        &nbsp;05-05-18 to 06-06-18
      </p>
      <p className="para">
        I have worked as a front-end developer at Indian Mistry. That was a
        great experience to work under such a big organization though I have
        learned many things from this internship and also the superiors were
        kinda helping nature. They helped me a lot wehnever I got stuck
        somewhere and they helped me to boost my skills to the next level.
      </p>
    </div>
  );
};
export default ExperienceDetails;
