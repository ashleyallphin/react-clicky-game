import React from "react";
import Game from "./components/Game";
import Nav from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";



const App = () => (
  <div className="page">
    <Nav />
    <Game />
    <Footer />
  </div>
);

export default App;
