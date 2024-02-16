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
  .blue_a {
    color: #0065be;
  }
`

const MainSkills = () => {
  return (
    <MainSkillsContainer>
      <h1>SKILLS</h1>
      <h2>파란 기술들을 클릭해서 해당 기술을 정리한 블로그를 구경해 보세요.</h2>
      <ul>
        <li className='skills__front'>
          <h2>FrontEnd</h2>
          <a href='javascript:void(0)' target='_blank'>HTML,CSS,JS</a>
          <a className='blue_a' href='https://velog.io/@chanyoungcoding/posts?tag=React' rel="noreferrer" target='_blank'>React</a>
          <a className='blue_a' href='https://velog.io/@chanyoungcoding/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8' rel="noreferrer" target='_blank'>TypeScript</a>
        </li>
        <li className='skills__backend'>
          <h2>BackEnd</h2>
          <a href='javascript:void(0)' target='_blank'>Node</a>
          <a href='javascript:void(0)' target='_blank'>MongoDB</a>
        </li>
        <li className='skills__devops'>
          <h2>DevOps</h2>
          <a className='blue_a' href='https://velog.io/@chanyoungcoding/Recoil' rel="noreferrer" target='_blank'>Recoil</a>
          <a className='blue_a' href='https://velog.io/@chanyoungcoding/React-query' rel="noreferrer" target='_blank'>React-Query</a>
          <a className='blue_a' href='https://velog.io/@chanyoungcoding/React-router-dom' rel="noreferrer" target='_blank'>React-router</a>
        </li>
      </ul>
    </MainSkillsContainer>
  )
}

export default MainSkills