import React from "react";
import "./Home.css"
import photo from "../photos/IMG_1444.jpeg"

const Home = () => {
  return (
    <React.Fragment>
      <div className="container-fluid feature" id="home">
        <div className="row" id="about">
          <div className="col order-lg-12" id="picOfMe">
            <img alt="500x500" src={photo}></img>
          </div>
          <div className="col order-lg-1">
            <h2>HELLO!</h2>
            <h3 id="name">I am, <b>Irfan Filipovic</b></h3>
            <em id="degree">B.S Computer and Information Science</em>
            <p>
              I'm a recent graduate from the University of Oregon I am well acquainted with strict deployment dates, group collaboration, and resolving bugs and questions through the use of research.
              Projects were only part of my education, the rest of my time was spent reinforcing algorithms, data structures, computer architecture, and software methodologies.
            </p>
            <p>
              As a Technical Intern at PayClearly I experienced the fast pace of production, value of communication between coworkers and teams, and incorporating code into an existing codebase.
              Time not spent developing was utilized to acquire data from various vendors, refining professional communication to be clear and concise giving me research experience.
            </p>
            <p>
              I am also working on a personal project called Nobody Wants Your Sheep. It is a real-time Settlers of Catan browser game, built with React, Redux, Firebase, and others.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home;
