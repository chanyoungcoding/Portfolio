import React from 'react'
import styled from 'styled-components'

const MainEducationContainer = styled.div`
  h2 {
    margin: 15px 0px;
    span {
      font-size: 20px;
      font-weight: bold;
    }
  }
  li {
    margin-bottom: 15px;
  }
`

const MainEducation = () => {
  return (
    <MainEducationContainer>
      <h1>EDUCATION</h1>
      <h2><span>대진대학교</span> &#40;2018.3 ~ 2024.2&#41;</h2>
      <li>경영학과, 컴퓨터 공학과 졸업</li>
      <li>Google Developer Student Club 활동 중</li>
    </MainEducationContainer>
  )
}

export default MainEducation