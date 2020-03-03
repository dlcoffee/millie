import React from "react"
import Layout from "../components/layout"
import Content from "../components/content"

import millie from "../millie.jpg"

export default () => (
  <Layout>
    <Content>
      <h1>this is millie</h1>

      <img src={millie} alt="millie" width="400" />
    </Content>
  </Layout>
)
