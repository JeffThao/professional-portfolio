import React from "react";
import userImg from "./jeff-thao.jpeg";

function About() {
  return (
    <div
      className="container rounded col-xs col-sm-8 my-5"
      style={{ backgroundColor: "#A4DFFD" }}
    >
      <h1>About Me</h1>
      <hr />
      <div className="row">
        <div className="col-s m-3">
          <img
            className="img rounded float-left img-fluid mr-3"
            src={userImg}
            alt="Jeff Thao"
            style={{ width: "40%", borderRadius: "400/2" }}
          />
          <p>
            Hi, my name is Jeff Thao. I live in the greater Minneapolis/St.
            Paul, MN area. I am a December 2020 graduate from the University of
            Minnesota Full-Stack MERN Bootcamp. Although I am a Full-Stack
            developer, my ideal role is in the frontend. I love being able to
            showcase my work and visually see it come to life. I am consantly
            thinking about UX and UI and how websites would rank in SEO organic
            searches or how users will navigate through them.
          </p>
          <p>
            I am open to work, and if you would like more information about me,
            feel free to check out my Github at{" "}
            <a href="https://github.com/JeffThao" target="_blank">github.com/JeffThao</a>.
            Or you may email me at {""}
            <a href="mailto:jeff.thao92@gmail.com">jeff.thao92@gmail.com</a>, or or check out my LinkedIn at{" "}<a class="about-contact" href="https://linkedin.com/in/jeffthao" target="_blank">linkedin.com/in/jeffthao</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
