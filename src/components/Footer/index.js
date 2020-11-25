import React from "react";
import { FaGithubAlt, FaLinkedin, FaFileAlt, FaCopyright } from 'react-icons/fa';

function Footer() {
  return (
    <div className="container-fluid fixed-bottom">
      <footer className="footer">
        <p className="text-center text-muted">
          <FaCopyright style={{fill:'white'}} />
          Copyright 2020 Jeff Thao
          <a href="https://github.com/JeffThao" target="_blank">
          <FaGithubAlt style={{fill:'white'}}/>
          </a>
          <a href="https://www.linkedin.com/in/jeffthao/" target="_blank">
          <FaLinkedin style={{fill:'white'}} />
          </a>
          <a
            href="https://docs.google.com/document/d/12tpNtMYP7WrWKGt5vjewkLY6fyWEhzJ_2RF5LybiFzs/edit?usp=sharing"
            target="_blank"
          >
            <FaFileAlt style={{fill:'white'}} />
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
