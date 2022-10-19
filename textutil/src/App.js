
import './App.css';
import Heading from './components/Heading';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, {useState} from 'react';
import Alerts from './components/Alerts';



function App() {

  const [mode, setMode] = useState('light'); // to see sether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

 const toggleMode = () =>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.background = '#042743'
    showAlert('Dark mode is enabled',"success");
  }else{
    setMode('light');
    document.body.style.background = 'white'
    showAlert("Light mode is enabled","success");
  }
  
  }
  return (
    <>
      <Heading title="Text Utils" mode={mode} toggleMode={toggleMode}/>
      <Alerts alert={alert}/>
      <div className='container'>
      <TextForm showAlert={showAlert} headings="Enter the text to Analyze" mode={mode}/>
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
