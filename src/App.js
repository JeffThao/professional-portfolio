import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Navbar";
import Footer from "./components/Footer";
import Project from "./components/Project";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={About} />
        <Route exact path="/project" component={Project} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
