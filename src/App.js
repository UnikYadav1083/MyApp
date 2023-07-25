import './App.css';
import Navbar from "./components/Navbar";
import Textforms from "./components/Textforms";
import React , {useState} from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import {
    BrowserRouter as Router,
    Routes,
    Route
}from "react-router-dom";


function App() {
    const [mode , setMode] = useState('dark ');
    const [alert, setAlert] = useState(null);

    const showAlert =(message , type)=>{
      setAlert({
          msg: message,
          type: type
      })
        setTimeout(()=>{
            setAlert(null);
        },1500);
    }

    const toggleMode = ()=>{
     if(mode==='light'){
         setMode('dark');
         document.body.style.backgroundColor = 'cyan'
         showAlert("Dark mode has been enabled","success");
     }
     else{
         setMode('light');
         document.body.style.backgroundColor = 'white'
         showAlert("Light mode has been enabled","success");
     }
   }

    return (
    <>

        {/*<Navbar title="My App" aboutText="About"/>*/}
        <Router>
            <Navbar title="My App" mode ={mode} toggleMode ={toggleMode}/>
         <Alert alert ={alert}/>
        <div className="container my-3" >
            <Routes>
                <Route exact path="/about" caseSensitive={false} element={<About />} />
               <Route exact path="/" caseSensitive={false} element={<Textforms showAlert ={showAlert} heading = "Enter the text to analyze" mode ={mode}/>} />
            </Routes>
        {/*<About/>*/}
        {/*    <Textforms showAlert ={showAlert} heading = "Enter the text to analyze" mode ={mode}/>}*/}
        </div>
        </Router>
    </>
  );
}

export default App;
