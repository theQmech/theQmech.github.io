import * as React from "react"
import Layout from "../components/layout"

const codeStyles = {
  // color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  // fontSize: "1.25rem",
  borderRadius: 4,
}

const AboutPage = () => {
  return (
    <Layout pageTitle="About me">
      <p>
        I am a software engineer at Quantbox Research NL where I am trying to make sense out of Indian markets.
        Before that, I was fortunate enough to study with bright minds at <a href="https://www.iitb.ac.in/">IIT Bombay</a> and <a href="https://ethz.ch/en.html">ETH Zurich</a>.
      </p>
      <p>
        During my high school years I dabbled in math and physics olympiads, eventually winning a Silver medal for India at <a href="https://ipho2014.kz/">IPhO 2014</a>.
        That perhaps explains my lifelong obsession with numbers and puzzles.
      </p>
      
      <p>
        Things I enjoy outside of work:
        <ul>
          <li>Harry Potter books. Re-reading Prisoner of Azkaban for the <code style={codeStyles}>n</code><sup>th</sup> time now.</li>
          <li>Electronic and Bollywood music.</li>
          <li>Sim Racing. My current jam is <a href="https://assettocorsa.gg/assetto-corsa-competizione/">Assetto Corsa Competizione</a>.</li>
        </ul>
      </p>
    </Layout>
  )
}

export const Head = () => <title>Rupanshu Ganvir</title>

export default AboutPage
