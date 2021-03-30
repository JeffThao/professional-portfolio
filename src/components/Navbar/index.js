import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaGithubAlt, FaLinkedin, FaFileAlt } from 'react-icons/fa';


function Nav() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg " style={{backgroundColor: "#019EF3"}}>
      <Link to="/" className={location.pathname === "/" ? "nav-link " : "nav-link"} style={{color:'black'}}>
          Jeff Thao
        </Link>
    <a href="https://github.com/JeffThao" target="_blank" rel="noreferrer" title="Github">
      <FaGithubAlt style={{fill:'black'}}/>
    </a>
    <a href="https://www.linkedin.com/in/jeffthao/" target="_blank" rel="noreferrer" title="Linkedin">
      <FaLinkedin style={{fill:'black'}} />
    </a>
    <a href="https://docs.google.com/document/d/12tpNtMYP7WrWKGt5vjewkLY6fyWEhzJ_2RF5LybiFzs/edit?usp=sharing"
      target="_blank" rel="noreferrer" title="Resume">
        <FaFileAlt style={{fill:'black'}} />
      </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse ml-auto justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <Link to="/professional-portfolio" className={location.pathname === "/professional-portfolio" ? "nav-link " : "nav-link"} style={{color:'black'}}>
      About
        </Link>
        <Link to="/project" className={location.pathname === "/project" ? "nav-link " : "nav-link"} style={{color:'black'}}>
        Portfolio
        </Link>
      </div>
    </div>
  </nav>
  );
}

export default Nav;
