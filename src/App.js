//import logo from './logo.svg';
import './App.css';
//import About from './Components/About';
//import Calculator from './Components/Calculator';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, {useState} from 'react'

function App() {

  const [mode, setMode] = useState('light')
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#361636';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
      <>
        <Navbar title = "TestUtils" mode = {mode} toggleMode = {toggleMode}/>
        <div className="container my-3">
          <TextForm heading = 'Enter your Text here' mode = {mode} />
        </div>
        {/* <About/> */}

      </>
  );
}

export default App;
