import React from "react"
import styled from 'styled-components'
import img from '../images/hero.jpg'

const Body = styled.body`
  font-family: 'Raleway', sans-serif;
  bottom: 0;
  height: 100%;
  left: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
`
const Container = styled.div`
  align-content: center;
  display: flex;
  justify-content: center;
  height: 100%;
`

const Hero = styled.div`
  bottom: 0;
  height: 100%;
  margin-left: 0;
  margin-right: 0;
  position: absolute;
  top: 0;
  width: 100%;
`
const Image = styled.div`
  align-items: center;
  background: url(${img}) no-repeat center;
  background-size: cover;
  display: flex;
  justify-content: center;
  height: 100%;
`

const Header = styled.h1`
  color: #FFF;
  font-size: 5em;
  left: 50%;
  top: 50%;
`

const Links = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const Link = styled.a`
  color: #A4A4A4;
  link-decoration: none;
  text-decoration: none;
`

const Text = styled.div`
  flex-direction: row;
`

const IndexPage = () => (
  <Body>
    <Container>
      <Hero>
        <Image>
          <Text>
            <Header>Kelsey Pedersen</Header>
            <Links>
              <Link href="https://medium.com/@kelseypedersen">Blog</Link>
              <Link href="https://github.com/kelseypedersen/">Github</Link>
              <Link href="https://linkedin.com/in/kelseypedersen/">LinkedIn</Link>
            </Links>
          </Text>
        </Image>
      </Hero>
    </Container>
  </Body>
)

export default IndexPage

