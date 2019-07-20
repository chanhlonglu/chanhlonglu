import React from "react";
import { Switch, Route, Link, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Experience from "./components/Experience";
import NotFound from "./components/NotFound";
import "./App.css";

function App() {
  return (
    <div>
      <div className="header">
        <div className="header-logo">
          <h1>
            <Link to="/">Chanh Long Lu</Link>
          </h1>
        </div>
        <div className="header-menu">
          <NavLink exact to="/" activeClassName="header-menu-selected">
            Home
          </NavLink>
          <NavLink to="/experience" activeClassName="header-menu-selected">
            Experience
          </NavLink>
          <NavLink to="/eduction" activeClassName="header-menu-selected">
            Education
          </NavLink>
        </div>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/experience" component={Experience} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
