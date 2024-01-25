import React from 'react'
import styled from 'styled-components'

const MainExperienceContainer = styled.div`
  h2 {
    margin: 15px 0px;
    a {
      color: black;
      font-size: 20px;
      font-weight: bold;
      text-decoration: underline;
      transition: all .4s;
      &:hover {
        color: #3498db;
      }
    }
  }
  h3 {
    display: inline-block;
    font-weight: bold;
    padding: 10px;
    background: rgb(111,197,255);
    background: linear-gradient(90deg,
      rgba(111,197,255,1) 0%,
      rgba(214,238,253,1) 70%, 
      rgba(235,243,248,1) 100%
    );
  }
  p {
    padding: 40px 0px;
    font-weight: 400;
    line-height: 22px;
    border-bottom: 2px solid #3498db;
  }
`

const MainExperience = ({href,title, date, intro, introDetail}) => {
  return (
    <MainExperienceContainer>
      <h2><a href={href}>{title}</a> &#40;{date}&#41;</h2>
      <h3>{intro}</h3>
      <p>
        {introDetail}
      </p>
    </MainExperienceContainer>
  )
}

export default MainExperience