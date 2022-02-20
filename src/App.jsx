
import {useState} from 'react';
import './App.css';
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import More from "./components/More";
import {CV} from "./CV/CS";

const { hero,education,experience,languages,habilities,softwares } =CV;


function App() {
  const [showEducation, setShowEducation] = useState(true);
  return (
<div className="App">
      <div>
        <Hero hero={hero} />
        <div className="divider">
          <span></span>
          <span>Sobre mi</span>
          <span></span>
        </div>
        <About hero={hero} />
      </div>
      <nav>
        <div className="divider">
          <span></span>
          <span>
            <button
              className="custom-btn btn-4"
              onClick={() => setShowEducation(true)}
            >
              Educación
            </button>
            <button
              className="custom-btn btn-4"
              onClick={() => setShowEducation(false)}
            >
              Experiencia
            </button>
          </span>
          <span></span>
        </div>
      </nav>
      <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
      <More
        languages={languages}
        habilities={habilities}
        softwares={softwares}
      />
      <br />
      <br />
    </div>
  );
}
export default App;
