import React from 'react';
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Footer from "./components/Footer"
import About from "./components/About"
import CourseWork from './components/CourseWork';
import Projects from './components/Projects';
import './Layout.css'

const navs = [
  {name: '0', label: 'Home', link: "."},
  {name: '1', label: 'About', link: "."},
  {name: '2', label: 'Course Work', link: "."},
  {name: '3', label: 'Projects', link: "."}
]

const drops = [
  {name: '0', label: 'JavaScript', link: "."},
  {name: '1', label: 'React', link: "."},
  {name: '2', label: 'Redux', link: "."},
  {name: '3', label: 'Bootstrap', link: "."},
]

function Layout() {
  return (
    <React.Fragment>
      <div className="layout-container">
        <NavBar navs={navs} drops={drops}/>
        <div className="container">
          <Home></Home>
          <About></About>
          <CourseWork></CourseWork>
          <Projects></Projects>
        </div>
        <Footer></Footer>
      </div>
    </React.Fragment>
  );
}

export default Layout;
