import React from 'react';
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Footer from "./components/Footer"
import About from "./components/About"
import CourseWork from './components/CourseWork';
import Projects from './components/Projects';
import './Layout.css'

const navs = [
  {name: '0', label: 'Home', link: "#home"},
  {name: '1', label: 'About', link: "#about"},
  {name: '2', label: 'Projects', link: "#projects"},
  {name: '3', label: 'Course Work', link: "#courses"}
]

const drops = [
  {name: '0', label: 'JavaScript'},
  {name: '1', label: 'React'},
  {name: '2', label: 'Redux'},
  {name: '3', label: 'Bootstrap'},
]

function Layout() {
  return (
    <React.Fragment>
      <div className="layout-container">
        <NavBar navs={navs} drops={drops}/>
          <div className="layoutHome">
            <Home></Home>
          </div>
          <div className="layout">
            <About></About>
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
