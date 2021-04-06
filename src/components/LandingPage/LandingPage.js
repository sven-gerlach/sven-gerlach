import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import imgCode from './../../lib/img/Code_effects.png'
import imgGitHub from './../../lib/img/GitHub-Mark-Light-120px-plus.png'
import imgLinkedIn from '../../lib/img/LinkedIn.png'

class LandingPage extends Component {
  render () {
    return (
      <Fragment>
        <ImgContainer>
          <TextContainer>
            <H1>Sven Gerlach</H1>
            <P>| &nbsp; FULL STACK DEVELOPER &nbsp; |</P>
            <ContactDiv>
              <a
                href='https://github.com/sven-gerlach'
                title={'Link to Sven\'s GitHub profile page'}
                target='_blank'
              >
                <Img src={imgGitHub} alt='black & white GitHub logo' />
              </a>
              <a
                href='https://www.linkedin.com/in/svengerlach/'
                title={'Link to Sven\'s LinkedIn page'}
                target='_blank'
              ><Img src={imgLinkedIn} alt='black & white LinkedIn logo' />
              </a>
            </ContactDiv>
          </TextContainer>
          <ScrollDown>
            <div className="arrow"></div>
          </ScrollDown>
        </ImgContainer>
      </Fragment>
    )
  }
}

const ImgContainer = styled.div`
  background-image: url(${imgCode});
  background-size: cover;
  background-position: left;
  margin-top: 56px;
  height: calc(100vh - 56px);
  background-color: rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const TextContainer = styled.div`
  background-color: rgba(0,0,0,0.5);
  padding: 30px;
  border-radius: 70px;
`

const H1 = styled.h1`
  color: white;
  font-size: 5rem;
  text-align: center;
  letter-spacing: 4px;
`

const P = styled.p`
  color: white;
  font-size: 1rem;
  text-align: center;
  letter-spacing: 1px;
`

const ContactDiv = styled.div`
  margin: 50px auto 0;
  text-align: center;
`

const Img = styled.img`
  height: 30px;
  margin: 0 20px;

  &:hover {
    cursor: pointer;
    animation: shake 1s;
  }

  &:active {
    transform: scale(0.8);
  }

  @keyframes shake {
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(3px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
  }
`

const ScrollDown = styled.div`
  position: absolute;
  bottom: 80px;
  
  .arrow,
  .arrow:before {
    position: absolute;
    left: 50%;
  }

  .arrow {
    width: 40px;
    height: 40px;
    margin: -20px 0 0 -20px;
    -webkit-transform: rotate(45deg);
    border-left: none;
    border-top: none;
    border-right: 2px #fff solid;
    border-bottom: 2px #fff solid;
    
    &:hover {
      cursor: pointer;
    }

    &:active {
      border-color: darkred;
      &:before {
        border-color: darkred;
      }
    }
  }

  .arrow:before {
    content: '';
    width: 20px;
    height: 20px;
    top: 50%;
    margin: -10px 0 0 -10px;
    border-left: none;
    border-top: none;
    border-right: 1px #fff solid;
    border-bottom: 1px #fff solid;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-name: arrow;
  }

  @keyframes arrow {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translate(-10px, -10px);
    }
  }
`


export default LandingPage
