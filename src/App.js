import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import NotFound from "./components/NotFound";
import AboutMeIcon from "./assets/icons/about-me.png";
import ExperienceIcon from "./assets/icons/resume.png";
import "./App.css";

function App() {
  return (
    <div className="">
      <div className="container">
        <div className="row btn-container">
          <NavLink exact to="/" activeClassName="btn-clicked">
            <button className="btn btn-dark btn-circle btn-circle-xl m-1">
              <img src={AboutMeIcon} alt="About Me" />
            </button>
          </NavLink>

          <NavLink to="/experience" activeClassName="btn-clicked">
            <button className="btn btn-dark btn-circle btn-circle-xl m-1">
              <img src={ExperienceIcon} alt="Experience" />
            </button>
          </NavLink>
        </div>
      </div>

      <Switch>
        <Route exact path="/" component={AboutMe} />
        <Route path="/experience" component={Experience} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
