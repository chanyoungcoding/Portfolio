import React from 'react'
import styled from 'styled-components'

const MainIntroChapterContainer = styled.div`
  border-left: 3px solid #9BCBFF;
  padding: 15px;
  li {
    padding-bottom: 20px;
    &:last-child {
      padding-bottom: 0;
    }
  }
`

const MainIntroChapter = () => {
  return (
    <MainIntroChapterContainer>
      <li>기본은 항상 중요하다고 생각하고 있습니다.</li>
      <li>프론트엔드뿐만 아니라, 개발하는 모든 것을 즐깁니다.</li>
      <li>궁금하고 모르는 부분은 모른다고 인정하고 어떻게든 찾아내서 알아가는 사람입니다.</li>
      <li>항상 긍정적이고, 소통하는 것을 좋아합니다.</li>
      <li>쉬는 날에도 적어도 1시간 이상은 공부하는 편입니다.</li>
    </MainIntroChapterContainer>
  )
}

export default MainIntroChapter