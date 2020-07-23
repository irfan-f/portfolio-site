import React from "react";
import "./Projects.css"

const Projects = () => {
  return (
    <React.Fragment>
        <div className="projects" id="projects">
            <div className="row">
                <div className="col" id="aboutMe">
                    <h1 id="titleP"><em>Projects</em></h1>
                </div>
            </div>
            <hr noshade="true" id="breakFoot"></hr>
            <div className="row">
                <div className="col" id="picOfMe">
                    <img alt="500x500" src="https://piazza.com/redirect/s3?bucket=uploads&prefix=paste%2Fjn3ebqey4he3ne%2Ff0c8138511dd012b9fe399685f73dec810703d23a08f8d770fd58c21c1e7fd30%2FScreen_Shot_2020-06-04_at_10.31.36_PM.png"></img>
                </div>
                <div className="col" id="aboutOfMe">
                    <h3>Laser Unloaded</h3>
                    <p>
                    A single-player game where your goal is to reach the finish line by avoiding obstacles.
                    You’ll have to guide your character down a level to jump gaps, roll past enemies, or choose to shoot them.
                    I completed this collaborative project with two peers at the University of Oregon.
                    Built with Unity, C#, Trello, and Git. 
                    </p>
                    <a href="https://classes.cs.uoregon.edu/20S/cis410gameprog/games/Laser/index.html"><u>Roll your way to victory!</u></a>
                </div>
                
            </div>
            <hr noshade="true" id="breakFoot"></hr>
            <div className="row">
                <div className="col" id="picOfMe">
                    <img alt="500x500" src="https://github.com/irfan-f/SocialDistanceAssitance/blob/master/LocationBase/logo.png?raw=false"></img>
                </div>
                <div className="col" id="aboutOfMe">
                    <h3>Social Distance Assitance</h3>
                    <p>
                    A full stack prototype project that tracks user locations to help plan essential trips out of their homes during the COVID-19 pandemic.
                    Built with five  others as a group project at the University of Oregon.
                    Currently, the location tracking map is viewable via the above link.
                    The IOS app may be built from the LocationBase folder in the github repo linked.
                    Built with Swift, PHP, MySQL, and HTML.
                    </p>
                </div>
                
            </div>
            <hr noshade="true" id="breakFoot"></hr>
            <div className="row">
                <div className="col" id="picOfMe">
                    <img alt="500x500" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAQlBMVEX///+hoaGenp6amprHx8f39/fOzs7j4+P7+/uYmJjT09OlpaXv7+/29va6urq1tbWvr6/AwMDn5+fd3d2xsbGqqqp20Q+8AAACjklEQVR4nO3b6XLCIBSG4QQ0qzHG5f5vtY1byEaiZMY5Z97nX1ukwydSOKFRBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADq7av9hqrs1+P5wjG3mzKHX4/oY5mNt2V2vx7SxzJDBv8ZmA0/wokRmsGG3ZEBGbTIQH4GVVJfm3NYd8IzKKz5Z+ugvxKyMyiemyVzCulOdAb7917JFgHdic6g6PaLt4DuRGfQdBmE7BvJQHgGSZdBGdCd6AwO7zP0wiAy7ywRnYHzYfAOssnzxvNj2RlER9umYGJvHeho/DsI4RlEl1Nsyp13Fjw2Up5hSs+g/crf+LVo2HSuhYIMFpTvdbOaaaE+g27ZNNeZJtozuDgl6LmRKs+g6lWg7XShQXkGt34VfnpHrTuD3eBBhKmnWqnOIB09j5qsM2jOYD/xOMpO7Cg1ZXAejO80+Uhu/Do9GVSltVd3zUsmIzDH0SvVZJCV7cnIKamdZx5Oj5cENRkc7++6aZw2M0aXDbRk8Kqy28vzG/V8BsP6q5IMDt2p4HEySjzXNMygoKIkg7LL4F4sOXhvqrwny4OODJwC8+NkVM4H4EyWJxUZXHrvuk2fC6Qng96SoCGDajji6Z1BLwR30BoyuA2HvOLKVu5U1hRkMDwcruMco+VnkObfROAW28Vn8PVdRZO8uhCfwfXr+5rvypr0DJb/BHhkrz5EZzB3OFzlVVmTnUG2sB9c8DxGy85g/nC4cibcj9GiMyiC7/Dfr25IzsB/OFw3EdrKmuAMsvh+QTNMXojO4JBuQnQGm5GaQZxsp5aaQfhS0JH4/0zRBothT9B15x8577aVLP9KAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABDuD7d6G0PBTSbxAAAAAElFTkSuQmCC"></img>
                </div>
                <div className="col" id="aboutOfMe">
                    <h3>Machine Learning Classifiers</h3>
                    <p>
                    Utilized two machine learning classifiers, logistic regression and K-nearest neighbors, to predict the match winner for the popular computer game, League of Legends.
                    Built with Python, sklearn, and numpy.
                    </p>
                </div>
                
            </div>
            <hr noshade="true" id="breakFoot"></hr>
        </div>
    </React.Fragment>
  );
};

export default Projects;

