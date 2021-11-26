import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./css/App.css"
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/projects" element={<Projects />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
      </Routes>
    </Router>
  )
}

export default App;
