import React from "react";
import "./Projects.css"
import locationPing from "../photos/location.png"
import MLPic from "../photos/ML.png"

const Projects = () => {
  return (
    <React.Fragment>
        <div className="container projects" id="projects">
            <div className="row">
                <div className="col" id="projectT">
                    <h1 id="titleP"><em>Projects</em></h1>
                </div>
            </div>
            <hr noshade="true" id="breakFoot"></hr>
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12" id="projectPic">
                    <img alt="laser" src="https://piazza.com/redirect/s3?bucket=uploads&prefix=paste%2Fjn3ebqey4he3ne%2Ff0c8138511dd012b9fe399685f73dec810703d23a08f8d770fd58c21c1e7fd30%2FScreen_Shot_2020-06-04_at_10.31.36_PM.png" href="https://classes.cs.uoregon.edu/20S/cis410gameprog/games/Laser/index.html"></img>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12" id="projectDesc">
                    <h3>Laser Unloaded</h3>
                    <p>
                    A single-player game where your goal is to reach the finish line by avoiding obstacles.
                    You’ll have to guide your character down a level to jump gaps, roll past enemies, or choose to shoot them.
                    I completed this collaborative project with two peers at the University of Oregon.
                    Development process was managed with a Kanban board and Git was used to organize deployments.
                    </p>
                    <h6>Built with Unity, C#, Trello, and Git</h6>
                    <h6><button type="button" ><a href="https://classes.cs.uoregon.edu/20S/cis410gameprog/games/Laser/index.html" target = "_blank" 
rel = "noopener noreferrer"><strong> &middot; Try it out! &middot; </strong></a></button></h6>
                </div>
                
            </div>
            <hr noshade="true" id="breakFoot"></hr>
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12" id="projectPic">
                    <img id="location" alt="locationAssistance" src={locationPing}></img>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12" id="projectDesc">
                    <h3>Social Distance Assitance</h3>
                    <p>
                    A full stack prototype project that tracks user locations to help plan essential trips out of their homes during the COVID-19 pandemic.
                    The user mobile application will send location data to a database hosted on our school server, and allow for store visitation input such as wait time.
                    Using the data gathered the map is updated to reflect users at given locations and average wait times.
                    Users may obfuscate their location while at home to protect privacy and are identified by device id.
                    Built with five  others as a group project at the University of Oregon.
                    </p>
                    <h6>Built with Swift, PHP, MySQL, and HTML</h6>
                    <h6><button type="button"><a href="https://ix.cs.uoregon.edu/~masonj/422Project2.html" target = "_blank" 
rel = "noopener noreferrer"><strong> &middot; Check out the map! &middot; </strong></a></button></h6>
                    <h6><button type="button"><a href="https://github.com/irfan-f/SocialDistanceAssitance" target = "_blank" 
rel = "noopener noreferrer"><strong> &middot; Check out the code! &middot; </strong></a></button></h6>
                </div>
                
            </div>
            <hr noshade="true" id="breakFoot"></hr>
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12" id="projectPic">
                    <img alt="MLClassifiers" src={MLPic}></img>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12" id="projectDesc">
                    <h3>Machine Learning Classifiers</h3>
                    <p>
                    A Kaggle dataset encompassing thousands of games from League of Legends was used to train classifiers which predict the outcome.
                    The dataset was divided into three sets as to provide a training set, a development set to train hyper parameters, and a testing set to evaluate the accuracy.
                    To run the code or review the report to gain further understanding of the development process or game, access the Github repo linked below.
                    </p>
                    <h6>Built with Python, sklearn, and numpy</h6>
                    <h6><button type="button"><a href="https://github.com/irfan-f/CIS-472-Final-Project" target = "_blank" 
rel = "noopener noreferrer"><strong> &middot; Read more! &middot; </strong></a></button></h6>
                </div>
                
            </div>
            <hr noshade="true" id="breakFoot"></hr>
        </div>
    </React.Fragment>
  );
};

export default Projects;

