import React from "react";
function AboutMe() {
  return (
    <div className="container-fluid">
      <div className="row blank-row">
        <h1>About Me</h1>
      </div>
      <div className="row">
        <div className="github-linkedin-container">
          <a
            href="https://github.com/chanhlonglu"
            target="_blank"
            rel="noopener noreferrer"
            className="github"
          >
            github
          </a>
          <a
            href="https://www.linkedin.com/in/chanhlonglu"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin"
          >
            linkedin
          </a>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
