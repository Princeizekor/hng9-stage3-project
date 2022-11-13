import { BrowserRouter as Router, Route, } from 'react-router-dom';
import Discover from './components/Discover';
import Footer from './components/Footer';
import Home from './components/Home';
import Inspiration from './components/Inspiration';
import Midnav from './components/Midnav';
import "./index.css"
import Navbar from './Navbar';
import Place from './Pages/Place';
function App() {
  return (
    <Router>
     <div className="App">
       <Navbar />
        <div className="component">
          <Route exact path="/">
            <Home />
            <Midnav />
            <Inspiration />
            <Discover />
          </Route>
          <Route exact path="/place">
            <Place />
          </Route>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
