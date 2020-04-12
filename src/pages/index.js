import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Content from "../components/content"

export default ({ data }) => (
  <Layout image={data.file.childImageSharp.fluid} imageTitle="millie">
    <Content>
      <h1>this is millie</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Amet consectetur
        adipiscing elit pellentesque. A iaculis at erat pellentesque adipiscing
        commodo elit at. Dolor magna eget est lorem ipsum. Euismod elementum
        nisi quis eleifend quam adipiscing vitae proin. Duis ut diam quam nulla.
        Eget mauris pharetra et ultrices neque ornare aenean euismod elementum.
        Consectetur purus ut faucibus pulvinar. Accumsan in nisl nisi
        scelerisque eu ultrices vitae auctor. Orci phasellus egestas tellus
        rutrum.
      </p>

      <p>
        Sed tempus urna et pharetra. Pellentesque massa placerat duis ultricies
        lacus sed turpis tincidunt id. Vitae aliquet nec ullamcorper sit.
        Aliquet eget sit amet tellus cras adipiscing. Interdum velit euismod in
        pellentesque. Tincidunt praesent semper feugiat nibh sed pulvinar proin
        gravida. Arcu cursus vitae congue mauris rhoncus aenean vel. Ipsum
        suspendisse ultrices gravida dictum fusce ut. Felis eget velit aliquet
        sagittis id. Nibh tortor id aliquet lectus proin nibh nisl condimentum.
        Ullamcorper sit amet risus nullam eget felis eget nunc. Donec massa
        sapien faucibus et molestie. Scelerisque in dictum non consectetur a
        erat nam. Dolor morbi non arcu risus quis. Egestas pretium aenean
        pharetra magna ac placerat. Neque laoreet suspendisse interdum
        consectetur libero id.
      </p>

      <p>
        Nisl condimentum id venenatis a condimentum. Sed vulputate mi sit amet
        mauris commodo quis. Tellus mauris a diam maecenas sed enim. Tristique
        nulla aliquet enim tortor at auctor urna nunc id. Aliquam purus sit amet
        luctus venenatis lectus magna fringilla urna. Non odio euismod lacinia
        at quis risus sed vulputate odio. Nulla at volutpat diam ut venenatis
        tellus in metus vulputate. Mi proin sed libero enim sed faucibus turpis
        in eu. Cras tincidunt lobortis feugiat vivamus at augue eget arcu. Magna
        fermentum iaculis eu non. Lacinia at quis risus sed vulputate odio ut.
        Amet purus gravida quis blandit turpis cursus. Convallis tellus id
        interdum velit. Cursus mattis molestie a iaculis at.
      </p>
    </Content>
  </Layout>
)

export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "images/millie.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
