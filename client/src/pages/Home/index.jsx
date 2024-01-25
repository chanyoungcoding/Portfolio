import React, { useState } from 'react';
import { motion } from "framer-motion"
import styled from 'styled-components';

import IntroText from './HomeIntroduceText';
import HomeRandomText from './HomeRandomText';

import Rhombus from '../../components/Rhombus';
import Navbar from '../../components/Navbar';

const HomeContainer = styled(motion.div)`
  position: relative;
  max-width: 1580px;
  margin: 0 auto;
  color: whitesmoke;
`

const HomeBoxContainer = styled(motion.div)`
  display: flex;
  height: 70vh;
  justify-content: center;
  align-items: center;
  width: 500px;
  margin: 0 auto;
`

const RhombusText = styled.h1`
  position: absolute;
  top: 180px;
  font-size: 30px;
  color: black;
`

const Index = () => {

  const [introText, setIntroText] = useState('');

  const handleOnMouseOn = (text) => {
    setIntroText(text)
  }

  const handleOnMouseOut = () => {
    setIntroText('')
  }

  return (
    <HomeContainer
      initial={{ opacity: 0, y: 1000 }}
      animate={{opacity:1, y: 0}}
      transition={{
        duration: .8
      }}
    >
      <Navbar />
      <IntroText/>

      <div>
        <HomeRandomText/>
        <HomeBoxContainer
          initial={{ opacity:0, scale: 0 }} 
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.7,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          <RhombusText>{introText}</RhombusText>
          <Rhombus num={0} link={'/portfolio'} mouseOver={() => handleOnMouseOn('포트폴리오')} mouseOut={() => handleOnMouseOut()}/>
          <Rhombus num={1} link={'/project'} mouseOver={() => handleOnMouseOn('프로젝트')} mouseOut={() => handleOnMouseOut()}/>
          <Rhombus num={2} link={'/declaration'} mouseOver={() => handleOnMouseOn('좌우명')} mouseOut={() => handleOnMouseOut()}/>
        </HomeBoxContainer>
      </div>
    </HomeContainer>
  );
};

export default Index;