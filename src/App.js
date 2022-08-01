import logo from "./logo.svg";
import "./App.css";
import Reactlogo from "./f1.svg";
import moon from "./moon-solid.svg";

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
        <div className="row">
          <h2>-Im a</h2>
          <h1>Daryll Anthony Fortunado</h1>
        </div>

        {/* ========================= HOME ===========================*/}
        <div className="home"></div>
        {/* ========================= ABOUT ===========================*/}
        <div className="about-section"></div>
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
