import { useState } from 'react';
import {PaintCanvas} from "./components/PaintCanvas/PaintCanvas.js";
import PaintToolsContainer from './components/PaintToolsContainer/PaintToolsContainer'
import './App.css';


function App() {
  const [ color, setColor ] = useState('#FFF');

  // grabs hex value from ColorPicker
  const getColor = (color) => {
    console.log('hex Value', color);
    setColor(color);
  };

  return (
    <div className="App">
      <PaintToolsContainer getColor={getColor}/>
      <PaintCanvas color={color} />
    </div>
  );
}

export default App;
