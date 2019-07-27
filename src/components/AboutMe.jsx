import React from "react";
import Link from "../components/Link";
import "../assets/animation.css";

function AboutMe() {
  const github = { url: "https://github.com/chanhlonglu", text: "Github" };
  const linkedin = {
    url: "https://www.linkedin.com/in/chanhlonglu",
    text: "Linkedin"
  };

  return (
    <div className="container-fluid">
      <div className="row blank-row">
        <h1>About Me</h1>
      </div>
      <div className="row" style={{ backgroundColor: "#ffa1a1" }}>
        <div className="horizontal-align-center">
          <Link content={github} />
          <Link content={linkedin} />
        </div>
      </div>
      <div className="flex-fill d-flex justify-content-start overflow-auto">
        <div
          className="about-me-content"
          style={{
            backgroundColor: "black",
            padding: "25px",
            opacity: "0.85",
            marginLeft: "10%",
            marginRight: "10%",
            borderRadius: "15px"
          }}
        >
          <p>Hello and welcome to my website. I am</p>
          <h2 className="tracking-in-contract" style={{ color: "#ff5252" }}>
            Chanh Long Lu
          </h2>
          <p>I am a Software Developer for over 3 years.</p>
          <p>
            I have built and delivered solutions to improve productivity,
            streamline and automate business processes.
          </p>
          <p>
            I am extremely committed to my work, willing to go above and beyond
            to further my understanding of the systems and technologies you work
            with, and deliver results.
          </p>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
