import React from "react"
import Layout from "../components/layout"
import Helmet from "react-helmet"
import "../styles/index.scss"
import config from "../../data/siteConfig"
const Indexpage = () => {
  return (
    <Layout>
      <Helmet title={config.siteTitle} />
      <div>
        <h1>Hi, I am Rosny</h1>
        <p>
          I'm a web developer specializing in modern javascript. I like
          <br /> to make things from scratch, <br />
          contribute to open-source projects, and use the latest technologies.
        </p>
      </div>
    </Layout>
  )
}

export default Indexpage
