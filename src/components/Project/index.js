import React from "react";
import whatsCooking from "../../images/whats-cooking.jpeg";
import santasBag from "../../images/santas-bag.png";
import passGenerator from "../../images/password-gen.jpg";
import readmeGen from "../../images/readme-gen.png";
import dailyPlanner from "../../images/daily-planner.jpeg";
import eatDaBurger from "../../images/eat-da-burger.png";

function Project() {
  return (
    <div className="container rounded col-xs col-sm-8 my-5" style={{ backgroundColor: "silver" }}>
      <h1>Portfolio</h1>
      <hr />
      <div className="row">
        <div className="col-md-4">
          <div className="card text-center">
            <a
              href="https://coryjquirk.github.io/whats-cookin/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={whatsCooking}
                className="img-fluid"
                style={{ width: "18rem" }}
                alt="What's Cooking"
              />
            </a>
            <div className="card-body">
              <a
                href="https://coryjquirk.github.io/whats-cookin/"
                target="_blank"
                rel="noreferrer"
              >
                <h5 className="card-title">What's Cooking?</h5>
              </a>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
        <div className="card text-center">
            <a
              href="https://github.com/samergain/Santas_Bag"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={santasBag}
                className="img-fluid"
                style={{ width: "18rem" }}
                alt="Santa's Bag"
              />
            </a>
            <div className="card-body">
              <a href="https://github.com/samergain/Santas_Bag" target="_blank" rel="noreferrer">
                <h5 className="card-title">Santa's Bag</h5>
              </a>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
        <div className="card text-center">
            <a
              href="https://jeffthao.github.io/password-generator/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={passGenerator}
                className="img-fluid"
                style={{ width: "18rem" }}
                alt="Password Generator"
              />
            </a>
            <div className="card-body">
              <a
                href="https://jeffthao.github.io/password-generator/"
                target="_blank" rel="noreferrer"
              >
                <h5 className="card-title">Password Generator</h5>
              </a>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
        <div className="card text-center">
            <a href="https://jeffthao.github.io/daily-planner/" target="_blank" rel="noreferrer">
              <img
                src={dailyPlanner}
                className="img-fluid"
                style={{ width: "18rem" }}
                alt="Daily Planner"
              />
            </a>
            <div className="card-body">
              <a
                href="https://jeffthao.github.io/daily-planner/"
                target="_blank" rel="noreferrer"
              >
                <h5 className="card-title">Daily Planner</h5>
              </a>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
        <div className="card text-center">
            <a href="https://young-atoll-75451.herokuapp.com/" target="_blank" rel="noreferrer">
            </a>
            <img
                  src={eatDaBurger}
                  className="img-fluid"
                  style={{ width: "18rem" }}
                  alt="Eat Da Burger"
                />
            <div className="card-body">
              <a
                href="https://young-atoll-75451.herokuapp.com/"
                target="_blank" rel="noreferrer"
              >
                <h5 className="card-title">Eat Da Burger!</h5>
              </a>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
        <div className="card text-center">
            <a
              href="https://github.com/JeffThao/readme-generator"
              target="_blank" rel="noreferrer"
            >
              <img
                src={readmeGen}
                className="img-fluid"
                style={{ width: "18rem" }}
                alt="Readme Generator"
              />
            </a>
            <div className="card-body">
              <a
                href="https://github.com/JeffThao/readme-generator"
                target="_blank" rel="noreferrer"
              >
                <h5 className="card-title">Readme Generator</h5>
              </a>
              <p className="card-text">
                You can click on this{" "}
                <a href="https://jeffthao.github.io/readme-generator/">link</a>{" "}
                to be taken to the github pages to see the video about how to
                use this application.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
