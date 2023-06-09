import React from 'react';
import './portfolio.css'
import { motion } from 'framer-motion';

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
        <h1 className='main__name'>
          찬영
        </h1>
        <div className='main__intro'>
          <p>
            반갑습니다.<br/>
            저는 프론트엔드 개발자가 되고 싶은 학생입니다.
            주로 <span>웹 개발을 담당</span>하고 있으며,<br/>
            항상 코드를 쉽게 알아볼 수 있도록 유지보수와 사용자에게 최적의 경험을 전달해주려는 자세로 개발하고 있습니다.<br />

            항상 <span>프론트엔드 공부</span>를 하고 있으며 새로 배운 기술은 <span>블로그에 쓰는 것</span>을 좋아하며<br/>
            주기적으로 부족한 부분을 채우려고 노력하고 모르는 부분은 어떻게든 해결하려고 노력합니다.
          </p>
          <hr/>
        </div>
        <p>
          <span className='main__email'>E-mail&nbsp;&nbsp;:&nbsp;&nbsp;</span>white1614@naver.com
        </p>
        <div className='main__introURL'>
          <a href='https://velog.io/@chanyoungcoding' target="_blank" rel="noopener noreferrer">chan-velog</a>
          <a href='https://github.com/chanyoungcoding' target="_blank" rel="noopener noreferrer">github</a>
        </div>

        <div className='main__li'>
          <li>기본은 항상 중요하다고 생각하고 있습니다.</li>
          <li>프론트엔드뿐만 아니라, 개발하는 모든 것을 즐깁니다.</li>
          <li>궁금하고 모르는 부분은 어떻게든 찾아내서 알아가는 사람입니다.</li>
          <li>항상 긍정적이고, 소통하는 것을 좋아합니다.</li>
        </div>
        
        <div className='main__skills'>
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
              <p>option</p>
              <p>option</p>
              <p>option</p>
            </li>
          </ul>
        </div>

      </div>
    </motion.div>
  );
};

export default Index;