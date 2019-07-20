import React from "react";
import { EXPERIENCES } from "../assets/data/experiences.js";
import "../assets/experience-page.css";

function Experience() {
  return (
    <div className="experience-page">
      {EXPERIENCES.map(exp => {
        const location = exp.location;
        const careers = exp.careers;
        return careers.map(c => (
          <div>
            <img src={c.company.img} alt={c.company.name} />
          </div>
        ));
      })}
    </div>
  );
}
export default Experience;
