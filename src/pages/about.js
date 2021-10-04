import React from "react"
import Layout from "../components/layout"
import Helmet from "react-helmet"
import styled from "styled-components"
import config from "../../data/siteConfig"
import Rosny from "../images/rosny.png"
const Aboutpage = () => {
  return (
    <Layout>
      <Helmet title={`Me - ${config.userName}`} />
      <div>
        <Title>About me</Title>
        <AboutWrapper>
          <Aside>
            <img src={`${Rosny}`} alt="me smiling holding my computer" />
            <div>
              Profession: <span>Front End developer, at</span>
              <div>
                <a href="http://onja.org">NGO Onja</a>
              </div>
            </div>
          </Aside>
          <Article>
            <p>
              I'm Rosny, a front-end developer based in Madagascar, working to
              make the world and Madagascar a better place.
            </p>
            <p>
              I have three years of English experience and two years of coding
              experience. I’ve built some projects, which are built with HTML5
              and CSS3, Vanilla Javascript, React, Redux and Typescript.
            </p>
            <p>
              I was trained at Onja NGO, an organisation that upskills
              underprivileged youth in Madagascar.
            </p>
          </Article>
        </AboutWrapper>
      </div>
    </Layout>
  )
}

const Title = styled.h2`
  text-align: center;
`

const AboutWrapper = styled.div`
  text-align: center;
  @media (min-width: 800px) {
    display: flex;
    gap: 2rem;
  }
`
const Aside = styled.aside`
  border-bottom: 3px solid #c0c0c0;
  img {
    width: 50%;
  }
  @media (min-width: 800px) {
    border-bottom: 0;
    max-width: 200px;
  }
  ul {
    padding-start: none;
    margin: 0;
  }
  li {
    list-style: none;
    a {
      color: #00bfff;
      cursor: pointer;
    }
  }
`

const Article = styled.article`
  padding-top: 3rem;
  @media (min-width: 800px) {
    padding-top: 0;
    width: 700px;
    text-align: start;
  }
`
export default Aboutpage
