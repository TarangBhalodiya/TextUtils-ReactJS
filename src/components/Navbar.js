import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom"

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-body-tertiar ${props.mode}`}>
      <div className={`container-fluid main ${props.mode}`} >
        <div style={{ display: "flex" }}>
          <Link className={`navbar-brand ${props.mode}`} to="/">Text Utils</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${props.mode}`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${props.mode}`} to="/About">About</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <ul className={`theme`} style={{ listStyle: "none" }}><li>
            <select id="list" className={` ${props.mode}`} onChange={props.toggleMode}>
              <option id='light' value='light' >Light</option>
              <option id='dark' value='dark'>Dark</option>
              <option id='green' value='green'>Green</option>
              <option id='blue' value='blue'>Blue</option>
            </select>
          </li></ul>
        </div>

      </div>
    </nav >
  )
}
