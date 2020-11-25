import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaGithubAlt, FaLinkedin, FaFileAlt } from 'react-icons/fa';


function Nav() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className={location.pathname === "/" ? "nav-link " : "nav-link"} style={{color:'black'}}>
          Jeff Thao
        </Link>
    <a href="https://github.com/JeffThao" target="_blank" title="Github">
      <FaGithubAlt style={{fill:'grey'}}/>
    </a>
    <a href="https://www.linkedin.com/in/jeffthao/" target="_blank" title="Linkedin">
      <FaLinkedin style={{fill:'grey'}} />
    </a>
    <a href="https://docs.google.com/document/d/12tpNtMYP7WrWKGt5vjewkLY6fyWEhzJ_2RF5LybiFzs/edit?usp=sharing"
      target="_blank" rel="noopener" title="Resume">
        <FaFileAlt style={{fill:'grey'}} />
      </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse ml-auto justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link" href="/">About <span className="sr-only"></span></a>
        <a className="nav-link" href="/project">Portfolio</a>
      </div>
    </div>
  </nav>
  );
}

export default Nav;
