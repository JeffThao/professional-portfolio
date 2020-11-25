import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaGithubAlt, FaLinkedin, FaFileAlt } from 'react-icons/fa';


function Nav() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Jeff Thao
        </Link>
    <a href="https://github.com/JeffThao" target="_blank" title="Github">
      <FaGithubAlt style={{fill:'white'}}/>
    </a>
    <a href="https://www.linkedin.com/in/jeffthao/" target="_blank" title="Linkedin">
      <FaLinkedin style={{fill:'white'}} />
    </a>
    <a href="https://docs.google.com/document/d/12tpNtMYP7WrWKGt5vjewkLY6fyWEhzJ_2RF5LybiFzs/edit?usp=sharing"
      target="_parent" rel="noopener" title="Resume">
        <FaFileAlt style={{fill:'white'}} />
      </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse ml-auto justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" href="/">About <span className="sr-only">(current)</span></a>
        <a className="nav-link" href="/project">Portfolio</a>
      </div>
    </div>
  </nav>
  );
}

export default Nav;