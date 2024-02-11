import React from 'react'
import styled from 'styled-components'

const MainSkillsContainer = styled.div`
  h2 {
    font-weight: 500;
    margin: 20px 0;
  }
  p {
    margin-left: 30px;
    margin-bottom: 15px;
  }
  a {
    display: block;
    text-decoration: none;
    color: black;
    margin-left: 30px;
    margin-bottom: 15px;
    transition: all .5s;
    &:hover {
      color: #0065be;
    }
  }
`

const MainSkills = () => {
  return (
    <MainSkillsContainer>
      <h1>SKILLS</h1>
      <ul>
        <li className='skills__front'>
          <h2>FrontEnd</h2>
          <a href='javascript:void(0)' target='_blank'>HTML,CSS,JS</a>
          <a href='javascript:void(0)' target='_blank'>React</a>
          <a href='javascript:void(0)' target='_blank'>TypeScript</a>
          <a href='javascript:void(0)' target='_blank'>Webpack,Babel</a>
        </li>
        <li className='skills__backend'>
          <h2>BackEnd</h2>
          <a href='javascript:void(0)' target='_blank'>Node</a>
          <a href='javascript:void(0)' target='_blank'>MongoDB</a>
        </li>
        <li className='skills__devops'>
          <h2>DevOps</h2>
          <a href='javascript:void(0)' target='_blank'>Recoil</a>
          <a href='javascript:void(0)' target='_blank'>React-Query</a>
          <a href='javascript:void(0)' target='_blank'>React-router</a>
        </li>
      </ul>
    </MainSkillsContainer>
  )
}

export default MainSkills