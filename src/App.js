import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Canvas from './Routes/Canvas/Canvas.js';
import LandingPage from './Routes/LandingPage/LandingPage.js';
import AboutLinks from './components/AboutLinks/AboutLinks.js';
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
      <AboutLinks />
    </div>
  );
}

export default App;
