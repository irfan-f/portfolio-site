import React, { useState } from "react";
import locationPing from "../photos/location.png"
import MLPic from "../photos/ML.png"
import underConstruction from "../photos/underConstruction.png"
import NWYS from "../photos/nobodyWantsYourSheep.png";

import Button from "../components/interactive/Button";
import Mahjong from "../components/sections/Mahjong";

const projectSections = [
  Mahjong,
];

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  }

  return (
    <main>
      {projectSections.map((ProjectSection, index) => <ProjectSection showDetails={true} />)}
      <Button
        className="btn btn-primary"
        onClick={toggleCollapse}
        message={isOpen ? 'Collapse Projects' : 'Expand Projects'}
      />
      <div
        className={`mt-4 transition-height duration-500 ease-in-out ${ isOpen ? 'max-h-full' : 'max-h-0' } overflow-hidden`}
      >
        <div className="row">
          <div className="align-center flex justify-center" id="projectPic">
            <img
              alt="productivity"
              src={NWYS.src}
              srcSet={NWYS.srcSet}
              sizes="(max-width: 300px) 100vw, (max-width: 705px) 50vw, (max-width: 1110px) 33vw, 25vw"
            />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12" id="projectDesc">
            <h3>Nobody Wants Your Sheep</h3>
            <p>
              My current personal project is a take on the classic board game, Settlers of Catan.
              Users can play against their friends real-time, and save their progress for a later date.
              See who can utilize their resources best to become the successful pioneer! Trade resources, build settlements, and sabotage your friends.
              But remember, nobody wants your sheep.
                    </p>
            <h6>Built with React, Redux, Firebase, Three.js, and others</h6>
            <h6><button type="button"><a href="https://nobody-wants-your-sheep.firebaseapp.com/" target="_blank"
              rel="noopener noreferrer"><strong> &middot; Try it out! &middot; </strong></a></button></h6>
            <h6><button type="button"><a href="https://github.com/needimf/nobody-wants-your-sheep" target="_blank"
              rel="noopener noreferrer"><strong> &middot; Check out the code! &middot; </strong></a></button></h6>
          </div>
        </div>
        <hr id="breakFoot"></hr>
        <div className="row">
          <div className="align-center flex justify-center" id="projectPic">
            <img
              alt="productivity"
              src={underConstruction.src}
              srcSet={underConstruction.srcSet}
              sizes="(max-width: 300px) 100vw, (max-width: 705px) 50vw, (max-width: 1110px) 33vw, 25vw"
            />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12" id="projectDesc">
            <h3>Productivy App</h3>
            <p>
              A web application allowing users to create notes/tasks, and strikethrough upon completion.
              Each note has a field for a title, note, date to, date from, and an option for the color.
              The note body supports markdown and the notes are stored in the browser local storage, allowing for notes to persist through sessions.
              As this application is currently being developed further implementation will allow users to edit notes, as well as sort them.
                    </p>
            <h6>Built with React, Javascript, and HTML/CSS</h6>
            <h6><button type="button" ><a href="https://irfan-f.github.io/productivity-app/" target="_blank"
              rel="noopener noreferrer"><strong> &middot; Try it out! &middot; </strong></a></button></h6>
            <h6><button type="button"><a href="https://github.com/irfan-f/productivity-app" target="_blank"
              rel="noopener noreferrer"><strong> &middot; Check out the code! &middot; </strong></a></button></h6>
          </div>
        </div>
        <hr id="breakFoot"></hr>

        <div className="row">
          <div className="align-center flex justify-center" id="projectPic">
            <img alt="laser" src="https://piazza.com/redirect/s3?bucket=uploads&prefix=paste%2Fjn3ebqey4he3ne%2Ff0c8138511dd012b9fe399685f73dec810703d23a08f8d770fd58c21c1e7fd30%2FScreen_Shot_2020-06-04_at_10.31.36_PM.png"></img>
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
            <h6><button type="button" ><a href="https://classes.cs.uoregon.edu/20S/cis410gameprog/games/Laser/index.html" target="_blank"
              rel="noopener noreferrer"><strong> &middot; Try it out! &middot; </strong></a></button></h6>
            <h6><button type="button" ><a href="https://github.com/irfan-f/Laser_unloaded" target="_blank"
              rel="noopener noreferrer"><strong> &middot; Check out the code! &middot; </strong></a></button></h6>
          </div>

        </div>
        <hr id="breakFoot"></hr>
        <div className="row">
          <div className="align-center flex justify-center" id="projectPic">
            <img
              alt="productivity"
              src={locationPing.src}
              srcSet={locationPing.srcSet}
              sizes="(max-width: 300px) 100vw, (max-width: 705px) 50vw, (max-width: 1110px) 33vw, 25vw"
            />
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
            <h6><button type="button"><a href="https://ix.cs.uoregon.edu/~masonj/422Project2.html" target="_blank"
              rel="noopener noreferrer"><strong> &middot; Check out the map! &middot; </strong></a></button></h6>
            <h6><button type="button"><a href="https://github.com/irfan-f/SocialDistanceAssitance" target="_blank"
              rel="noopener noreferrer"><strong> &middot; Check out the code! &middot; </strong></a></button></h6>
          </div>

        </div>
        <hr id="breakFoot"></hr>
        <div className="row">
          <div className="align-center flex justify-center" id="projectPic">
            <img
              alt="productivity"
              src={MLPic.src}
              srcSet={MLPic.srcSet}
              sizes="(max-width: 300px) 100vw, (max-width: 705px) 50vw, (max-width: 1110px) 33vw, 25vw"
            />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12" id="projectDesc">
            <h3>Machine Learning Classifiers</h3>
            <p>
              A Kaggle dataset encompassing thousands of games from League of Legends was used to train classifiers which predict the outcome.
              The dataset was divided into three sets as to provide a training set, a development set to train hyper parameters, and a testing set to evaluate the accuracy.
              To run the code or review the report to gain further understanding of the development process or game, access the Github repo linked below.
                    </p>
            <h6>Built with Python, sklearn, and numpy</h6>
            <h6><button type="button"><a href="https://github.com/irfan-f/CIS-472-Final-Project" target="_blank"
              rel="noopener noreferrer"><strong> &middot; Check out the code! &middot; </strong></a></button></h6>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
