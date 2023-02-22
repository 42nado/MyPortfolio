import logo from "./logo.svg";
import "./App.css";
import Reactlogo from "./fortunado.svg";
import moon from "./moon-solid.svg";
import picweb from "./undraw_web_developer.svg";
import React, { Component }  from 'react';

function App() {
  return (
    <div className="App">
      {/* ========================= HEADER ===========================*/}
      <header className="App-header">
        <nav>
          <h1 className="logo" >42nado</h1>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Project</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          {/* <img src={moon} width="30px" height="30px" id="icon" alt="" /> */}
        </nav>
      </header>
      <div className="container">
        {/* ========================= HOME ===========================*/}
        <div className="home">
          <div className="content">
            <h1>I'm Daryll Anthony Fortunado</h1>
            <h3>Aspiring Web Developer</h3>
            <p>This is my official portfolio website to showcase all my work</p>
            <div className="socials">
              <a href="https://github.com/42nado">
                <i class="bi bi-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/daryllanthonyfortunado/">
                <i class="bi bi-linkedin"></i>
              </a>
              <a href="#">
                <i class="bi bi-envelope-fill"></i>
              </a>
            </div>
            <button className="download-cv">Download CV</button>

            
          </div>
            
        </div>
        {/* ========================= ABOUT ===========================*/}
        <div className="about-section">
          <div className="about">
            <h3>ABOUT</h3>
            <div className="about-top" >
              <div className="about-topright-text" >
                <p> I'm a Technological University of the Philippines student studying Bachelor of Science and Information Technology. I am looking to gain additional experience in my field and learn more about the tech industry.</p>
              </div>
              <div className="about-pic">
                <img className="pic-about" src={picweb} alt="" />
              </div>
            </div>
            <div>
              <h3>Technology Stack</h3>
            </div>
          </div>
        </div>
        {/* ========================= PROJECT ===========================*/}
        <div className="project-section">
          <h3>PROJECTS</h3>
        </div>
        {/* ========================= CONTACT ===========================*/}
        <div className="contact-section">
          <h3>Get in Touch</h3>
        </div>
        {/* ========================= FOOTER ===========================*/}
      </div>
    </div>
  );
}

export default App;
