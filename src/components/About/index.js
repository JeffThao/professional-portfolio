import React from "react";
import userImg from "./jeff-thao.jpeg";

function About() {
  return (
    <div className="container rounded col-xs col-sm-8 my-5">
      <h1>About Me</h1>
      <hr />
      <div className="row">
        <div className="col-s">
          <img
            className="img rounded float-left img-fluid"
            src={userImg}
            alt="Jeff Thao"
          />
          <p>
            Hi, my name is Jeff Thao. I live in the greater Minneapolis/St.
            Paul, MN area. I am currently enrolled in the UMN Bootcamp, bound to
            graduate Dec. 2020.
          </p>
          <p>
            Feel free to check out my Github at
            <a href="www.https://github.com/JeffThao">github.com/JeffThao</a>.
            Or you may email me at
            <a href="mailto:jeff.thao92@gmail.com">jeff.thao92@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
