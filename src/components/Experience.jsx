import React from "react";
import { EXPERIENCES } from "../assets/data/experiences.js";
import "../assets/experience-page.css";

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
      <div className="row">
        <div className="col job-title-col">
          <h4>{date}</h4>
          <p
            className="badge badge-pill badge-light"
            style={{ color: "black", fontSize: "1em" }}
          >
            {title}
          </p>

          <p>
            <a href={company.website} target="_blank" rel="noopener noreferrer">
              {company.name}
            </a>
          </p>
          <p>{location}</p>
        </div>

        <div className="col img-company-col">
          <img className="img-company" src={company.img} alt={company.name} />
        </div>

        <div className="col job-description-col">
          {responsibilities.map((resp, index) => (
            <p key={index}>{resp}</p>
          ))}
        </div>
      </div>

      <div className="row">
        <div className="job-technologies">
          <span>{technologies}</span>
        </div>
      </div>
    </div>
  );
}
