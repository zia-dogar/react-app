import React from 'react'
import logo from './images.png'
function Dashboard() {
  return (
    <div className="container" style={{background:'white'}}>
      <h1>Welcome To Ahmed's App. You will do text manipulation i.e UpperCase, LowerCase, Removespaces,Copy text etc.</h1>
       <img className="center" src={logo} alt='Text'/>
    </div>
)
}
export default Dashboard
