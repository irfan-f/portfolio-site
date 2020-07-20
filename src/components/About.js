import React from "react";
import "./About.css"

const About = () => {
  return (
    <React.Fragment>
        <div className="about">
            <div className="row">
                <div className="col" id="aboutMe">
                    <h1 id="titleA"><em>About Me</em></h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-7 order-md-2" id="aboutOfMe">
                <p>
                    Recent Computer Science graduate from the University of Oregon, with experience in data structures, algorithms, statistical methods, and machine learning.
                    At PayClearly, I built a headless payment portal automator with JavaScript and Puppeteer and exceeded expectations for market research goals.
                    My background in computer science combined with my  experience at PayClearly has strengthened my ability to communicate effectively, quickly adapt to new technologies, and efficiently manage multiple responsibilities.
                </p>
                </div>
                <div className="col-md-5 order-md-1" id="picOfMe">
                    <img alt="500x500" src="https://media-exp1.licdn.com/dms/image/C4E03AQFY6xc0uGbAww/profile-displayphoto-shrink_200_200/0?e=1599696000&v=beta&t=XQFjZAgJaPiNbFPAjmlZvYHQ7JDncAxb9xkrCyCSxLI"></img>
                </div>
            </div>
        </div>
    </React.Fragment>
  );
};

export default About;

