import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
// // import About from './components/About';
// // import {
// //   BrowserRouter as Router,
// //   Routes,
// //   Route
// // } from "react-router-dom";

// import Dashboard from './components/Dashboard';

function App() {
  const modeOn= ()=>{
    if (myStyle==='light'){
        setMystyle('dark')
document.body.style.backgroundColor='brown'
            setBtnText('Enable Light Mode')
            onAlert(': Dark Mode is Enabled','success')
    }
    
    else{
        setMystyle('light')
        document.body.style.backgroundColor=''
       setBtnText('Enable Dark Mode') 
       onAlert(': Light Mode is Enabled','success')
    }
}


const onAlert=(message,type)=>{
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1500);
}



const [myStyle, setMystyle]=useState('light')
const [btnText, setBtnText]=useState('Enable dark mode');
const [alert, setAlert]=useState(null)
  return (
    <>
{/* <Router> */}
<Navbar  title="TextConverter" abouthome="My_Home" btnText={btnText} myStyle={myStyle} modeOn={modeOn}/>
<Alert alert={alert} onAlert={onAlert}/>
<div className={`container my-3 `}>
{/* <Routes>
  <Route path="/about" element={<About/>} />
 
  <Route path="/" element={<Dashboard/>} />
  <Route path="/textForm" element={ */}
  <TextForm Heading="Please Enter Your Text Below" myStyle={myStyle} onAlert={onAlert}/>
{/* //   } />
// </Routes>  */}


</div>
{/* </Router>  */}
</>

  );
}

export default App;
