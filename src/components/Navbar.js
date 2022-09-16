import React from 'react'
import PropTypes from 'prop-types'
// import {
//   Link,
//   BrowserRouter as Router
// } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <h4>TextUtils</h4>
          <button
            className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           {/* <Router> */}
              <li style={{"padding-left": "10px"}} className="nav-item">
                <a className="nav-link active" aria-current="page" href='#'>
                  Home
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link active" href="/about">
                  About
                </a>
              </li> */}
            {/* </Router> */}
          
            </ul>
            {/* <Outlet/> */}

            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary">
                Search
              </button>
            </form> */}
          <div style={{display: "flex"}}>

            <div style={{padding: "30px"}} className={`form-check form-switch text-${props.mode === 'light' ? 'darkred': 'light'}`}>
              <input style={{backgroundColor: "#c24242"}} className="form-check-input" type="checkbox" role="switch" onClick={props.toggleModeRed} id="flexSwitchCheckDefault"/>
              <label className={`form-check-label ${props.textColor}`} htmlFor="flexSwitchCheckDefault">{props.modeText}</label>
            </div>

            <div style={{padding: "30px"}} className={`form-check form-switch text-${props.mode === 'light' ? 'darkgrey': 'light'}`}>
              <input style={{backgroundColor: "grey"}} className="form-check-input" type="checkbox" role="switch" onClick={props.toggleModeGrey} id="flexSwitchCheckDefault"/>
              <label className={`form-check-label ${props.textColor}`} htmlFor="flexSwitchCheckDefault">{props.modeText}</label>
            </div>

            <div style={{padding: "30px"}} className={`form-check form-switch text-${props.mode === 'light' ? 'dark': 'light'}`}>
              <input style={{backgroundColor: "#2b56a1"}} className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
              <label className={`form-check-label ${props.textColor}`} htmlFor="flexSwitchCheckDefault">{props.modeText}</label>
            </div>

          </div>
          </div>
        </div>
      </nav>
    </>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string
}

Navbar.defaultProps = {
    about: 'About'
}