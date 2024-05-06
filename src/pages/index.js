import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
      <Layout pageTitle="Welcome to my personal site!">
        <p>Note that this website is under development</p>
        <StaticImage 
          src="../images/cover.jpg"
          alt="coverImage"
          placeholder="blurred"
          width={500}
          transformOptions={{fit: "cover"}
        }         
        />
      </Layout>
  )
}

export const Head = () => <title>Rupanshu Ganvir</title>

export default IndexPage
