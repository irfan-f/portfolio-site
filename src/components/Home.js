import React from "react";
import "./Home.css"
import photo from "../photos/IMG_1444.jpeg"

const Home = () => {
  return (
    <React.Fragment>
        <div className="container-fluid feature" id="home">
            <div className="row">
                <div className="col">
                    <h2>HELLO!</h2>
                    <h3 id="name">I am, <b>Irfan Filipovic</b></h3>
                    <em id="degree">B.S Computer and Information Science</em>
                <p>
                I’m a recent graduate from the University of Oregon, looking for a collaborative and dedicated team to be a part of. 
                I have experience learning programming languages in short time frames to complete projects, and thus have experience in several popular languages.
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