import React from 'react';
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Footer from "./components/Footer"
import CourseWork from './components/CourseWork';
import Projects from './components/Projects';
import './Layout.css'

const navs = [
  { name: '0', label: 'Home', link: "#home" },
  { name: '1', label: 'Projects', link: "#projects" },
  { name: '2', label: 'Course Work', link: "#courses" }
]

function Layout() {
  return (
    <React.Fragment>
      <div className="layout-container">
        <NavBar navs={navs} />
        <div className="layoutHome">
          <Home></Home>
        </div>
        <div className="layout">
          <Projects></Projects>
        </div>
        <div className="layout">
          <CourseWork></CourseWork>
        </div>
        <Footer></Footer>
      </div>
    </React.Fragment>
  );
}

export default Layout;
