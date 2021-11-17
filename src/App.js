import {PaintCanvas} from "./components/PaintCanvas/PaintCanvas.js";
import PaintToolsContainer from './components/PaintToolsContainer/PaintToolsContainer'
import './App.css';


function App() {
  return (
    <div className="App">
      <PaintToolsContainer />
      <PaintCanvas />
    </div>
  );
}

export default App;
