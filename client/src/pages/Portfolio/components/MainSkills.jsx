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
`

const MainSkills = () => {
  return (
    <MainSkillsContainer>
      <h1>SKILLS</h1>
      <ul>
        <li className='skills__front'>
          <h2>FrontEnd</h2>
          <p>HTML,CSS,JS</p>
          <p>React</p>
          <p>TypeScript</p>
          <p>Webpack,Babel</p>
        </li>
        <li className='skills__backend'>
          <h2>BackEnd</h2>
          <p>Express</p>
          <p>MongoDB</p>
          <p>JEX</p>
        </li>
        <li className='skills__devops'>
          <h2>DevOps</h2>
          <p>Recoil</p>
          <p>React-Query</p>
          <p>React-router</p>
        </li>
      </ul>
    </MainSkillsContainer>
  )
}

export default MainSkills