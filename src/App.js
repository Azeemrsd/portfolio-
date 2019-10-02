import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Landing from "./Components/Landing";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
