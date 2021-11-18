import { useState } from 'react';
import {PaintCanvas} from "./components/PaintCanvas/PaintCanvas.js";
import PaintToolsContainer from './components/PaintToolsContainer/PaintToolsContainer'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';


function App() {
  const [ color, setColor ] = useState('#FFF');
  const [ brushSize, setBrushSize ] = useState('1')

  // grabs hex value from ColorPicker
  const getColor = (color) => {
    setColor(color);
  };

  const getBrushSize = (brushSize) => {
    setBrushSize(brushSize);
  }

  return (
    <div className="App">
      <header className="paint-header">
        <FontAwesomeIcon icon={faArrowCircleLeft} style={{fontSize: "3rem", marginTop: "11px"}}/>
        <h1 id="paint-text">Draw your creations here!</h1>
      </header>
      <div className="paint-content">                
        <PaintToolsContainer getColor={getColor} getBrushSize={getBrushSize} brushSize={brushSize}/>
        <PaintCanvas color={color} />
      </div>
    </div>
  );
}

export default App;
