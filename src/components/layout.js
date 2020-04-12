import React from "react"
import Navigation from "./navigation"

import "./layout.css"

const Main = ({ children }) => {
  return <main className="main-body">{children}</main>
}

export default ({ children }) => (
  <div>
    <Navigation></Navigation>
    <Main>{children}</Main>
  </div>
)
