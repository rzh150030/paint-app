import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Canvas from './Routes/Canvas/Canvas.js';
import LandingPage from './Routes/LandingPage/LandingPage.js';
import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<LandingPage/>} />
          <Route path='/canvas' element={<Canvas />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
