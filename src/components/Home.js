import React from "react";
import "./Home.css"
import icon from "../photos/Icon.png"

const Home = () => {
  return (
    <React.Fragment>
        <div className="feature" id="homeAnchor">
            <div className="row" id="iconrow">
                <div className="col">
                    <img alt="icon" src={icon} id="homeIcon"></img>
                </div>
            </div>
            <div className="row">
                <div className="col" id="descOfMe">
                    <h2 id="name">Irfan Filipovic</h2>
                    <em>B.S Computer and Information Science</em>
                </div>
            </div>
        </div>
    </React.Fragment>
)}

export default Home;