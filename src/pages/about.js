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
            <p>I'm Rosny, a front-end developer based in Madagascar.</p>
            <p>
              I study at Onja, which is a social enterprise that uspskills
              underprivileged youth who are not able to continue their education
              at university. Onja’s main goal is to teach young people English
              and Coding, and to offer them a job once they fulfill two years of
              learning on these two subjects. I was one of the lucky people who
              got this amazing opportunity.
            </p>
            <p>
              My two years of experience in coding and English has led me into a
              very big desire to make the world and Madagascar a better place. I
              work with HTML5, CSS3, Vanilla JavaScript and React,
              andTypeScript. I’ve also worked with React native before but I
              would like to have more experience on it.
            </p>
            <p>
              Life learning is a bit challenging, especially when it comes to a
              new world that you haven’t been to yet. But I like challenging
              myself to learn more and more and to get my hands dirty on web
              development as far as I can reach.
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
