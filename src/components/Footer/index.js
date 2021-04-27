import React from "react";
import { FaGithubAlt, FaLinkedin, FaFileAlt, FaCopyright } from 'react-icons/fa';

function Footer() {
  return (
    <div className="container-fluid fixed-bottom" style={{ backgroundColor: "grey" }}>
      <footer className="footer" >
        <p className="text-center">
          <FaCopyright style={{fill:'black'}} />
          {" "}
          Copyright 2020 Jeff Thao {" "}
          <a href="https://github.com/JeffThao" target="_blank" rel="noreferrer" title="Github">
          <FaGithubAlt style={{fill:'black'}}/>
          </a>
          {" "}
          <a href="https://www.linkedin.com/in/jeffthao/" target="_blank" rel="noreferrer" title="Linkedin">
          <FaLinkedin style={{fill:'black'}} />
          </a>
          {" "}
          <a
            href="https://docs.google.com/document/d/12tpNtMYP7WrWKGt5vjewkLY6fyWEhzJ_2RF5LybiFzs/edit?usp=sharing"
            target="_blank" rel="noreferrer" title="Resume">
            <FaFileAlt style={{fill:'black'}} />
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
