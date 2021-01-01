import React from "react";

const NavBar = ({ navs }) => {
  return (
    <div className="navigation-bar sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light" style={{ background: "white" }}>
        <a className="navbar-brand" href="#home">Irfan Filipovic</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto ">
            {navs.map(({ label, name, link, ...rest }) => (
              <li className="nav-item" key={name}>
                <a className="nav-link" href={link}>{label} <span className="sr-only">(current)</span></a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
