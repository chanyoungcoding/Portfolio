import React from 'react'
import styled from 'styled-components'

const MainIntroContainer = styled.div`
  line-height: 50px;
  color: #474747;
  span {
    background-color: black;
    color: white;
    border-radius: 3px;
    padding: 0 4px;
  }
`

const MainIntro = () => {
  return (
    <MainIntroContainer>
      <p>
        반갑습니다.<br/>
        저는 프론트엔드 개발자가 되고 싶은 학생입니다.
        주로 <span>웹 개발을 담당</span>하고 있으며,<br/>
        항상 코드를 쉽게 알아볼 수 있도록 유지보수와 사용자에게 최적의 경험을 전달해주려는 자세로 개발하고 있습니다.<br />

        항상 <span>프론트엔드 공부</span>를 하고 있으며 새로 배운 기술은 <span>블로그에 쓰는 것</span>을 좋아하며<br/>
        주기적으로 부족한 부분을 채우려고 노력하고 모르는 부분은 어떻게든 해결하려고 노력합니다.
      </p>
      <hr/>
  </MainIntroContainer>
  )
}

export default MainIntro