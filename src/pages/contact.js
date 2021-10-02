import React from "react"
import Layout from "../components/layout"
import contactStyle from "../components/modules/contact.module.scss"
import Helmet from "react-helmet"
import config from "../../data/siteConfig"
import styled from "styled-components"
const Contact = () => {
  return (
    <Layout>
      <Helmet title={`Contact - ${config.userName}`} />
      <div>
        <h2 className={contactStyle.title}>Stay in touch</h2>
        <p>
          I write about stuff related to Javascript, React, Redux and
          Typescript.
        </p>
        <p className={contactStyle.subtitle}>
          You can contact me via email or find me around the web.
        </p>
        <ListWrapper className={contactStyle.list}>
          <List>
            Email:
            <a href="mailto: rratsianompo@gmail.com">rosny@gmail.com</a>
          </List>
          <List>
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
          </List>
          <List>
            LinkdIn:
            <a href="https://linkdIn.com">
              <img
                src="https://img.icons8.com/nolan/40/linkedin.png"
                alt="nolan icon"
              />
            </a>
          </List>
        </ListWrapper>
      </div>
    </Layout>
  )
}

const ListWrapper = styled.ul`
  padding-inline-start: 0;
  margin-inline-start: 0;
`
const List = styled.li`
  list-style: none;
`

export default Contact
