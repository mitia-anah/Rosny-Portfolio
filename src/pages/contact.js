import React from "react"
import Layout from "../components/layout"
import contactStyle from "../components/modules/contact.module.scss"
import Helmet from "react-helmet"
import config from "../../data/siteConfig"
const Contact = () => {
  return (
    <Layout>
      <Helmet title={`Contact - ${config.userName}`} />
      <div>
        <h2 className={contactStyle.title}>Stay in touch</h2>
        <p>
          I write about stuff related to Javascript, React, PHP, Flask and
          Various useful Api.
        </p>
        <p className={contactStyle.subtitle}>
          You can contact me via email or find me around the web.
        </p>
        <ul className={contactStyle.list}>
          <li>
            Email: <a href="mailto: rratsianompo@gmail.com">rosny@gmail.com</a>
            <span>
              <img
                src="https://img.icons8.com/bubbles/50/000000/email--v1.png"
                alt="bubble icon"
              />
            </span>
          </li>
          <li>
            Github:{" "}
            <a
              className={contactStyle.link}
              href={`https://github.com/mitia-anah`}
            >
              <img
                src="https://img.icons8.com/color/40/000000/github--v1.png"
                alt="color icon"
              />
            </a>
          </li>
          <li>
            <a href="https://linkdIn.com">
              <img
                src="https://img.icons8.com/nolan/40/linkedin.png"
                alt="nolan icon"
              />
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  )
}
export default Contact
