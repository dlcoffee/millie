import React from "react"
import Navigation from "./navigation"

import "./layout.css"

export default ({ children }) => (
  <div>
    <Navigation></Navigation>
    <div className="main-body">{children}</div>
  </div>
)
