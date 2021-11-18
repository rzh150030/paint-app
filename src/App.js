import { useState } from 'react';
import {PaintCanvas} from "./components/PaintCanvas/PaintCanvas.js";
import PaintToolsContainer from './components/PaintToolsContainer/PaintToolsContainer'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';


function App() {
  const [ color, setColor ] = useState('#FFF');

  // grabs hex value from ColorPicker
  const getColor = (color) => {
    setColor(color);
  };

  return (
    <div className="App">
      <header>
        <FontAwesomeIcon icon={faArrowCircleLeft} style={{fontSize: "3rem"}}/>
        <h1>Draw your creations here!</h1>
      </header>
      <div>
        <PaintToolsContainer getColor={getColor}/>
        <PaintCanvas color={color} />
      </div>
    </div>
  );
}

export default App;
