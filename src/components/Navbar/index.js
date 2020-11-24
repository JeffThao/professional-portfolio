import React from "react";

function Nav() {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand text-white" href="index.html">Jeff Thao</a>
    <a href="https://github.com/JeffThao" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
    <a href="https://www.linkedin.com/in/jeffthao/" target="_blank"><i className="fa fa-linkedin"
        aria-hidden="true"></i></a>
    <a href="https://docs.google.com/document/d/12tpNtMYP7WrWKGt5vjewkLY6fyWEhzJ_2RF5LybiFzs/edit?usp=sharing"
      target="_blank"><i className="fa fa-file-text" aria-hidden="true"></i></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse ml-auto justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" href="index.html">About <span className="sr-only">(current)</span></a>
        <a className="nav-link" href="portfolio.html">Portfolio</a>
      </div>
    </div>
  </nav>
  );
}

export default Nav;
