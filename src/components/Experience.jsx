import React from "react";
import { EXPERIENCES } from "../assets/data/experiences.js";

export default function Experience() {
  return (
    <div className="container-fluid">
      <div className="row blank-row">
        <h1>Experiences</h1>
      </div>
      {EXPERIENCES.map(exp => {
        const location = exp.location;
        const careers = exp.careers;

        return careers.map((career, index) => {
          return <Career key={index} location={location} career={career} />;
        });
      })}
    </div>
  );
}

function Career(props) {
  const {
    location,
    career: { date, title, company, responsibilities, technologies }
  } = props;

  return (
    <div className="container-fluid row-gap">
      <div
        className="row"
        style={{
          backgroundColor: "black",
          padding: "25px",
          opacity: "0.85",
          marginLeft: "10%",
          marginRight: "10%",
          borderRadius: "15px"
        }}
      >
        <div className="col job-title-col">
          <div className="badge badge-pill badge-light job-title">{title}</div>
          <br />
          <br />
          <h4>{date}</h4>
          <a href={company.website} target="_blank" rel="noopener noreferrer">
            {company.name}
          </a>
          <p>{location}</p>
        </div>

        <div className="col img-company-col">
          <img className="img-company" src={company.img} alt={company.name} />
        </div>

        <div className="col">
          {responsibilities.map((resp, index) => (
            <p key={index}>{resp}</p>
          ))}
        </div>

        <div className="job-technologies align-middle">{technologies}</div>
      </div>
    </div>
  );
}
