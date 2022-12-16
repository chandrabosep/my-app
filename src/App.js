import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';




function App() {
  const [mode,setMode]=useState('light')  // wheter dark mode is enabled or not
  const toggleMode = ()=>{
    if(mode=='light'){
      setMode('dark');
      document.body.style.background='gray';
    }
    else{
      setMode('light');
      document.body.style.background='white';

    }
  }
  return (
    <>
    <Navbar title="TextUtlis" aboutText="About TextUtlis" mode={mode} toggleMode={toggleMode} />
    
    <div className="container my-3">
    {/* <About /> */}
    <TextForm heading="Enter the text to analyze" mode={mode}/>
    </div>
    </>
  );
}

export default App;
  
