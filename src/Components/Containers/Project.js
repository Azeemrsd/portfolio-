import React from "react";
import "@fortawesome/fontawesome-free";
const Project = props => {
  return (
    <div className="projects">
      <h1 className="text-center">{props.title}</h1>
      <p className="d-block text-center">
        <i className="fa fa-calendar" aria-hidden="true"></i>&nbsp;{props.date}
      </p>

      <a href={props.link} className="d-block text-center">
        {props.link}
      </a>

      <p className="d-block text-center">{props.description}</p>
    </div>
  );
};
export default Project;
