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
                    I’m a recent graduate from the University of Oregon, looking to be part of a collaborative and dedicated team. 
                    With the goal of expanding my knowledge of development, contributing efficient and desired code through my hardwork and dedication.
                </p>
                <p>
                    Developed programming experience in the following languages: Python, Java, JavaScript, HTML, CSS, C, C++, and C#. 
                    With beginner experience in: Unity, Swift, NoSQL, and MongoDB.
                    Also familiar with Docker, Firebase, Git, and several software development strategies.
                </p>
                <p>
                    Currently I am working on Unity tutorials to further my understanding of game development methods, and to generate my own game idea.
                </p>
                </div>
            </div>
        </div>
    </React.Fragment>
)}

export default Home;
