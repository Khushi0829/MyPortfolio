import React from 'react';
import { Link,useLocation, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';



const ButtonGroup = () => {

  const location = useLocation();
  return (
    <div className="button-group">
    <Link to="/">
      <button className={location.pathname === "/" ? "active-button" : ""}>Home</button>
    </Link>

    <Link to="/about">
      <button className={location.pathname === "/about" ? "active-button" : ""}>About</button>
    </Link>

    <Link to="/skills">
      <button className={location.pathname === "/skills" ? "active-button" : ""}>Skills</button>
    </Link>

    <Link to="/projects">
      <button className={location.pathname === "/projects" ? "active-button" : ""}>Projects</button>
    </Link>

    <Link to="/contact">
      <button className={location.pathname === "/contact" ? "active-button" : ""}>Contact</button>
    </Link>
  </div>
);
};

const App = () => {
  return (
    
    <Router>
          <div className='app'>   
          <div className="heading">   
    <h1>Welcome to My Portfolio</h1>
    </div>
        
      <ButtonGroup />
      <div className = "wrapper">
        
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
      </div>
    </Router>
    
  );
};



export default App; 


