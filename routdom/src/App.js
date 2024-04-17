// import logo from './logo.svg';
// import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/contact" element={<Contact />}/>
      </Routes>
    </div>
  );
}

export default App;
