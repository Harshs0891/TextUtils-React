import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   // Switch,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light'); //whether dark mode is enabled or not
  // const [mode1,setMode1] = useState('light'); //whether dark mode is enabled or not
  const [modeText,setModeText] = useState("Enable Dark Mode");
  const [greenText,setgreenText] = useState("Enable Green mode")
  const [themetext,setThemeText] = useState("Enable purple Mode");
  const [alert,setAlert] = useState({
    msg : "your actions will be showed here",
    type : null
  });

  const showAlert = (message, type) =>{
    setAlert({
      msg:message,
      type : type
    })
    setTimeout(() => {
      setAlert({
        msg:"Your actions will be showed here",
        type:null
      })
    }, 1500);
  }

  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor ='#042743';
      setModeText("Enable Light Mode");
      showAlert("dark mode has been enabled","success")
      document.title = 'TextUtils - Dark Mode'
      
    }else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      setModeText("Enable Dark Mode");
      showAlert("light mode has been enabled","success")
      document.title = 'TextUtils - Home'
    }
  }

  const toggletheme = () =>{
    if(mode==='purple'){
      setMode('light');
      document.body.style.backgroundColor='white';
      // setThemeText("Disable Pruple dark theme")
      setThemeText("Enable Purple theme");
      showAlert("Purple dark mode is disabled");
    }else{
      setMode('purple');
      document.body.style.backgroundColor ='purple';
      setThemeText("Disable purple theme");
      showAlert("purple dark mode has been enabled","success")
    }
  }

  const togglegreen = () =>{
    if(mode==='green'){
      setMode('light');
      document.body.style.backgroundColor='white';
      setgreenText("Enable green mode");
      showAlert("Green mode is disabled");
    }else{
      setMode('green');
      document.body.style.backgroundColor = 'green';
      setgreenText("Disable green mode");
      showAlert("Green Mode is enabled")
    }
  }


  return (
    <>
  {/* <Router> */}

{/* <Navbar title="textUtils" AboutText="About TextUtils"/> */}
<Navbar title="textUtils" mode={mode} toggleMode={toggleMode} toggletheme={toggletheme} themetext={themetext} modeText={modeText} greenText={greenText} togglegreen={togglegreen}/>
<Alert alert={alert}/>
{/* <Navbar/> */}

  <div className="container my-3">
  <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
    {/* <Routes> */}
          {/* <Route path="/About" element={<About />} /> */}
          {/* <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}/> */}
    {/* </Routes> */}
{/* <About/> */}
  </div>
{/* // </Router> */}
    </>
  );
}

export default App;
