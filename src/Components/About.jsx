import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/About.css";
import {
  HTML,
  CSS,
  JS,
  CSHARP,
  CPLUS,
  REACT,
  ANDROID,
} from "../assets/logo/logo.js";
const About = () => {
  return (
    <div className="about-container">
      <div className="about container">
        <div className="row">
          <div className="left-text col-md-6">
            <div className="about-title">
              <h4>My Journey</h4>
              <h2>
                THE ROAD TO BE TECH TYCOON IS AHEAD <br />
              </h2>
            </div>
            <div className="about-experiences">
              <p className="text-head">background</p>
              <p className="text-description">
                I dive into this field since 2012, Obsessed from Operating
                System Programming, the first thing i leant is <span>C++</span>{" "}
                Programming Language to strengthen my foundation about basic
                programming. Then i continue my step towards
                <span> Web Development</span> Technology. I've been create and
                build more than 50+ website to sharpen my skill. Other than that
                i also develop <span>Desktop Apps & Android Apps.</span> My
                basic skill is <span>Graphic Design.</span> My current job is a
                content editor, Graphic design and digital marketing for a
                retail company.
              </p>
            </div>

            <div className="about-experiences">
              <p className="text-head">Vision</p>
              <p className="text-description">
                I dive into this field since 2012, Obsessed from Operating
                System Programming, the first thing i leant is <span>C++</span>{" "}
                Programming Language to strengthen my foundation about basic
                programming. Then i continue my step towards
                <span> Web Development</span> Technology. I've been create and
                build more than 50+ website to sharpen my skill. Other than that
                i also develop <span>Desktop Apps & Android Apps.</span> My
                basic skill is <span>Graphic Design.</span> My current job is a
                content editor, Graphic design and digital marketing for a
                retail company.
              </p>
            </div>
          </div>

          <div className="right-text col-md-6">
            <div className="about-title">
              <h4>My Journey</h4>
              <h2>
                THE ROAD TO BE TECH TYCOON IS AHEAD <br />
              </h2>
            </div>
            <div className="about-skills">
              <p className="text-head">skills</p>
              <div className="skill-list">
                <img className="skill-logo" src={HTML} alt="" />
                <img className="skill-logo" src={CSS} alt="" />
                <img className="skill-logo" src={JS} alt="" />
                <img className="skill-logo" src={REACT} alt="" />
                <img className="skill-logo" src={CSHARP} alt="" />
                <img className="skill-logo" src={CPLUS} alt="" />
                <img className="skill-logo" src={ANDROID} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
