// import logo from './logo.svg';
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import './App.css';

function App() {
  const [mode, setMode] = useState()
  const [btnMode, setBtnMode] = useState()
  const toggleMode = () => {
    const list = document.querySelector("#list");
    var theme = list.options[list.selectedIndex].value
    console.log(theme)
    if (theme === "light") {
      setMode("light")
      setBtnMode("lightbtn")
    } else if (theme === "dark") {
      setMode("dark")
      setBtnMode("darkbtn")
    } else if (theme === "green") {
      setMode("green")
      setBtnMode("greenbtn")
    } else if (theme === "blue") {
      setMode("blue")
      setBtnMode("bluebtn")
    }

  }
  return (
    <Router>

      <Navbar toggleMode={toggleMode} mode={mode} />
      <Routes>
        <Route path="/" element={<TextForm title="TextUtils | Analyze your text here" mode={mode} btnMode={btnMode} />}></Route>
        <Route path="/About" element ={<About mode={mode}/>}></Route>

      </Routes>
    </Router>
  );
}

export default App;
