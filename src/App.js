import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Experience from "./components/Experience";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/experience">Experience</NavLink>
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
