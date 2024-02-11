import React from 'react'
import styled from 'styled-components'
import Swal from "sweetalert2";

const MainEducationContainer = styled.div`
  h2 {
    margin: 15px 0px;
    span {
      font-size: 20px;
      font-weight: bold;
    }
  }
  p,h3 {
    margin-bottom: 15px;
  }
  h3 {
    display: inline-block;
    padding-bottom: 5px;
    border-bottom: 3px solid #3498db;
    transition: all .5s;
    cursor: pointer;
    &:hover {
      color: #0065be;
    }
  }
`

const MainEducation = () => {

  const handleOnClick = () => {

    Swal.fire({
      title: "Google Developer Student Club",
      text: "Google Developer Student Clubs (GDSC) 프로그램은 학생들이 개발/리더십 능력을 키울 수 있도록 지원하는 프로그램입니다.",
      imageUrl: "https://velog.velcdn.com/images/wnsdnjs70/post/89e06d20-2cba-464c-bf63-ff7ab1808ac6/image.webp",
      imageWidth: 300,
      imageHeight: 250,
      imageAlt: "Custom image",
      footer: '<a style="text-decoration: none;" href="https://sites.google.com/view/gdeveloperskorea/gdsc">어떤 클럽인지 확인해 보세요!!</a>',
      showCloseButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: `활동 보기`,
    })
    .then(result => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "you saved message", "success");
      } 
    });
    
  }

  return (
    <MainEducationContainer>
      <h1>EDUCATION</h1>
      <h2><span>대진대학교</span> &#40;2018.3 ~ 2024.2&#41;</h2>
      <p>경영학과, 컴퓨터 공학과 졸업</p>
      <h3 onClick={handleOnClick}>Google Developer Student Club 활동 중</h3>
    </MainEducationContainer>
  )
}

export default MainEducation