import React from 'react';
import './portfolio.css'
import { motion } from 'framer-motion';
import MainIntro from './components/MainIntro';
import styled from 'styled-components';
import MainIntroChapter from './components/MainIntroChapter';
import MainEducation from './components/MainEducation';
import MainSkills from './components/MainSkills';
import MainExperience from './components/MainExperience';

const MyName = styled.h1`
  font-size: 50px;
  font-weight: 300;
  padding: 70px 0;
`

const Index = () => {
  return (
    <motion.div
      className='portfolio'
      initial={{ opacity: 0, y: 1000}}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: .8
      }}
    >
      <div className='portfolio__main'>
        <MyName>
          찬영
        </MyName>
        <MainIntro/>
        <p>
          <span className='main__email'>E-mail&nbsp;&nbsp;:&nbsp;&nbsp;</span>white1614@naver.com
        </p>
        <div className='main__introURL'>
          <a href='https://velog.io/@chanyoungcoding' target="_blank" rel="noopener noreferrer">chan-velog</a>
          <a href='https://github.com/chanyoungcoding' target="_blank" rel="noopener noreferrer">github</a>
        </div>
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
      </div>
    </motion.div>
  );
};

export default Index;