import React from "react";
import "../assets/animation.css";

function AboutMe() {
  const github = "https://github.com/chanhlonglu";
  const linkedin = "https://www.linkedin.com/in/chanhlonglu";

  return (
    <div className="container-fluid">
      <div className="row blank-row">
        <h1>About Me</h1>
      </div>
      <div className="row">
        <div className="horizontal-align-center">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="github"
          >
            github
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin"
          >
            linkedin
          </a>
        </div>
      </div>
      <div className="flex-fill d-flex justify-content-start overflow-auto">
        <div className="about-me-content">
          <p>
            Hello and welcome to my website. I am
            <h2 className="tracking-in-contract" style={{ color: "#ff5252" }}>
              Chanh Long Lu
            </h2>
          </p>
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
