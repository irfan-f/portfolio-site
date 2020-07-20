import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <React.Fragment>
        <div className="foot-container navbar-dark" id="foot">
            <hr noshade="true" id="breakFoot"></hr>
            <p className="float-right">irfan.filipovic23@gmail.com &middot; (503) 319 - 6317</p>
            <p> Irfan Filipovic &middot; <a href="https://github.com/irfan-f">GitHub</a> &middot; <a href="https://www.linkedin.com/in/irfan-filipovic/">Linkedin</a></p>
            <hr noshade="true" id="breakFoot"></hr>
        </div>
    </React.Fragment>
  );
};

export default Footer;

