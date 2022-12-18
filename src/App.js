import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';




function App() {
  const [mode,setMode]=useState('light')  // wheter dark mode is enabled or not
  const [alert,setAlert]=useState(null) ;

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setAlert(null);
    }, 4000);
  }
  

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.background='gray';
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light');
      document.body.style.background='white';
      showAlert("Light mode has been enabled","success")


    }
  }
  return (
    <>
    <Navbar title="TextUtlis" aboutText="About TextUtlis" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <About /> */}
    <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>
    {Text}
    </div>
    </>
  );
}

export default App;
  
