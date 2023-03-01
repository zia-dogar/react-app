import React from 'react'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (

    <nav className={`navbar navbar-expand-lg  navbar-${props.myStyle} bg-${props.myStyle}`} >
    <div className="container-fluid" >
    <a className="navbar-brand" href="#"><strong>Dashboard</strong></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">{props.abouthome}</a>
          </li>
          <li className="nav-item">
            {/* <Link className="nav-link" to="/about">Contact Us</Link> */}
          </li> 
          
        </ul>
        <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" onClick={props.modeOn} role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.myStyle==='light'?'black':'white'}`} htmlFor="flexSwitchCheckDefault">{props.btnText}</label>
</div>
      </div>
    </div>
  </nav>
  )
}
