import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <React.Fragment>
        <div className="foot-container navbar-dark" id="foot">
            <div className="row justify-content-center">
              <div className="col col-lg-auto">
                <strong>Irfan Filipovic</strong>
              </div>
              <div className="col col-lg-auto">
                <button type="button" href="https://github.com/irfan-f"><strong>&middot; GitHub &middot;</strong></button>
              </div>
              <div className="col col-lg-auto">
                <button type="button" href="https://www.linkedin.com/in/irfan-filipovic/"><strong>&middot; Linkedin &middot;</strong></button>
              </div>
              <div className="col col-lg-auto">
                <strong>irfan.filipovic23@gmail.com</strong>
              </div>
              <div className="col col-lg-auto">
                <strong>(503)-319-6317</strong>
              </div>
            </div>
        </div>
    </React.Fragment>
  );
};

export default Footer;

