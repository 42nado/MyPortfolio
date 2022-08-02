import logo from "./logo.svg";
import "./App.css";
import Reactlogo from "./f1.svg";
import moon from "./moon-solid.svg";
import picweb from "./undraw_web_developer.svg";

function App() {
  return (
    <div className="App">
      {/* ========================= HEADER ===========================*/}
      <header className="App-header">
        <nav>
          <img src={Reactlogo} width="50" height="50" alt="" />
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
          <img src={moon} width="30px" height="30px" alt="" />
        </nav>
      </header>
      <div className="container">
        {/* ========================= HOME ===========================*/}
        <div className="home">
          <div className="row">
            <h1>I'm Daryll Anthony Fortunado</h1>
            <h3>Web Developer</h3>
            <p>This is my official portfolio website to showcase all my work</p>
            <div className="socials">
              <a href="#">
                <i class="bi bi-github"></i>
              </a>
              <a href="#">
                <i class="bi bi-linkedin"></i>
              </a>
              <a href="#">
                <i class="bi bi-envelope-fill"></i>
              </a>
            </div>
            <button className="download-cv">Download CV</button>
          </div>
          <div class="images">
            <img src={picweb} className="imgs" />
          </div>
        </div>
        {/* ========================= ABOUT ===========================*/}
        <div className="about-section">
          <div className="about-row">
            <h3>About</h3>
          </div>
        </div>
        {/* ========================= PROJECT ===========================*/}
        <div className="project-section"></div>
        {/* ========================= CONTACT ===========================*/}
        <div className="contact-section"></div>
        {/* ========================= FOOTER ===========================*/}
      </div>
    </div>
  );
}

export default App;
