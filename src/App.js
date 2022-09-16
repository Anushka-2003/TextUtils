import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from './components/About'
import React, {useState} from 'react'
import Alert from "./components/Alert";
 
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [modeText, setModeText] = useState("Enable Dark Mode");
  const [textColor, setTextColor] = useState("");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if(mode === "light"){
      setMode('dark')
      setModeText('Enable Light Mode')
      setTextColor("text-light")
      document.body.style.backgroundColor = '#020e23'
      document.body.style.color = 'white'
      showAlert("Dark mode has been enabled", "success")
      // setInterval(() => {
      //   document.title = "You won a lottery!"
      // }, 1000)
      // setInterval(() => {
      //   document.title = "Sign up now!"
      // }, 2000)
    }
    if(mode === "dark" || mode === "darkred" || mode === "darkgrey"){
      setMode('light')
      setModeText('Enable Dark Mode')
      setTextColor("");
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Light mode has been enabled", "success")
    }
  }
  const toggleModeRed = () => {
    if(mode === "light"){
      setMode('darkred')
      setModeText('Enable Light Mode')
      setTextColor("text-light")
      document.body.style.backgroundColor = '#c24242'
      document.body.style.color = 'white'
      showAlert("Bloody Dark mode has been enabled", "danger")
    }
    if(mode === "dark" || mode === "darkred" || mode === "darkgrey"){
      setMode('light')
      setModeText('Enable Dark Mode')
      setTextColor("");
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Light mode has been enabled", "success")
    }
  }
  const toggleModeGrey = () => {
    if(mode === "light"){
      setMode('darkred')
      setModeText('Enable Light Mode')
      setTextColor("text-light")
      document.body.style.backgroundColor = 'grey'
      document.body.style.color = 'white'
      showAlert("Greyish Dark mode has been enabled", "success")
    }
    if(mode === "dark" || mode === "darkred" || mode === "darkgrey"){
      setMode('light')
      setModeText('Enable Dark Mode')
      setTextColor("");
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
      {/* <Navbar title = "TextUtils"  about = "About me"/> */}
      {/* <Navbar/>  */}
      <Navbar mode={mode} toggleMode = {toggleMode} toggleModeRed = {toggleModeRed} toggleModeGrey = {toggleModeGrey} modeText ={modeText} textColor = {textColor}/>
      <Alert alert = {alert}/>
      <TextForm showAlert={showAlert} heading = "Write your text below:"/>

    {/* <div className="container my-3">
    <Router>
      <Routes>
        <Route path="/" element={}/>
        <Route path="/about" element={<About/>}/>
      </Routes> */}
      
    {/* </Router>
    </div> */}
    
    </>
  );
}

export default App;
