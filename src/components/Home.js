import React from "react";
import "./Home.css"
import photo from "../photos/IMG_1444.jpeg"

const Home = () => {
  return (
    <React.Fragment>
        <div className="container-fluid feature" id="home">
            <div className="row" id="about">
                <div className="col">
                    <h2>HELLO!</h2>
                    <h3 id="name">I am, <b>Irfan Filipovic</b></h3>
                    <em id="degree">B.S Computer and Information Science</em>
                <p>
                    I’m a recent graduate from the University of Oregon, looking to be part of a collaborative and dedicated team. 
                </p>
                <p>
                    Programming experience encompassing:
                        Python,
                        Java,
                        JavaScript,
                        HTML,
                        CSS,
                        C, C++, and C#.
                        <br></br>
                        Beginner experience in:
                            Unity,
                            Swift,
                            NoSQL,
                            MongoDB.
                        
                </p>
                <p>
                    Having gained experience in several popular programming experiences
                    Always looking to improve my development practices and expand my knowledge of libraries has led me to begin a project 
                </p>
                </div>
                <div className="col" id="picOfMe">
                    <img alt="500x500" src={photo}></img>
                </div>
            </div>
        </div>
    </React.Fragment>
)}

export default Home;