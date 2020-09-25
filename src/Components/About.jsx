import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/About.css";
const About = () => {
  return (
    <div className="about-container">
      <div className="about container">
        <div className="row">
          <div className="left-text col-md-6">
            <div className="about-title">
              <h4>My Journey</h4>
              <h2>
                ROAD TO BE AN EXPERT <br />
                OF WEB DEVELOPER & GRAPHIC DESIGN
              </h2>
            </div>

            <div className="about-experiences">
              <p className="text-head">experiences</p>
              <p className="text-description">
                I dive into this field since 2014, started from a hobby then i
                got curious about this <span>Web Development</span> Technology.
                I've been create and build more than 100+ website to sharpen my
                skill. Other than that i also develop{" "}
                <span>Desktop Apps & Android Apps.</span> My basic skill is{" "}
                <span>Graphic Design.</span> My current job is a content editor,
                Graphic design and digital marketing for a retail company.
              </p>
            </div>
            <div className="about-skills">
              <p className="text-head">skills</p>
              <div className="skill-list">
                <div className="skill">
                  <ul>
                    <li>
                      <div className="prog">
                        <p>HTML</p>
                        <div className="bar-bg">
                          <div className="bar-prog"></div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="prog">
                        <p>CSS</p>
                        <div className="bar-bg">
                          <div className="bar-prog"></div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="prog">
                        <p>Javascript</p>
                        <div className="bar-bg">
                          <div className="bar-prog"></div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="prog">
                        <p>ReactJs</p>
                        <div className="bar-bg">
                          <div className="bar-prog"></div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="right-text col-md-6"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
