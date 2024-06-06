import React from "react";
import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import Places from "./components/Places";
import Goa from "./components/Goa";
import Files from "./components/Files";
import Nav from "./components/Nav";
import { Navbar } from "react-bootstrap";
import Pandichheri from "./components/Pandichheri";
import Manali from "./components/Manali";
import Ooty from "./components/Ooty";
import Andaman from "./components/Andaman";
import Footer from "./components/Footer";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/places" element={<Places />} />
          <Route path="/goa" element={<Goa />} />
          <Route path="/pandichheri" element={<Pandichheri />} />
          <Route path="/manali" element={<Manali />} />
          <Route path="/ooty" element={<Ooty />} />
          <Route path="/andaman" element={<Andaman />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
      {/* <Files /> */}
    </div>
  );
}

export default App;
