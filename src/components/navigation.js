import React from "react"
import { Link } from "gatsby"

import "./navigation.css"

export default props => {
  return (
    <header>
      <div className="header-content">
        <Link to="/">Home</Link>

        <nav className="navigation">
          <ul className="nav-list">
            <li className="nav-list-item">
              <Link to="/photos">Photos</Link>
            </li>
            <li className="nav-list-item">
              <Link to="/readme">Readme</Link>
            </li>
            <li className="nav-list-item">
              <Link to="/">Social</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
