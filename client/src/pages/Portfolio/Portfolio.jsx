import React from 'react';
import { motion } from 'framer-motion';
import MainIntro from './components/MainIntro';
import styled from 'styled-components';
import MainIntroChapter from './components/MainIntroChapter';
import MainEducation from './components/MainEducation';
import MainSkills from './components/MainSkills';
import MainExperience from './components/MainExperience';

const PortFolioContainer = styled(motion.div)`
  width: 1080px;
  margin: 0 auto;
  color: black;
  h1 {
    color: #9BCBFF;
    font-weight: 600;
    font-size: 30px;
    padding-top: 30px;
  }
`

const MyName = styled.h2`
  color: #9BCBFF;
  font-size: 50px;
  font-weight: 300;
  padding: 70px 0;
`

const PortFolioEmail = styled.p`
  span {
    color: orange;
    font-size: 20px;
  }
`

const PortFolioIntroURLBox = styled.div`
  margin: 30px 0;
  font-size: 20px;
  a {
    color: orange;
    text-decoration: none;
    padding-left: 30px;
    transition: all .4s;
    &:hover {
      color: #9BCBFF;
    }
    &:first-child {
      padding-left: 0;
    }
  }
`

const Portfolio = () => {
  return (
    <PortFolioContainer
      initial={{ opacity: 0, y: 1000}}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: .8
      }}
    >
      <MyName>찬영</MyName>
      <MainIntro/>
      <PortFolioEmail>
        <span className='main__email'>E-mail&nbsp;&nbsp;:&nbsp;&nbsp;</span>white1614@naver.com
      </PortFolioEmail>
      <PortFolioIntroURLBox>
        <a href='https://velog.io/@chanyoungcoding' target="_blank" rel="noopener noreferrer">chan-velog</a>
        <a href='https://github.com/chanyoungcoding' target="_blank" rel="noopener noreferrer">github</a>
      </PortFolioIntroURLBox>
      <MainIntroChapter/>
      <MainEducation/>
      <MainSkills/>

      <h1>WORK EXPERIENCE</h1>
      <MainExperience 
        href={'/coffeeproject'}
        title={'chans coffee'} 
        date={'2023.10 ~ 2023.11'}
        intro={'전국 커피 매점 위치와 커피의 영양소 및 정보 제공 사이트'}
        introDetail={'현재 FE 개발을 혼자 진행함으로서 프론트 및 백의 전체 구조 설계부터 개발 및 테스트 외 서버 배포까지모든 작업을 책임지고 있습니다.'}
      />
      <MainExperience 
        href={'/epetproject'}
        title={'E Pet'} 
        date={'2023.11 ~ 2023.12'}
        intro={'강아지의 모든 정보와 호텔,병원 위치 제공 사이트'}
        introDetail={'프론트엔드 뿐만 아니라 기본적인 백엔드 구성부터 전체 구조 설계를 하였고 개발 및 테스트뿐만 아니라 디자인까지 모든 작업을 책임지고 있습니다.'}
      />
    </PortFolioContainer>
  );
};

export default Portfolio;