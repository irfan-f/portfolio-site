import React from "react";

const NavBar = ({navs, drops}) => {
  return (
    <div className="navigation-bar sticky-top">
        <nav className="navbar navbar-expand-lg navbar-light" style={{background: "#77A6A6"}}>
            <a className="navbar-brand" href="#">Irfan Filipovic</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto ">
            {/* Have to make current page active link */} 
                {navs.map(({ label, name, link, ...rest}) => (
                    <li className="nav-item" key={name}>
                        <a className="nav-link" href={link}>{label} <span className="sr-only">(current)</span></a>
                    </li>
                ))}

                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Tech Skills
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    {drops.map(({ label, name, link, ...rest}) => (
                        <a className="dropdown-item" key={name} href={link}>{label}</a>
                    ))}
                </div>
                </li>
                {/* 
                <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
                </li> */}
            </ul>
            </div>
        </nav>
    </div>
  );
};

export default NavBar;
