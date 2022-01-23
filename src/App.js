
import './App.css';
import {  BrowserRouter as Router,Route } from "react-router-dom";
import PreNavbar from './components/PerNavbar';
import Navbar from './components/Navbar.js';
import Slider from "./components/Slider.js";
import data from "./data/data.json";

function App() {
  return (
    <Router>
        <PreNavbar/>
        <Navbar/>
        <Slider start={data.banner.start} />

    </Router>
  );
}

export default App;
