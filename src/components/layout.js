import React from "react"
import Img from "gatsby-image"
import Navigation from "./navigation"

import "./layout.css"

const Main = ({ children }) => {
  return <main className="main-body">{children}</main>
}

export default ({ children, image, imageTitle, imageBackgroundColor }) => (
  <div>
    {image && (
      <Img
        fluid={image}
        style={{
          position: `fixed`,
          width: `35rem`,
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
        title={imageTitle}
      />
    )}
    <Navigation></Navigation>
    <Main>{children}</Main>
  </div>
)
