import React from "react"
import "./About.css"
import photo from "../photos/IMG_1444.jpeg"

const About = () => {
  return (
    <React.Fragment>
        <div className="about" id="aboutAnchor">
        <div className="row">
                <div className="col" id="picOfMe">
                    <img alt="500x500" src={photo}></img>
                </div>
            </div>
            <div className="row">
                <div className="col" id="aboutMe">
                    <h1 id="titleA"><em>About Me</em></h1>
                </div>
            </div>
            <div className="row">
                <div className="col" id="aboutOfMe">
                <p>
                    Recent Computer Science graduate from the University of Oregon, with experience in data structures, algorithms, statistical methods, and machine learning.
                    At PayClearly, I built a headless payment portal automator with JavaScript and Puppeteer and exceeded expectations for market research goals.
                    My background in computer science combined with my  experience at PayClearly has strengthened my ability to communicate effectively, quickly adapt to new technologies, and efficiently manage multiple responsibilities.
                </p>
                </div>
            </div>
        </div>
    </React.Fragment>
  );
};

export default About;

